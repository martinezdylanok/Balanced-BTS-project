import Node from "./node.js";

export default class Tree {
    constructor (array) {
        this.root = this.buildTree(array);
    }

    sortAndRemoveDuplicates(array) {

        const SORTED_ARRAY = [...new Set(array)].sort((a, b) => a - b);

        return SORTED_ARRAY;
    }

    buildTree(array) {

        const SORTED_ARRAY = this.sortAndRemoveDuplicates(array);

        if(SORTED_ARRAY.length === 0) return null;

        const MID = parseInt(SORTED_ARRAY.length / 2);
        let root = new Node (
            SORTED_ARRAY[MID],
            this.buildTree(SORTED_ARRAY.slice(0, MID)),
            this.buildTree(SORTED_ARRAY.slice(MID + 1))
        );

        return root;
    }

    insert(value, root = this.root) {
        if (root === null) return new Node(value);

        root.data < value
            ? (root.right = this.insert(value, root.right))
            : (root.left = this.insert(value, root.left));
        return root;
    }
}