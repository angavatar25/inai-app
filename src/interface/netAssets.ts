export interface TAssetsData {
  data: TAssetList[];
}

export interface TAssetList {
  assetType: string;
  total: number;
  isOpen: boolean;
  bgColor: string;
  group: string;
  list: TAssetData[];
}

export interface TAssetData {
  name: string;
  totalAssets: number;
  growth: number;
  sign: string;
  entityTitle: string;
  data: TAssets[];
}

export interface TAssets {
  name: string;
  totalAsset: number;
  growth: number;
  sign: string;
}

export interface TPerformanceCategories {
  onClickCategory: (category: string) => void;
  filterData: string[];
  currentTab: string;
}