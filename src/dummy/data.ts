import { faBuilding, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

import Globe from '../public/assets/globe.svg';
import AustraliaFlag from '../public/assets/flag-australia.svg';
import UsaFlag from '../public/assets/flags-usa.svg';
import EuropeFlag from '../public/assets/flag-europe.svg';

interface TPerformanceData {
  text: string;
  amount: number;
  growth: number;
  sign: string | null;
  flag: string
}

interface TAddNewData {
  text: string;
  icon: any;
  short: string;
}

export const DataPerCountries = [
  {
    country: 'All',
    icon: Globe,
    data: {
      assets: {
        totalAmount: 74769618,
        growthTotal: 0.1,
        sign: '+',
        grossAssets: 78789618,
        liabilities: 40020000
      },
    }
  },
  {
    country: 'Australia',
    icon: AustraliaFlag,
    data: {
      assets: {
        totalAmount: 49111254,
        growthTotal: 0.2,
        sign: '+',
        grossAssets: 52131254,
        liabilities: 30020000
      }
    }
  },
  {
    country: 'USA',
    icon: UsaFlag,
    data: {
      assets: {
        totalAmount: 25407631,
        growthTotal: 0.15,
        sign: '+',
        grossAssets: 26407631,
        liabilities: 1000000
      }
    }
  },
  {
    country: 'Europe',
    icon: EuropeFlag,
    data: {
      assets: {
        totalAmount: 250733,
        growthTotal: 0.32,
        sign: '+',
        grossAssets: 250733,
        liabilities: 0,
      }
    }
  }
]

export const PerformanceData: TPerformanceData[] =  [
  { text: 'Month', amount: 2012, growth: 0.5, sign: '+', flag: 'all' },
  { text: 'Quarter', amount: 4046, growth: 1.1, sign: '+', flag: 'all' },
  { text: 'FY 2024', amount: 7836, growth: 4.6, sign: '+', flag: 'all' },
  { text: 'Month', amount: 0, growth: 0, sign: null, flag: 'realised gains' },
  { text: 'Quarter', amount: 0, growth: 1, sign: null, flag: 'realised gains' },
  { text: 'FY 2024', amount: 9000, growth: 4.6, sign: '+', flag: 'realised gains' },
  { text: 'Month', amount: 2012, growth: 0.5, sign: '-', flag: 'unrealised gains' },
  { text: 'Quarter', amount: 4046, growth: 1.1, sign: '+', flag: 'unrealised gains' },
  { text: 'FY 2024', amount: 1164, growth: 4.6, sign: '-', flag: 'unrealised gains' },
];

export const GrossIncomeTabData: string[] = [
  'Day', 'Month', 'Quarter', 'FY 2024'
];

export const GrossIncomeData = [
  { flag: 'fy 2024', grossIncome: 9000, lessExpenses: 8950, netIncome: 50, growth: 4.4, sign: '+' },
  { flag: 'quarter', grossIncome: 0, lessExpenses: 0, netIncome: 0, growth: 4.4, sign: '+' },
]

export const addNew: TAddNewData[] = [
  { text: 'Add new asset', icon: faHandHoldingDollar, short: 'asset' },
  { text: 'Add new entity', icon: faBuilding, short: 'entity' },
]

export const suggestedQueries: string[] = [
  'Listed shares balances per month?', 'Liquid  assets per account?', 'What are current portfolio risks?'
]