import React from 'react';
import { StyleSheet, Platform, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../layout/GlobalTheme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import GlobalTheme from '../../layout/GlobalTheme';

const { width } = Dimensions.get('window');

const SearchInput = ({ placeholder, onChangeText, value, onPress, multiline = false }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.searchInput, styles.input]}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.textLight}
                    onChangeText={onChangeText}
                    value={value}
                    multiline={multiline}
                />
                <TouchableOpacity style={styles.iconButton} onPress={onPress} activeOpacity={0.7}>
                    <FeatherIcon color={COLORS.text} size={22} name='search' />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
            searchInput: {
            ...FONTS.font,
            height: 45,
            borderRadius: 10,
            paddingLeft: SIZES.PADDING_BASE ,
            paddingRight: SIZES.PADDING_BASE * 3
        },
    wrapper: {
        marginHorizontal: SIZES.MARGIN_BASE,
        marginTop: -26,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Platform.OS === 'ios' ? '#fff' : '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: Platform.OS === 'android' ? 4 : 0,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        color: COLORS.title,
    },
    iconButton: {
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
});

export default SearchInput;