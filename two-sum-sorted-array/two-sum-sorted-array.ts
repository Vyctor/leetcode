function twoSumBinarySearch(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    const numberToFind = target - numbers[i];
    const numberToFindIndex = binarySearch(numbers, numberToFind, i);

    if (numberToFindIndex !== -1) {
      console.log("found", i, numberToFindIndex);
      return [i + 1, numberToFindIndex + 1];
    }
  }

  return [];
}

function binarySearch(
  numbers: number[],
  target: number,
  index: number
): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (numbers[middle] === target) {
      if (middle === index) {
        return middle + 1;
      }
      return middle;
    }

    if (numbers[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

function twoSumOptimal(numbers: number[], target: number): number[] {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const sum = numbers[leftPointer] + numbers[rightPointer];
    if (sum === target) {
      return [leftPointer + 1, rightPointer + 1];
    }
    if (sum > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return [0, 0];
}

const testCases = [
  [2, 7, 11, 15],
  [2, 3, 4],
  [-1, 0],
  [0, 0, 3, 4],
  [1, 2, 3, 4, 4, 9, 56, 90],
];

const targets = [9, 6, -1, 0, 8];

const expectedResults = [
  [1, 2],
  [1, 3],
  [1, 2],
  [1, 2],
  [4, 5],
];

for (let i = 0; i < testCases.length; i++) {
  const result = twoSumOptimal(testCases[i], targets[i]);
  console.log(result, expectedResults[i]);
}
