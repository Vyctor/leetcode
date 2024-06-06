function singleNumber(nums: number[]) {
  const sortedNums = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    const sameOnLeft = sortedNums[i] === sortedNums[i - 1];
    const sameOnRight = sortedNums[i] === sortedNums[i + 1];
    if (!sameOnLeft && !sameOnRight) {
      return sortedNums[i];
    }
  }
}

function singleNumberUsingXOR(nums: number[]) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

const inputs = [[2, 2, 1], [4, 1, 2, 1, 2], [1]];
const outputs = [1, 4, 1];

inputs.forEach((input, i) => {
  const output = singleNumberUsingXOR(input);
  const expected = outputs[i];
  console.log({
    input,
    output,
    expected,
    passed: output === expected,
  });
});
