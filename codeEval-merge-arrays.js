const merge = function(array1, array2) {

  for (let item of array2) {
    array1.push(item);
  }
  
  return array1.sort((a, b) => {return a - b});

}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);