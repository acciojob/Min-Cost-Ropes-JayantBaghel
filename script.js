class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] <= this.heap[smallerChildIndex]) {
                break;
            }
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    size() {
        return this.heap.length;
    }
}

function mincost(arr)
{ 
//write your code here
// return the min cost
  const heap = new MinHeap();
    arr.forEach(length => heap.push(length));

    let totalCost = 0;

    while (heap.size() > 1) {
        const first = heap.pop();
        const second = heap.pop();

        const cost = first + second;
        totalCost += cost;

        heap.push(cost);
    }

    return totalCost;
}

module.exports=mincost;
