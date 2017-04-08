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

  _onRefreshEscalatorHistory = () => {
    this.props.fetchEscalatorHistory(this.props.escalator.id,
                                     this.props.escalator.direction);
  }

  render() {
    if (this.props.back) {
      return (
        <Icon.ToolbarAndroid
          style={ Styles.navbar }
          navIconName="md-arrow-back"
          onIconClicked={ this._onBack }
          actions={[
            { title: 'Refresh',
              iconName: 'md-refresh',
              show: 'always'
            }
          ]}
          onActionSelected={ this._onRefreshEscalatorHistory }
          title={ this.props.title } />
      );
    } else {
      return (
        <Icon.ToolbarAndroid
          style={ Styles.navbar }
          actions={[
            { title: 'Refresh',
              iconName: 'md-refresh',
              show: 'always'
            }
          ]}
          onActionSelected={ this.props.fetchEscalators }
          title={ this.props.title } />
      );
    }
  }
}
