import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import LiveNavbar from '../containers/LiveNavbar';
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
        <LiveNavbar
          title="Escalator Detail"
          navigator={ this.props.navigator }
          escalator={ this.props.escalator }
          back={ true } />
        <LiveEscalatorInfo selectedEscalator={ this.props.escalator } />
      </View>
    );
  }
}
