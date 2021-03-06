import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {SafeAreaView, Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './CreateMenu.styles';

export default function CreateMenu() {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();

  const route = useRoute();
  const menuName = route.params.menu.name

  function handleNavigateDetail() {
    const fd = {
      name: name,
      description: description,
      ingredients: ingredients,
      price: price,
    };

    if(!name || !description || !ingredients || !price) {
      return;
    }

    navigation.navigate('MenuDetailPage', {fd});
  }

  return (
    <SafeAreaView>
      <Text style={styles.menu_name}>{menuName}</Text>
      <Input label="Name" onChangeText={value => setName(value)} />
      <Input
        label="Description"
        onChangeText={value => setDescription(value)}
      />
      <Input
        label="Ingredients"
        onChangeText={value => setIngredients(value)}
      />
      <Input label="Price" onChangeText={value => setPrice(value)} />
      <Button title="Apply Food" onPress={handleNavigateDetail} />
    </SafeAreaView>
  );
}
