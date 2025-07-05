import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import DetailLayout from '../../screens/shared/DetailLayout';
import HeaderNavigator from '../../components/header/HeaderDetail';
import DefaultButton from '../../components/button/DefaultButton';
import CustomInput from '../../components/input/CustomInput';
import Divider from '../../components/divider/Divider';
import { COLORS, FONTS } from '../../layout/GlobalTheme';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const HelpScreen = () => {
  return (
    <DetailLayout customHeader={<HeaderNavigator right page="Help & Support" />}>
      <View style={styles.container}>
        <Text style={styles.heading}>We’re happy to hear from you!</Text>
        <Text style={styles.subheading}>Let us know your queries and feedback</Text>

        <View style={styles.buttonRow}>
          <DefaultButton title="Call us" icon="phone" style={styles.buttonSpacing} />
          <DefaultButton title="Mail us" icon="email" outline style={styles.buttonSpacing} />
        </View>

        <View style={styles.divider}>
          <Divider />
        </View>

        <Text style={styles.formTitle}>Or send your message</Text>

        <CustomInput
          style={styles.input}
          placeholder="Full Name"
        />
        <CustomInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
        />
        <CustomInput
          style={styles.input}
          placeholder="Message"
          multiline
          numberOfLines={5}
        />

        <DefaultButton title="Submit" style={styles.submitButton} />
      </View>
    </DetailLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    ...FONTS.h5,
    marginBottom: 4,
    color: COLORS.title,
  },
  subheading: {
    ...FONTS.font,
    color: 'gray',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonSpacing: {
    marginHorizontal: isTablet ? 10 : 5,
    minWidth: isTablet ? 140 : 120,
  },
  divider: {
    marginVertical: 30,
  },
  formTitle: {
    ...FONTS.h5,
    marginBottom: 10,
    color: COLORS.title,
  },
  input: {
    marginBottom: 15,
  },
  submitButton: {
    marginTop: 10,
    alignSelf: 'center',
    minWidth: isTablet ? 200 : '100%',
  },
});

export default HelpScreen;
