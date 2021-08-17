function distinctPairSum(arr, k) {
  // type your code here
  let sums = []

  arr.forEach((element, index) => {
    for(i = index + 1; i < arr.length; i++){
      if(element + arr[i] === k){
        let newSum = [element, arr[i]]
        let check = sums.some(array => ((array[0] === newSum[0] && array[1] === newSum[1]) || (array[1] === newSum[0] && array[0]  === newSum[1])))
        if(!check){
          sums.push(newSum)
        }
      }
    }    
  })

  return sums
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("Expecting: []");
  console.log("=>", distinctPairSum([0, 8, 24, 37, 10, 12, 4], 13));

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
  // initialize empty array for sums
  // iterate through original array
    // iterate through all elements after current one
      // if current + next equals k
        // create newSum array of current, next
        // check if any element in sums array has matching values
        // if check returns false
          // push newSum array to array of sums
  // return sums array

// And a written explanation of your solution