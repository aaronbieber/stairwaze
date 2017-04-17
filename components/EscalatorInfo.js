import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ActivityIndicator,
  Modal,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Styles } from '../styles/styles';
import EscalatorName from './EscalatorName';
import EscalatorHistoryList from './EscalatorHistoryList';

export default class EscalatorInfo extends Component {
  componentDidMount() {
    this.props.fetchEscalatorHistory(this.props.selectedEscalator.id,
                                     this.props.selectedEscalator.direction);

  }

  _onBrokenClick = () => {
    console.log(this.props.selectedEscalator);
    this.props.reportBroken(this.props.selectedEscalator.id,
                            this.props.selectedEscalator.direction);
  }

  _onFixedClick = () => {
    console.log(this.props.selectedEscalator);
    this.props.reportFixed(this.props.selectedEscalator.id,
                           this.props.selectedEscalator.direction);
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

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <EscalatorHistoryList
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
