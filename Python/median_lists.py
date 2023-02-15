#given two arrays that are sorted but not necessarily the same length, find the median value. 
# If the number of values is even return the average of the two middle values. 

import math 

def median_lists(first,second):
    for value in second:
        first.append(value)
    first.sort()
    print(first)
    if len(first) % 2 == 0:
        return (first[math.floor(len(first)/2)] + (first[math.floor(len(first)/2)-1])) / 2
    return first[math.floor(len(first)/2)]

print(median_lists([1,5,9] , [1,2,3,4,5,6]))
print(median_lists([1,5,9] , [1,2,3,4,5]))