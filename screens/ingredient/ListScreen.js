import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useIngredients from '../../hooks/useIngredients';
import ScreenLayout from '../shared/ScreenLayout';
import HorizontalChip from '../../components/list/HorizontalChip';
import { COLORS, FONTS, SIZES } from '../../layout/GlobalTheme';
import { categoriesING } from '../../layout/GlobalTheme';

const ITEM_SIZE = 100;
const numColumns = Math.floor(Dimensions.get('window').width / ITEM_SIZE);

const ListScreen = () => {
  const navigation = useNavigation();
  const { ingredients, loading, error } = useIngredients();
  const [searchText, setSearchText] = useState('');

  const filteredIngredients = useMemo(
    () =>
      ingredients.filter((item) =>
        item.name?.toLowerCase().includes(searchText.toLowerCase())
      ),
    [ingredients, searchText]
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('DetailIngredient', { id: item._id })}
    >
      <View style={styles.imageWrapper}>
        {item.image ? (
          <Image
            source={{ uri: `https://menumentapp.com/uploads/${item.image}` }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.noImageText}>Sem imagem</Text>
        )}
      </View>
      <Text style={styles.itemTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenLayout
      leftHeader=""
      searchPlaceholder="Pesquisar ingredientes..."
      searchValue={searchText}
      onSearchChange={setSearchText}
      onSearchPress={() => {}}
    >
      <View style={styles.chipContainer}>
        <HorizontalChip categoriesData={categoriesING} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} style={styles.centered} />
      ) : error ? (
        <Text style={[styles.errorText, styles.centered]}>{error}</Text>
      ) : (
        <FlatList
          data={filteredIngredients}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          columnWrapperStyle={styles.columnWrapper}
        />
      )}
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    marginTop: SIZES.MARGIN_BASE,
    paddingHorizontal: 15,
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  columnWrapper: {
    justifyContent: 'flex-start',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 5,
    width: ITEM_SIZE - 10,
  },
  imageWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: ITEM_SIZE / 2,
    width: ITEM_SIZE * 0.8,
    height: ITEM_SIZE * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    overflow: 'hidden',
  },
  image: {
    width: ITEM_SIZE * 0.55,
    height: ITEM_SIZE * 0.55,
  },
  noImageText: {
    fontSize: 10,
    color: COLORS.gray,
    textAlign: 'center',
  },
  itemTitle: {
    textAlign: 'center',
    color: COLORS.text || '#333',
    fontSize: 12,
    ...FONTS.font,
  },
  errorText: {
    color: 'red',
  },
  centered: {
    marginTop: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default ListScreen;

