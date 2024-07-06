export interface TAssetBalance {
  currentCountry: string;
};

export interface TAssetBalanceData {
  netAssets: number;
  assetByDate: TAssetByDate[]
}

export interface TAssetByDate {
  key: string,
  return: number,
  assetsGrowth: number,
  assetsGrowthSign: string,
  realisedGains: number,
  unrealisedGains: number,
  realisedGainSign: string,
  unrealisedGainSign: string,
}

export interface TIncomeData {
  flag: string;
  grossIncome: number;
  lessExpenses: number;
  netIncome: number;
  growth: number;
  sign: string;
}

export interface TGrossIncome {
  data: TIncomeData[];
};