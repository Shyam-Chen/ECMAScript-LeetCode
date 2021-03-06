interface TwoSum {
  (nums: number[], target: number): number[];
}

// The fastest function
export const twoSum: TwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
};

export const twoSum2: TwoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(target - nums[i], i);
  }

  return [-1, -1];
};
