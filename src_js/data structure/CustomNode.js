class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

const depthFirstValue = (root) => {
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

const arr = depthFirstValue(a);

console.log(arr);
