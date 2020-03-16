import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardRoutes from './routes/dashboard.routes';
import Icon from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();

function Routes() {
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
              onPress={() => alert('teste')}
              title="teste"
              color="#fff"
              backgroundColor="#7159c1"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
