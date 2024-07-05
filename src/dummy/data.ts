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
        liabilities: 40020000,
      },
      grossIncome: {
        netAssets: 74769618,
        assetByDate: [
          {
            key: 'quarter',
            return: 814603,
            assetsGrowth: 1.1,
            assetsGrowthSign: '+',
            realisedGains: 500000,
            unrealisedGains: 314603,
            realisedGainSign: '+',
            unrealisedGainSign: '+',
          },
          {
            key: 'fy 2024',
            return: 3285372,
            assetsGrowth: 1.1,
            assetsGrowthSign: '+',
            realisedGains: 1219000,
            unrealisedGains: 2066372,
            realisedGainSign: '+',
            unrealisedGainSign: '+',
          },
        ],
      },
      listOfAssets: [
        {
          assetType: 'Bank accounts',
          total: 8903000,
          isOpen: true,
          bgColor: '#01B7D4',
          list: [
            {
              name: 'NAB',
              totalAssets: 6747000,
              data: [
                {
                  name: 'Morgan Supperannuation Fund',
                  totalAsset: 1128000
                }
              ]
            }
          ]
        },
        {
          assetType: 'Managed funds',
          total: 8903000,
          isOpen: true,
          bgColor: '#FA7315',
          list: [
            {
              name: 'NAB',
              totalAssets: 6747000,
              data: [
                {
                  name: 'Morgan Supperannuation Fund',
                  totalAsset: 1128000
                }
              ]
            }
          ]
        }
      ]
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
        liabilities: 30020000,
      },
      grossIncome: {
        netAssets: 49111254,
        assetByDate: [
          {
            key: 'quarter',
            return: 551294,
            assetsGrowth: 1.1,
            assetsGrowthSign: '+',
            realisedGains: 500000,
            unrealisedGains: 51294,
            realisedGainSign: '+',
            unrealisedGainSign: '+',
          },
          {
            key: 'fy 2024',
            return: 2380010,
            assetsGrowth: 1.1,
            assetsGrowthSign: '+',
            realisedGains: 1010000,
            unrealisedGains: 1370010,
            realisedGainSign: '+',
            unrealisedGainSign: '+',
          },
        ],
      },
      listOfAssets: [
        {
          assetType: 'Bank accounts',
          total: 8903000,
          isOpen: true,
          bgColor: '#01B7D4',
          list: [
            {
              name: 'NAB',
              totalAssets: 6747000,
              data: [
                {
                  name: 'Morgan Supperannuation Fund',
                  totalAsset: 1128000
                }
              ]
            },
            {
              name: 'ANZ',
              totalAssets: 812000,
              data: [
                {
                  name: 'Morgan Global Ventures Inc. ATF  Morgan Fam...',
                  totalAsset: 347000
                },
                {
                  name: 'T&E Morgan (Personal)',
                  totalAsset: 482000
                },
              ]
            },
            {
              name: 'Citibank',
              totalAssets: 248000,
              data: [
                {
                  name: 'J&W Morgan (Personal)',
                  totalAsset: 248000
                },
              ]
            }
          ]
        },
        {
          assetType: 'Managed funds',
          total: 12427264,
          isOpen: true,
          bgColor: '#FA7315',
          list: [
            {
              name: 'Morgan Management',
              totalAssets: 6753635,
              data: [
                {
                  name: 'Morgan Supperannuation Fund',
                  totalAsset: 1128000
                }
              ]
            }
          ]
        }
      ]
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
        liabilities: 1000000,
      },
      grossIncome: {
        netAssets: 25407631,
        assetByDate: [
          {
            key: 'quarter',
            return: 259263,
            assetsGrowth: 3.7,
            assetsGrowthSign: '+',
            realisedGains: 0,
            unrealisedGains: 259263,
            realisedGainSign: '+',
            unrealisedGainSign: '+',
          },
          {
            key: 'fy 2024',
            return: 897526,
            assetsGrowth: 3.7,
            assetsGrowthSign: '+',
            realisedGains: 200000,
            unrealisedGains: 617526,
            realisedGainSign: '+',
            unrealisedGainSign: '+',
          },
        ],
      },
      listOfAssets: [
        {
          assetType: 'Bank accounts',
          total: 460000,
          isOpen: true,
          bgColor: '#01B7D4',
          list: [
            {
              name: 'Citibank',
              totalAssets: 2480000,
              data: [
                {
                  name: 'J&W Morgan (Personal)',
                  totalAsset: 248999
                },
              ]
            },
            {
              name: 'Bank of America',
              totalAssets: 212000,
              data: [
                {
                  name: 'J&W Morgan (Personal)',
                  totalAsset: 212000
                },
              ]
            }
          ]
        },
        {
          assetType: 'Listed shares',
          total: 4115942,
          isOpen: true,
          bgColor: '#FCD34D',
          list: [
            {
              name: 'NYSY',
              totalAssets: 4115942,
              data: [
                {
                  name: '(NYSE:FN) Fabrinet',
                  totalAsset: 1214594
                },
                {
                  name: '(NYSE:IOT) Samsara Inc.',
                  totalAsset: 22385
                },
                {
                  name: '(NYSE:ALK) Alaska Air Group, Inc.',
                  totalAsset: 2878963
                },
              ]
            }
          ]
        }
      ]
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
      },
      grossIncome: {
        netAssets: 250733,
        assetByDate: [
          {
            key: 'quarter',
            return: 4046,
            assetsGrowth: 1.6,
            assetsGrowthSign: '+',
            realisedGains: 0,
            unrealisedGains: 4046,
            realisedGainSign: '+',
            unrealisedGainSign: '+',
          },
          {
            key: 'fy 2024',
            return: 897526,
            assetsGrowth: 3.7,
            assetsGrowthSign: '+',
            realisedGains: 200000,
            unrealisedGains: 617526,
            realisedGainSign: '+',
            unrealisedGainSign: '+',
          },
        ],
      },
      listOfAssets: [
        {
          assetType: 'Private equity',
          total: 250733,
          isOpen: true,
          bgColor: '#FDBA74',
          list: [
            {
              name: 'Riverside',
              totalAssets: 250733,
              data: [
                {
                  name: 'Riberside Europe Fund',
                  totalAsset: 250733
                }
              ]
            }
          ]
        },
      ]
    }
  }
];

export const AssetsBalanceData = [
  {
    country: 'all'
  },
  {
    country: 'europe'
  },
  {
    country: 'all'
  },
  {
    country: 'all'
  },
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

export const filterGainsData: string[] = ['all', 'realised gains', 'unrealised gains'];

export const filterAssetsData: string[] = ['assets class', 'entity', 'broker'];

export const suggestedQueries: string[] = [
  'Listed shares balances per month?', 'Liquid  assets per account?', 'What are current portfolio risks?'
]