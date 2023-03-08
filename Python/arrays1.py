import random

#Shuffle 

def shuffle(arr):
    shuffled_array = []
    for i in range(len(arr)):
        shuffled_index = random.randint(0, len(arr)-1)
        temp = arr[1]
        arr[i] = arr[shuffled_index]
        arr[shuffled_index] = temp
        shuffled_array.append(shuffled_index)
    return shuffled_array
        
print(shuffle([3,5,7,8,9]))

#Skyline Heights 

def skyline_heights(heights):
    max_height = 0 
    visible_heights = []
    for height in heights:
        if height > max_height:
            visible_heights.append(height)
            max_height = height
    return visible_heights

print(skyline_heights([7,6,9]))

#Zip It 

def zip_it(arr1, arr2):
    if len(arr1) > len(arr2):
        longer_arr = arr1
    else:
        longer_arr = arr2 
    new_arr = []
    for i in range(len(longer_arr)):
        if i <= (len(arr1)) - 1:
            new_arr.append(arr1[i])
        if i <= (len(arr2)) - 1:
            new_arr.append(arr2[i])
    return new_arr

print(zip_it([4,15,100], [10,20,30,40]))
