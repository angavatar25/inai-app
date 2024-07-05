import { ReactNode } from "react";
import { ButtonStyling } from "../styles/components/Button";

interface TButton {
  bgColor: string;
  color: string;
  borderColor?: string;
  fontWeight?: number;
  lineHeight?: number;
  shadow?: boolean;
  onClickButton?: () => void;
  fontSize: number;
  children: ReactNode;
  style?: any;
}

const ButtonComponent = (props: TButton) => {
  const {
    bgColor,
    color,
    borderColor,
    fontSize,
    onClickButton,
    children,
    fontWeight,
    lineHeight,
    shadow,
    style,
  } = props;
  return (
    <ButtonStyling
      onClick={onClickButton}
      $bgColor={bgColor}
      $color={color}
      $borderColor={borderColor}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $shadow={shadow}
      style={style}
    >
      {children}
    </ButtonStyling>
  )
}

export default ButtonComponent;