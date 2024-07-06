import { useEffect, useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faChevronRight, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import { FlexBetween, FlexOnly, MarginCenter, Span, Tag } from "../styles/general";
import { CardContainer, MoneyFontSize } from "../styles/components/Card";

import { DataPerCountries } from "../dummy/data";

import formattedAmount from "../helper/moneyFormatter";

import { TNetAssets, TNetAssetsData } from "../interface/components";

import { netAssetsInitialData } from "../dummy/initialData";


const NetAssets = (props: TNetAssets) => {
  const { currentCountry } = props;

  const [currentAssetsData, setCurrentAssetsData] = useState<TNetAssetsData>(netAssetsInitialData);

  useEffect(() => {
    const filteredData = DataPerCountries.find((country) => country.country.toLowerCase() === currentCountry.toLowerCase());

    if (filteredData) {
      setCurrentAssetsData(filteredData.data.assets);
    }
  }, [currentCountry])

  return (
    <CardContainer
      $bgColor="#7E22CE"
      $color="#fff"
    >
      <FlexBetween>
        Net Asset
        <MarginCenter>
          <FontAwesomeIcon icon={faEllipsisVertical}/>
        </MarginCenter>
      </FlexBetween>
      <FlexBetween $margin={'20px 0'}>
        <div>
          <MoneyFontSize>{formattedAmount(currentAssetsData.totalAmount)}</MoneyFontSize>
          <FlexOnly $gap={10}>
            <Tag
              $color="#22C55E"
              $bgColor="#fff"
              $fontSize={12}
            >
              <FontAwesomeIcon icon={faArrowTrendUp}/>
              {`${currentAssetsData.sign}${currentAssetsData.growthTotal}%`}
            </Tag>
            <Tag
              $fontSize={12}
              $bgColor="#fff"
            >
              last day
            </Tag>
          </FlexOnly>
        </div>
        <MarginCenter>
          <FontAwesomeIcon icon={faChevronRight}/>
        </MarginCenter>
      </FlexBetween>
      <p>Gross assets: <Span $color="#fff" $fontWeight={600}>{formattedAmount(currentAssetsData.grossAssets)}</Span></p>
      <p>Liabilities: <Span $color="#FDA4AF" $fontWeight={600}>{formattedAmount(currentAssetsData.liabilities)}</Span></p>
    </CardContainer>
  )
}

export default NetAssets;