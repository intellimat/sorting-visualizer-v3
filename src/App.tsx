import { useState } from "react";
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

  const handleSortingButtonClick = async (algorithmName: AlgorithmName) => {
    const history = SortingAlgorithms[algorithmName]([...numbers]);
    for (const frame of history) {
      await sleep(FramesSpeed);
      setNumbers(frame);
    }
  };

  const handleNewArray = (_size?: number) => {
    setNumbers(getRandomArrayOfNumbers(_size ?? numbers.length));
  };

  return (
    <>
      <Header
        title="Sorting Visualizer"
        onSortButtonClick={handleSortingButtonClick}
        onNewArrayClick={handleNewArray}
        sliderValue={numbers.length}
        onSliderChange={handleNewArray}
      />
      <Chart numbers={numbers} />
    </>
  );
}

export default App;
