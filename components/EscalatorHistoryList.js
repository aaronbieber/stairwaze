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
  historyHeading: {
    fontWeight: 'bold',
    padding: 5,
    borderBottomColor: 'silver',
    borderBottomWidth: 1
  },
  list: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  event: {
    flex: 1
  },
  timestamp: {
    fontSize: 10
  },
  noReportsText: {
    textAlign: 'center'
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
        <Text style={ styles.timestamp }>{ item.added }</Text>
      </View>
    );
  }

  listItemKey(item) {
    return item.id;
  }

  render() {
    if (this.props.fetching) {
      return (
        <ActivityIndicator animating={ true } size="large" />
      );
    } else {
      if (this.props.history.length) {
        return (
          <View style={{ flex: 1 }}>
            <Text style={ styles.historyHeading }>History of Reports</Text>
            <FlatList
              keyExtractor={ this.listItemKey }
              data={ this.props.history }
              style={ styles.list }
              renderItem={ this.renderListItem } />
          </View>
        );
      } else {
        return (
          <Text style={ styles.noReportsText }>
            There have been no reports for this escalator... Yet.
          </Text>
        )
      }
    }
  }
}
