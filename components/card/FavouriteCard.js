import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { COLORS, FONTS } from '../../layout/GlobalTheme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const FavouriteCard = ({ recipe }) => {
  const navigation = useNavigation();
  const { title, time, servings, imageCard } = recipe;

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={imageCard} resizeMode="cover" />

      <View style={styles.contentArea}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{time}</Text>
          <Text style={styles.infoText}> | </Text>
          <Text style={styles.infoText}>{servings}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.favoriteButton}>
        <FeatherIcon color={COLORS.primary} size={20} name="trash" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: isTablet ? 18 : 12,
    marginVertical: 6,
    width: isTablet ? width * 0.8 : width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  image: {
    width: isTablet ? 100 : 80,
    height: isTablet ? 100 : 80,
    borderRadius: 10,
  },
  contentArea: {
    flex: 1,
    marginLeft: isTablet ? 20 : 12,
  },
  cardTitle: {
    ...FONTS.h6,
    fontSize: isTablet ? 18 : 15,
    color: COLORS.title,
    marginBottom: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.7,
  },
  infoText: {
    ...FONTS.fontSm,
    fontSize: isTablet ? 16 : 14,
    color: COLORS.text,
  },
  favoriteButton: {
    height: isTablet ? 40 : 35,
    width: isTablet ? 40 : 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(255,144,99,0.13)',
    position: 'absolute',
    top: isTablet ? 15 : 10,
    right: isTablet ? 15 : 10,
  },
});

export default FavouriteCard;
