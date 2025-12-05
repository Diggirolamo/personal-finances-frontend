import { AssetClass } from './asset.model';

export interface Investimento {
  id: number;
  userId: number;
  ticker: string;
  name: string;
  averagePrice?: number;
  totalQuantity?: number;
  assetClass: AssetClass;
}
