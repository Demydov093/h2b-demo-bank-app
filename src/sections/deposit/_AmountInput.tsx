import { CurrencyItem } from '@/types';
import React, { useMemo } from 'react';
import { Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const currencies = ['EUR', 'USD', 'PLN'];

type AmountInputProps = {
  amount: string;
  setAmount: (val: string) => void;
  selectedCurrency: string;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
  openCurrency: boolean;
  setOpenCurrency: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

const AmountInput: React.FC<AmountInputProps> = ({
  amount,
  setAmount,
  selectedCurrency,
  setSelectedCurrency,
  openCurrency,
  setOpenCurrency,
  loading,
}) => {
  const currencyItems: CurrencyItem[] = useMemo(
    () => currencies.map((c) => ({ label: c, value: c })),
    [],
  );

  return (
    <View className="flex-row items-center justify-center mt-20 mb-16">
      <View className="flex-row items-center">
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="0.00"
          keyboardType="numeric"
          className="font-bold text-5xl text-right"
          editable={!loading}
        />
        <View className="flex h-[50px] justify-center">
          <Text className="text-4xl font-medium leading-tight">{selectedCurrency}</Text>
        </View>
      </View>

      <View className="flex ml-2 h-[50px] justify-center">
        <DropDownPicker
          open={openCurrency}
          setOpen={setOpenCurrency}
          value={selectedCurrency}
          setValue={setSelectedCurrency}
          items={currencyItems}
          style={{
            borderWidth: 0,
            backgroundColor: 'transparent',
            height: 50,
          }}
          containerStyle={{ width: 85 }}
          dropDownContainerStyle={{
            borderWidth: 1,
            borderColor: '#d1d5db',
            borderRadius: 8,
          }}
          zIndex={1000}
          zIndexInverse={3000}
          disabled={loading}
        />
      </View>
    </View>
  );
};

export default AmountInput;
