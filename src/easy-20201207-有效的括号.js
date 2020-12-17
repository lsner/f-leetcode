/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}[]"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[()]}"
输出: true


*/

const bracketsMap = {
  s: ["(", ")"],
  m: ["[", "]"],
  l: ["{", "}"]
};

function isMatch(left, right) {
  return (
    (left === bracketsMap.s[0] && right === bracketsMap.s[1]) ||
    (left === bracketsMap.m[0] && right === bracketsMap.m[1]) ||
    (left === bracketsMap.l[0] && right === bracketsMap.l[1])
  );
}

function isValid(str) {
  let len = str.length;
  if (len < 2) return false;
  if (len % 2 !== 0) return false;

  let stack = [];

  for (let i = 0; i < len; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
    } else {
      if (isMatch(stack[stack.length - 1], str[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length;
}

//()[]{}
//[[[]
console.log(isValid("[[[]"));
