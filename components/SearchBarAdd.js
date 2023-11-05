import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const SearchBarAdd = ({ placeholderText, showModal }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Appbar.Header style={{backgroundColor:'#f2f2f2'}}>
      <Searchbar
        placeholder={placeholderText || 'Buscar'}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <Appbar.Action icon="plus" onPress={showModal} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    marginHorizontal: 8,
    borderRadius: 50,
    width: '85%',
    backgroundColor: '#dfe8e6'
  },
});

export default SearchBarAdd;
