class Node {
    /**
     * Represents a node object.
     * @param {string} data 
     */
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    /**
     * Represents a Binary Search Tree.
     * @constructor
     */
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);

        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if(node === null)
            return null;
        else if(key < node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else if(key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if(node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    // Tree Traversal

    /**
     * Prints out the order of the tree in order
     * @param {Node} node 
     * @returns {undefined}
     */
    inorder(node) {
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if(node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    
    postorder(node) {
        if(node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}

const bst = new BinarySearchTree();

bst.inorder('fds');