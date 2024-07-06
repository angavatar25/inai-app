import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import GrossIncomeTab from "./GrossIncomeTab";

import { FlexBetween, FlexOnly, MarginCenter, Span, Tag } from "../styles/general";
import { Title } from "../styles/dashboard";
import { CardContainer, MoneyFontSize } from "../styles/components/Card";

import CircleChevron from '../public/assets/circle-chevron-right.svg';

import formattedAmount from "../helper/moneyFormatter";

import { TGrossIncome, TIncomeData } from "../interface/dashboard";

import { grossIncomeInitialData } from "../dummy/initialData";

const GrossIncome = (props: TGrossIncome) => {
  const [currentTab, setCurrentTab] = useState('fy 2024');
  const [incomeData, setIncomeData] = useState<TIncomeData>(grossIncomeInitialData);

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
    <CardContainer
      $haveBorder={true}
    >
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