import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  escalatorList: {
    flex: 1,
    alignSelf: 'stretch'
  },
  escalatorRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 45,
    padding: 5,
    backgroundColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cccccc'
  },
  title: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'stretch',
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  checkexOn: {
    width: 28,
    height: 25,
    fontSize: 20,
    color: '#33ee33'
  },
  checkexOff: {
    width: 28,
    height: 25,
    fontSize: 20,
    color: '#ee3333'
  }
});
