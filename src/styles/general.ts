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