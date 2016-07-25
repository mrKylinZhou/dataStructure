function Node(element){
	this.element = element;
	this.next = null;
}

function LList(){
	this.head = new Node("head");
}

LList.prototype = {
	constructor : LList,
	find : function(item){
		var currNode = this.head;
		while(currNode.element != item){
			currNode = currNode.next;
		}
		if(currNode == null){
			return false;
		}
		return currNode;
	},
	remove : function(item){
		var prevNode = this.findPrevious(item);
		if(!(prevNode.next == null)){
			prevNode.next = prevNode.next.next;
		}
		else{
			console.log("can't find " + item);
		}
	},
	findPrevious : function(item){
		var currNode = this.head;
		while(!(currNode.next == null) && (currNode.next.element != item)){
			currNode = currNode.next;
		}
		return currNode;
	},
	insert : function(newElement, item){
		var newNode = new Node(newElement);
		var current = this.find(item);
		if(!!current){
			newNode.next = current.next;
			current.next = newNode;
		}
		else{
			console.log("can't find " + item);
		}
	},
	display : function(){
		var currNode = this.head;
		while(!(currNode.next == null)){
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
}
