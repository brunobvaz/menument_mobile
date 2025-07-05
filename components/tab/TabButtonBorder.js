import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions
} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { COLORS, FONTS } from '../../layout/GlobalTheme';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const TabButtonBorder = ({ buttons, activeTab, onClick }) => {
  const [layoutWidth, setLayoutWidth] = useState(width);
  const buttonWidth = layoutWidth / buttons.length;
  const tabPositionX = useSharedValue(0);

  const onTabPress = (index, btn) => {
    tabPositionX.value = withTiming(buttonWidth * index, {}, () => {
      runOnJS(onClick)(btn);
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: tabPositionX.value }],
  }));

  const onTabbarLayout = (e) => {
    const { width } = e.nativeEvent.layout;
    setLayoutWidth(width);
  };

  return (
    <View
      style={styles.container}
      onLayout={onTabbarLayout}
      accessibilityRole='tabbar'
    >
      <View style={styles.tabsWrapper}>
        <Animated.View style={[
          styles.animatedBorder(buttonWidth),
          animatedStyle
        ]} />
        {buttons.map((btn, i) => (
          <Pressable
            key={i}
            onPress={() => onTabPress(i, btn)}
            style={styles.tabButton}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === btn ? styles.activeColor : styles.inactiveColor
              ]}
            >
              {btn}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F7F4',
    paddingVertical: isTablet ? 14 : 10,
    alignItems: 'center',
  },
  tabsWrapper: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: isTablet ? 600 : '100%',
    position: 'relative',
  },
  animatedBorder: (buttonWidth) => ({
    position: 'absolute',
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
    height: 3,
    width: buttonWidth,
    bottom: 0,
    left: 0,
  }),
  tabButton: {
    flex: 1,
    paddingVertical: isTablet ? 12 : 10,
    alignItems: 'center',
  },
  tabText: {
    fontSize: isTablet ? 18 : 14,
    ...FONTS.font,
  },
  activeColor: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  inactiveColor: {
    color: '#333',
  },
});

export default TabButtonBorder;
