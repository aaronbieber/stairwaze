import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import Navbar from '../components/Navbar';
import LiveEscalatorInfo from '../containers/LiveEscalatorInfo';
import { Styles } from '../styles/styles';

export default class InfoScene extends Component {
  constructor(props) {
    super(props);
  }

  _onTouchBack = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={ Styles.container }>
        <Navbar title="Escalator Detail" navigator={ this.props.navigator } back={ true } />
        <LiveEscalatorInfo selectedEscalator={ this.props.escalator } />
      </View>
    );
  }
}
