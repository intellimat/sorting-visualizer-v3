import React from "react";
import styles from "./header.module.css";
import { Box, Button, Slider } from "@mui/material";
import { AlgorithmName } from "../../sorting-algorithms/types";
import { MaxArraySize, MinArraySize } from "../../chart.config";

interface Props {
  title: string;
  sliderValue: number;
  onSliderChange: (newSize: number) => void;
  onSortButtonClick: (algorithmName: AlgorithmName) => void;
  onNewArrayClick: () => void;
}

const Header: React.FC<Props> = ({
  title,
  onSortButtonClick,
  onNewArrayClick,
  sliderValue,
  onSliderChange,
}) => {
  return (
    <Box className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Button
            aria-label="mergesort"
            variant="contained"
            onClick={() => onSortButtonClick(AlgorithmName.MergeSort)}
          >
            mergesort
          </Button>
          <Button
            aria-label="heapSort"
            variant="contained"
            onClick={() => onSortButtonClick(AlgorithmName.HeapSort)}
          >
            heapsort
          </Button>
          <Button
            aria-label="quickSort"
            variant="contained"
            onClick={() => onSortButtonClick(AlgorithmName.QuickSort)}
          >
            quicksort
          </Button>
        </Box>
        <Slider
          max={MaxArraySize}
          min={MinArraySize}
          value={sliderValue}
          onChange={(_, newValue) => onSliderChange(newValue)}
          step={1}
          aria-label="array size"
          valueLabelDisplay="auto"
          className={styles.slider}
        />
        <Button
          aria-label="generateNewArray"
          variant="outlined"
          onClick={() => onNewArrayClick()}
        >
          generate new array
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
