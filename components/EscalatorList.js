import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import Escalator from './Escalator';
import { Styles } from '../styles/styles';

export default class EscalatorList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={ Styles.escalatorList }>
        {this.props.escalators.map(
          function (e) {
            return <Escalator
                       key={ e.id }
                       id={ e.id }
                       top={ e.top }
                       bottom={ e.bottom }
                       up={ e.up }
                       down={ e.down }
                       navigator={ this.props.navigator }
                       onEscalatorClick={ this.props.onEscalatorClick }/>;
          }, this
        )}
      </ScrollView>
    );
  }
}
