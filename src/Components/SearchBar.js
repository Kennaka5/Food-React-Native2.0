import React from 'react'
import {View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';



///////////////Props: (Term,  onTermChange(), onTermSubmit()) ////////////////
const SearchBar = ({term, onTermChange, onTermSubmit}) => {



    return (
        <View
            style={styles.backgroundStyle}
        >
        <Feather 
            name='search'
            style={styles.iconStyle}
        />
            <TextInput
                placeholder="Search"
                style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
        // use fontsize to change the size of an icon
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar; 