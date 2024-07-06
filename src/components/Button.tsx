import { ButtonStyling } from "../styles/components/Button";

import { TButton } from "../interface/components";

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