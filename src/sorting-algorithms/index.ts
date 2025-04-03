import { mergeSort } from "./mergeSort";
import { heapSort } from "./heapSort";
import { quickSort } from "./quickSort";
import { AlgorithmName } from "./types";

export const SortingAlgorithms = {
  [AlgorithmName.MergeSort]: mergeSort,
  [AlgorithmName.HeapSort]: heapSort,
  [AlgorithmName.QuickSort]: quickSort,
};
