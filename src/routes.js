import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';

import DashboardRoutes from './routes/dashboard.routes';
import Message from './pages/Message';

const Stack = createStackNavigator();

function Routes({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DevClub"
        component={DashboardRoutes}
        options={{
          headerStyle: {
            backgroundColor: '#7159c1',
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '700',
            letterSpacing: 1,
          },
          headerRight: () => (
            <Icon.Button
              name="chat"
              color="#fff"
              backgroundColor="#7159c1"
              onPress={() => navigation.navigate(Message)}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
