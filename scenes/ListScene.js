import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Alert,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Styles } from '../styles/styles';
import VisibleEscalatorList from '../containers/VisibleEscalatorList';
import LiveEscalatorSummary from '../containers/LiveEscalatorSummary';
import LiveNavbar from '../containers/LiveNavbar';

export default class ListScene extends Component {
  render() {
    return (
      <View style={ Styles.container }>
        <LiveNavbar title="Stairwaze Copley" navigator={ this.props.navigator } />
        <VisibleEscalatorList navigator={ this.props.navigator } />
        <LiveEscalatorSummary />
      </View>
    );
  }
}
