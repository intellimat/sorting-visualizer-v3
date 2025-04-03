import { useCallback, useState } from "react";
import Header from "./components/Header/Header";
import { FramesSpeed, InitialArraySize } from "./chart.config";
import { AlgorithmName } from "./sorting-algorithms/types";
import { getRandomArrayOfNumbers, sleep } from "./utils";
import { SortingAlgorithms } from "./sorting-algorithms";
import Chart from "./components/Chart/Chart";

function App() {
  const [numbers, setNumbers] = useState<number[]>(
    getRandomArrayOfNumbers(InitialArraySize)
  );

  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false);

  const handleSortingButtonClick = useCallback(
    async (algorithmName: AlgorithmName) => {
      setButtonsDisabled(true);
      const history = SortingAlgorithms[algorithmName]([...numbers]);
      for (const frame of history) {
        await sleep(FramesSpeed);
        setNumbers(frame);
      }
      setButtonsDisabled(false);
    },
    [numbers]
  );

  const handleNewArray = useCallback(
    (_size?: number) => {
      setNumbers(getRandomArrayOfNumbers(_size ?? numbers.length));
    },
    [numbers.length]
  );

  return (
    <>
      <Header
        title="Sorting Visualizer"
        onSortButtonClick={handleSortingButtonClick}
        onNewArrayClick={handleNewArray}
        sliderValue={numbers.length}
        onSliderChange={handleNewArray}
        disabled={buttonsDisabled}
      />
      <Chart numbers={numbers} />
    </>
  );
}

export default App;
