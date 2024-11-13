import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function OrderScreen() {
  const [orders, setOrders] = useState([]);

  const addOrder = () => {
    const newOrder = { id: Date.now().toString(), description: "Pedido #1" };
    setOrders([...orders, newOrder]);
  };

  return (
    <View>
      <Text>Pedidos</Text>
      <Button title="Adicionar Pedido" onPress={addOrder} />
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.description}</Text>}
      />
    </View>
  );
}
