import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function ProductScreen() {
  const [products, setProducts] = useState([]);

  // Função para adicionar produtos
  const addProduct = () => {
    const newProduct = { id: Date.now().toString(), name: "Novo Produto" };
    setProducts([...products, newProduct]);
  };

  return (
    <View>
      <Text>Produtos</Text>
      <Button title="Adicionar Produto" onPress={addProduct} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
