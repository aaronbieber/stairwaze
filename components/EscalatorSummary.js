import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const style = StyleSheet.create({
  summary: {
    textAlign: 'center',
    padding: 5
  }
});

export default class EscalatorSummary extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    var total,
        broken;

    total = this.props.escalators.items.length * 2;
    broken = this.props.escalators.items.reduce(
      function (total, escalator) {
        if (!escalator.up) total++;
        if (!escalator.down) total++;
        return total;
      }, 0
    );

    if (total) {
      return <Text style={ style.summary }>{ broken } broken out of { total }</Text>;
    } else {
      return <View />;
    }
  }
}
