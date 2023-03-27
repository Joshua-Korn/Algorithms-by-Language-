#Sigma 
def rsigma(num):
    if num > 0:
        return num + rsigma(num-1);
    return 0

sum = rsigma(5)

print(sum)

#Factorial 
def rfactorial(num):
    if num > 1:
        return num * rfactorial(num-1);
    return 1 

product = rfactorial(3)

print(product)

#Flood Fill 

def isValid(canvas2D, m, n, x, y, old_color, new_color):
    if x < 0 or x >= m\
        or y < 0 or y >= n or\
        canvas2D[x][y] != old_color\
        or canvas2D[x][y] == new_color:
            return False
    return True

def floodFill(canvas2D, m, n, x, y, old_color, new_color):
    temp = []
    temp.append([x,y])
    canvas2D[x][y] = new_color
    
    while temp:
        currPixel = temp.pop()
        posX = currPixel[0]
        posY = currPixel[1]
        
        if isValid(canvas2D, m, n, posX + 1, posY, old_color, new_color):
            canvas2D[posX + 1][posY] = new_color
            temp.append([posX + 1, posY])
        
        if isValid(canvas2D, m, n, posX -1, posY, old_color, new_color):
            canvas2D[posX][posY + 1] = new_color
            temp.append([posX, posY + 1])
            
        if isValid(canvas2D, m, n, posX, posY -1, old_color, new_color):
            canvas2D[posX][posY - 1] = new_color
            temp.append([posX, posY - 1])
            
canvas2D = [[3,2,3,4,3],
            [2,3,3,4,0],
            [7,3,3,5,3],
            [6,5,3,4,1],
            [1,2,3,3,3]]

m = len(canvas2D)
n = len(canvas2D[0])

x = 2
y = 2

old_color = canvas2D[x][y]
new_color = 1

floodFill(canvas2D, m, n, x, y, old_color, new_color)

for i in range(m):
    for j in range(n):
        print(canvas2D[i][j], end = ' ')
    print()    