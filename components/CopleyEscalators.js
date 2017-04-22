import React, { Component } from 'react';
import { Navigator, BackAndroid } from 'react-native';
import ListScene from '../scenes/ListScene';
import InfoScene from '../scenes/InfoScene';

export default class CopleyEscalators extends Component {
  _renderScene = (route, navigator) => {
    console.log('Route = ' + route.name);

    if (route.name == 'List View') {
      return <ListScene navigator={ navigator } />;
    }

    if (route.name == 'Info View') {
      return <InfoScene navigator={ navigator } escalator={ route.escalator } />;
    }
  }

  handleBack = () => {
    if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
      this.navigator.pop();
      return true;
    }

    return false;
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
  }

  render() {
    const routes = [
      { name: 'List View' },
      { name: 'Info View' }
    ];

    return (
      <Navigator
        ref={ nav => this.navigator = nav }
        initialRoute={{ name: 'List View' }}
        renderScene={ this._renderScene } />
    );
  }
}
