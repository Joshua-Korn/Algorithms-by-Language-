class Node:
    def __init__(self, val):
        self.val = val
        self.next = None 

class List:
    def __init__(self):
        self.head = None
    
    #Front value 
    def front(self):
        if self.head:
            return self.head.val
        
    #Remove front 
    def remove_front(self):
        if self.head:
            self.head = self.head.next

    #Add to the front 
    def add_front(self,val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node