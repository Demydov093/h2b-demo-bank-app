export interface Card {
  id: string | number;
  amount: string | number;
  cardNumber: string;
  gradientColors?: readonly [string, string, ...string[]];
  textColor?: string;
  expirationDate: string;
  cvv: string | number;
}

export interface Transaction {
  id: string | number;
  title: string;
  amount: number | string;
  date: string;
}

export type CurrencyItem = {
  label: string;
  value: string;
};

export type DropdownItem = {
  label: string;
  value: string;
  cardNumber: string;
  gradientColors: readonly string[];
  textColor: string;
};

export type DepositState = {
  amount: string;
  currency: string;
  card: Card | null;
  setDeposit: (amount: string, currency: string, card: Card) => void;
};
