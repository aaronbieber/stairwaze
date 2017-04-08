import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import { Styles } from '../styles/styles';
import EscalatorName from './EscalatorName';
import EscalatorHistoryList from './EscalatorHistoryList';

export default class EscalatorInfo extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <EscalatorName {...this.props.escalator}
                       direction={ this.props.selectedEscalator.direction }
                       style={{
                         fontSize: 15,
                         textAlign: 'center',
                         padding: 5,
                         fontWeight: 'bold',
                         borderBottomColor: '#ccc',
                         borderBottomWidth: 1
                       }} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <EscalatorHistoryList
            escalator={ this.props.escalator.history[this.props.selectedEscalator.direction] } />
        </View>
      </View>
    );
  }
}
