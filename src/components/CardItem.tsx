import { Card } from '@/types';
import { Animated, Dimensions, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { ClipboardIcon } from 'react-native-heroicons/outline';

import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('window');

const CardItem: React.FC<Card> = ({
  amount,
  cardNumber,
  gradientColors = ['#DBDFDF', '#A5A9AA'],
  textColor = 'white',
  expirationDate = '02/28',
  cvv = 888,
}) => {
  const [flipped, setFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    Animated.spring(flipAnim, {
      toValue: flipped ? 0 : 180,
      useNativeDriver: true,
      friction: 8,
      tension: 10,
    }).start();
    setFlipped(!flipped);
  };

  const copyToClipboard = async (name: string, text: string | number) => {
    await Clipboard.setStringAsync(String(text));
    Toast.show({
      type: 'success',
      text1: `${name} is copied to clipboard!`,
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={flipCard}>
      <View className="relative">
        <Animated.View
          className={`flex-row rounded-2xl mr-3 overflow-hidden`}
          style={{
            width: width * 0.9,
            height: height * 0.25,
            transform: [{ rotateY: frontInterpolate }],
            backfaceVisibility: 'hidden',
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
        </Animated.View>

        <Animated.View
          style={{
            transform: [{ rotateY: backInterpolate }],
            position: 'absolute',
            top: 0,
            left: 0,
            width: width * 0.9,
            height: height * 0.25,
            borderRadius: 12,
            backfaceVisibility: 'hidden',
            overflow: 'hidden',
          }}
          pointerEvents={flipped ? 'auto' : 'none'}
        >
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1, padding: 16, justifyContent: 'space-between' }}
          >
            <View className="flex-row justify-between items-start">
              <Text className="text-lg" style={{ color: textColor }}>
                Card ** {cardNumber.slice(-4)}
              </Text>
              <Image
                source={require('../../assets/images/bank-logo.png')}
                className="w-[69px] h-[96px]"
                resizeMode="contain"
              />
            </View>

            <View className="space-y-2">
              <View className="flex-col items-start space-x-2">
                <Text className="text-base font-normal" style={{ color: textColor }}>
                  Card number:
                </Text>
                <Pressable
                  onPress={() => copyToClipboard('Card Number', cardNumber)}
                  className="flex-row items-center"
                >
                  <Text className="text-xl font-semibold" style={{ color: textColor }}>
                    {cardNumber}
                  </Text>
                  <ClipboardIcon size={20} color={textColor} className="ml-2" />
                </Pressable>
              </View>

              <View className="flex-row gap-5">
                <View>
                  <Text className="text-base" style={{ color: textColor }}>
                    Expiration date
                  </Text>
                  <Text className="text-xl font-semibold" style={{ color: textColor }}>
                    {expirationDate}
                  </Text>
                </View>

                <View className="flex-col items-start space-x-2">
                  <Text className="text-base" style={{ color: textColor }}>
                    CVV
                  </Text>
                  <Pressable
                    onPress={() => copyToClipboard('CVV', cvv)}
                    className="flex-row items-center"
                  >
                    <Text className="text-xl font-semibold" style={{ color: textColor }}>
                      {cvv}
                    </Text>
                    <ClipboardIcon size={20} color={textColor} className="ml-2" />
                  </Pressable>
                </View>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
