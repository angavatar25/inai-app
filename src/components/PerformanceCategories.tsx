import styled from 'styled-components';
import { useState } from 'react';

interface TPerformanceCategories {
  onClickCategory: (category: string) => void;
  filterData: string[];
  currentTab: string;
}

const Button = styled.button<{ $active: boolean }>`
  background-color: ${props => props.$active ? '#EEF2FF' : 'transparent' };
  color: ${props => props.$active ? '#4F46E5' : '#475569' };
  border-radius: 99px;
  font-weight: 600;
  border: transparent;
  padding: 8px 12px 8px 12px;
  display: flex;
  gap: 5px;
  p {
    margin: 0;
  }
`

const PerformanceCategories = (props: TPerformanceCategories) => {
  const onClickCategory = (category: string) => {
    props.onClickCategory(category);
  }

  return (
    <div>
      <div style={{ display: 'flex', marginTop: '10px', gap: '10px'}}>
        {props.filterData.map((data) => (
          <Button
            onClick={() => onClickCategory(data)}
            key={`country-${data}`}
            $active={props.currentTab === data.toLowerCase()}
          >
            <p style={{ textTransform: 'capitalize'}}>{data}</p>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default PerformanceCategories;