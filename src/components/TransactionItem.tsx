import { Transaction } from '@/types';
import React from 'react';
import { Text, View } from 'react-native';
import { ArrowUpIcon } from 'react-native-heroicons/outline';

const TransactionItem: React.FC<Transaction> = ({ title, amount, date }) => {
  return (
    <View className="p-4 bg-white flex-row items-center">
      <View
        className="rounded-full p-2 justify-center items-center mr-4"
        style={{
          backgroundColor: '#F2F2F2',
          width: 40,
          height: 40,
        }}
      >
        <ArrowUpIcon color="#272742" size={20} />
      </View>

      <View className="flex-row items-center justify-between flex-1">
        <View>
          <Text className="text-sm font-medium text-[#272742]">{title}</Text>
          <Text className="text-sm font-normal text-[#272742]">**3524 · {date}</Text>
        </View>

        <Text className="text-base font-semibold text-[#272742]">- {amount}</Text>
      </View>
    </View>
  );
};

export default TransactionItem;
