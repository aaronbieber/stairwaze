import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class EscalatorStatusSummary extends Component {
  constructor(props) {
    super(props);

    this.total = this.props.escalators.length * 2;
    this.broken = this.props.escalators.reduce(
      function (total, escalator) {
        if (!escalator.up) total++;
        if (!escalator.down) total++;
        return total;
      }, 0
    );
  }

  render() {
    return <Text>{ this.broken } broken out of { this.total }</Text>;
  }
}
