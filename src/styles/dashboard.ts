import styled from "styled-components"

export const DashboardContainer = styled.div`
  padding: 25px;
  padding-top: 100px;
`
export const Title = styled.p<{ $fontSize: number, $color?: string, $fontWeight?: number }>`
  margin: 0;
  font-size: ${p => p.$fontSize ? p.$fontSize : 16}px;
  color: ${p => p.$color ? p.$color : '#000'};
  font-weight: ${p => p.$fontWeight ? p.$fontWeight : 800};
`
export const Button = styled.button`
  width: 100%;
  background-color: #1E293B;
  border-radius: 99px;
  color: #fff;
  font-size: 16px;
  line-height: 48px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`