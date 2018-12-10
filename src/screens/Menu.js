/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, Linking, Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import ArticleCard from '../components/ArticleCard';

import { Consumer } from '../context';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class MenuScreen extends Component<Props> {
  renderCards = (orderss) => {
    let orders = orderss.map(order => (
      <ArticleCard key={order.id} id={order.id} articles={order.items} />
    ))
    return orders;
  }
  
  render() {
    return (
      <Consumer>
      {(value) => {
        return (<Container style={{backgroundColor:'#163140'}}>
            <Header style={{backgroundColor:'#163140'}}>
              <Left>
                <Button transparent onPress={() => {
                  this.props.loadOrders();
                }}>
                  <Icon style={{color: '#fcf49b'}} name='md-refresh' />
                </Button>
              </Left>
                <Title style={{color: 'white', textAlignVertical:'center'}}> BESTÄLLNINGAR </Title>
              <Right>
            </Right>
            </Header>

          <Content>
            {this.renderCards(value.orders)}
          </Content>
        </Container>)
      }}
      </Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: '#163140',
    fontSize: 14
  },
});
