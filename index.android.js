/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
  ActivityIndicator,
  Alert,
  AppRegistry,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var escalators = [
  { id: 1, top: 'Currency Exchange', bottom: 'Sur La Table', up: true, down: false },
  { id: 2, top: 'Louis Vuitton', bottom: 'Au Bon Pain', up: true, down: true },
  { id: 3, top: 'Tiffany\'s', bottom: 'Marriott', up: true, down: true },
  { id: 4, top: 'Skylobby', bottom: 'Legal Sea Foods', up: true, down: true },
  { id: 5, top: 'Marriott', bottom: 'Star Market', up: true, down: true },
  { id: 6, top: 'Westin', bottom: 'Fogo De Chao', up: true, down: true },
  { id: 7, top: 'Gap', bottom: 'Tiffany\'s', up: true, down: true },
];

class EscalatorList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={ styles.escalatorList }>
        {this.props.escalators.map(
          function (e) {
            return <Escalator
                       key={ e.id }
                       top={ e.top }
                       bottom={ e.bottom }
                       up={ e.up }
                       down={ e.down }
                       navigator={ this.props.navigator } />;
          }, this
        )}
      </ScrollView>
    );
  }
}

class Escalator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      up: this.props.up,
      down: this.props.down
    };
  }

  getNameForDirection(direction) {
    if (direction == 'up') {
      return (
        <Text style={{ fontSize: 15 }}>
          { this.props.bottom }
          <Text style={{ fontWeight: 'bold', fontSize: 22 }}> ↗ </Text>
          { this.props.top }
        </Text>
      );
    } else {
      return (
        <Text style={{ fontSize: 15, flex: 1 }}>
          { this.props.top }
          <Text style={{ fontWeight: 'bold', fontSize: 22 }}> ↘ </Text>
          { this.props.bottom}
        </Text>
      );
    }
  }

  _onPressUp = (e) => {
    Alert.alert(
      'Confirm',
      'Is the UP escalator from "' +
        this.props.bottom + '" to "' + this.props.top +
        '" really ' + ((this.state.up) ? 'broken?' : 'fixed?'),
      [
        {text: 'No'},
        {text: 'Yes', onPress: () => this.setState({ up: !this.state.up }) }
      ]
    );
  }

  _onPressDown = (e) => {
    Alert.alert(
      'Confirm',
      'Is the DOWN escalator from "' +
        this.props.top + '" to "' + this.props.bottom +
        '" really ' + ((this.state.down) ? 'broken?' : 'fixed?'),
      [
        {text: 'No'},
        {text: 'Yes', onPress: () => this.setState({ down: !this.state.down }) }
      ]
    );
  }

  _onPressUpInfo = (e) => {
    this.props.navigator.push({
      name: 'Info View',
      escalator: this.getNameForDirection('up')
    });
  }

  _onPressDownInfo = (e) => {
    this.props.navigator.push({
      name: 'Info View',
      escalator: this.getNameForDirection('down')
    });
  }

  render() {
    return (
      <View>
        <View style={ styles.escalatorRow }>
          <TouchableHighlight key="escalator-{ this.props.key }"
                              onPress={ this._onPressUp }
                              underlayColor="#aaffaa"
                              activeOpacity={ 0.8 }
                              style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <CheckEx on={ this.state.up } />
              { this.getNameForDirection('up') }
            </View>
          </TouchableHighlight>
          <Icon name="info-with-circle"
                size={ 15 }
                color="#aaa"
                style={{ margin: 5 }}
                onPress={ this._onPressUpInfo }/>
        </View>

        <View style={ styles.escalatorRow }>
          <TouchableHighlight onPress={ this._onPressDown }
                              underlayColor="#aaffaa"
                              activeOpacity={ 0.8 }
                              style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <CheckEx on={ this.state.down } />
              { this.getNameForDirection('down') }
            </View>
          </TouchableHighlight>
          <Icon name="info-with-circle"
                size={ 15 }
                color="#aaa"
                style={{ margin: 5 }}
                onPress={ this._onPressDownInfo }/>
        </View>
      </View>
    );
  }
}

class CheckEx extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var symbol,
        style;

    if (this.props.on == true) {
      symbol = '✔';
      style = styles.checkexOn;
    } else {
      symbol = '✘';
      style = styles.checkexOff;
    }

    return (
      <Text style={ style }>{ symbol }</Text>
    );
  }
}

class ListScene extends Component {
  render() {
    return (
      <View style={ styles.container }>

        <Text style={ styles.title }>
          <Text style={{ fontSize: 30 }}>⇅</Text> Copley Place Escalator Status
        </Text>

        <EscalatorList escalators={ escalators } navigator={ this.props.navigator } />
      </View>
    );
  }
}

class InfoScene extends Component {
  constructor(props) {
    super(props);
  }

  _onTouchBack = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ height: 40, padding: 5 }}>Info for { this.props.escalator }</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <ActivityIndicator animating={ true } size="large" />
        </View>
        <TouchableHighlight onPress={ this._onTouchBack }>
          <Text style={{ height: 30, padding: 5 }}>Go back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class AwesomeProject extends Component {
  _renderScene = (route, navigator) => {
    console.log('Route = ' + route.name);

    if (route.name == 'List View') {
      return <ListScene navigator={ navigator } />;
    }

    if (route.name == 'Info View') {
      console.log('Escalator = ' + route.escalator);
      return <InfoScene navigator={ navigator } escalator={ route.escalator } />;
    }
  }

  render() {
    const routes = [
      { name: 'List View' },
      { name: 'Info View' }
    ];

    return (
      <Navigator
        initialRoute={{ name: 'List View' }}
        renderScene={ this._renderScene } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff'
  },
  escalatorList: {
    flex: 1,
    alignSelf: 'stretch',
  },
  escalatorRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 40,
    padding: 5,
    backgroundColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cccccc',
  },
  title: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'stretch',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  checkexOn: {
    width: 25,
    height: 25,
    fontSize: 20,
    color: '#33ee33',
  },
  checkexOff: {
    width: 25,
    height: 25,
    fontSize: 20,
    color: '#ee3333',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
