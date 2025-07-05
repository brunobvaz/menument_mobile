import React, { useState, useEffect } from 'react';
import {
  View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet, Dimensions
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import globalStyleSheet from '../../layout/GlobalTheme';
import { FONTS, COLORS } from '../../layout/GlobalTheme';
import useIngredients from '../../hooks/useIngredients';

import TabButtonBorder from '../../components/tab/TabButtonBorder';
import IngredientTab from './Tabs/IngredientTab';
import ProcedureTab from './Tabs/ProcedureTab';
import NutritionTab from './Tabs/NutritionTab';
import DefaultButton from '../../components/button/DefaultButton';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const DetailScreen = (props) => {
  const navigation = useNavigation();
  const {
    image, title, servings, preparationTime,
    ingredientList, procedureList, nutritionsList
  } = props.route.params;

  const { fetchIngredientsByIds } = useIngredients();
  const [activeTab, setActiveTab] = useState('Ingredients');
  const [enrichedIngredients, setEnrichedIngredients] = useState([]);
  const [nutritionArray, setNutritionArray] = useState([]);

  useEffect(() => {
    const enrichIngredients = async () => {
      const enriched = await fetchIngredientsByIds(ingredientList);
      setEnrichedIngredients(enriched);
    };

    const buildNutritionList = () => {
      if (!nutritionsList) return;

      const safeParse = (val) => {
        const num = parseFloat(val);
        return isNaN(num) ? 0 : num;
      };

      setNutritionArray([
        { id: 'calories', nutritionType: 'Calories', available: `${nutritionsList.calories || 0}`, inPercentage: (safeParse(nutritionsList.calories) / 2000) * 100, color: COLORS.primary, basis: '2000kcal/Day' },
        { id: 'proteins', nutritionType: 'Proteins', available: `${nutritionsList.proteins || 0}g`, inPercentage: (safeParse(nutritionsList.proteins) / 50) * 100, color: '#5DB075', basis: '50g/Day' },
        { id: 'carbohydrates', nutritionType: 'Carbs', available: `${nutritionsList.carbohydrates || 0}g`, inPercentage: (safeParse(nutritionsList.carbohydrates) / 275) * 100, color: '#F5B041', basis: '275g/Day' },
        { id: 'fats', nutritionType: 'Fats', available: `${nutritionsList.fats || 0}g`, inPercentage: (safeParse(nutritionsList.fats) / 70) * 100, color: '#EC7063', basis: '70g/Day' },
        { id: 'vitaminC', nutritionType: 'Vit C', available: `${nutritionsList.vitaminC || 0}mg`, inPercentage: (safeParse(nutritionsList.vitaminC) / 75) * 100, color: '#58D68D', basis: '75mg/Day' },
        { id: 'calcium', nutritionType: 'Calcium', available: `${nutritionsList.calcium || 0}g`, inPercentage: (safeParse(nutritionsList.calcium) / 1) * 100, color: '#5499C7', basis: '1g/Day' },
      ]);
    };

    enrichIngredients();
    buildNutritionList();
  }, [ingredientList, nutritionsList]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Ingredients':
        return (
          <View style={{ flex: 1 }}>
            <IngredientTab list={enrichedIngredients} />
            <View style={{ marginTop: 15, alignSelf: 'center', width: isTablet ? '40%' : '100%' }}>
              <DefaultButton title="Add to cart" />
            </View>
          </View>
        );
      case 'Nutrition':
        return <NutritionTab list={nutritionArray} />;
      case 'Procedure':
        return <ProcedureTab list={procedureList} />;
    }
  };

  return (
    <SafeAreaView style={[globalStyleSheet.container, styles.safeArea]}>
      <ImageBackground style={styles.headerImage} source={{ uri: `https://menumentapp.com/uploads/${image}` }}>
        <View style={styles.headerControls}>
          <TouchableOpacity
            style={[globalStyleSheet.NotificationBtn, styles.iconBackground]}
            onPress={() => navigation.goBack()}
          >
            <FeatherIcon name={'chevron-left'} size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[globalStyleSheet.NotificationBtn, styles.iconBackground]}
          >
            <FeatherIcon size={22} color="#fff" name={'heart'} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={{ flex: 1, paddingHorizontal: isTablet ? 30 : 15 }}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>{nutritionsList.calories} <Text style={{ fontWeight: 'bold' }}>kcal</Text></Text>
          <View style={styles.separator}>
            <FeatherIcon size={18} color={COLORS.primary} name={'clock'} />
            <Text style={styles.metaText}>{preparationTime} min</Text>
          </View>
          <Text style={[styles.metaText, { color: 'green' }]}>{servings} servings</Text>
        </View>

        <TabButtonBorder
          buttons={['Ingredients', 'Procedure', 'Nutrition']}
          activeTab={activeTab}
          onClick={setActiveTab}
        />

        {renderContent()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9F7F4",
    padding: 0,
  },
  headerImage: {
    width: '100%',
    height: isTablet ? 400 : 300,
  },
  headerControls: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBackground: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    ...FONTS.h3,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  metaRow: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    ...FONTS.h6,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#e3e3e3",
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },
});

export default DetailScreen;