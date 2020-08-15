import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import CategoriesScreen from '../components/screens/CategoriesScreen';
import CategoryMealsScreen from '../components/screens/CategoryMealsScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';

const MealsNavigator =  createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);