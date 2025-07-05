import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../layout/GlobalTheme';
import globalStyleApp from '../../layout/GlobalTheme';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const HorizontalChip = ({ categoriesData = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    const isSelected = selectedIndex === index;

    return (
      <TouchableOpacity
        style={[
          styles.chip,
          isSelected && styles.chipSelected,
          isTablet && styles.chipTablet,
          globalStyleApp.shadow,
        ]}
        onPress={() => setSelectedIndex(index)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.chipText,
            isSelected && styles.chipTextSelected,
            isTablet && styles.chipTextTablet,
          ]}
        >
          {item.nome}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item, idx) => `${item.nome}-${idx}`}
      data={categoriesData}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: SIZES.PADDING_BASE,
    paddingVertical: SIZES.PADDING_BASE,
  },
  chip: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: 12,
    paddingHorizontal: width * 0.04,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.lightGrayColor,
  },
  chipTablet: {
    paddingHorizontal: width * 0.03,
    height: 50,
    minWidth: 120,
  },
  chipSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  chipText: {
    ...FONTS.font,
    color: COLORS.text,
  },
  chipTextTablet: {
    fontSize: 16,
  },
  chipTextSelected: {
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default HorizontalChip;
