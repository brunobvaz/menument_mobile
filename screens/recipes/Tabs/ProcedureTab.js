import React from 'react';
import { View, Text, TextInput, SafeAreaView, Platform, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import globalStyleSheet from '../../../layout/GlobalTheme';
import { COLORS, IMAGES, FONTS } from '../../../layout/GlobalTheme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HorizontalChip from '../../../components/list/HorizontalChip';
import HorizontalCard from '../../../components/card/HorizontalCard';
import DefaultButton from '../../../components/button/DefaultButton';

const renderItem = ({ item, index }) => {
    return (
        <View>
            <View style={{ paddingTop: 8, paddingBottom: 8 }}>
                <View style={{}}>
                    <Text style={{}}>Passo {index + 1}</Text>
                </View>
                <View >
                    <Text style={{ color: 'gray' }}>{item}</Text>
                </View>
            </View>
        </View>
    );
}

const ProcedureTab = (props) => {

    const { list } = props

    return (
        <>

            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 15 }}
                data={list}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListFooterComponent={() => (
                    <View style={{ padding: 20,  }}>
                        <DefaultButton title="Show video" />
                    </View>
                )}
            />
        </>
    );
};

export default ProcedureTab;