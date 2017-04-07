import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles } from '../styles/styles';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  _onBack = () => {
    this.props.navigator.pop();
  }

  render() {
    if (this.props.back) {
      return (
        <Icon.ToolbarAndroid
          style={ Styles.navbar }
          navIconName="md-arrow-back"
          onIconClicked={ this._onBack }
          title={ this.props.title } />
      );
    } else {
      return (
        <Icon.ToolbarAndroid
          style={ Styles.navbar }
          title={ this.props.title } />
      );
    }
  }
}
