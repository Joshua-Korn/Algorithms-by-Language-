class Node:
    def __init__(self, val):
        self.val = val
        self.next = None 

class List:
    def __init__(self):
        self.head = None
    
    #Contain method 
    def contains(self, val):
        runner = self.head
        while(runner):
            if runner.val == val:
                return True
            runner = runner.next
        return False
    
    def add_front(self,val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        return self
    
    #Length 
    def length(self):
        runner = self.head 
        length = 0 
        while(runner):
            length += 1
            runner = runner.next 
        return length
    
    #Display 
    def display(self):
        runner = self.head 
        str= ""
        while(runner):
            str += f'{runner.val} -->'
            runner = runner.next
        return str
    
    def max(self):
        max = self.head
        runner = self.head
        while(runner):
            if runner.val > max.val:
                max = runner
            runner = runner.next
        return max.val
    
    def min(self):
        min = self.head
        runner = self.head
        while(runner):
            if runner.val < min.val:
                min = runner
            runner = runner.next
        return min.val
    
    def avg(self):
        sum = 0
        runner = self.head
        while(runner):
            sum += runner.val
            runner = runner.next 
        return sum / self.length()
    
new_list = List()
new_list.add_front(1).add_front(2).add_front(4).add_front(5)

average = new_list.avg()
print(average)