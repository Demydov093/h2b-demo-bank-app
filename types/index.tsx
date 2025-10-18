export interface Card {
  id: string | number;
  amount: string | number;
  cardNumber: string;
  gradientColors?: readonly [string, string, ...string[]];
  textColor?: string;
  //   expirationDate: string;
  //   cvv: string | number;
}
