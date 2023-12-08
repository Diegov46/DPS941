import React from "react";
import { View, Text, FlatList, StyleSheet} from "react-native";
import repositories from '../doct/data/repositories.js'
import RepositoryItem from '../doct/RepositoryItem.js'


const RepositoryList = () => {

    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={()=> <Text></Text>}
            renderItem={({item: repo})=>(
                <RepositoryItem  {...repo}/>
                
    )}
        />
    )
}


export default RepositoryList;