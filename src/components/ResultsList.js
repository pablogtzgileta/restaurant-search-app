import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation: { navigate } }) => {

    if (!results.length) {
        return null;
    }

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>{ title }</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={ false }
                data={ results }
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={ () => navigate('ResultsShow', { id: item.id }) }>
                            <ResultsDetail result={ item }/>
                        </TouchableOpacity>
                    )
                } }
                keyExtractor={ (result) => result.id }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 15
    }
});

export default withNavigation(ResultsList);
