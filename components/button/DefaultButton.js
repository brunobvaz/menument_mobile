import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, SIZES } from '../../layout/GlobalTheme';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const DefaultButton = ({
  onPress,
  title,
  style,
  outline,
  btnSquare,
  btnRounded,
  btnLight,
  disabled,
  icon,
  textColor,
  borderWhite,
  gradientColors = [COLORS.primary, COLORS.orangeDark],
}) => {
  const buttonStyles = [
    styles.button,
    outline && styles.outline,
    borderWhite ? styles.borderWhite : styles.borderPrimary,
    btnSquare ? styles.square : btnRounded ? styles.rounded : styles.defaultRadius,
    btnLight && styles.light,
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    outline ? styles.outlineText : styles.filledText,
    textColor && { color: textColor },
  ];

  const content = (
    <View style={[styles.content, icon && styles.withIcon]}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={textStyles}>{title}</Text>
    </View>
  );

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={disabled} style={buttonStyles}>
      {outline ? content : (
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {content}
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  outline: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: isTablet ? 28 : 18,
    paddingVertical: isTablet ? 16 : 12,
  },
  borderWhite: {
    borderColor: COLORS.white,
  },
  borderPrimary: {
    borderColor: COLORS.primary,
  },
  square: {
    borderRadius: 0,
  },
  rounded: {
    borderRadius: 30,
  },
  defaultRadius: {
    borderRadius: SIZES.radius,
  },
  light: {
    shadowOpacity: 0,
  },
  disabled: {
    shadowOpacity: 0,
    opacity: 0.6,
  },
  gradient: {
    paddingHorizontal: isTablet ? 28 : 18,
    paddingVertical: isTablet ? 16 : 12,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  withIcon: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...FONTS.h6,
    fontSize: isTablet ? 18 : FONTS.h6.fontSize,
  },
  outlineText: {
    color: COLORS.primary,
  },
  filledText: {
    color: COLORS.white,
  },
});

export default DefaultButton;
