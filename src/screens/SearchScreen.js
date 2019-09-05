import React, {useState, useEffect } from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import ResultsList from '../Components/ResultsList'
import yelp from '../Api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price == price
        })
    }
   

    return (
        <>
            <SearchBar 
                //term is the prop passed down to Search Bar
                term={term}
                //onTermChange is a prop function to set a new term passed to search bar
                onTermChange={setTerm}
                //
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    title='Cost Effective'
                    results={filterResultsByPrice('$')}
                    
                />
                <ResultsList 
                    title='Bit Pricer'
                    results={filterResultsByPrice('$$')}
                    
                />
                <ResultsList 
                    title='Big Spender'
                    results={filterResultsByPrice('$$$')}
                    
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen; 