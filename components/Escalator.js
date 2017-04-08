import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Alert,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { Styles } from '../styles/styles';
import CheckEx from './CheckEx';
import EscalatorName from './EscalatorName';

export default class Escalator extends Component {
  constructor(props) {
    super(props);
  }

  getNameForDirection(direction) {
    if (direction == 'up') {
      return (
        <Text style={{ fontSize: 15 }}>
          { this.props.bottom }
          { "  " }
          <Icon name="md-arrow-up" size={ 20 } />
          { "  " }
          { this.props.top }
        </Text>
      );
    } else {
      return (
        <Text style={{ fontSize: 15, flex: 1 }}>
          { this.props.top }
          { "  " }
          <Icon name="md-arrow-down" size={ 20 } />
          { "  " }
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
        '" really ' + ((this.props.up) ? 'broken?' : 'fixed?'),
      [
        {text: 'No'},
        {text: 'Yes',
         //onPress: () => this.setState({ up: !this.state.up })
         onPress: () => this.props.onEscalatorClick(this.props.id, 'up')
        }
      ]
    );
  }

  _onPressDown = (e) => {
    Alert.alert(
      'Confirm',
      'Is the DOWN escalator from "' +
        this.props.top + '" to "' + this.props.bottom +
        '" really ' + ((this.props.down) ? 'broken?' : 'fixed?'),
      [
        {text: 'No'},
        {text: 'Yes',
         //onPress: () => this.setState({ down: !this.state.down })
         onPress: () => this.props.onEscalatorClick(this.props.id, 'down')
        }
      ]
    );
  }

  _onPressUpInfo = (e) => {
    this.props.navigator.push({
      name: 'Info View',
      escalator: {
        id: this.props.id,
        direction: 'up'
      }
    });
  }

  _onPressDownInfo = (e) => {
    this.props.navigator.push({
      name: 'Info View',
      escalator: {
        id: this.props.id,
        direction: 'down'
      }
    });
  }

  render() {
    return (
      <View>
        <View style={ Styles.escalatorRow }>
          <TouchableHighlight key="escalator-{ this.props.key }"
                              onPress={ this._onPressUp }
                              underlayColor="#fff"
                              activeOpacity={ 1 }
                              style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <CheckEx on={ this.props.up } />
              <EscalatorName {...this.props} direction="up" />
            </View>
          </TouchableHighlight>
          <Icon name="md-information-circle"
                size={ 15 }
                color="#aaa"
                style={{ margin: 5 }}
                onPress={ this._onPressUpInfo }/>
        </View>

        <View style={ Styles.escalatorRow }>
          <TouchableHighlight onPress={ this._onPressDown }
                              underlayColor="#fff"
                              activeOpacity={ 1 }
                              style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <CheckEx on={ this.props.down } />
              <EscalatorName {...this.props} direction="down" />
            </View>
          </TouchableHighlight>
          <Icon name="md-information-circle"
                size={ 15 }
                color="#aaa"
                style={{ margin: 5 }}
                onPress={ this._onPressDownInfo }/>
        </View>
      </View>
    );
  }
}
