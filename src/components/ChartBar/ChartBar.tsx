import { Box, Tooltip } from "@mui/material";
import { BarRelativeHeight, MaxInteger } from "../../chart.config";
import styles from "./chartBar.module.css";

interface Props {
  value: number;
}
const ChartBar: React.FC<Props> = ({ value }) => {
  return (
    <Tooltip title={value}>
      <Box
        className={styles.chartBar}
        style={{ height: `${(value / MaxInteger) * BarRelativeHeight}vh` }}
      />
    </Tooltip>
  );
};

export default ChartBar;
