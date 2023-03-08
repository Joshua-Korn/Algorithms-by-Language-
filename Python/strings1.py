#Remove Spaces 

def remove_spaces(str):
    str = str.split(' ')
    for i in range(len(str)):
        if str[i] == ' ':
            for j in range (i, len(str)-1):
                temp = str[j]
                str[j] = str[j+1]
                str[j+1] = temp
            str[:-1]
    new_string = ''
    for char in str:
        new_string += char
    return new_string

print(remove_spaces(" Pl ayTha tF u nkyM usi c "))

#Get Digits 

def get_digits(str):
    digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    string_digits = list(str)
    
    i=0
    while(i < len(string_digits)-1):
        if string_digits[i] not in digits:
            for j in range(i, len(string_digits)-1):
                temp = string_digits[j]
                string_digits[j] = string_digits[j+1]
                string_digits[j+1] = temp
            string_digits.pop()
        i += 1
        
    digits_only = ''
    for char in string_digits:
        digits_only += char
    return digits_only

print(get_digits("0s1a3y5w7h9a2t4?6!8?0"))

#Acronyms

def acronyms(str):
    words = str.split(' ')
    words_array = []
    for word in words:
        if word != ' ':
            words_array.append(word[0])
    acronym = ''
    for char in words_array:
        acronym += char.upper()
    return acronym

print(acronyms("there's no free lunch - gotta pay yer way."))
print(acronyms("Live from New York, it's Saturday Night!"))

#Zip arrays into dictionary

def zip(arr1, arr2):
    dictionary = {}
    for i in range(len(arr1)):
        dictionary[str(arr1[i])] = arr2[i]
    return dictionary

print(zip(["abc", 3, "yo"] , [42, "wassup", "true"]))

#Invert Hash 

def invert(dict):
    new_dictionary = {}
    for key,value in dict.items():
        new_dictionary[value] = key
    return new_dictionary

print(invert({"name": "Zaphod", "charm": "high", "morals": "dicey"}))