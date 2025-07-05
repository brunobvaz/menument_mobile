import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FONTS, COLORS } from '../../../layout/GlobalTheme';
const NutritionTab = ({ list }) => {
  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.nutritionWrap}>
      <View style={styles.circleWrapper}>
        <AnimatedCircularProgress
          size={80}
          width={2}
          fill={item.inPercentage}
          tintColor={item.color}
          rotation={360}
          backgroundColor={COLORS.lightGrayColor}
        />
        <View style={styles.innerText}>
          <Text style={{ ...FONTS.h6, textAlign: 'center', lineHeight: 16 }}>
            {item.available}
          </Text>
          <Text
            numberOfLines={1}
            style={{ ...FONTS.h6, color: item.color, textAlign: 'center', lineHeight: 17 }}
          >
            {item.nutritionType}
          </Text>
        </View>
      </View>

      <Text style={{ ...FONTS.body5, color: COLORS.gray, marginTop: 6 }}>
        {item.basis || '50g/dia'}
      </Text>
    </View>
  );

  return (
    <FlatList
      numColumns={3}
      data={list}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nutritionWrap: {
    marginHorizontal: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NutritionTab;
