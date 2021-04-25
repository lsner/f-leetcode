/**
 * 题目描述
 * 请用两个栈实现一个队列，分别实现append、delete操作
 * 栈特点：先进后出
 * 队列特点：先进先出
 *
 * 思路 stack1用来入栈  stack2用来出栈，出栈是查找stack2中是否有值，有则直接弹出，否则将stack1中的元素压如stack2
 */

function queue() {
  this.stack1 = [];
  this.stack2 = [];
  this.append = function (v) {
    this.stack1.push(v);
  };
  this.delete = function () {
    if (stack2.length > 0) {
      this.stack2.pop();
    } else {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
      this.stack2.pop();
    }
  };
}
