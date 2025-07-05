import React from 'react';
import { Platform, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../layout/GlobalTheme';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const ActionButton = ({ name = 'shopping-cart', color1 = COLORS.primary, color2 = COLORS.secondary, navigate = 'ShoppingCart' }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handlePress = () => {
    if (navigate) {
      navigation.navigate(navigate);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={[styles.shadow, { shadowColor: color1 }, Platform.OS === 'ios' && styles.iosBackground]}>
        <LinearGradient
          colors={[color1, color2]}
          style={[styles.gradient, isTablet && styles.gradientTablet]}
        >
          <FeatherIcon
            name={name}
            size={isTablet ? 24 : 16}
            color={COLORS.white}
          />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4, // Android
  },
  iosBackground: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
  },
  gradient: {
    height: 28,
    width: 28,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientTablet: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
});

export default ActionButton;
