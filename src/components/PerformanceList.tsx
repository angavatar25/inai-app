import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styled from "styled-components"
import { FlexOnly } from "../styles/general"
import { useEffect, useState } from "react"
import formattedAmount from "../helper/moneyFormatter"

interface TPerformanceData {
  text: string;
  amount: number;
  growth: number;
  sign: string | null;
  flag: string;
}

interface TData {
  currentPortfolio: string;
  data: TPerformanceData[];
}

const Tag = styled.div<{ $color?: string, $fontSize: number, $bgColor: string }>`
  background-color: ${p => p.$bgColor ? p.$bgColor : "#000"};
  color: ${p => p.$color ? p.$color : "#000"};
  font-size: ${p => p.$fontSize}px;
  padding: 4px 8px 4px 8px;
  border-radius: 99px;
  display: flex;
  gap: 5px;
`

const ListContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  justify-content: space-between;
`

const PerformanceList = (props: TData) => {
  const { currentPortfolio, data } = props;

  const initialData = [{
    text: 'Month',
    amount: 2012,
    growth: 0.5,
    sign: '+',
    flag: 'all',
  }];

  const [performanceData, setPerformanceData] = useState<TPerformanceData[]>(initialData);

  const stockArrow = (sign: string) => {
    return sign === '+' ? faArrowTrendUp : faArrowTrendDown;
  }

  useEffect(() => {
    const performanceFiltered = data.filter((performance) => performance.flag === currentPortfolio);

    setPerformanceData(performanceFiltered);
  }, [currentPortfolio])
  return (
    <>
      {performanceData.map((performance, i) => (
        <ListContainer
          key={`performance-${i}`}
        >
          <p>{performance.text}</p>
          <FlexOnly style={{ margin: 'auto 0', gap: '10px' }}>
            {`${performance.sign ? performance.sign : ''}${formattedAmount(performance.amount)}`}
            <Tag
              $color="#fff"
              $fontSize={12}
              $bgColor={performance.sign === '+' ? "#22C55E" : performance.sign === '-' ? '#F43F5E' : 'transparent'}
            >
              {performance.sign ? (<FontAwesomeIcon icon={stockArrow(performance.sign)}/>) : ''}
              {`${performance.sign ? performance.sign : ''}${performance.growth}%`}
            </Tag>
          </FlexOnly>
        </ListContainer>
      ))}
    </>
  )
}

export default PerformanceList;