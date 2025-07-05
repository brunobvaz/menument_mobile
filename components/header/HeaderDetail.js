import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyleSheet from '../../layout/GlobalTheme';
import { COLORS, FONTS } from '../../layout/GlobalTheme';

export default function HeaderDetail({ right, page }) {
  const navigation = useNavigation();

  const handleLeftPress = () => {
    if (right) {
      navigation.openDrawer();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[globalStyleSheet.NotificationBtn, styles.button]}
        onPress={handleLeftPress}
      >
        <FeatherIcon name="chevron-left" size={30} color={COLORS.primary} />
      </TouchableOpacity>

      {right && (
        <Text style={styles.pageTitle}>{page}</Text>
      )}

      {!right && (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={[globalStyleSheet.NotificationBtn, styles.button]}
        >
          <FeatherIcon name="shopping-cart" size={22} color={COLORS.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  button: {
    backgroundColor: 'rgba(255,144,99,0.13)',
  },
  pageTitle: {
    ...FONTS.h4,
    marginLeft: 15,
  },
});
