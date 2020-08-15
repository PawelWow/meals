import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from '../CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => { 
                    props.navigation.navigate({ 
                            routeName: 'CategoryMeals',
                            params: {
                                categoryId: itemData.item.id
                            }
                        });
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </CategoryGridTile>
        ); 
    }

    return(
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;