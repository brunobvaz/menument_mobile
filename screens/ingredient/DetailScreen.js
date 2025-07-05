import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import DetailLayout from '../shared/DetailLayout';
import HorizontalCard from '../../components/card/HorizontalCard';
import globalStyleSheet from '../../layout/GlobalTheme';
import { COLORS, FONTS } from '../../layout/GlobalTheme';
import { RECIPES } from '../../constants/fakeDB';
import useIngredients from '../../hooks/useIngredients';
import HeaderDetail from '../../components/header/HeaderDetail';

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const { ingredients, loading, error } = useIngredients();

  const ingredient = ingredients.find((item) => item._id === id);

  if (loading) {
    return (
      <DetailLayout>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </DetailLayout>
    );
  }

  if (!ingredient) {
    return (
      <DetailLayout customHeader={<HeaderDetail page="Ingredient"/>}>
        <View style={styles.centered}>
          <Text style={{ color: COLORS.text }}>Ingrediente não encontrado.</Text>
        </View>
      </DetailLayout>
    );
  }

  const { name, color, nutritions, image, type } = ingredient;

  return (
    <DetailLayout customHeader={<HeaderDetail page="Ingredient"/>}>
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={[FONTS.font, { marginBottom: 2, color: COLORS.text }]}>
            {type || 'Sem categoria'}
          </Text>
          <Text style={[FONTS.h4, { marginBottom: 2, color: COLORS.title }]}>{name}</Text>
          <Text style={[FONTS.font, { fontSize: 16, color: COLORS.primary }]}>
            {nutritions?.calories || '0'} kcal / {ingredient.quantity || '100'} {ingredient.unit || 'Un'}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{ uri: `https://menumentapp.com/uploads/${image}` }}
            />
          </View>
        </View>
      </View>

      <View style={{ marginBottom: 15 }}>
        <Text style={[FONTS.h6, { color: COLORS.title }]}>Nutritional info</Text>
      </View>

      <View style={[styles.nutritionBox, { backgroundColor: color || COLORS.primary }]}>
        {[
          { label: 'Prot', value: nutritions?.proteins },
          { label: 'Líp', value: nutritions?.fats },
          { label: 'Carbs', value: nutritions?.carbohydrates },
          { label: 'Fib', value: nutritions?.fiber },
        ].map((item, idx) => (
          <View
            key={idx}
            style={[
              styles.nutritionItem,
              idx !== 3 && { borderRightWidth: 1, borderColor: '#FFF' },
            ]}
          >
            <Text style={[FONTS.h4, styles.nutritionText]}>{item.label}</Text>
            <Text style={[FONTS.font, styles.nutritionText]}>{item.value || '0'}g</Text>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={[FONTS.h6, { color: COLORS.title }]}>Recipes with {name}</Text>
        {/** 
        <View style={globalStyleSheet.row}>
          {RECIPES.map((rec, index) => (
            <View key={index} style={[globalStyleSheet.col50, { marginTop: 20 }]}>
              <HorizontalCard recipe={rec} />
            </View>
          ))}
        </View>
        */}
      </View>
    </DetailLayout>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRow: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 30,
    padding: 2,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  imageWrapper: {
    padding: 6,
    backgroundColor: '#F9F7F4',
    borderRadius: 30,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 22,
  },
  nutritionBox: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
  },
  nutritionItem: {
    width: '25%',
    alignItems: 'center',
  },
  nutritionText: {
    color: COLORS.white,
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default DetailScreen;
