import { Box } from "@mui/material";
import React from "react";
import ChartBar from "../ChartBar/ChartBar";

interface Props {
  numbers: number[];
}
const Chart: React.FC<Props> = ({ numbers }) => {
  return (
    <Box
      display="flex"
      padding={2}
      bgcolor={"#fae3e3"}
      alignItems={"flex-end"}
      height={"60vh"}
      flexDirection="row"
    >
      {numbers.map((value, index) => (
        <ChartBar value={value} key={index} />
      ))}
    </Box>
  );
};

export default Chart;
