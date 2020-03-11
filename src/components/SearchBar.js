import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={ styles.backgroundStyle }>
            <Ionicons style={ styles.iconStyle } name="ios-search"/>
            <TextInput
                onEndEditing={ onTermSubmit }
                autoCorrect={ false }
                style={ styles.inputStyle }
                placeholder="Search"
                value={ term }
                onChangeText={ newTerm => onTermChange(newTerm) }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 16
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;
