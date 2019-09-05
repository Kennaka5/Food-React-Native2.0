import React, {useState, useEffect } from 'react'
import {View, Text, StyleSheet } from 'react-native';
import yelp from '../Api/yelp';

export default  () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    //use searchApi as a asyncrous function
    const searchApi = async (searchTerm) => {
        //set variable of respose to go the get request
        console.log('hi there')
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        //use setResults to get the data
        setResults(response.data.businesses)
    } catch(error) {
        setErrorMessage('something went wrong')
        console.log(error)
    }
    }

// Call searchApi when certona is first rendered
// is first rendered. BAD CODE.
// searchApi('pasta');
// this is good code
useEffect(() => {
    searchApi('pasta');
}, [])

return [searchApi, results, errorMessage]

}
