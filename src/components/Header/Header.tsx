import React from "react";
import styles from "./header.module.css";

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
          <button aria-label="mergeSort">mergesort</button>
          <button aria-label="heapSort"> heapsort</button>
          <button aria-label="quickSort">quicksort</button>
        </div>

        {/* TODO: Place Slider */}
        <button aria-label="generateNewArray">generate new array</button>
      </div>
    </header>
  );
};

export default Header;
