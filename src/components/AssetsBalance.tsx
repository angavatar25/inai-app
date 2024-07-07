import { useEffect, useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import GrossIncomeTab from "./GrossIncomeTab";

import formattedAmount from "../helper/moneyFormatter";

import { FlexBetween, FlexOnly, MarginCenter, Span, Tag } from "../styles/general";
import { Title } from "../styles/dashboard";
import { CardContainer, MoneyFontSize } from "../styles/components/Card";

import { DataPerCountries } from "../dummy/data";
import { assetByDateEmpty, assetByDateInitialData, initialData } from "../dummy/initialData";

import { TAssetBalance, TAssetBalanceData, TAssetByDate } from "../interface/dashboard";
import { growthSignColor } from "../helper/signColor";
import { Sign } from "../enum/sign";

const AssetsBalance = (props: TAssetBalance) => {
  const [currentTab, setCurrentTab] = useState('fy 2024');
  const [incomeData, setIncomeData] = useState<TAssetBalanceData>(initialData);
  const [assetByDate, setAssetByDate] = useState<TAssetByDate>(assetByDateInitialData);

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
      } else {
        setAssetByDate(assetByDateEmpty)
      }
    }
  }, [currentTab, props.currentCountry]);

  return (
    <CardContainer
      $bgColor="#fff"
      $color="#1E293B"
      $haveBorder={true}
    >
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
              Returns:
              <Span
                $color={growthSignColor({ sign: assetByDate.assetsGrowthSign as Sign })}
                $fontWeight={600}
              >
                {`${assetByDate.assetsGrowthSign}${formattedAmount(assetByDate.return)}`}
              </Span>
            </Title>
            {assetByDate.return > 0 ? (
              <Tag
                $color="#fff"
                $fontSize={12}
                $bgColor="#22C55E"
              >
                <FontAwesomeIcon icon={faArrowTrendUp}/>
                {`${assetByDate.assetsGrowthSign}${assetByDate.assetsGrowth}`}
              </Tag>
            ) : null}
          </FlexOnly>
        </div>
      </FlexBetween>
      <p>Realised gains:
        <Span
          $color={growthSignColor({ sign: assetByDate.realisedGainSign as Sign })}
          $fontWeight={600}
        >
          {`${assetByDate.realisedGainSign}${formattedAmount(assetByDate.realisedGains)}`}
        </Span>
      </p>
      <p>{assetByDate.unrealisedGainSign === '+' || !assetByDate.unrealisedGainSign ? 'Unrealised gains:' : 'Unrealised loss'}
        <Span
          $color={growthSignColor({ sign: assetByDate.unrealisedGainSign as Sign })}
          $fontWeight={600}
        >
          {`${assetByDate.unrealisedGainSign}${formattedAmount(assetByDate.unrealisedGains)}`}
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