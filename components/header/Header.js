import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import GlobalTheme, { COLORS, IMAGES, FONTS, SIZES }  from '../../layout/GlobalTheme';


const Icon = require('../../assets/icon_transparente.png')

export default function Header({ leftHeader }) {
    const navigation = useNavigation();

    const handleLeftPress = () => {
        if (leftHeader === 'back') {
            navigation.goBack();
        }
    };

    const handleRightPress = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <ImageBackground source={IMAGES.foodPattern1} style={styles.headerArea}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {leftHeader === 'back' ? (
                    <TouchableOpacity
                        style={styles.NotificationBtn}
                        onPress={handleLeftPress}
                    >
                        <FeatherIcon name="chevron-left" size={30} color="#fff" />
                    </TouchableOpacity>
                ) : (
                    <Image source={Icon} style={{ tintColor: '#fff', height: 50, width: 50 }} />
                )}

                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={{ ...FONTS.h6, lineHeight: 18, color: COLORS.white }}>
                        MENUMENT
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            ...FONTS.font,
                            color: COLORS.white,
                            opacity: 0.75,
                        }}
                    >
                        Elevate your plate
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={handleRightPress}
                    style={GlobalTheme.NotificationBtn}
                >
                    <FeatherIcon
                        style={{ marginLeft: -2 }}
                        size={22}
                        color={COLORS.white}
                        name="grid"
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

Header.propTypes = {
    leftHeader: PropTypes.string,
};

const styles = StyleSheet.create({
        headerArea: {
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            overflow: 'hidden',
            paddingHorizontal: SIZES.PADDING_BASE ,
            paddingTop: SIZES.PADDING_BASE ,
            paddingBottom: SIZES.PADDING_BASE * 2,
        },
                    NotificationBtn: {
                height: 45,
                width: 45,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                borderColor: 'rgba(255,255,255,.25)',
            },
});