import TransactionItem from '@/src/components/TransactionItem';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

interface TransactionsProps {
  activeCardNumber: string;
  transactionsData: Record<string, any[]>;
}

const Transactions: React.FC<TransactionsProps> = ({ activeCardNumber, transactionsData }) => {
  return (
    <View className="mx-2">
      <Text className="text-base font-medium mb-2">Latest Transactions</Text>

      <FlatList
        data={transactionsData[activeCardNumber]}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10}
        contentContainerStyle={{ paddingBottom: 130 }}
        removeClippedSubviews={false}
        style={{ height: 400 }}
        renderItem={({ item }) => <TransactionItem {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Transactions;
