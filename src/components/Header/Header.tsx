import React from "react";
import styles from "./header.module.css";
import { Button, Slider } from "@mui/material";

const Header: React.FC = () => {
  // const [value, setValue] = useState<number>((MAX + MIN) / 2);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(Number(e.target.value));
  // };

  return (
    <header>
      <h1 className={styles.title}>Sorting Visualizer</h1>
      <div className={styles.buttons}>
        <div className={styles.sortingButtons}>
          <Button aria-label="mergesort" variant="contained">
            mergesort
          </Button>
          <Button aria-label="mergeSort" variant="contained">
            mergesort
          </Button>
          <Button aria-label="heapSort" variant="contained">
            heapsort
          </Button>
          <Button aria-label="quickSort" variant="contained">
            quicksort
          </Button>
        </div>

        <Slider
          max={100}
          min={0}
          step={1}
          aria-label="array size"
          valueLabelDisplay="auto"
          className={styles.slider}
        />
        <Button aria-label="generateNewArray" variant="outlined">
          generate new array
        </Button>
      </div>
    </header>
  );
};

export default Header;
