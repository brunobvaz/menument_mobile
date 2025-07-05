import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { RECIPES } from '../../constants/fakeDB';
import FavouriteCard from '../../components/card/FavouriteCard';
import DetailLayout from '../../screens/shared/DetailLayout';
import HeaderNavigation from '../../components/header/HeaderDetail';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const FavouriteScreen = () => {
  return (
    <DetailLayout
      customHeader={<HeaderNavigation right page="Favourites" />}
    >
      <View style={styles.cardWrapper}>
        {
            /**
                     {RECIPES.map((rec, index) => (
          <View key={index} style={styles.cardItem}>
            <FavouriteCard recipe={rec} />
          </View>
        ))}
             */
        }

      </View>
    </DetailLayout>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    gap: isTablet ? 20 : 12, // espaçamento entre os cards
  },
  cardItem: {
    marginBottom: isTablet ? 20 : 12,
  },
});

export default FavouriteScreen;
