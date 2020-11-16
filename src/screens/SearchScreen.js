import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => console.log("Ha")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;