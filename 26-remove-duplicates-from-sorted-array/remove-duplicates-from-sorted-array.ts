function removeDuplicates(nums: number[]): number {
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    console.info(nums);

    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}
// Example usage
const numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(numbers));
