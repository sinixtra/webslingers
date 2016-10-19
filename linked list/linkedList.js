/**im using a constructor to allow
me to make more then one list **/
function linkedList() {
    this.head = null;
}

/** i use this method to let me know
if the list is empty or not**/
linkedList.prototype.isEmpty = function() {
    return this.head === null;
};

/**this method will alow me to know the lenght/amount
of nodes in the list **/
linkedList.prototype.size = function() {
    var current = this.head;
    var count = 0;

    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
};

/** i use this method to allow me to add nodes to
the begining of the list**/
linkedList.prototype.prepend = function(val) {
    var newNode = {
        data: val,
        //this will make it so the the old head
        // becomes the next
        next: this.head
    };
    //changes the new node to the new head
    this.head = newNode;
};

/**this is used to append the new node to the list
it takes the isEmpty() to determine if the new node
should be made into the head**/
linkedList.prototype.append = function(val) {
    var newNode = {
        data: val,
        next: null;
    };

    if (this.isEmpty()) {
        this.head = newNode;
        return;
    }
    /**this var is used to select a node and check for
    the next node in list**/
    var current = this.head;
    /** iterates through the list checking if next is not
    null so that we can set current to the item we will
    change to the val**/
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
};

// i use this to check list for a certain data/val
linkedList.prototype.contains = function(val) {
    // this sets the start of loop to the head
    var current = this.head;
    while (current !== null) {
        if (current.data === val) {
            return true;
        }
        current = current.next;
    }
    return false;
};


linkedList.prototype.remove = function(val) {
    if (!this.contains(val)) {
        return;
    }
    if (this.head.data === val) {
        this.head = this.head.next;
        return;
    }

    var prev = null;
    var curr = this.head;

    while (curr.data !== val) {
        prev = curr;
        curr = curr.next;
    }

    prev.next = curr.next;

};

linkedList.prototype.print = function() {
    var output = '[';
    var currnet = this.head;

    while (current !== null) {
        outut += current.data;
        if (current.next !== null) {
            output += ', ';
        }
        current = current.next;
    }
    output += ']';
    console.log(output);
};

var list = new linkedList();
