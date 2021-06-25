//Binary Search

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // constructor로 만든 객체는 이진 탐색 트리의 Node가 됩니다.
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  //it recur over the tree to find the
  // data and removes it

  removeNode(root, data) {
    if (root === null) {
      return null;
    } else if (data < root.data) {
      root.left = this.removeNode(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.removeNode(root.right, data);
      return root;
    }
    // if find the data, tdelete  it
    else {
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }

      if (root.left === null) {
        root = root.right;
        return root;
      } else if (root.right === null) {
        root = root.left;
        return root;
      }
    }
    //if root node have left and right child

    let move = this.findMinNode(root.right);
    root.data = move.data;

    root.right = this.removeNode(root.right, move.data);
    return root;
  }

  // search for a node 해당 값보다는 커야하고 오른쪽 값보다는 작아야한다. 그러기때문에
  // 오른쪽 노드에 왼쪽값이 있ㄴ느지 없는지를 확인해야함.

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  getRootNode() {
    return this.root;
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  searchData(node, data) {}
}

let search = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
search.insert(15);
search.insert(25);
search.insert(10);
search.insert(7);
search.insert(22);
search.insert(17);
search.insert(13);
search.insert(5);
search.insert(9);
search.insert(27);

let root = search.getRootNode();

search.inorder(root);
