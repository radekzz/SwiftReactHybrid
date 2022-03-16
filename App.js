/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  Button,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [counter, setCounter] = useState(0);

  // single argument
  // NativeModules.Counter.getCount(value => {
  //   console.log('damn count is ' + value);
  //   setCounter(value);
  // });

  const deviceInfo = () => {
    NativeModules.Counter.getDevice((first, ...others) => {
      console.log('fist parameter: ', first);
      console.log('rest of parameters: ', others);
    });
  };

  const getCounter = () => {
    NativeModules.Counter.getCount((first, ...others) => {
      console.log(`React say: Counter is ${first}`);
      // console.log('count is ', first);
      console.log('typeof other arguments ', typeof others);
      console.log('other arguments ', others);
      setCounter(first);
    });
  };

  const incrementCounter = () => {
    NativeModules.Counter.increment();
    getCounter();
  };

  const decrementCounter = async () => {
    try {
      const res = await NativeModules.Counter.decrement();
      console.log(res);
    } catch (e) {
      console.log(e.message, e.code);
    }
    getCounter();
  };

  useEffect(() => {
    // return a clean-up function
    getCounter();
    return () => {};
  }, [counter]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            onPress={deviceInfo}
            title="Get device info (console)"></Button>
          <Button
            onPress={incrementCounter}
            title="Increment counter in swift"></Button>
          <Button
            onPress={decrementCounter}
            title="Decrement counter in swift"></Button>
          <Text>Counter printed in RN: {counter}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
