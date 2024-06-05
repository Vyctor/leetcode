function twoSumOn2(nums: number[], target: number): number[] {
  const possibleNumbers = nums.filter((num) => num < target);

  if (
    possibleNumbers.length === 2 ||
    possibleNumbers[0] + possibleNumbers[1] === target
  ) {
    return [0, 1];
  }

  for (let i = 0; i < possibleNumbers.length; i++) {
    for (let j = i + 1; j < possibleNumbers.length; j++) {
      if (possibleNumbers[i] + possibleNumbers[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

function twoSumFaster(nums: number[], target: number): number[] {
  if (nums.length === 2 || nums[0] + nums[1] === target) {
    return [0, 1];
  }

  for (let i = 0; i < nums.length; i++) {
    const elementToFind = target - nums[i];
    const elementIndex = nums.indexOf(elementToFind);
    if (elementIndex !== -1 && elementIndex !== i) {
      return [i, elementIndex];
    }
  }

  return [];
}

console.log(twoSumFaster([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumFaster([3, 2, 4], 6)); // [0, 1]
console.log(twoSumFaster([3, 3], 6)); // [0, 1]
