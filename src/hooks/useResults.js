import { useEffect, useState } from 'react';
import yelp from "../api/yelp";

export default () => {
    const [ results, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(res.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call search API when component is first rendered
    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [ searchApi, results, errorMessage ];
};
