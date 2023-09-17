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
}