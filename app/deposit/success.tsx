import Button from '@/src/components/Button';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CheckIcon, LinkIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDepositStore } from '../../src/store/depositeStore';

import { StatusBar } from 'expo-status-bar';

const SuccessScreen: React.FC = () => {
  const router = useRouter();
  const { amount, currency, card } = useDepositStore();

  const handleDone = () => {
    router.push('/');
  };

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1 bg-white py-1">
      <StatusBar style="dark" backgroundColor="white" />
      <View className="flex-1 justify-center items-center px-4">
        <View className="rounded-full p-4 mb-6" style={{ backgroundColor: '#C9FF08' }}>
          <CheckIcon size={40} strokeWidth={3} color="black" />
        </View>

        <Text className="text-xl font-bold mb-6">Card Deposit Success</Text>

        <View className="border border-gray-300 p-6 rounded-xl w-full gap-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Deposit amount</Text>
            <Text className="text-lg font-semibold">
              {amount} {currency}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Card deposit no.</Text>
            <Text className="text-lg font-semibold">*** {card?.cardNumber.slice(-4)}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Deposit method</Text>
            <Text className="text-lg font-semibold">Crypto</Text>
          </View>

          <View className="border-t border-gray-300 my-4" />

          <View className="flex-row items-center justify-between">
            <Text className="text-gray-500 mr-2">Transaction confirmation:</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-blue-600 mr-1">Qwwos...0xn</Text>
              <LinkIcon size={16} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="mt-auto w-full px-5 items-center">
        <Button text="Done" height={48} className="w-full" onPress={handleDone} />
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
