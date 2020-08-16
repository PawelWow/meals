import React from 'react';
import {Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../components/screens/CategoriesScreen';
import CategoryMealsScreen from '../components/screens/CategoryMealsScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';
import FavoritesScreen from '../components/screens/FavoritesScreen';

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

const tabSScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return ( <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />);
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: tabInfo => {
                return ( <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/> );
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = 
    Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabSScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
    : createBottomTabNavigator(tabSScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }         
     }
);

export default createAppContainer(MealsFavTabNavigator);