const arr = [1, 2, [3, 4, [5, 6]]];
const flattenedArray = arr.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]

const deeplyNestedArr = [1, [2, [3, [4, [5]]]]];
const deeplyFlattenedArray = deeplyNestedArr.flat(Infinity);
console.log(deeplyFlattenedArray); // Output: [1, 2, 3, 4, 5]

// The flat() method concatenates sub-array elements.
// stx const newArray = arr.flat([depth: Number]);
//  - arr: The array to flatten.
//  - depth (optional): The depth level specifying how deep nested arrays should be flattened. If omitted, the default is 1.