// The heap is a tree data structure where each node is smaller than or equal to its children if it's a min-heap, or greater than or equal to its children if it's a max heap, depending on the type

// For min-heap root is smallest Element, for max heap root is largest element

class Heap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (parent <= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    extractMin() {
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return min;
    }

    sinkDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;
        let length = this.heap.length;

        if (left < length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [
                this.heap[index],
                this.heap[smallest],
            ];
            this.sinkDown(smallest);
        }
    }
}
