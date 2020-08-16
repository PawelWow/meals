import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';

import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from '../CategoryGridTile';
import CustomHeaderButton from '../CustomHeaderButton';

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

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meals Categories',
        headerLeft: () =>{
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Menu" iconName="ios-menu" 
                        onPress={() => {
                            navData.navigation.toggleDrawer();
                        }} 
                    />
                </HeaderButtons>
            );
        } 
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;