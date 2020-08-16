import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../../data/dummy-data';
import CustomHeaderButton from '../CustomHeaderButton';

const GetSelectedMeal = props => {
    const mealId = props.navigation.getParam('mealId');
    return MEALS.find(meal => meal.id === mealId );
}

const MealDetailScreen = props => {

    const selectedMeal = GetSelectedMeal(props);

    return(
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories" onPress={() => {props.navigation.popToTop()}} />
        </View>
    );
};


MealDetailScreen.navigationOptions = navigationData => {
    const selectedMeal = GetSelectedMeal(navigationData);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => {
                            console.log('Marked as favorite');
                        }} />
                </HeaderButtons>
            );        
        },
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;