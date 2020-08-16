import React from 'react';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../CustomHeaderButton';
import MealList from '../MealList';

const FavoritesScreen = props => {
    const availableMeals = useSelector(state => state.meals.favoriteMeals);

    return <MealList listData={availableMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
      headerTitle: 'Your favorite meals',
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


export default FavoritesScreen;