import Button from '@/src/components/Button';
import CardItem from '@/src/components/CardItem';
import { cardsData } from '@/utils';
import { Link } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';

import { Cog8ToothIcon, PlusIcon } from 'react-native-heroicons/outline';

const { width } = Dimensions.get('window');
const SIDE_PADDING = 16;
const ITEM_WIDTH = width * 0.91;
const MARGIN_RIGHT = width - SIDE_PADDING * 2 - ITEM_WIDTH;

interface CardProps {
  activeCardNumber: string;
  setActiveCardNumber: (cardNumber: string) => void;
}

const Card: React.FC<CardProps> = ({ activeCardNumber, setActiveCardNumber }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    flatListRef.current?.scrollToOffset({
      offset: ITEM_WIDTH * activeIndex,
      animated: false,
    });
  }, []);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
    setActiveIndex(index);
    const card = cardsData[index];
    if (card) {
      setActiveCardNumber(card.cardNumber.slice(-4));
    }
  };

  return (
    <View className="my-3">
      <FlatList
        ref={flatListRef}
        data={cardsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View
            className={`w-[${ITEM_WIDTH}] mr-[${index === cardsData.length - 1 ? 0 : MARGIN_RIGHT}] `}
          >
            <CardItem
              id={item.id}
              amount={item.amount}
              cardNumber={item.cardNumber}
              gradientColors={item.gradientColors}
              textColor={item.textColor}
              expirationDate={item.expirationDate}
              cvv={item.cvv}
            />
          </View>
        )}
      />

      <View className="flex-row justify-center mt-3">
        {cardsData.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <View
              key={index}
              className={`h-[5px] rounded-[2.5px] mx-1 ${isActive ? 'w-10 bg-[#272742]' : 'w-5 bg-[#ccc]'}`}
            />
          );
        })}
      </View>

      <View className="flex-row justify-between mt-4 gap-2.5 mx-3">
        <Link href="/deposit/transaction" asChild>
          <Button
            text="Deposit Card"
            icon={<PlusIcon size={20} color="white" />}
            className="flex-1 text-size-500"
          />
        </Link>

        <Link href="/deposit/transaction" asChild>
          <Button
            text="Card Settings"
            icon={<Cog8ToothIcon size={20} color="white" />}
            className="flex-1"
          />
        </Link>
      </View>

      <View className="border-t border-gray-300 mt-4 mb-0" />
    </View>
  );
};

export default Card;
