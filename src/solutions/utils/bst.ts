export class BST<T> {
	root?: BSTNode<T>;

	insert(value: T): boolean {
		if (!this.root) {
			this.root = new BSTNode(value);
			return true;
		} else if (this.root.has(value)) {
			return false;
		}
		return this.root.insert(value);
	}

	has(value: T): boolean {
		if (!this.root) return false;
		return this.root.has(value);
	}
}

class BSTNode<T> {
	value: T;
	left: BSTNode<T> | undefined;
	right: BSTNode<T> | undefined;

	constructor(value: T) {
		this.value = value;
	}

	insert(value: T): boolean {
		if (value < this.value) {
			if (this.left) return this.left.insert(value);
			this.left = new BSTNode(value);
			return true;
		}
		if (this.right) return this.right.insert(value);
		this.right = new BSTNode(value);
		return true;
	}

	has(value: T): boolean {
		if (this.value == value) return true;
		if (value < this.value) {
			if (this.left) return this.left.has(value);
			return false;
		}
		if (this.right) return this.right.has(value);
		return false;
	}
}
