import { Card } from "@/types";
import React from "react";
import { Image, Text, View } from "react-native";

type Props = {
  selectedCardObj: Card;
};

const SelectedCardView: React.FC<Props> = ({ selectedCardObj }) => {
  return (
    <View className="flex-row items-center bg-white rounded-xl shadow px-8 py-6 w-full">
      <View
        className="p-1 mr-4 rounded-md"
        style={{
          backgroundColor: selectedCardObj.gradientColors?.[0] ?? "#ccc",
        }}
      >
        <Image
          source={require("../../../assets/images/bank-logo.png")}
          className="w-[17px] h-[24px]"
          resizeMode="contain"
        />
      </View>

      <View>
        <Text className="text-lg font-bold">Classic card</Text>
        <Text className="text-gray-500 text-sm">
          *** {selectedCardObj.cardNumber?.slice(-4) ?? "----"}
        </Text>
      </View>
    </View>
  );
};

export default SelectedCardView;
