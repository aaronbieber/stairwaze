import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Styles } from '../styles/styles';

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    padding: 10
  },
  event: {
    flex: 1
  },
  timestamp: {
    fontSize: 10
  }
});

export default class EscalatorHistoryList extends Component {
  renderListItem(row) {
    let { item, index } = row;
    var colors = [ '#fff', '#efefef' ];
    let style = [
      styles.row,
      { 'backgroundColor': colors[ index % colors.length ] }
    ];

    return (
      <View style={ style }>
        <Text style={ styles.event } key={ "history-" + item.id }>{ item.event }</Text>
        <Text style={ styles.timestamp }>{ item.timestamp }</Text>
      </View>
    );
  }

  listItemKey(item) {
    return item.id;
  }

  render() {
    if (this.props.fetching || !this.props.history.length) {
      return (
        <ActivityIndicator animating={ true } size="large" />
      );
    } else {
      return (
        <FlatList
          keyExtractor={ this.listItemKey }
          data={ this.props.history }
          style={ styles.list }
          renderItem={ this.renderListItem } />
      );
    }
  }
}
