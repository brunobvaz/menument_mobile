import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../layout/GlobalTheme';
import { LinearGradient } from 'expo-linear-gradient';

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
        borderWhite ? {borderColor: COLORS.white} : {borderColor: COLORS.primary},
        btnSquare ? styles.square : btnRounded ? styles.rounded : styles.defaultRadius,
        btnLight && styles.light,
        disabled && styles.disabled,
        style,
    ];

    const textStyles = [
        styles.text,
        outline ? { color: COLORS.primary } : { color: COLORS.white },
        textColor && { color: textColor },
    ];

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            disabled={disabled}
            style={buttonStyles}
        >
            {
                outline ?

                <View style={[styles.content, icon && styles.withIcon]}>
                    {icon && <View style={styles.iconContainer}>{icon}</View>}
                    <Text style={textStyles}>{title}</Text>
                </View>
       
            :
            <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
        >
            <View style={[styles.content, icon && styles.withIcon]}>
                {icon && <View style={styles.iconContainer}>{icon}</View>}
                <Text style={textStyles}>{title}</Text>
            </View>
        </LinearGradient>

            }
            

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
        backgroundColor: COLORS.white,
        paddingHorizontal: 18,
        paddingVertical: 12,
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
        paddingHorizontal: 18,
        paddingVertical: 12,
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
    },
});

export default DefaultButton;