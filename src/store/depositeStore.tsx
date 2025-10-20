import { DepositState } from '@/types';
import { create } from 'zustand';

export const useDepositStore = create<DepositState>((set) => ({
  amount: '',
  currency: 'PLN',
  card: null,
  setDeposit: (amount, currency, card) => set({ amount, currency, card }),
}));
