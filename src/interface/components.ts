import { ReactNode } from "react";

export interface TButton {
  bgColor: string;
  color: string;
  borderColor?: string;
  fontWeight?: number;
  lineHeight?: number;
  shadow?: boolean;
  onClickButton?: () => void;
  fontSize: number;
  children: ReactNode;
  style?: any;
}

export interface TCategories {
  onClickCategory: (data: string) => void;
}

export interface TGrossIncomeTab {
  isActive: string;
  onClickTab: (string: string) => void;
}

export interface TNetAssetsData {
  totalAmount: number;
  growthTotal: number;
  sign: string;
  grossAssets: number;
  liabilities: number;
}

export interface TNetAssets {
  currentCountry: string;
}

export interface TPerformanceData {
  text: string;
  amount: number;
  growth: number;
  sign: string | null;
  flag: string;
}

export interface TData {
  currentPortfolio: string;
  data: TPerformanceData[];
}