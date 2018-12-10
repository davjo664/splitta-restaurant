import React, { Component } from 'react';
import { Alert } from 'react-native';

export const Context = React.createContext();

const articles = [{name:'Hawaii', price: 80, description: 'Skinka, ost, ananas'},{name:'Vezuvio', price: 75, description: 'Skinka, ost'}];
const reducerArticle = (state, action) => {
    let orders = [];
    let articles = [];
    switch(action.type) {
        case 'REMOVE': 
        orders = state.orders.filter((order) => {
            if(order.id === action.payload.id) {
                return false;
            }
            return true;
            // let nArticles = order.items.length;
            // let removeOrder = false;
            // articles = order.items.filter(article => {
            //     if (article.name === action.payload.name) {
            //         if (nArticles == 1) {
            //             removeOrder = true;
            //         }
            //         return false
            //     }
            //     return true;
            // });

            // order.items = articles;

            // if(removeOrder) {
            //     return false;
            // }
            // return true;
        })
        return {
            ...state,
            orders
        }
        case 'LOAD':
        let found = false;
        orders = state.orders.filter((order) => {
            if (order.id == action.payload.id) {
                found = true;
                order.items = [...order.items, ...action.payload.items];
            }
            return true;
        })
        
        if (!found) {
            orders = [...orders, action.payload]
        }
        return {
            ...state,
            orders
        }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        orders: [],
        dispatchArticle: (action) => this.setState((state) => reducerArticle(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;