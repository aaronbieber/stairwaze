import React, { Component } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View
} from 'react-native';

import Escalator from './Escalator';
import { Styles } from '../styles/styles';

export default class EscalatorList extends Component {
  constructor(props) {
    super(props);
  }

  randomLoadingPhrase() {
    var phrases = [
      'Greasing gears...',
      'Replacing steps...',
      'Peeling off the handrails...',
      'Fixing squeaky wheels...',
      'Tightening bolts...'
    ];

    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  render() {
    if (this.props.fetching) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text style={{ textAlign: 'center', marginBottom: 10 }}>{ this.randomLoadingPhrase() }</Text>
          <ActivityIndicator animating={ true } size="large" />
        </View>
      );
    } else {
      if (this.props.escalators.length) {
        return (
          <ScrollView style={ Styles.escalatorList }>
            { this.props.escalators.map(
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
              }, this)
            }
          </ScrollView>
        );
      } else {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
            <Text style={{ textAlign: 'center' }}>Waiting...</Text>
          </View>
        );
      }
    }
  }
}
