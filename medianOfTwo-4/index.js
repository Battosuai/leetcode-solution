var findMedianSortedArrays = function (nums1, nums2) {
  var merged = [...nums1, ...nums2];
  merged = merged.sort((a, b) => a - b);
  if (merged.length % 2 !== 0) {
    return merged[parseInt(merged.length / 2)];
  } else {
    return (merged[merged.length / 2 - 1] + merged[merged.length / 2]) / 2;
  }
};

findMedianSortedArrays([3], [-1, -2]);
