import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { COLORS, FONTS, ICONS, SIZES } from '../../layout/GlobalTheme';
import { SvgXml } from 'react-native-svg';

const EyeIcon = ({ passwordShow, handleShowPassword }) =>
(<TouchableOpacity
    accessible={true}
    accessibilityLabel="Password"
    accessibilityHint="Password show and hidden"
    onPress={handleShowPassword}
    style={styles.eyeIcon} >
    <SvgXml xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen} />
</TouchableOpacity>);


const CustomInput = ({ fullWidth, customWidth, style, icon, type, placeholder, onChangeText, multiline, action, onPress, value}) => {
    const [passwordShow, setPasswordShow] = useState(true);
    const handleShowPassword = () => { setPasswordShow(prevState => !prevState); };

    return (
        <View style={StyleSheet.flatten([styles.container, fullWidth ? { width: "100%" } : { width: customWidth }, style])}>
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    {icon}
                </View>
                <TextInput
                    secureTextEntry={type === "password" ? passwordShow : false}
                    style={StyleSheet.flatten([styles.input, icon && styles.inputWithIcon, action === 'delete' ? { borderWidth: 0 } : null])}
                    placeholderTextColor={COLORS.placeholderColorGray}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    multiline={multiline} 
                    umberOfLines={multiline ? 5 : 1}
                    value={value}
                    textContentType='oneTimeCode'
                />
                {type === "password" &&
                    (<EyeIcon passwordShow={passwordShow} handleShowPassword={handleShowPassword} />)}
            </View>
            {type === "withbutton" &&
                (<TouchableOpacity
                    style={[styles.button, action === 'add' ? styles.addIcon : styles.deleteIcon]}
                    onPress={onPress}
                >
                    <SvgXml xml={action === 'add' ? ICONS.plus : ICONS.delete}
                        width={18}
                        height={18}
                        fill={action === 'add' ? "hashtag#fff" : COLORS.danger} stroke={COLORS.danger} />
                </TouchableOpacity>)}
        </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    inputContainer: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        
    },
    iconContainer: {
        position: 'absolute',
        left: 20,
    },
    input: {
        ...FONTS.font,
        fontSize: 16,
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        borderRadius: SIZES.radius,
        paddingVertical: 12,
        paddingHorizontal: 15,
        color: COLORS.text,
        backgroundColor: "#ffffff"
    },
    inputWithIcon: {
        paddingLeft: 50,
    },
    eyeIcon: {
        position: 'absolute',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        zIndex: 1,
        top: 0,
    },
    button: {
        borderRadius: SIZES.radius,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    addIcon: {
        backgroundColor: 'hashtag#d9d9d9',
    },
    deleteIcon: {
        backgroundColor: 'hashtag#fff',
    },
});

export default CustomInput;