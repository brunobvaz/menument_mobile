import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image
} from 'react-native';
import Divider from '../../../components/divider/Divider';
import { FONTS } from '../../../layout/GlobalTheme';

const IngredientTab = ({ list }) => {

  const renderItem = ({ item, index }) => (
    <View>
      {index > 0 && <Divider />}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {item.image && (
            <Image
              src={`http://localhost:3001/uploads/${item.image}`}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
          )}
          <Text style={{ marginLeft: 8 }}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{item.quantity}</Text>
          <Text> {item.unit}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
        <Text style={{ ...FONTS.h6, fontWeight: 'bold' }}>
          Total {list.length} ingredients
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 15, paddingHorizontal: 15 }}
        data={list}
        keyExtractor={(item, index) => item.ingredientId || index.toString()}
        renderItem={renderItem}
      />
    </>
  );
};

export default IngredientTab;