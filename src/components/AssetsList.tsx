import { faChevronRight, faFolderOpen, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { FlexBetween, FlexOnly, Header, MarginCenter, Tag } from "../styles/general";
import formattedAmount from "../helper/moneyFormatter";
import { useEffect, useState } from "react";
import { Title } from "../styles/dashboard";
import { TAssetsData } from "../interface/netAssets";
import { Tab } from "../styles/components/Tab";

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
      {listOfAssets.length > 0 ? tabs.map((asset) => (
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
          {asset.isOpen && asset.entityTitle ? <Title $fontSize={20} $color="#475569" $fontWeight={600}>{asset.entityTitle}</Title> : null}
          {asset.isOpen ? asset.list.map(list => (
            <div key={`key-${list.name}`}>
              <Header>
                <Title $fontSize={14} $color="#000">{list.name}</Title>
                <FlexOnly $gap={5}>
                  <MarginCenter>
                    <Title $fontSize={14} $color="#4F46E5">{formattedAmount(list.totalAssets)}</Title>
                  </MarginCenter>
                  {list.sign ? (
                    <Tag
                      $fontSize={12}
                      $bgColor={list.sign === '+' ? '#DCFCE7' : '#FFE4E7'}
                      $color={list.sign === '+' ? '#15803D' : '#BE123C'}
                    >
                      {`${list.sign}${list.growth}%`}
                    </Tag>) : null
                  }
                </FlexOnly>
              </Header>
              {list.data.map((assetList) => (
                <FlexBetween
                  key={`list-assets-${assetList.name}`}
                  style={{ borderBottom: '1px solid #E2E8F0', padding: '10px' }}
                >
                  <p style={{ maxWidth: '100px', width: '100%', fontSize: '14px' }}>{assetList.name}</p>
                  <FlexOnly $gap={10}>
                    <MarginCenter style={{ textAlign: 'right'}}>
                      <p style={{ margin: 0, marginBottom: '10px', fontWeight: 700, fontSize: '14px' }}>{formattedAmount(assetList.totalAsset)}</p>
                      {assetList.growth ? (
                        <p style={{ color: assetList.sign === '+' ? '#15803D' : '#BE123C', margin: 0, fontWeight: 700, fontSize: '12px' }}>
                          {`${assetList.sign}${assetList.growth}%`}
                        </p>
                      ) : null}
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
      )) : (
        <div style={{ textAlign: 'center'}}>
          <FontAwesomeIcon icon={faFolderOpen} size="4x" style={{ color: '#BE123C', margin: '20px 0' }}/>
          <Title $fontSize={24}>Assets not available</Title>
        </div>
      )}
    </>
  )
};

export default AssetsList;