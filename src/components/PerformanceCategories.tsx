import styled from 'styled-components';

import { TPerformanceCategories } from '../interface/netAssets';
import { ButtonPerformance } from '../styles/components/Button';

const PerformanceCategories = (props: TPerformanceCategories) => {
  const onClickCategory = (category: string) => {
    props.onClickCategory(category);
  }

  return (
    <div>
      <div style={{ display: 'flex', marginTop: '10px', gap: '10px'}}>
        {props.filterData.map((data) => (
          <ButtonPerformance
            onClick={() => onClickCategory(data)}
            key={`country-${data}`}
            $active={props.currentTab === data.toLowerCase()}
          >
            <p style={{ textTransform: 'capitalize'}}>{data}</p>
          </ButtonPerformance>
        ))}
      </div>
    </div>
  )
}

export default PerformanceCategories;