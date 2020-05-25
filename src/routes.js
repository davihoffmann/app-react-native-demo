import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

// const Stack = createStackNavigator();

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerTitleAlign: 'center',
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#222222',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
