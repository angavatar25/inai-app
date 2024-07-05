import styled from "styled-components";

interface TButtonStyle {
  $bgColor: string;
  $color: string;
  $borderColor?: string;
  $fontSize: number;
  $fontWeight?: number;
  $lineHeight?: number;
  $shadow?: boolean;
}

export const ButtonStyling = styled.button<TButtonStyle>`
  width: 100%;
  background-color: ${p => p.$bgColor ? p.$bgColor : "#000" };
  border-radius: 99px;
  color: ${p => p.$color ? p.$color : "#000" };
  font-size: ${p => p.$fontSize ? p.$fontSize : 16}px;
  line-height: ${p => p.$lineHeight ? p.$lineHeight : 48}px;
  border: 1px solid ${p => p.$borderColor ? p.$borderColor : 'transparent'};
  font-weight: ${p => p.$fontWeight ? p.$fontWeight : 'normal'};
  box-shadow: ${p => p.$shadow ? '0px 2px 4px -2px #1717170F' : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

`