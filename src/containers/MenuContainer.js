import * as React from 'react';
import MenuScreen from '../screens/Menu';
import { Context } from '../context';
import db from '../components/firebaseInit';
import { Alert } from 'react-native';

export default class MenuContainer extends React.Component<Props, State> {
  static contextType = Context;
  componentDidMount() {
    this.loadOrders();
  }

  loadOrders() {
    db.collection('orders').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let id = doc.data().id;
        let data = doc.data().items;
        this.context.dispatchArticle({type: 'LOAD', payload: {items: data, id: id }})
      })
    }).then(() => {
      // this.context.dispatchArticle({type: 'SWITCH', payload: {name: 'Pizza'}})
    })
  }

  render() {
    return (
      <MenuScreen
        navigation={this.props.navigation}
        loadOrders={this.loadOrders.bind(this)}
      />
    );
  }
}
