import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/src/components/Button';
import AmountInput from '@/src/sections/deposit/_AmountInput';
import CardSelector from '@/src/sections/deposit/_CardSelector';
import Header from '@/src/sections/deposit/_Header';
import { Card, DropdownItem } from '@/types';
import { cardsData } from '@/utils';

import { StatusBar } from 'expo-status-bar';

const TransferScreen: React.FC = () => {
  const router = useRouter();

  const [amount, setAmount] = useState<string>('100');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('PLN');
  const [openCurrency, setOpenCurrency] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string>(cardsData[0].id);
  const [loading, setLoading] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const items: DropdownItem[] = useMemo(
    () =>
      cardsData.map((c) => ({
        label: `*** ${c.cardNumber.slice(-4)}`,
        value: c.id,
        cardNumber: c.cardNumber,
        gradientColors: c.gradientColors,
        textColor: c.textColor,
      })),
    [],
  );

  const selectedCardObj = useMemo<Card | undefined>(
    () => cardsData.find((c) => c.id === selectedCard),
    [selectedCard],
  );

  const handleDeposit = () => {
    if (!selectedCardObj) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/deposit/success');
    }, 3000);
  };

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'ios' ? 0 : 30,
      }}
      edges={['bottom', 'left', 'right']}
    >
      <StatusBar style="dark" backgroundColor="white" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <Header loading={loading} onBack={() => router.back()} />

          <AmountInput
            amount={amount}
            setAmount={setAmount}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            openCurrency={openCurrency}
            setOpenCurrency={setOpenCurrency}
            loading={loading}
          />

          <CardSelector
            items={items}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            selectedCardObj={selectedCardObj}
            loading={loading}
          />

          {/* Sticky button */}
          <View
            style={[
              styles.stickyButton,
              { bottom: keyboardHeight > 0 && Platform.OS === 'ios' ? 60 : 12 },
            ]}
          >
            <Button
              text={loading ? '' : 'Deposit'}
              height={48}
              className="w-full flex-row items-center justify-center"
              onPress={handleDeposit}
              disabled={loading}
              loading={loading}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stickyButton: {
    position: 'absolute',
    left: 8,
    right: 8,
  },
});

export default TransferScreen;
