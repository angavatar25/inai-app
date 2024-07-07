import { faBuilding, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

import { v4 as uuidv4 } from 'uuid';

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
    country: 'all',
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
          group: 'assets class',
          list: [
            {
              entityTitle: '',
              name: 'NAB',
              id: uuidv4(),
              totalAssets: 6747000,
              growth: 0,
              sign: '',
              data: [
                {
                  name: 'Morgan Supperannuation Fund',
                  totalAsset: 1128000,
                  id: uuidv4(),
                  growth: 0,
                  sign: '',
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
          group: 'assets class',
          list: [
            {
              entityTitle: '',
              name: 'NAB',
              totalAssets: 6747000,
              id: uuidv4(),
              growth: 0,
              sign: '',
              data: [
                {
                  name: 'Morgan Supperannuation Fund',
                  id: uuidv4(),
                  totalAsset: 1128000,
                  growth: 0,
                  sign: '',
                }
              ]
            }
          ]
        },
        {
          assetType: 'Morgan Supperannuation',
          total: 4115942,
          isOpen: true,
          bgColor: '#64748B',
          group: 'entity',
          list: [
            {
              entityTitle: 'Listed shares',
              name: 'NYSY',
              totalAssets: 4115942,
              id: uuidv4(),
              growth: 2.5,
              sign: '-',
              data: [
                {
                  name: '(NYSE:FN) Fabrinet',
                  totalAsset: 1214594,
                  id: uuidv4(),
                  growth: 7.6,
                  sign: '+',
                },
                {
                  name: '(NYSE:IOT) Samsara Inc.',
                  id: uuidv4(),
                  totalAsset: 22385,
                  growth: 5.2,
                  sign: '+',
                },
                {
                  name: '(NYSE:ALK) Alaska Air Group, Inc.',
                  id: uuidv4(),
                  totalAsset: 2878963,
                  growth: 6.2,
                  sign: '-',
                },
              ]
            },
          ]
        },
        {
          assetType: 'T&E Morgan Pty ATF',
          total: 929340,
          isOpen: true,
          bgColor: '#64748B',
          group: 'entity',
          list: [
            {
              entityTitle: 'Private equity',
              name: 'Global ventures 2 Unit',
              id: uuidv4(),
              totalAssets: 929340,
              growth: 21.7,
              sign: '+',
              data: [
                {
                  name: 'TravelPlan',
                  id: uuidv4(),
                  totalAsset: 929340,
                  growth: 21.7,
                  sign: '+',
                },
              ]
            },
          ]
        },
        {
          assetType: 'Morgan Global Ventures inc.',
          total: 3967326,
          isOpen: true,
          bgColor: '#64748B',
          group: 'entity',
          list: [
            {
              entityTitle: 'Private equity',
              name: 'Global ventures 2 Unit',
              id: uuidv4(),
              totalAssets: 1474171,
              growth: 21.7,
              sign: '+',
              data: [
                {
                  name: 'CodeAI',
                  id: uuidv4(),
                  totalAsset: 1474171,
                  growth: 41,
                  sign: '+',
                },
              ]
            },
          ]
        },
        {
          assetType: 'Morgan Global Venture Inc',
          total: 2493155,
          isOpen: true,
          bgColor: '#64748B',
          group: 'entity',
          list: [
            {
              entityTitle: 'Private property',
              name: 'Global ventures 2 Unit',
              id: uuidv4(),
              totalAssets: 1474171,
              growth: 21.7,
              sign: '+',
              data: [
                {
                  name: 'CodeAI',
                  totalAsset: 1474171,
                  id: uuidv4(),
                  growth: 41,
                  sign: '+',
                },
              ]
            },
            {
              entityTitle: 'Private equity',
              name: 'Global ventures 2 Unit',
              id: uuidv4(),
              totalAssets: 1474171,
              growth: 21.7,
              sign: '+',
              data: [
                {
                  name: 'CodeAI',
                  totalAsset: 1474171,
                  id: uuidv4(),
                  growth: 41,
                  sign: '+',
                },
              ]
            },
          ]
        },
      ]
    }
  },
  {
    country: 'australia',
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
          group: 'assets class',
          list: [
            {
              entityTitle: '',
              name: 'NAB',
              id :'nab-bank-accounts-australia',
              totalAssets: 6747000,
              growth: 0,
              sign: '',
              data: [
                {
                  name: 'Morgan Supperannuation Fund',
                  id: uuidv4(),
                  totalAsset: 1128000,
                  growth: 0,
                  sign: '',
                }
              ]
            },
            {
              entityTitle: '',
              name: 'ANZ',
              id: uuidv4(),
              totalAssets: 812000,
              growth: 0,
              sign: '',
              data: [
                {
                  name: 'Morgan Global Ventures Inc. ATF  Morgan Fam...',
                  id: uuidv4(),
                  totalAsset: 347000,
                  growth: 0,
                  sign: '',
                },
                {
                  name: 'T&E Morgan (Personal)',
                  id: uuidv4(),
                  totalAsset: 482000,
                  growth: 0,
                  sign: '',
                },
              ]
            },
            {
              entityTitle: '',
              name: 'Citibank',
              id: uuidv4(),
              totalAssets: 248000,
              growth: 0,
              sign: '',
              data: [
                {
                  name: 'J&W Morgan (Personal)',
                  id: uuidv4(),
                  totalAsset: 248000,
                  growth: 0,
                  sign: '',
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
          group: 'assets class',
          list: [
            {
              entityTitle: '',
              name: 'Morgan Management',
              totalAssets: 6753635,
              id: uuidv4(),
              growth: 4.5,
              sign: '+',
              data: [
                {
                  name: 'Regal Resources Long-short Fund',
                  id: uuidv4(),
                  totalAsset: 1999110,
                  growth: 3.8,
                  sign: '+',
                },
                {
                  name: 'Regal Partners Private Fund',
                  id: uuidv4(),
                  totalAsset: 3442286,
                  growth: 3.8,
                  sign: '+',
                },
                {
                  name: 'Regal Resources High Conviction Fund',
                  id: uuidv4(),
                  totalAsset: 964681,
                  growth: 9,
                  sign: '+',
                },
                {
                  name: 'Cash at bank',
                  id: uuidv4(),
                  totalAsset: 54099,
                  growth: 0,
                  sign: '',
                },
              ]
            },
            {
              entityTitle: '',
              name: 'PM Capital',
              id: uuidv4(),
              totalAssets: 3349366,
              growth: 0.1,
              sign: '+',
              data: [
                {
                  name: 'PM Capital',
                  id: uuidv4(),
                  totalAsset: 3349366,
                  growth: 0.1,
                  sign: '+',
                },
              ]
            },
            {
              entityTitle: '',
              name: 'Australian Eagle',
              id: uuidv4(),
              totalAssets: 1465108,
              growth: 0.5,
              sign: '+',
              data: [
                {
                  name: 'Australian Eagle Trust',
                  id: uuidv4(),
                  totalAsset: 732554,
                  growth: 0.5,
                  sign: '+',
                },
                {
                  name: 'Australian Eagle Equity Strategy',
                  id: uuidv4(),
                  totalAsset: 732554,
                  growth: 0.5,
                  sign: '+',
                },
              ]
            },
            {
              name: 'Regal Management Fund',
              id: uuidv4(),
              totalAssets: 859155,
              growth: 12.2,
              sign: '+',
              entityTitle: '',
              data: [
                {
                  name: 'Regal Management Fund',
                  id: uuidv4(),
                  totalAsset: 859155,
                  growth: 12.2,
                  sign: '+',
                },
              ]
            },
          ]
        },
        {
          assetType: 'Morgan Supperannuation',
          total: 4115942,
          isOpen: true,
          bgColor: '#64748B',
          group: 'entity',
          list: [
            {
              entityTitle: 'Listed shares',
              name: 'NYSY',
              id: uuidv4(),
              totalAssets: 4115942,
              growth: 2.5,
              sign: '-',
              data: [
                {
                  name: '(NYSE:FN) Fabrinet',
                  id: uuidv4(),
                  totalAsset: 1214594,
                  growth: 7.6,
                  sign: '+',
                },
                {
                  name: '(NYSE:IOT) Samsara Inc.',
                  id: uuidv4(),
                  totalAsset: 22385,
                  growth: 5.2,
                  sign: '+',
                },
                {
                  name: '(NYSE:ALK) Alaska Air Group, Inc.',
                  id: uuidv4(),
                  totalAsset: 2878963,
                  growth: 6.2,
                  sign: '-',
                },
              ]
            },
          ]
        },
        {
          assetType: 'T&E Morgan Pty ATF',
          total: 929340,
          isOpen: true,
          bgColor: '#64748B',
          group: 'entity',
          list: [
            {
              entityTitle: 'Private equity',
              name: 'Global ventures 2 Unit',
              id: uuidv4(),
              totalAssets: 929340,
              growth: 21.7,
              sign: '+',
              data: [
                {
                  name: 'TravelPlan',
                  id: uuidv4(),
                  totalAsset: 929340,
                  growth: 21.7,
                  sign: '+',
                },
              ]
            },
          ]
        },
      ]
    }
  },
  {
    country: 'usa',
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
          group: 'assets class',
          list: [
            {
              entityTitle: '',
              name: 'Citibank',
              id: uuidv4(),
              totalAssets: 2480000,
              growth: 0,
              sign: '',
              data: [
                {
                  name: 'J&W Morgan (Personal)',
                  id: uuidv4(),
                  totalAsset: 248999,
                  growth: 0,
                  sign: '',
                },
              ]
            },
            {
              entityTitle: '',
              name: 'Bank of America',
              id: uuidv4(),
              totalAssets: 212000,
              growth: 0,
              sign: '',
              data: [
                {
                  name: 'J&W Morgan (Personal)',
                  id: uuidv4(),
                  totalAsset: 212000,
                  growth: 0,
                  sign: '',
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
          group: 'assets class',
          list: [
            {
              entityTitle: '',
              name: 'NYSY',
              id: uuidv4(),
              totalAssets: 4115942,
              growth: 0.43,
              sign: '-',
              data: [
                {
                  name: '(NYSE:FN) Fabrinet',
                  id: uuidv4(),
                  totalAsset: 1214594,
                  growth: 2.8,
                  sign: '+',
                },
                {
                  name: '(NYSE:IOT) Samsara Inc.',
                  id: uuidv4(),
                  totalAsset: 22385,
                  growth: 4.2,
                  sign: '+',
                },
                {
                  name: '(NYSE:ALK) Alaska Air Group, Inc.',
                  id: uuidv4(),
                  totalAsset: 2878963,
                  growth: 1.7,
                  sign: '-',
                },
              ]
            }
          ]
        },
        {
          assetType: 'Morgan Supperannuation',
          total: 4115942,
          isOpen: true,
          bgColor: '#64748B',
          group: 'entity',
          list: [
            {
              entityTitle: 'Listed shares',
              name: 'NYSY',
              id: uuidv4(),
              totalAssets: 4115942,
              growth: 2.5,
              sign: '-',
              data: [
                {
                  name: '(NYSE:FN) Fabrinet',
                  id: uuidv4(),
                  totalAsset: 1214594,
                  growth: 7.6,
                  sign: '+',
                },
                {
                  name: '(NYSE:IOT) Samsara Inc.',
                  id: uuidv4(),
                  totalAsset: 22385,
                  growth: 5.2,
                  sign: '+',
                },
                {
                  name: '(NYSE:ALK) Alaska Air Group, Inc.',
                  id: uuidv4(),
                  totalAsset: 2878963,
                  growth: 6.2,
                  sign: '-',
                },
              ]
            },
          ]
        }
      ]
    }
  },
  {
    country: 'europe',
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
            realisedGains: 9000,
            unrealisedGains: 1164,
            realisedGainSign: '+',
            unrealisedGainSign: '-',
          },
        ],
      },
      listOfAssets: [
        {
          assetType: 'Private equity',
          total: 250733,
          isOpen: true,
          bgColor: '#FDBA74',
          group: 'assets class',
          list: [
            {
              entityTitle: '',
              name: 'Riverside',
              id: uuidv4(),
              totalAssets: 250733,
              growth: 1.6,
              sign: '+',
              data: [
                {
                  name: 'Riberside Europe Fund',
                  id: uuidv4(),
                  totalAsset: 250733,
                  growth: 1.6,
                  sign: '+',
                },
              ]
            },
          ]
        },
      ]
    }
  }
];

export const PerformanceData: TPerformanceData[] =  [
  { text: 'Month', amount: 2012, growth: 0.5, sign: '+', flag: 'all' },
  { text: 'Quarter', amount: 4046, growth: 1.1, sign: '+', flag: 'all' },
  { text: 'FY 2024', amount: 7836, growth: 4.6, sign: '+', flag: 'all' },
  { text: 'Month', amount: 0, growth: 0, sign: '', flag: 'realised gains' },
  { text: 'Quarter', amount: 0, growth: 1, sign: '', flag: 'realised gains' },
  { text: 'FY 2024', amount: 9000, growth: 4.6, sign: '+', flag: 'realised gains' },
  { text: 'Month', amount: 2012, growth: 0.5, sign: '-', flag: 'unrealised gains' },
  { text: 'Quarter', amount: 4046, growth: 1.1, sign: '+', flag: 'unrealised gains' },
  { text: 'FY 2024', amount: 1164, growth: 4.6, sign: '-', flag: 'unrealised gains' },
];

export const GrossIncomeTabData: string[] = [
  'Day', 'Month', 'Quarter', 'FY 2024'
];

export const GrossIncomeData = [
  { flag: 'fy 2024', grossIncome: 1210000, lessExpenses: 608950, netIncome: 601050, growth: 4.4, sign: '-' },
  { flag: 'quarter', grossIncome: 500000, lessExpenses: 300000, netIncome: 200000, growth: 4.4, sign: '-' },
]

export const addNew: TAddNewData[] = [
  { text: 'Add new asset', icon: faHandHoldingDollar, short: 'asset' },
  { text: 'Add new entity', icon: faBuilding, short: 'entity' },
]

export const filterGainsData: string[] = ['all', 'realised gains', 'unrealised gains'];

export const filterAssetsData: string[] = ['assets class', 'entity', 'broker'];

export const suggestedQueries: string[] = [
  'Listed shares balances per month?', 'Liquid  assets per account?', 'What are current portfolio risks?'
];

export const countries = [
  { text: 'All', icon: Globe },
  { text: 'Australia', icon: AustraliaFlag },
  { text: 'USA', icon: UsaFlag },
  { text: 'Europe', icon: EuropeFlag },
];