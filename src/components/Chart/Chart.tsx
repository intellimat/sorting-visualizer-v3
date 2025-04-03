import { Box } from "@mui/material";
import React from "react";
import { MaxInteger } from "../../chart.config";
import ChartBar from "../ChartBar/ChartBar";

interface Props {
  numbers: number[];
}
const Chart: React.FC<Props> = ({ numbers }) => {
  return (
    <Box
      display="flex"
      marginLeft={2}
      marginRight={2}
      marginBottom={2}
      alignItems={"flex-end"}
      height={Math.max(MaxInteger) * 1.1 + "px"}
      flexDirection="row"
    >
      {numbers.map((value, index) => (
        <ChartBar value={value} key={index} />
      ))}
    </Box>
  );
};

export default Chart;
