function topKFrequentElements(nums, k) {
  // Step 1: Create a frequency hashmap
  const frequencyMap = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Step 2: Sort the unique numbers based on their frequency
  const uniqueNums = Array.from(frequencyMap.keys());
  uniqueNums.sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

  // Step 3: Return the top k elements
  return uniqueNums.slice(0, k);
}

// Example usage
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
const result = topKFrequentElements(nums, k);
console.log(result); // Output: [1, 2]
