import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { categoriesING } from '../../constants/fakeDB';
import SearchInput from '../../components/input/SearchInput';
import HorizontalChip from '../../components/list/HorizontalChip';
import ShoppingCard from '../../components/card/ShoppingCard';
import ScreenLayout from '../../screens/shared/ScreenLayout';
import Header from '../../components/header/Header';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const ShopListScreen = () => {

    const [searchText, setSearchText] = useState('');

  return (
    <ScreenLayout
      leftHeader=""
      searchPlaceholder="Pesquisar item..."
      searchValue={searchText}
      onSearchChange={setSearchText}
      onSearchPress={() => {}}
    >


      <View style={styles.chipContainer}>
        <HorizontalChip categoriesData={categoriesING} />
      </View>

      <View style={styles.cardList}>
        {
            /*
                    {INGREDIENTS.map((ing) => (
          <View key={ing.id} style={styles.cardWrapper}>
            <ShoppingCard
              title={ing.title}
              image={ing.imageCard}
              unity={ing.unity}
              quantity={ing.quantity}
            />
          </View>
        ))}
             */
        }

      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginBottom: 10,
  },
  chipContainer: {
    marginBottom: 20,
  },
  cardList: {
    width: '100%',
    maxWidth: isTablet ? 600 : '100%',
    alignSelf: 'center',
  },
  cardWrapper: {
    marginVertical: isTablet ? 12 : 8,
  },
});

export default ShopListScreen;
