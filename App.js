import React, { Component} from 'react';
import { AppRegistry,Alert, Text, TextInput,StyleSheet,FlatList,Button,View } from 'react-native';


export default class PizzaTranslator extends Component {
  constructor(probs){
    super(probs);
    this.state = {text: ''};
  }
  
  render() {
    return (
      <View style={{padding: 40}}>
        <TextInput style={{heigt: 10}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})} />
        <Text style={{padding:10, fontSize: 42}}>
        {this.state.text.split(' ').map ((word) => word && '🍕').join(' ')}
        </Text>
        <FlatList
          data={[
            {key: 'Pizza'},
            {key: 'Pizza'},
            {key: 'Pizza'},
            {key: 'Pizza'},
            {key: 'Pizza'},
            {key: 'Pizza'},
            {key: 'Pizza'},
            {key: 'Pizza'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
       <Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
  
      </View>
    );
  }
}
AppRegistry.registerComponent('FirstApp', ()=>PizzaTranslator);


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


