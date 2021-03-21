import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from "../navigation/AuthProvider";
import {db, addToList} from "../firebase/firebaseFunctions" 
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function FirebaseDataScreen() {
  const {user } = useContext(AuthContext);
  const[list, setList] = React.useState({});
  const [listItems, setListItems] = React.useState([]);
  const [displayedItems, setDisplayedItems] = React.useState([]);
  const [uid, setUid] = React.useState("");
  const [item, setItem] = useState("");
//Listen to the List of the user when the components mounts
  useEffect( () => {
    setUid(user.uid);
    db.ref("list/" + uid).on("value", (querySnapshot) => {
      setList(querySnapshot.val())
    })
  }, []);

  function updateList(button){
    addToList(uid, item)
  }

  function removeItem(key){
    let removed = db.ref("list/" + uid +"/" +key);
    removed.remove()
    .then(function() {
      console.log("Remove succeeded of " + key)
      console.log(list)
    })
  }

  //Change items List whenever the db value changes
  useEffect( () => {
    setListItems(Object.keys(list));

    setDisplayedItems(
      listItems.map((section) => {
        console.log("current section is " + section)
        return (
            <TouchableOpacity
              onPress ={() => removeItem(section)}
              key = {section}
            >
              <Text>{section}</Text>
            </TouchableOpacity>
        
        )
      })
    )
  }, [list])
  //let itemsList = Object.keys(list);
  // let displayedItems = itemsList.map((section) => {
  //   return (
  //       <TouchableOpacity
  //         onPress ={() => removeItem(section)}>

  //           <Text>{section}</Text>
  //       </TouchableOpacity>
    
  //   )
  // })
  return (
    <View style={styles.container}>
      <Text>Add Item To Your List</Text>
      <TextInput
        value = {item}
        onChangeText={setItem}
        style = {styles.textInput}/>
      <Button 
        onPress = {updateList}
        title = "Add To Your List"
        />
      
    <Text>Your List</Text>
    <Text>{displayedItems} </Text>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
  },
});