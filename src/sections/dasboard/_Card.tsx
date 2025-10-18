import { FlatList, Text, View } from 'react-native';

const Card: React.FC = () => {
  return (
    <View className="my-3">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={350}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 16 }}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View className="w-[350px] mr-4 bg-gray-200 rounded-xl justify-center items-center">
            <Text className="text-lg font-semibold">{index + 1}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Card;
