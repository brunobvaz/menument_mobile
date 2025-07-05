import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import { COLORS } from '../../layout/GlobalTheme';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const DetailLayout = ({ leftHeader = 'back', customHeader = null, children }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {customHeader ? customHeader : <Header leftHeader={leftHeader} />}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

DetailLayout.propTypes = {
  leftHeader: PropTypes.string,
  customHeader: PropTypes.element,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background || '#F9F7F4',
    paddingHorizontal: isTablet ? 30 : 0,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    padding: isTablet ? 30 : 15,
  },
});

export default DetailLayout;

