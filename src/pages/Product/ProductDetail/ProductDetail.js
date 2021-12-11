import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View, SafeAreaView, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ProductDetail.styles';

export default function ProductDetail() {
  const route = useRoute();

  const {product} = route.params;

  function ListItem(props) {
    return (
      <View style={styles.badge_container}>
        <Text style={styles.badge_label}>{props.ing}</Text>
      </View>
    );
  }

  function IngredientsList() {
    const ingredients = product.ingredients.map(ing => (
      <ListItem key={ing.toString()} ing={ing} />
    ));
    return (
      <ScrollView horizontal bounces={false}>
        {ingredients}
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: product.imageURL,
          }}
        />
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{product.name}</Text>
          {product.isPopular && <Icon name="star" color="orange" size={25} />}
        </View>
        {IngredientsList()}
        <View style={styles.description_container}>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Text style={styles.price}>{product.price} TL</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

