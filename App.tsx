import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from 'Redux/Store';
import {ToastProvider} from 'Common/DynamicComponents/Toaster/ToasterProvider';
import AppStackNavigation from 'navigation/AppStackNavigation';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n/i18n';


function App(): React.JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'white',
  };
  const Stack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();

  return (
    <Provider store={store}>
          <I18nextProvider i18n={i18n}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider>
          <PaperProvider>
            <SafeAreaProvider>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
              />
              <AppStackNavigation />
            </SafeAreaProvider>
          </PaperProvider>
        </ToastProvider>
      </PersistGate>
      </I18nextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
