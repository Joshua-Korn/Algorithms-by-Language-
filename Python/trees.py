class Node:
    def __init__(self, val):
        self.val = val 
        self.left = None
        self.right = None 
        
class BST:
    def __init__(self):
        self.root = None
        
    #Add method 
    def add(self, val):
        if self.root:
            runner = self.root
            while runner:
                if val > runner.val:
                    if runner.right:
                        runner = runner.right
                    else:
                        runner.right = Node(val)
                else:
                    if runner.left:
                        runner = runner.left
                    else:
                        runner.left = Node(val)
                        return self
        self.root = Node(val)
        return self
    
    #Check contained method 
    def contains(self, val):
        runner = self.root
        while runner:
            if val == runner.val:
                return True 
            
            if val < runner.val:
                if not runner.left:
                    return False
                runner = runner.left 
            else:
                if not runner.right:
                    return False
                runner = runner.right
        return False
    
    #Minimum method 
    def minimum(self):
        runner = self.root 
        min = self.root.val
        while runner.left:
            if runner.left.val < min:
                min = runner.left.val
            runner = runner.left
        return min
    
    #Maximum method
    def maximum(self):
        runner = self.root
        max = self.root.val
        while runner.right:
            if runner.right.val > max:
                max = runner.right.val
            runner = runner.right 
        return max 
    
    #Size method
    def size(self):
        if self.root == None:
            return 0 
        
        def help(runner):
            if not runner:
                return 0 
            return 1 + help(runner.left) + help(runner.right)
        return help(self.root)
    
    #Empty tree method
    def empty(self):
        if self.root:
            return False
        return True