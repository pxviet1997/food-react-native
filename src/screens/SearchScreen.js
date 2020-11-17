import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  // console.log(results);

  const filterResultByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  
  return (
    <>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
     
      <ScrollView>
        <ResultsList 
          title="Cost Effective"
          results={filterResultByPrice('$')}
        />
        <ResultsList 
          title="Bit Pricier"
          results={filterResultByPrice('$$')}
        />
        <ResultsList 
          title="Big Spencer"
          results={filterResultByPrice('$$$')}
        />
      </ScrollView>
      
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;