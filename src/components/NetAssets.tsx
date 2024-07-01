import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faChevronRight, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import { FlexBetween, FlexOnly, MarginCenter, Span } from "../styles/general";
import { useEffect, useState } from "react";
import { DataPerCountries } from "../dummy/data";
import formattedAmount from "../helper/moneyFormatter";

interface TNetAssetsData {
  totalAmount: number;
  growthTotal: number;
  sign: string;
  grossAssets: number;
  liabilities: number;
}

interface TNetAssets {
  currentCountry: string;
}

const CardContainer = styled.div`
  background-color: #7E22CE;
  padding: 16px;
  color: #fff;
  border-radius: 24px;
`
const MoneyFontSize = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`
const Tag = styled.div<{ $color?: string, $fontSize: number }>`
  background-color: #fff;
  color: ${props => props.color ? props.color : "#000"};
  font-size: ${props => props.$fontSize}px;
  padding: 4px 8px 4px 8px;
  border-radius: 99px;
`
const NetAssets = (props: TNetAssets) => {
  const { currentCountry } = props;

  const initialData = {
    totalAmount: 0,
    growthTotal: 0,
    sign: '+',
    grossAssets: 0,
    liabilities: 0,
  }

  const [currentAssetsData, setCurrentAssetsData] = useState<TNetAssetsData>(initialData);

  useEffect(() => {
    const filteredData = DataPerCountries.find((country) => country.country.toLowerCase() === currentCountry.toLowerCase());

    if (filteredData) {
      setCurrentAssetsData(filteredData.data.assets);
    }
  }, [currentCountry])
  return (
    <CardContainer>
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
              color="#22C55E"
              $fontSize={12}
            >
              <FontAwesomeIcon icon={faArrowTrendUp}/>
              {`${currentAssetsData.sign}${currentAssetsData.growthTotal}%`}
            </Tag>
            <Tag $fontSize={12}>
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