import styled from "styled-components";

export const TabContainer = styled.div`
  background-color: #F1F5F9;
  border-radius: 99px;
  display: flex;
  padding: 4px;
`
export const Tab = styled.div<{ $bgColor: string }>`
  background-color: ${p => p.$bgColor};
  border-radius: 99px;
  padding: 10px;
  color: #fff;
  margin: 20px 0 0 0;
`