function Node(data , left, right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show(){
	return this.data;
}

function BST(){
	this.root = null;
}

BST.prototype = {
	constructor : BST,
	insert : function(data){
		var n = new Node(data,null,null);
		if(this.root == null){
			this.root = n;
		}
		else{
			var current = this.root;
			var parent;
			while(true){
				parent = current;
				if(data < current.data){
					current = current.left;
					if(current == null){
						parent.left = n;
						break;
					}
				}
				else{
					current = current.right;
					if(current == null){
						parent.right = n;
						break;
					}
				}
			}
		}
	}
}

function inOrder(node){
	if(!(node == null)){
		inOrder(node.left);  //arguments.callee(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

function preOrder(node){
	if(!(node == null)){
		console.log(node.show() + " ");
		preOrder(node.left);  //arguments.callee(node.left);
		preOrder(node.right);
	}
}

function postOrder(node){
	if(!(node == null)){
		postOrder(node.left);  //arguments.callee(node.left);
		postOrder(node.right);
		console.log(node.show() + " ");
	}
}