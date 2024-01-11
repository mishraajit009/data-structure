class Node {
    constructor(value){
        this.element = value
        this.next = null
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
        debugger
        this.size = 0;
        debugger
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
        var curr, prev;
        
        if(index === 0){
            //var this.head = current
            this.head = value
            this.next = current
        }else{
          curr = this.head
          var it = 0
          while(it < index){  
            it++;
            prev = curr
            curr =  curr.next
          }
          node.next = curr
          prev.next = node
        }
        this.size++
    }
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            console.log("Invalid Index")
        }else{
            var curr,prev;
            var it=0;
            curr = this.head
            if(index === 0){
                this.head = curr.next
            }else{
                while(it<index){
                    it++;
                    prev = curr
                    curr =  curr.next
                }
                // Logic to remove index
                prev.next = curr.next
            }
            this.size--;
            console.log("Remove index "+index +" Remove value "+curr.element)
            return curr
        }
    }

    printSize(){
        return this.size
    }

    printList(){
       var current = this.head
        if(current.element == null){
            console.log("Empty linked list");
        }else{
            while(current !== null){
                console.log("Current value",current.element);
                current = current.next
            }
            console.log("******EXIT********");
        }
    }
}
var l1 = new Linkedlist()

l1.add(5)
debugger
l1.add(6);
debugger
l1.add(7);
debugger
l1.printList();
l1.insertAtGivenIndex(2,9)
l1.insertAtGivenIndex(27,9)
l1.removeFrom(2)
l1.add(29)
l1.add(28)
l1.printList();
console.log(l1.head)