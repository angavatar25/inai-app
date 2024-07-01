import styled from "styled-components"
import { GrossIncomeTabData } from "../dummy/data"
import ButtonComponent from "./Button"
import { useState } from "react";

const TabContainer = styled.div`
  background-color: #F1F5F9;
  border-radius: 99px;
  display: flex;
  padding: 4px;
`

interface TGrossIncomeTab {
  isActive: string;
  onClickTab: (string: string) => void;
}

const GrossIncomeTab = (props: TGrossIncomeTab) => {
  const onClickTab = (tab: string) => {
    props.onClickTab(tab.toLowerCase());
  }

  return (
    <TabContainer>
      {GrossIncomeTabData.map((data) => (
        <ButtonComponent
          key={`income-text-${data}`}
          bgColor={props.isActive === data.toLowerCase() ? '#fff' : 'transparent'}
          color={props.isActive === data.toLowerCase() ? '#4F46E5' : '#475569'}
          shadow={props.isActive === data.toLowerCase()}
          fontWeight={700}
          onClickButton={() => onClickTab(data.toLowerCase())}
          fontSize={14}
          lineHeight={30}
        >
          {data}
        </ButtonComponent>
      ))}
    </TabContainer>
  )
}

export default GrossIncomeTab;