#Find the mean of all the values in a list of arrays

def array_mean(arraylist):
    x = 0
    count =0
    for array in arraylist:
        for i in array:
            count += 1
            x += i
            results = x / count 
    return results

print (array_mean([[1,5,9], [1,2,3,4,5,6]]))