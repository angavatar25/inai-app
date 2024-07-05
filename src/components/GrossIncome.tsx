import { useEffect, useState } from "react";

import styled from "styled-components";

import GrossIncomeTab from "./GrossIncomeTab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import { FlexBetween, FlexOnly, MarginCenter, Span } from "../styles/general";

import CircleChevron from '../public/assets/circle-chevron-right.svg';
import formattedAmount from "../helper/moneyFormatter";
import { Title } from "../styles/dashboard";

interface TIncomeData {
  flag: string;
  grossIncome: number;
  lessExpenses: number;
  netIncome: number;
  growth: number;
  sign: string;
}

interface TGrossIncome {
  data: TIncomeData[];
};

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
const Tag = styled.div<{ $color?: string, $fontSize: number }>`
  background-color: #fff;
  color: ${props => props.color ? props.color : "#000"};
  font-size: ${props => props.$fontSize}px;
  border-radius: 99px;
`

const GrossIncome = (props: TGrossIncome) => {
  const initialData = { flag: 'fy 2024', grossIncome: 9000, lessExpenses: 8950, netIncome: 50, growth: 4.4, sign: '+' };

  const [currentTab, setCurrentTab] = useState('fy 2024');
  const [incomeData, setIncomeData] = useState<TIncomeData>(initialData);

  const onClickTab = (curr: string) => {
    setCurrentTab(curr);
  }

  useEffect(() => {
    const findData = props.data.find((income) => income.flag === currentTab);

    if (findData) {
      setIncomeData(findData)
    }
  }, [currentTab])

  return (
    <CardContainer>
      <FlexBetween>
        <Title $fontSize={18} $color="#475569">Gross income</Title>
        <MarginCenter>
          <FontAwesomeIcon style={{ color: '#CBD5E1' }} icon={faEllipsisVertical}/>
        </MarginCenter>
      </FlexBetween>
      <FlexBetween $margin={'20px 0'}>
        <div>
          <MoneyFontSize>{formattedAmount(incomeData.grossIncome)}</MoneyFontSize>
          <FlexOnly $gap={10}>
            <Tag
              color="#22C55E"
              $fontSize={14}
            >
              <FontAwesomeIcon icon={faArrowTrendUp}/>
              {`${incomeData.sign}${incomeData.growth}`} <Span $color="#000" $fontWeight={500}>vs last year</Span>
            </Tag>
          </FlexOnly>
        </div>
        <MarginCenter>
          <img src={CircleChevron} alt="" />
        </MarginCenter>
      </FlexBetween>
      <p>Less expenses: <Span $color="#881337" $fontWeight={600}>-{formattedAmount(incomeData.lessExpenses)}</Span></p>
      <p>Net income: <Span $color="#000" $fontWeight={600}>{formattedAmount(incomeData.netIncome)}</Span></p>
      <GrossIncomeTab
        isActive={currentTab}
        onClickTab={onClickTab}
      />
    </CardContainer>
  )
}

export default GrossIncome;