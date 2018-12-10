import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Root} from 'native-base';
import Scan from './src/screens/Scan';
import MenuContainer from './src/containers/MenuContainer';
import { Provider } from './src/context';

const App = StackNavigator(
  {
    MenuContainer: { screen: MenuContainer },
    Scan: { screen: Scan}
  },{
      headerMode: 'none'
   }
);

export default () => (
  <Provider>
    <Root>
      <App/>
    </Root>
  </Provider>
);
