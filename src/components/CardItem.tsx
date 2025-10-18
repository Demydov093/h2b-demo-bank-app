import { Card } from '@/types';
import { Dimensions, Image, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const CardItem: React.FC<Card> = ({
  amount,
  cardNumber,
  gradientColors = ['#DBDFDF', '#A5A9AA'],
  textColor = 'white',
  //   expirationDate = '02/28',
  //   cvv = 888,
}) => {
  return (
    <View
      className={`flex-row rounded-2xl mr-3 overflow-hidden`}
      style={{
        width: width * 0.9,
        height: height * 0.25,
      }}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1 p-4 justify-between"
      >
        <View className="flex-row justify-between items-start">
          <Text className={`text-lg text-[${textColor}]`}>Card ** {cardNumber.slice(-4)}</Text>
          <Image
            source={require('../../assets/images/bank-logo.png')}
            className="w-[69px] h-[96px]"
            resizeMode="contain"
          />
        </View>

        <View>
          <Text className={`text-2xl font-bold mb-1 text-[${textColor}]`}>
            {amount.toLocaleString('en-US')} PLN
          </Text>
          <Text className={`text-sm font-medium text-[${textColor}]`}>Card balance</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CardItem;
