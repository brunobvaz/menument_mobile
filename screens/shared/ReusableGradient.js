// src/components/layout/ReusableGradient.js
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ReusableGradient = ({ children, style, contentStyle }) => {
  return (
    <LinearGradient
      colors={['#f99f2b', '#eb436c']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.gradient, style]}
    >
      <SafeAreaView style={[styles.safeArea, contentStyle]}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default ReusableGradient;
