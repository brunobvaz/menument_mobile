import React from 'react';
import { SafeAreaView, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import globalStyleSheet from '../../layout/GlobalTheme';
import Header from '../../components/header/Header';
import SearchInput from '../../components/input/SearchInput';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const ScreenLayout = ({
  children,
  leftHeader,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  onSearchPress,
  showSearch = true
}) => {
  return (
    <SafeAreaView
      style={[
        globalStyleSheet.container,
        {
          flex: 1,
          padding: isTablet ? 30 : 0,
          backgroundColor: '#F9F7F4',
        },
      ]}
    >
      <Header leftHeader={leftHeader} />
      {showSearch && (
        <SearchInput
          placeholder={searchPlaceholder}
          value={searchValue}
          onChangeText={onSearchChange}
          onPress={onSearchPress}
        />
      )}
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

ScreenLayout.propTypes = {
  children: PropTypes.node.isRequired,
  leftHeader: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  searchValue: PropTypes.string,
  onSearchChange: PropTypes.func,
  onSearchPress: PropTypes.func,
  showSearch: PropTypes.bool,
};

export default ScreenLayout;

