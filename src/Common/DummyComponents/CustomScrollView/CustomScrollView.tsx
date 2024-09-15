import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, {ReactNode, useRef, useState} from 'react';
import {store} from 'Redux/Store';
import {toggleTabBar} from 'Redux/slices/TabBar/tabBarSlice';
import useAppTheme from 'Hooks/theme/useAppTheme';
import {color} from 'Theme';

interface CustomScrollViewProps {
  children: ReactNode;
  allowRefresh?: boolean;
  containerStyle?: ViewStyle;
  onScrollEvent?: (...args: any[]) => void;
}

const CustomScrollView = ({
  children,
  allowRefresh,
  containerStyle,
  onScrollEvent,
}: CustomScrollViewProps) => {
  const scrollPosition = useRef(0);
  const {darkBackground} = useAppTheme();
  const [refreshing, setRefreshing] = useState(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    onScrollEvent && onScrollEvent(e);
    const currentOffset = e.nativeEvent.contentOffset.y;
    const diff = currentOffset - scrollPosition.current;

    if (diff > 15) {
      store.dispatch(toggleTabBar(false));
    } else if (diff < -15) {
      store.dispatch(toggleTabBar(true));
    }

    scrollPosition.current = currentOffset;
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Animated.ScrollView
      onScroll={onScroll}
      onScrollEndDrag={onScrollEvent}
      contentContainerStyle={[styles.container, darkBackground, containerStyle]}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      nestedScrollEnabled={true}
      refreshControl={
        allowRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={color.greenBlue_Two}
          />
        ) : undefined
      }>
      {children}
    </Animated.ScrollView>
  );
};

export default CustomScrollView;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});
