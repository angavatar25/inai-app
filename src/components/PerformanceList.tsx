import { useEffect, useState } from "react"

import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { FlexOnly, Tag } from "../styles/general"
import { ListContainer } from "../styles/components/Button"

import formattedAmount from "../helper/moneyFormatter"

import { TData, TPerformanceData } from "../interface/components"

import { performanceInitialData } from "../dummy/initialData"

const PerformanceList = (props: TData) => {
  const { currentPortfolio, data } = props;

  const [performanceData, setPerformanceData] = useState<TPerformanceData[]>(performanceInitialData);

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