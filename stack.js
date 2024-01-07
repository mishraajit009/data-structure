class Node {
    constructor(value){
        this.head = value
        this.next = null
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(element){
        var node = new Node(element)
        // to store current value
        if (this.head == null){
            this.head = node;
        }
        else{
            var current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++;
    }

    insertAtGivenIndex(index,value){
    if (index < 0 || this.size < index){
        console.log("Invalid Index")
    }
    else{
        var node = new Node(value)
        var current = this.head
        var prev, next;
        var i = 0
        if(index === 0){
            //var this.head = current
        }
    }
    }

    printSize(){
        return this.size
    }

    printList(){
       var current = this.head
        if(current.head == null){
            console.log("Empty linked list");
        }else{
            while(current !== null){
                console.log("Current value",current.head);
                current = current.next
            }
        }
    }
}
var l1 = new Linkedlist()
debugger;
l1.add(5)
debugger;
l1.add(6);
debugger;
l1.add(7);
l1.printList();