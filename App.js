import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StyleSheet} from 'react-native';

import Finish from './src/pages/finish';
import SignIn from './src/pages/SignIn';
import SplashScreen from './src/pages/SplashScreen';

import {createStackNavigator} from '@react-navigation/stack';
import DrawerNav from './src/components/DrawerNav';
import SignUp from './src/pages/SignUp';
import {Provider} from 'react-redux';
import {store} from './src/utils/Redux/store/store';
import {SheetProvider} from 'react-native-actions-sheet';
import './src/components/sheets';

const AuthStack = createStackNavigator();
const App = () => {
  return (
    <>
      <Provider store={store}>
        <SheetProvider>
          <NavigationContainer>
            <AuthStack.Navigator screenOptions={{headerShown: false}}>
              {/* <AuthStack.Screen name="Splash" component={SplashScreen} />

              <AuthStack.Screen name="signin" component={SignIn} />
              <AuthStack.Screen name="signup" component={SignUp} />
              <AuthStack.Screen name="finish" component={Finish} /> */}
              <AuthStack.Screen name="all" component={DrawerNav} />
            </AuthStack.Navigator>
          </NavigationContainer>
        </SheetProvider>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    color: 'white',
  },
});

export default App;
