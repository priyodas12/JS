class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);
const e = new Node(50);
const f = new Node(60);
const g = new Node(70);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

const iterateWithArray = (root) => {
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    result.push(current);

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return result;
};

const iterateWithRecursion = (root) => {
  if (root === null) return [];
  const leftElements = iterateWithRecursion(root.left);
  const rightELements = iterateWithRecursion(root.right);

  return [root.val, ...leftElements, ...rightELements];
};

const sumOfAllNodes = (root) => {
  if (root === null) {
    return 0;
  }
  console.log(root);
  let addedLeftElements = sumOfAllNodes(root.left);
  let addedRightElements = sumOfAllNodes(root.right);

  return root.val + addedLeftElements + addedRightElements;
};

const findNode = (root, key) => {
  let result = null;
  if (root === null) {
    console.log("1");
    result = false;
  }
  if (root.val === key) {
    console.log("2");
    result = true;
    return result;
  }
  console.log(root);
  if (result === false && root.left !== null) {
    findNode(root.left, key);
  }
  if (result === false && root.right !== null) {
    findNode(root.right, key);
  }
  return result;
};

//const arr1 = iterateWithArray(a);
//const arr2 = iterateWithRecursion(a);
//const arr3 = sumOfAllNodes(a);
const arr4 = findNode(a, new Node(70));

console.log(arr4);
