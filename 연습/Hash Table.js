//해쉬 테이블이란? 헤쉬 맵이라도불리며 키와 벨류값으로 이뤄져있는 자료구조이다.
//해쉬테이블은 탐색,추가,삭제에 효율적이다.
//데이터는 해쉬함수를 통해 키와벨류값으로 헤쉬테이블에 저장되어진다.
//해쉬함수(매핑함수)는 오직 해당데이터만 갖을수 있는 해쉬코드를 얻게해주는 함수이다. 해쉬코드는 키와 벨류값의 인덱스를 결정해준다.
//해쉬 테이블은 자바스크립트에서 일반적으로 배열을 사용하여 만들어진다.
//해쉬함수를 거처 유일한 해쉬코드를 만들지만 똑같은 해쉬코드를 갖을 경우가있다.
//링크드 리스트를 구현하여 해결하는 방법이있다.

class HashTable {
  constructor() {
    this.buckets = {};
    this.length = 1;
  }

  calculateHash(key) {
    return key.toString().length % this.length;
  }

  add(key, value) {
    const hash = this.calculateHash(key);
    if (!this.buckets.hasOwnProperty(hash)) {
      this.buckets[hash] = {};
    }
    if (!this.buckets[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.buckets[hash][key] = value;
  }
  delete(key) {
    const hash = this.calculateHash(key);
    if (this.buckets.hasOwnProperty(hash)) {
      delete this.buckets[hash][key];
    }
  }

  search(key) {
    const hash = this.calculateHash(key);
    if (
      this.buckets.hasOwnProperty(hash) &&
      this.buckets[hash].hasOwnProperty(key)
    ) {
      return this.buckets[hash][key];
    } else {
      return null;
    }
  }

  display() {
    console.log(this.buckets, this.length);
  }
}

//create object of type hash table
const ht = new HashTable();
//add data to the hash table ht
ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "50");
ht.add("korea", "10");

//search
ht.display();
