function swap(arr) {
  const copy = arr.slice();
  let temp = copy[0];
  copy[0] = copy[1];
  copy[1] = temp;
  return copy;
}

function greaterThan(arr) {
  return arr[0] > arr[1];
}

function bubbleSort(arr) {
  if (!arr.length) return arr;
  let complete = true;

  //loop over arr
  for (let i = 0; i < arr.length - 1; i++) {
    //compare current el with the next in line
    //if curr is greater than next, 
    if (greaterThan(arr.slice(i, i + 2))) {
      arr.splice(i, 2, ...swap(arr.slice(i, i + 2)))
      //swap and flip 'complete' to false
      complete = false;
    }
  }

  //if complete is false (swap was made) return the recurse on arr.slice(0, arr.length -1)
  if (complete) return arr;
  //else concat the sorted end of the arr onto a recursive call to the rest of the array
  else return bubbleSort(arr.slice(0, arr.length - 1)).concat(arr.slice(-1));
}
