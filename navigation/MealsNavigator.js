import {Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import CategoriesScreen from '../components/screens/CategoriesScreen';
import CategoryMealsScreen from '../components/screens/CategoryMealsScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';

import Colors from '../constans/Colors';

const MealsNavigator =  createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailScreen
    }, {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'A Screen'
        }
    });

export default createAppContainer(MealsNavigator);