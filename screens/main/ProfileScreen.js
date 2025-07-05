import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import HeaderNavigator from '../../components/header/HeaderDetail';
import { COLORS, SIZES, FONTS, ICONS } from '../../layout/GlobalTheme';
import globalStyleSheet from '../../layout/GlobalTheme';
import { SvgXml } from 'react-native-svg';
import CustomInput from '../../components/input/CustomInput';
import DefaultButton from '../../components/button/DefaultButton';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const ProfileScreen = () => {
  const [state, setState] = useState({
    name: 'Bruno Vaz',
    email: 'brunobvaz@gmail.com',
    mobileNo: '+91 1236547890',
    password: '•••••••••••',
    imageProfile: require('../../assets/profile.png'),
    showBottomSheet: false,
  });

  const updateState = (data) => setState((prev) => ({ ...prev, ...data }));

  const changeProfilePicOptionsSort = ({ bgColor, icon, option }) => (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        activeOpacity={0.99}
        onPress={() => updateState({ showBottomSheet: false })}
        style={[styles.changeProfilePicOptionsIconWrapStyle, { backgroundColor: bgColor }]}
      >
        <Image source={icon} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
      </TouchableOpacity>
      <Text style={[FONTS.fontXs, { marginTop: 6, textAlign: 'center' }]}>{option}</Text>
    </View>
  );

  const changeProfilePicOptionsSheet = () => (
    <Modal
      animationType="slide"
      transparent
      visible={state.showBottomSheet}
      onRequestClose={() => updateState({ showBottomSheet: false })}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateState({ showBottomSheet: false })}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContentWrapper}>
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.changeProfilePicBottomSheetStyle}>
              <Text style={FONTS.h6}>Choose Option</Text>
              <View style={styles.optionRow}>
                {changeProfilePicOptionsSort({
                  bgColor: '#009688',
                  icon: require('../../assets/camera.png'),
                  option: 'Camera',
                })}
                {changeProfilePicOptionsSort({
                  bgColor: '#00A7F7',
                  icon: require('../../assets/gallery.png'),
                  option: 'Gallery',
                })}
                {changeProfilePicOptionsSort({
                  bgColor: '#DD5A5A',
                  icon: require('../../assets/delete.png'),
                  option: 'Remove\nphoto',
                })}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <SafeAreaView style={[globalStyleSheet.container, styles.safeArea]}>
      <HeaderNavigator right page="Profile" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileSection}>
          <Image source={state.imageProfile} style={styles.profileImage} />
          <TouchableOpacity
            activeOpacity={0.99}
            onPress={() => updateState({ showBottomSheet: true })}
            style={styles.changeProfilePicButtonStyle}
          >
            <SvgXml style={{ marginRight: 3 }} width={14} color={'#fff'} xml={ICONS.camera} />
            <Text style={{ ...FONTS.fontXs, color: '#fff' }}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          {["Name", "E-mail", "Mobile Number", "Password"].map((label, index) => (
            <View key={label} style={styles.inputGroup}>
              <Text style={styles.label}>{label}</Text>
              <CustomInput
                style={styles.input}
                placeholder={label}
                value={state[label.toLowerCase().replace(' ', '')]}
                onChangeText={(value) => updateState({ [label.toLowerCase().replace(' ', '')]: value })}
              />
            </View>
          ))}

          <View style={styles.buttonWrapper}>
            <DefaultButton title="SAVE CHANGES" />
          </View>
        </View>
      </ScrollView>
      {changeProfilePicOptionsSheet()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 0,
    backgroundColor: '#F9F7F4',
    paddingHorizontal: isTablet ? 30 : 0,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: isTablet ? 140 : 100,
    height: isTablet ? 140 : 100,
    borderRadius: isTablet ? 70 : 50,
  },
  changeProfilePicButtonStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  formContainer: {
    marginTop: isTablet ? 40 : 30,
    paddingHorizontal: isTablet ? 20 : 15,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    color: 'gray',
    marginBottom: 5,
  },
  input: {
    marginTop: 5,
  },
  buttonWrapper: {
    marginTop: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContentWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  changeProfilePicBottomSheetStyle: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: SIZES.padding * 2,
  },
  changeProfilePicOptionsIconWrapStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: SIZES.padding * 1.5,
  },
});

export default ProfileScreen;
