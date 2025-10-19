import { Card, DropdownItem } from '@/types';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Dropdown as RNEDropdown } from 'react-native-element-dropdown';
import SelectedCardView from './_SelectedCardView';

type CardSelectorProps = {
  items: DropdownItem[];
  selectedCard: string;
  setSelectedCard: (val: string) => void;
  selectedCardObj?: Card;
  loading: boolean;
};

const CardSelector: React.FC<CardSelectorProps> = ({
  items,
  selectedCard,
  setSelectedCard,
  selectedCardObj,
  loading,
}) => {
  const renderItem = React.useCallback(
    (item: DropdownItem) => (
      <View
        className="flex-row gap-3 px-8 py-4 border-b-2 border-gray-400"
        style={{ backgroundColor: item.gradientColors[0] }}
      >
        <Image
          source={require('../../../assets/images/bank-logo.png')}
          className="w-[17px] h-[24px] rounded-xl"
          resizeMode="contain"
        />
        <Text className="text-base">{item.label}</Text>
      </View>
    ),
    [],
  );

  const renderLeftIcon = React.useCallback(
    () => (selectedCardObj ? <SelectedCardView selectedCardObj={selectedCardObj} /> : null),
    [selectedCardObj],
  );

  return (
    <>
      <Text className="font-inter mb-2">Select card to deposit</Text>
      <RNEDropdown
        data={items}
        labelField=""
        valueField="value"
        value={selectedCard}
        onChange={(item) => setSelectedCard(item.value)}
        disable={loading}
        renderItem={renderItem}
        renderLeftIcon={renderLeftIcon}
        renderRightIcon={() => null}
        style={{
          borderWidth: 1,
          borderColor: '#d1d5db',
          borderRadius: 8,
          paddingVertical: 0,
          height: 90,
        }}
        containerStyle={{ marginBottom: 20 }}
      />
    </>
  );
};

export default CardSelector;
