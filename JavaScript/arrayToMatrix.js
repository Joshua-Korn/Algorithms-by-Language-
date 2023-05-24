function convertArrayToMatrix(arr) {
    const matrix = [];
  
    // Extract column names and sort them in lexicographically ascending order
    const columns = Object.keys(arr[0]).sort();
    matrix.push(columns);
  
    // Extract values for each column
    arr.forEach(obj => {
      const row = [];
      columns.forEach(col => {
        row.push(obj[col]);
      });
      matrix.push(row);
    });
  
    return matrix;
  }
  
  const arr = [
    {"b": 1, "a": 2},
    {"b": 3, "a": 4}
  ];
  
  const matrix = convertArrayToMatrix(arr);
  console.log(matrix);
  