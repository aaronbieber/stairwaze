import React, { Component } from 'react';
import { Navigator } from 'react-native';
import ListScene from '../scenes/ListScene';
import InfoScene from '../scenes/InfoScene';

var escalators = [
  { id: 1, top: 'Currency Exchange', bottom: 'Sur La Table', up: true, down: false },
  { id: 2, top: 'Louis Vuitton', bottom: 'Au Bon Pain', up: true, down: true },
  { id: 3, top: 'Tiffany\'s', bottom: 'Marriott', up: true, down: true },
  { id: 4, top: 'Skylobby', bottom: 'Legal Sea Foods', up: true, down: true },
  { id: 5, top: 'Marriott', bottom: 'Star Market', up: true, down: true },
  { id: 6, top: 'Westin', bottom: 'Fogo De Chao', up: true, down: true },
  { id: 7, top: 'Gap', bottom: 'Tiffany\'s', up: true, down: true },
];

export default class CopleyEscalators extends Component {
  _renderScene = (route, navigator) => {
    console.log('Route = ' + route.name);

    if (route.name == 'List View') {
      return <ListScene navigator={ navigator } escalators={ escalators } />;
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
