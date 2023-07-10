class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}



 export default class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data){
        const newNode = new Node(data, this.head)
        this.head = newNode;
        this.length ++;
    }

}
