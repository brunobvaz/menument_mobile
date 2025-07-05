import React, { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import useRecipes from '../hooks/useRecipes';
import ScreenLayout from './shared/ScreenLayout';
import DefaultButton from '../components/button/DefaultButton';
import HorizontalCard from '../components/card/HorizontalCard';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const { recipes } = useRecipes();

  const [searchText, setSearchText] = useState('');

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.title?.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [recipes, searchText]);

  const renderItem = ({ item }) => (
    <View style={styles.cardWrapper}>
      <HorizontalCard recipe={item} />
    </View>
  );

  return (
    <ScreenLayout
      leftHeader=""
      searchPlaceholder="Pesquisar receitas..."
      searchValue={searchText}
      onSearchChange={setSearchText}
      onSearchPress={() => {}}
    >
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item._id?.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: isTablet ? 30 : 20,
  },
  listContainer: {
    paddingHorizontal: isTablet ? 30 : 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default HomeScreen;



