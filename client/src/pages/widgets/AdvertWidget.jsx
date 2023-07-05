import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad's</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        src="http://localhost:3001/assets/ad1.jpg"
        alt="advert"
        style={{ borderRadius: "0.75rem", margin: "o.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Blinkit</Typography>
        <Typography color={medium}>blinkit.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Elevate your style with Blinkit: Where fashion meets innovation. Stand out from the crowd with our cutting-edge designs and dazzling LED light technology.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
