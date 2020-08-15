import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            <Button title="GO TO MEALS" onPress={() => {
                //props.navigate({ro})
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryScreen;