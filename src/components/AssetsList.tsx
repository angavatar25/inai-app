import { faChevronRight, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { FlexBetween, FlexOnly, MarginCenter } from "../styles/general";
import formattedAmount from "../helper/moneyFormatter";
import { useEffect, useState } from "react";

interface TAssetsData {
  data: TAssetList[];
}

interface TAssetList {
  assetType: string;
  total: number;
  isOpen: boolean;
  bgColor: string;
  list: TAssetData[];
}

interface TAssetData {
  name: string;
  totalAssets: number;
  data: TAssets[];
}

interface TAssets {
  name: string;
  totalAsset: number;
}

const Tab = styled.div<{ $bgColor: string }>`
  background-color: ${p => p.$bgColor};
  border-radius: 99px;
  padding: 10px;
  color: #fff;
  margin-top: 10px;
`

const Tag = styled.div<{ $color?: string, $fontSize: number, $bgColor: string }>`
  background-color: ${p => p.$bgColor ? p.$bgColor : "#000"};
  color: ${p => p.$color ? p.$color : "#000"};
  font-size: ${p => p.$fontSize}px;
  padding: 4px 8px 4px 8px;
  border-radius: 99px;
  display: flex;
  gap: 5px;
`

const Header = styled.div`
  background-color: #F9FAFC;
  padding: 16px 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-bottom: 1px solid #CBD5E1;
  p {
    margin: 0;
    font-weight: 800;
  }
`

const AssetsList = (props: TAssetsData) => {
  const { data: listOfAssets } = props;

  const [tabs, setTabs] = useState(listOfAssets);

  const toggleTab = (currentTab: string) => {
    setTabs(tabs.map(asset =>
      asset.assetType === currentTab ? { ...asset, isOpen: !asset.isOpen } : asset
    ));
  };

  useEffect(() => {
    setTabs(listOfAssets);
  }, [listOfAssets])

  return (
    <>
      {tabs.map((asset) => (
        <div key={`tab-${asset.assetType}`}>
          <Tab
            $bgColor={asset.bgColor}
            onClick={() => toggleTab(asset.assetType)}
          >
            <FlexBetween>
              <FlexOnly $gap={10}>
                <MarginCenter>
                  <FontAwesomeIcon icon={asset.isOpen ? faPlus : faMinus}/>
                </MarginCenter>
                {asset.assetType}
              </FlexOnly>
              <Tag
                $color={asset.bgColor}
                $fontSize={12}
                $bgColor="#fff"
              >
                {formattedAmount(asset.total)}
              </Tag>
            </FlexBetween>
          </Tab>
          {asset.isOpen ? asset.list.map(list => (
            <div key={`key-${list.name}`}>
              <Header>
                <p>{list.name}</p>
                <p style={{ color: '#4F46E5' }}>{formattedAmount(list.totalAssets)}</p>
              </Header>
              {list.data.map((assetList) => (
                <FlexBetween
                  key={`list-assets-${assetList.name}`}
                  style={{ borderBottom: '1px solid #E2E8F0' }}
                >
                  <p style={{ maxWidth: '100px', width: '100%' }}>{assetList.name}</p>
                  <FlexOnly $gap={10}>
                    <MarginCenter>
                      <p>{formattedAmount(assetList.totalAsset)}</p>
                    </MarginCenter>
                    <MarginCenter>
                      <FontAwesomeIcon style={{ color: '#4F46E5' }} icon={faChevronRight}/>
                    </MarginCenter>
                  </FlexOnly>
                </FlexBetween>
              ))}
            </div>
          ))
          : null}
        </div>      
      ))}
    </>
  )
};

export default AssetsList;