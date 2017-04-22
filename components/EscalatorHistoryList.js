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
import moment from 'moment';

const styles = StyleSheet.create({
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
    fontSize: 20,
    flex: 1
  },
  timestamp: {
    fontSize: 15
  },
  noReportsText: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default class EscalatorHistoryList extends Component {
  formatTime(epoch) {
    return moment.unix(epoch).toNow(true) + ' ago';
  }

  renderListItem = (row) => {
    let { item, index } = row;
    var colors = [ '#fff', '#efefef' ];
    let style = [
      styles.row,
      { 'backgroundColor': colors[ index % colors.length ] }
    ];

    return (
      <View style={ style }>
        <Text style={ styles.event } key={ "history-" + item.id }>{ item.event }</Text>
        <Text style={ styles.timestamp }>{ this.formatTime(item.added) }</Text>
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
      if (this.props.error) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
            <Text style={{ textAlign: 'center', fontSize: 40 }}>Uh oh.</Text>
            <Text style={{ textAlign: 'center', marginTop: 10, padding: 10 }}>
              The history of reports for this escalator got its Crocs
              stuck in the moving treads and it was sucked into the
              underbelly of the mall. Nothing can be done.
            </Text>
            <Text style={{ textAlign: 'center' }}>
              Or you could try refreshing.
            </Text>
          </View>
        );
      } else {
        if (this.props.history.length) {
          return (
            <View style={{ flex: 1 }}>
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
          );
        }
      }
    }
  }
}
