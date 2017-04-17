import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ActivityIndicator,
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Styles } from '../styles/styles';
import EscalatorName from './EscalatorName';
import EscalatorHistoryList from './EscalatorHistoryList';

const styles = StyleSheet.create({
  historyHeading: {
    fontWeight: 'bold',
    padding: 5,
    borderBottomColor: 'silver',
    borderBottomWidth: 1
  }
});

export default class EscalatorInfo extends Component {
  componentDidMount() {
    this.props.fetchEscalatorHistory(this.props.selectedEscalator.id,
                                     this.props.selectedEscalator.direction);

  }

  componentDidUpdate(prevProps) {
    if (!prevProps.savingError && this.props.savingError) {
      Alert.alert(
        'Uh oh.',
        'Your escalator report could not be saved. It is likely ' +
          'that this app is beginning to squeak and rattle and ' +
          'will need days of maintenance soon.'
      );
    }
  }

  escalatorTextName = () => {
    if (this.props.selectedEscalator.direction == 'up') {
      return 'UP escalator from ' +
        this.props.escalator.bottom + ' to ' +
        this.props.escalator.top;
    } else {
      return 'DOWN escalator from ' +
        this.props.escalator.top + ' to ' +
        this.props.escalator.bottom;
    }
  }

  _onBrokenClick = () => {
    Alert.alert(
      'Confirm',
      'Is the ' + this.escalatorTextName() +
        ' really broken?',
      [
        {text: 'No'},
        {text: 'Yes',
         onPress: () => this.props.reportBroken(this.props.selectedEscalator.id,
                                                this.props.selectedEscalator.direction)
        }
      ]
    );
  }

  _onFixedClick = () => {
    Alert.alert(
      'Confirm',
      'Is the ' + this.escalatorTextName() +
        ' really working?',
      [
        {text: 'No'},
        {text: 'Yes',
         onPress: () => this.props.reportFixed(this.props.selectedEscalator.id,
                                               this.props.selectedEscalator.direction)
        }
      ]
    );
  }

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
                         borderBottomColor: 'silver',
                         borderBottomWidth: 2
                       }} />

        <Text style={{ fontSize: 10, padding: 5 }}>
          Tap one of these two buttons to report the status of this
          escalator. NOTE: you may only report once every 30 minutes,
          and it requires two reports to change the publicly listed
          status. Stay vigilant.
        </Text>

        <View style={{ flexDirection: 'row', padding: 6, height: 52 }}>
          <TouchableOpacity style={{ flex: 1}}
                            onPress={ this._onBrokenClick }>
            <View style={{
                    marginRight: 3,
                    backgroundColor: 'red',
                    flex: 1,
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    borderRadius: 4
                  }}>
              <Text style={{ color: 'white'}}>Broken</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1}}
                            onPress={ this._onFixedClick }>
            <View style={{
                    marginLeft: 3,
                    backgroundColor: 'green',
                    flex: 1,
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    borderRadius: 4
                  }}>
              <Text style={{ color: 'white'}}>Working</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={ styles.historyHeading }>History of Reports</Text>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <EscalatorHistoryList
            error={ this.props.fetchingError }
            fetching={ this.props.fetching }
            history={ this.props.history } />
        </View>

        <Modal animationType="fade"
               visible={ this.props.saving }
               transparent={ true }
               onRequestClose={ () => {} }>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 2, backgroundColor: 'black', opacity: 0.4 }}/>
            <View style={{
                    flex: 1,
                    backgroundColor: '#efefef',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
              <Text style={{ marginBottom: 10 }}>Saving your report...</Text>
              <ActivityIndicator animating={ true } size={ 50 } />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
