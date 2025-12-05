export type MovementType = 'BUY' | 'SELL';

export interface Movimento {
  id: number;
  investmentId: number;
  type: MovementType;
  quantity: number;
  pricePerUnit: number;
  dateTime: string;
  note?: string;
  totalAmount?: number;
}
