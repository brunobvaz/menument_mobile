import React from 'react';
import { View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../layout/GlobalTheme';

const Divider = (props) => {
    return (
        <View
            style={{
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: COLORS.borderColor,
                marginTop: 0,
            }}>

        </View>
    );
};


export default Divider;