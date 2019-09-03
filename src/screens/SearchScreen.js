import React, {useState} from 'react'
import {View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../Api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    //use searchApi as a asyncrous function
    const searchApi = async () => {
        //set variable of respose to go the get request
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        });
        //use setResults to get the data
        setResults(response.data.businesses)
    } catch(error) {
        console.log(error)
    }
    }



    return (
        <View>
            <SearchBar 
                //term is the prop passed down to Search Bar
                term={term}
                //onTermChange is a prop function to set a new term passed to search bar
                onTermChange={setTerm}
                //
                onTermSubmit={() => searchApi()}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen; 