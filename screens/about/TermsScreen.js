import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import DetailLayout from '../../screens/shared/DetailLayout';
import HeaderNavigator from '../../components/header/HeaderDetail';
import { FONTS, COLORS } from '../../layout/GlobalTheme';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const companyPoliciesList = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea porttitor dui tortor erat at quis.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus integer vel bibendum nulla et aenean fermentum erat etiam. Faucibus lobortis massa, augue magnis. Diam urna in feugiat in urna ac et.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sit volutpat nisi, cursus pretium malesuada sit. Mattis cursus amet praesent tristique.',
];

const termsOfUseList = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea porttitor dui tortor erat at quis.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus integer vel bibendum nulla et aenean fermentum erat etiam. Faucibus lobortis massa, augue magnis. Diam urna in feugiat in urna ac et.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sit volutpat nisi, cursus pretium malesuada sit. Mattis cursus amet praesent tristique.',
];

const TermsScreen = () => {
  return (
    <DetailLayout customHeader={<HeaderNavigator right page="Terms & Conditions" />}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Company Policies</Text>
        {companyPoliciesList.map((item, index) => (
          <Text key={`policy-${index}`} style={styles.text}>
            {item}
          </Text>
        ))}

        <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Terms of Use</Text>
        {termsOfUseList.map((item, index) => (
          <Text key={`term-${index}`} style={styles.text}>
            {item}
          </Text>
        ))}
      </View>
    </DetailLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: isTablet ? 18 : 12,
  },
  sectionTitle: {
    ...FONTS.h5,
    color: COLORS.title,
    marginBottom: 10,
  },
  text: {
    ...FONTS.font,
    fontSize: isTablet ? 16 : 14,
    color: 'gray',
    textAlign: 'justify',
    marginBottom: isTablet ? 16 : 12,
  },
});

export default TermsScreen;
