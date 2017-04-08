import React, { Component } from 'react';
import { Navigator } from 'react-native';
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
