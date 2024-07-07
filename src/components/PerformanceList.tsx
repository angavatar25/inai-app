import { useEffect, useState } from "react"

import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { FlexOnly, Tag } from "../styles/general"
import { ListContainer } from "../styles/components/Button"

import formattedAmount from "../helper/moneyFormatter"
import { tagSignColor } from "../helper/signColor"

import { TData, TPerformanceData } from "../interface/components"

import { performanceInitialData } from "../dummy/initialData"
import { Sign } from "../enum/sign"

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
          <div style={{ display: 'grid', gridTemplateColumns: '80px 80px', margin: 'auto 0', gap: '10px' }}>
            <div style={{ textAlign: 'right' }}>
              {`${performance.sign ? performance.sign : ''}${formattedAmount(performance.amount)}`}
            </div>
            <Tag
              $color="#fff"
              $fontSize={12}
              $bgColor={tagSignColor({ sign: performance.sign as Sign })}
              style={{ height: 'fit-content', width: 'fit-content' }}
            >
              {performance.sign ? (<FontAwesomeIcon icon={stockArrow(performance.sign)}/>) : ''}
              {`${performance.sign ? performance.sign : ''}${performance.growth}%`}
            </Tag>
          </div>
        </ListContainer>
      ))}
    </>
  )
}

export default PerformanceList;