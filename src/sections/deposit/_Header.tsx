import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

type HeaderProps = {
  loading: boolean;
  onBack: () => void;
};

const Header: React.FC<HeaderProps> = ({ loading, onBack }) => (
  <View className="flex-row items-center justify-center my-8">
    <TouchableOpacity onPress={onBack} className="mr-4 absolute left-0" disabled={loading}>
      <ArrowLeftIcon size={20} />
    </TouchableOpacity>
    <Text className="text-xl font-bold">DEPOSIT CARD</Text>
  </View>
);

export default Header;
