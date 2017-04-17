import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const style = StyleSheet.create({
  summary: {
    textAlign: 'center',
    padding: 5,
    borderTopColor: '#EF4136',
    borderTopWidth: 2
  }
});

export default class EscalatorSummary extends Component {
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
    percent = Math.round(broken / total * 100, 0);

    if (total) {
      return (
        <Text style={ style.summary }>{ broken } broken out of { total } ({ percent }%)</Text>
      );
    } else {
      return <View />;
    }
  }
}
