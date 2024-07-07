import { useMediaQuery } from "react-responsive";
import { ScreenQuery } from "../enum/screenQuery";

const useScreenQuery = () => {
  const isDesktop = useMediaQuery({ minWidth: ScreenQuery.minWidthDesktop });
  const isMobile = useMediaQuery({ maxWidth: ScreenQuery.maxWidthMobile });

  return { isDesktop, isMobile }
}

export default useScreenQuery;