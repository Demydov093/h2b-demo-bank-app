import { Card } from '@/types';
import { act } from '@testing-library/react-native';
import { useDepositStore } from '../depositeStore';

describe('useDepositStore', () => {
  beforeEach(() => {
    useDepositStore.setState({ amount: '', currency: 'PLN', card: null });
  });

  test('setDeposit updates state correctly', () => {
    const card: Card = {
      id: 1,
      amount: 100,
      cardNumber: '1234 5678 9012 3456',
      expirationDate: '12/26',
      cvv: '123',
    };

    act(() => {
      useDepositStore.getState().setDeposit('200', 'USD', card);
    });

    const state = useDepositStore.getState();
    expect(state.amount).toBe('200');
    expect(state.currency).toBe('USD');
    expect(state.card).toEqual(card);
  });
});
