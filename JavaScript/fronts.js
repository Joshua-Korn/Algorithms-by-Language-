class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    front() { //return the value at the head of the list 
        if(this.head != null)
            return this.head.data;
    }

    removeFront() { // remove head value from front of list
        if(this.head != null)
            this.head = curr.next;
    }

    add(data) { //add an element to the list 
        var node = new Node(data);
        var current;

        if (this.head == null)
        this.head = node;
        else {
            current = this.head

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
}