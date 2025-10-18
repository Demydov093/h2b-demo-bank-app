import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { PlusIcon } from 'react-native-heroicons/outline';

type FuncType = () => void;

const Header = () => {
  const handleAddCard: FuncType = () => {
    console.log('Add Card button pressed');
  };

  return (
    <View className="flex-row justify-between items-center px-4 pb-4 bg-white">
      <View className="rounded-full overflow-hidden">
        <Image
          className="w-12 h-12"
          resizeMode="cover"
          source={require('../../../assets/images/guy.jpg')}
        />
      </View>

      <Pressable
        onPress={handleAddCard}
        className="flex-col items-center"
        accessible={true}
        accessibilityLabel="Add a new card"
      >
        <PlusIcon size={25} strokeWidth={2} color="black" />
        <Text className="text-black font-medium text-sx mt-1">Add Card</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Header);
