def convert_array_to_matrix(arr):
    matrix = []

    # Extract column names
    columns = list(arr[0].keys())
    matrix.append(columns)

    # Extract values for each column
    for obj in arr:
        row = [obj[col] for col in columns]
        matrix.append(row)

    return matrix

arr = [
    {"b": 1, "a": 2},
    {"b": 3, "a": 4}
]

matrix = convert_array_to_matrix(arr)
print(matrix)
