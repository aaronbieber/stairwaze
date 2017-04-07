import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Alert,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Styles } from '../styles/styles';
import EscalatorList from '../components/EscalatorList';
import EscalatorStatusSummary from '../components/EscalatorStatusSummary';
import Navbar from '../components/Navbar';

export default class ListScene extends Component {
  render() {
    return (
      <View style={ Styles.container }>
        <Navbar title="Copley Place Escalators" navigator={ this.props.navigator } />

        <EscalatorStatusSummary escalators={ this.props.escalators } />

        <EscalatorList escalators={ this.props.escalators } navigator={ this.props.navigator } />
      </View>
    );
  }
}
