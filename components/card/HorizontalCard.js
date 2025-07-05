import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../layout/GlobalTheme';
import { LinearGradient } from 'expo-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const CARD_HEIGHT = isTablet ? width * 0.4 : width * 0.5;
const FONT_SIZE = isTablet ? 20 : 16;

const HorizontalCard = ({ recipe }) => {
  const navigation = useNavigation();
  const {
    title,
    preparationTime,
    servings,
    image,
    ingredients,
    instructions,
    nutritions,
  } = recipe;

  const handlePress = () => {
    navigation.navigate('DetailRecipe', {
      image,
      title,
      preparationTime,
      servings,
      ingredientList: ingredients,
      procedureList: instructions,
      nutritionsList: nutritions,
    });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <Image
        style={styles.image}
        source={{ uri: `https://menumentapp.com/uploads/${image}` }}
        resizeMode="cover"
      />

      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']}
        style={styles.gradient}
      >
        <Text style={styles.cardTitle} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{preparationTime} min</Text>
          <View style={styles.dot} />
          <Text style={styles.infoText}>{servings} servings</Text>
        </View>
      </LinearGradient>

      <TouchableOpacity style={styles.favoriteButton}>
        <FeatherIcon color={COLORS.white} size={20} name="heart" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
    maxWidth: isTablet ? 600 : 500,
    alignSelf: 'center',
    marginBottom: SIZES.MARGIN_BASE,
  },
  image: {
    width: '100%',
    height: CARD_HEIGHT,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingHorizontal: isTablet ? 24 : SIZES.PADDING_BASE,
    paddingVertical: isTablet ? 20 : SIZES.PADDING_BASE,
    justifyContent: 'flex-end',
  },
  cardTitle: {
    ...FONTS.h6,
    color: COLORS.white,
    fontSize: FONT_SIZE,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    opacity: 0.85,
  },
  infoText: {
    ...FONTS.fontSm,
    color: COLORS.white,
    fontSize: isTablet ? 14 : 12,
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: COLORS.white,
    marginHorizontal: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    height: isTablet ? 42 : 36,
    width: isTablet ? 42 : 36,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HorizontalCard;
