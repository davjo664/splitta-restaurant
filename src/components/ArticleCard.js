import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, Linking, Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import { Consumer, Context } from '../context';

import db from './firebaseInit';

import Article from './Article';

export default class ArticleCard extends Component<Props> {
    render() {
        return (
            <Consumer>
            {(value) => {
                let favorites = this.props.articles.map(article => (
                    <Article key={article.name} name={article.name} description={article.description} time={article.time} count={article.count}></Article>
                ));
                return (
                <Card>
                    <CardItem header>
                        <Text>Bord: {this.props.id}</Text>
                        <Button transparent onPress={()=>{
                        db.collection('orders').where('id','==',this.props.id).get().then(querySnapshot => {
                            querySnapshot.forEach(doc => {
                                doc.ref.delete();
                            })
                        }).then(() => {
                            value.dispatchArticle({type:'REMOVE',payload:{id:this.props.id}});
                        })
                        }}>
                        <Icon name="md-checkmark-circle" style={{color: '#163140', fontSize: 40}} />
                        </Button>
                    </CardItem>
                    {favorites}
                </Card>
                )
                    }
                }
                </Consumer>
        );
    }
  }