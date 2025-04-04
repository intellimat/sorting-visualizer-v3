import { Box, Tooltip } from "@mui/material";
import { BarRelativeHeight, MaxInteger } from "../../chart.config";

interface Props {
  value: number;
}
const ChartBar: React.FC<Props> = ({ value }) => {
  return (
    <Tooltip title={value}>
      <Box
        bgcolor={"#2a4d6a"}
        margin="0 1px"
        flex={1}
        minWidth={0}
        style={{ height: `${(value / MaxInteger) * BarRelativeHeight}vh` }}
      />
    </Tooltip>
  );
};

export default ChartBar;
