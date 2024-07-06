import styled from "styled-components"

export const FlexBetween = styled.div<{ $margin?: string }>`
  display: flex;
  justify-content: space-between;
  margin: ${props => props.$margin ? props.$margin : null};
`
export const FlexOnly = styled.div<{ $gap?: number}>`
  display: flex;
  gap: ${props => props.$gap ? props.$gap : 0}px;
`
export const MarginCenter = styled.div`
  margin: auto 0;
`
export const Span = styled.span<{ $color?: string; $fontWeight: number }>`
  color: ${props => props.$color ? props.$color : '#000'};
  font-weight: ${props => props.$fontWeight ? props.$fontWeight : 'normal'};
`

export const Tag = styled.div<{ $color?: string, $fontSize: number, $bgColor?: string }>`
  background-color: ${p => p.$bgColor ? p.$bgColor : "#000"};
  color: ${p => p.$color ? p.$color : "#000"};
  font-size: ${p => p.$fontSize}px;
  padding: 4px 8px 4px 8px;
  border-radius: 99px;
  display: flex;
  gap: 5px;
`

export const Header = styled.div`
  background-color: #F9FAFC;
  padding: 16px 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-bottom: 1px solid #CBD5E1;
  p {
    margin: 0;
    font-weight: 800;
  }
`