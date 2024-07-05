import { useEffect, useState } from "react";

import styled from "styled-components";

import GrossIncomeTab from "./GrossIncomeTab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import { FlexBetween, FlexOnly, MarginCenter, Span } from "../styles/general";

import CircleChevron from '../public/assets/circle-chevron-right.svg';
import formattedAmount from "../helper/moneyFormatter";
import { Title } from "../styles/dashboard";
import { DataPerCountries, GrossIncomeTabData } from "../dummy/data";
import { Sign } from "../enum/sign";


interface TAssetBalance {
  currentCountry: string;
};

interface TAssetBalanceData {
  netAssets: number;
  assetByDate: TAssetByDate[]
}

interface TAssetByDate {
  key: string,
  return: number,
  assetsGrowth: number,
  assetsGrowthSign: string,
  realisedGains: number,
  unrealisedGains: number,
  realisedGainSign: string,
  unrealisedGainSign: string,
}

const CardContainer = styled.div`
  background-color: #fff;
  padding: 16px;
  color: #1E293B;
  border-radius: 24px;
  border: 1px solid #E2E8F0;
`
const MoneyFontSize = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
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

const AssetsBalance = (props: TAssetBalance) => {
  const initialData = {
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
  };

  const assetByDateIntitalData = {
    key: 'quarter',
    return: 814603,
    assetsGrowth: 1.1,
    assetsGrowthSign: '+',
    realisedGains: 500000,
    unrealisedGains: 314603,
    realisedGainSign: '+',
    unrealisedGainSign: '+',
  };

  const [currentTab, setCurrentTab] = useState('fy 2024');
  const [incomeData, setIncomeData] = useState<TAssetBalanceData>(initialData);
  const [assetByDate, setAssetByDate] = useState<TAssetByDate>(assetByDateIntitalData);

  const onClickTab = (curr: string) => {
    setCurrentTab(curr);
  }

  useEffect(() => {
    const findCountry = DataPerCountries.find((country) => country.country === props.currentCountry);
    
    if (findCountry) {
      const { grossIncome } = findCountry.data;

      setIncomeData(grossIncome);

      const findByDate = grossIncome.assetByDate.find(income => income.key === currentTab);

      if (findByDate) {
        setAssetByDate(findByDate);
      }
    }
  }, [currentTab, props.currentCountry]);

  return (
    <CardContainer>
      <FlexBetween>
        <Title $fontSize={18} $color="#475569">Net asset</Title>
        <MarginCenter>
          <FontAwesomeIcon style={{ color: '#CBD5E1' }} icon={faEllipsisVertical}/>
        </MarginCenter>
      </FlexBetween>
      <FlexBetween $margin={'20px 0'}>
        <div>
          <MoneyFontSize>{formattedAmount(incomeData.netAssets)}</MoneyFontSize>
          <FlexOnly $gap={10}>
            <Title $fontSize={18}>
              Returns: <Span $color="#22C55E" $fontWeight={600}>
                {`${assetByDate.assetsGrowthSign}${formattedAmount(assetByDate.return)}`}
              </Span>
            </Title>
            <Tag
              $color="#fff"
              $fontSize={12}
              $bgColor="#22C55E"
            >
              <FontAwesomeIcon icon={faArrowTrendUp}/>
              {`${assetByDate.assetsGrowthSign}${assetByDate.assetsGrowth}`}
            </Tag>
          </FlexOnly>
        </div>
      </FlexBetween>
      <p>Realised gains: <Span $color="#15803D" $fontWeight={600}>{assetByDate.realisedGainSign}{formattedAmount(assetByDate.realisedGains)}</Span></p>
      <p>{assetByDate.unrealisedGainSign === '+' ? 'Unrealised gains:' : 'Unrealised loss'}
        <Span
          $color={assetByDate.unrealisedGainSign === '+' ? '#15803D' : '#BE123C'}
          $fontWeight={600}
        >
            {assetByDate.unrealisedGainSign}{formattedAmount(assetByDate.unrealisedGains)}
        </Span>
      </p>
      <GrossIncomeTab
        isActive={currentTab}
        onClickTab={onClickTab}
      />
    </CardContainer>
  )
}

export default AssetsBalance;