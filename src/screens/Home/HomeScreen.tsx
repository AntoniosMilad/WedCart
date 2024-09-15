import React, {useEffect} from 'react';
import {
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text
} from 'react-native';
import {styles} from './styles';
import {store} from 'Redux/Store';
import Header from 'Common/DummyComponents/Header/Header';
import CustomScrollView from 'Common/DummyComponents/CustomScrollView/CustomScrollView';


export const HomeScreen = () => {
  const scrollY = new Animated.Value(0);

  useEffect(() => {

  }, []);

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const handleHeaderScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    Animated.timing(scrollY, {
      toValue: offsetY,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.homeContainer}>
      <Header headerTranslateY={headerTranslateY} />
      <CustomScrollView
        allowRefresh
        onScrollEvent={handleHeaderScroll}
        containerStyle={styles.container}>
        <View style={{paddingTop: 100}}>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>
<Text>home</Text>

        </View>
      </CustomScrollView>
    </View>
  );
};
