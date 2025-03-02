// 2570. Merge Two 2D Arrays by Summing Values

// You are given two 2D integer arrays nums1 and nums2.
// nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// Each array contains unique ids and is sorted in ascending order by id.

// Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

// Only ids that appear in at least one of the two arrays should be included in the resulting array.
// Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays, then assume its value in that array to be 0.
// Return the resulting array. The returned array must be sorted in ascending order by id.


function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    let nums3: number[][] = []
    //accessing indivial array of nums1
    for (let arr1 of nums1) {
        //accessing indivial array of nums2
        for (let arr2 of nums2) {
            //if key of each array of nums1 match with the ley of array of nums2 then it will push the sum of these
            if (arr1[0] === arr2[0]) {
                arr1[0] = arr2[1] + arr1[1]
                nums3.push(arr1[0])
            }
            // if key of array of nums1 does not match with key of array of nums2 then it will create two new array in diffrent key 
            if (arr1[0] !== arr2[0]) {
                arr1[0] = arr1[1]
                const arrAn = arr1[0 + 1] = arr2[1]
                nums3.push(arr1[0])
                nums3.push(arrAn)
            }
            //
            arr2[0] = arr2[1]
            nums3.push(arr2[0])
        }
    }
};
