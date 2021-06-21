// max힙 연습코드
//힙을 사용하는 목적은 최댓값 또는 최솟값을 쉽게 뽑기위한 '자료구조' 이다.
//중복값 허용한다.
//완전 이진트리 === 왼쪽부터 차례대로 채워져있어야한다.
// 힙은 complete binary tree 형태로 이뤄져야하며, max heap은 노드값이 큰순서대로 내려가며
// min heap은 노드값이 작은 순서대로 내려간다.
// max heap 은 priority queue 와 많은 공통점이있다.
//priority queue의 우선순의가 높은 노드가 결국 max heap의 루트 노드이다.
//parent node 찾기 = Math.floor((index-1)/2);
//left child 찾기  = (index*2)+1;
//right child 찾기  = (index*2)+2;
// leaf 노드 갯수 = (number of nodes +1)/2

// let array = [5, 4, 3, 1, 2, 0];

class maxHeap {
  constructor() {
    this.values = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  //인덱스에 해당하는 노드에 자식이 있는지 없는지 확인한다.
  isLeaf(index) {
    return index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1;
  }

  // 자바스크립트에서 배열의 원소끼리 swap 할때
  //([array[1], array[4]] = [array[4], array[1]]) 이런식으로하면 편하게 스왑가능.
  // ES6 destructuring

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
  }

  //노드를 추가한다. max heap 은 마지막 노드에 추가된다.(완전 이진 트리므로)
  //추가된 노드는 max heap 구조를 유지할때까지 부모노드를 비교하며 swap 해 나간다.

  add(element) {
    // console.log("add ====>", element);
    this.values.push(element);
    //추가된 노드는 가장 마지막 인덱스에 있으므로 마지막 인덱스를 인자로 넘겨준다.

    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(lastIndex) {
    let currentIndex = lastIndex;

    //앞에서 작성한 parent 함수를 호출하여 부모노드를 찾는다.
    let parentIndex = this.parent(currentIndex);

    // console.log("heaping", this.values, "curindex", currentIndex, "parentindex", parentIndex);

    // 현재 노드가 부모 노드보다 작아질때까지 그리고 현재 노드가 노드에 도착할때까지 계속해서 스왑한다.
    while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
      //while 조건에 맞으므로 부모노드랑 현재 노드랑 스왑한다.
      this.swap(currentIndex, parentIndex);

      //현재 노드와 부모노드와의 스왑이 성공했으므로 현재노드는 부모노드의 인덱스가되고
      currentIndex = parentIndex;
      //부모노드는 현재 부모노드의 부모노드 인덱스가 된다.
      parentIndex = this.parent(parentIndex);

      // console.log("swapping", this.values);
    }
  }

  //삭제는 루트 노드만 삭제할수있다. max heap 일 경우에는 최대값, min heap 에는 최솟값
  //priority queue 처럼 우선순위가 가장 높은 노드를 출력하는것 (max heap 의 루트노드)
  //루트노드가 삭제되면 가장 마지막에 있는 노드를 가져오고 힙을 재구성한다.

  extractMax() {
    //비어있는 경우
    if (this.values.length < 1) {
      return "Empty heap";
    }

    const maxNode = this.values[0];
    const lastNode = this.values.pop();

    //maxNode를 가져오고나서 lastNode로 재배치한다.

    this.values[0] = lastNode;

    //마지막 노드가 최상단 루트 노드에 있으므로 max heap 을 재구성 하기위해서
    //밑으로 노드를 탐색하면서 재배치한다.

    //재배치할 타겟 index 는 0 이므로 인자를 0으로 넘겨준다.
    this.heapifyDown(0);

    //재배치가 성공적으로 이뤄지고나면 maxNode를 반환해준다.
    return maxNode;
  }

  //마지막 노드가 루트노드에 있으므로 노드 밑으로 탐색하며 재배치가 필요하다.
  heapifyDown(index) {
    //탐색할때 parent 노드가 child node가 있을 경우 탐색을 시작함.
    //그렇지 않으면 더이상 내려갈 곳이 없기 때문에 탐색 중지함.
    if (!this.isLeaf(index)) {
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);

      //child와 비교하기위해서 가장큰 인덱스를 루트노드 인덱스로 초기화 시키고 시작한다.
      let largestIndex = index;

      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        largestIndex = leftChildIndex;
      }

      if (this.values[rightChildIndex] > this.values[largestIndex]) {
        largestIndex = rightChildIndex;
      }

      //child 노드의 값이 큰경우
      if (largestIndex !== index) {
        this.swap(index, largestIndex);

        // 스왑이 되었고 밑에 노드로 계속해서 탐색
        // largetstIndex 는 교환되어질 값의 인덱스.
        this.heapifyDown(largestIndex);
      }
    }
  }

  //heapifyDown 을 사용할수 있으므로 배열형태로 받았을때 max heap 구조로 만들수있다!!
  //   buildHeap(array){
  //     this.values =array;
  //   }

  findMax() {
    return this.values[0];
  }

  buildHeap(array) {
    this.values = array;
    // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  print() {
    let i = 0;
    // console.log("result ==========>", this.values);

    console.log(this.values);
    // while (!this.isLeaf(i)) {
    //   console.log("PARENT:", this.values[i]);
    //   console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
    //   console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
    //   i++;
    // }
  }

  buildHeap(array) {
    if (array.length < 1) {
      return "Empty heap";
    }
    this.values = array;
    // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  sort(array) {
    this.buildHeap(array);

    let arrLength = this.values.length;

    for (let i = this.values.length - 1; i > 0; i--) {
      this.swap(0, i);
      arrLength--;

      this.heapifyDown(0);
    }

    console.log(this.values);

    // const maxNode = this.values[0];
    // const lastNode = this.values.pop();

    // //maxNode를 가져오고나서 lastNode로 재배치한다.

    // this.values[0] = lastNode;

    // //마지막 노드가 최상단 루트 노드에 있으므로 max heap 을 재구성 하기위해서
    // //밑으로 노드를 탐색하면서 재배치한다.

    // //재배치할 타겟 index 는 0 이므로 인자를 0으로 넘겨준다.
    // this.heapifyDown(0);

    // //재배치가 성공적으로 이뤄지고나면 maxNode를 반환해준다.
    // return maxNode;
  }
}

// let newHeap = new maxHeap();

// newHeap.add(6);

// newHeap.add(5);

// newHeap.add(3);

// newHeap.add(1);
// newHeap.add(8);
// newHeap.add(7);

// newHeap.add(2);
// newHeap.add(4);

// newHeap.print();

// newHeap.sort([6, 5, 3, 1, 8, 7, 2, 4]);

let array = [0, 1, 2, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0];

class Heap {
  constructor() {
    this.values = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  left(index) {
    return index * 2 + 1;
  }

  right(index) {
    return index * 2 + 2;
  }

  add(element) {
    if (element === 0) {
      console.log(this.extractMax());
    }
    this.values.push(element);

    this.heapifyUp(this.values.length - 1);
  }

  swap(a, b) {
    [this.values[a], this.values[b]] = [this.values[b], this.values[a]];
  }

  // 엘레멘터를 끝에다가 추가하면 위로 계속해서 올려줘야함.
  heapifyUp(index) {
    let parentIndex = this.parent(index);
    let currentIndex = index;

    while (currentIndex > 0 && this.values[parentIndex] < this.values[currentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }

  extractMax() {
    //제일큰 숫자와 마지막 숫자랑 스왑함.
    if (this.values.length === 0) {
      return 0;
    }

    let maxElement = this.values[0];
    this.swap(0, this.values.length - 1);

    this.values.pop();

    //마지막이랑 스왑했으니 heapyDown 을 사용해서 밑에까지 다시 heap한다.
    this.heapifyDown(0);

    //힙에 성공하면 최댓값 출력한다.
    return maxElement;
  }

  LeafNode(index) {
    return index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1;
  }
  heapifyDown(index) {
    let largestIndex = index;
    let leftIndex = this.left(index);
    let rightIndex = this.right(index);

    if (!this.LeafNode(largestIndex)) {
      if (this.values[largestIndex] < this.values[leftIndex]) {
        largestIndex = leftIndex;
      }
      if (this.values[largestIndex] < this.values[rightIndex]) {
        largestIndex = rightIndex;
      }
      if (largestIndex !== index) {
        this.swap(index, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }
  }

  buildHeap(array) {
    if (array.length < 1) {
      return "Empty heap";
    }
    this.values = array;
    // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
  sort(array) {
    this.buildHeap(array);
  }

  findMax() {
    return this.values[0];
  }

  print() {
    console.log(this.values);
  }
}

let newHeap2 = new Heap();

newHeap2.add(0);

newHeap2.add(1);

newHeap2.add(2);

newHeap2.add(0);

newHeap2.add(0);

newHeap2.add(3);

newHeap2.add(2);

newHeap2.add(1);
newHeap2.add(0);
newHeap2.add(0);
newHeap2.add(0);
newHeap2.add(0);
newHeap2.add(0);
