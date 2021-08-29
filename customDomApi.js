class Node {
  constructor(name) {
    this.name = name;
    this.innerHTML = "";
    this.children = [];
  }
  
  appendChild(node) {
    this.children.push(node);
  }
}

const INDENT_SIZE = 4;
const getSpaces = (length) => {
  return new Array(length).fill(" ").join("");
}

class VDocument extends Node {
  constructor() {
    super("html");
  }
  
  createElement(nodeName) {
    return new Node(nodeName);
  }
  
  render() {
    function printTree(currentNode, currentLevel) {
      const spaces = getSpaces(currentLevel*INDENT_SIZE);
      
      let output = "";
      
      // opening tag
      output += `${spaces}<${currentNode.name}>\n`;
      
      if (currentNode.innerHTML) {
        output += `${spaces}${getSpaces(INDENT_SIZE)}${currentNode.innerHTML}\n`;
      }
      for (let i=0; i<currentNode.children.length; i++) {
        output += printTree(currentNode.children[i], currentLevel+1);
      }
      
      // closing tag
      output += `${spaces}</${currentNode.name}>\n`;
      
      return output;
    }
    return printTree(this, 0);
  }
}

var vDocument = new VDocument();
const body = vDocument.createElement("body");
const div1 = vDocument.createElement("div");
const div2 = vDocument.createElement("div");
const div3 = vDocument.createElement("div");

div1.innerHTML = "Hello, this is div1 content!";
div2.innerHTML = "Hello, this is div2 content!";
div3.innerHTML = "Hello, this is div3 content!";

div1.appendChild(div2);
div2.appendChild(div3);
body.appendChild(div1);
vDocument.appendChild(body);

console.log(vDocument.render());
