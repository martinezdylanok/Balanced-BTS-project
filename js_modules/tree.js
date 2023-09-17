import node from "./node";

export default class tree {
    constructor (array) {
        const sortedArray = sortAndRemoveDuplicates(array);
        this.root = buildTree(sortedArray, 0, sortedArray.lengt - 1);
    }

    sortAndRemoveDuplicates(array) {

        const sortedArray = array.sort((a, b) => a - b);

        return sortedArray.filter((value, index, self) => self.indexOf(value) === index);
    }

    buildTree(array, start, end) {

        if (start > end) {
            return null;
        }

        let mid = parseInt(start + end) / 2;

        let root = new node(array[mid]);
        root.leftChild = buildTree(array, start, mid - 1);
        root.rightChild = buildTree(array, mid + 1, end);

        return root;
    }
}