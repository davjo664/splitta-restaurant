import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, Linking, Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import { Consumer, Context } from '../context';

export default class Article extends Component<Props> {
  static contextType = Context;

    render() {
      return (
        <Consumer>
        {(value) => {
          return (
            <Content>
                <CardItem >
                <Left>
                  <Text style={{color:'grey'}}>{this.props.count}x </Text>
                  <Text>{this.props.name}</Text>
                </Left>
                <Body>
                {/* <Text note>{this.props.description}</Text> */}
                </Body>
                <Right style={{flexDirection: 'row', flex:1, justifyContent:'flex-end'}}>
                  <Text style={{color:'grey', fontSize:24, marginLeft:10, marginRight:10}}> {this.props.time} </Text>
                </Right>
                </CardItem>
            </Content>
          )
        }}
        </Consumer>
      );
    }
  }