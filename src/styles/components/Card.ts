import styled from "styled-components";

export const CardContainer = styled.div<{ $bgColor?: string; $color?: string; $haveBorder?: boolean }>`
  background-color: ${p => p.$bgColor ? p.$bgColor : '#fff' };
  padding: 16px;
  color: ${p => p.$color ? p.$color : '#1E293B'};
  border-radius: 24px;
  border: ${p => p.$haveBorder ? '1px solid #E2E8F0' : 'none'};
`

export const MoneyFontSize = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`