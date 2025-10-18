import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl text-blue-200">Welcome to bank app</Text>

      <Link href='/transactions/transactions'>Transactions</Link>
    </View>
  );
}
