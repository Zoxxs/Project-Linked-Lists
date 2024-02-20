import LinkedList from './linkedList.js'

// Tests
const linkedList = new LinkedList();

linkedList.append('Steph');
linkedList.prepend('Luka');
linkedList.prepend('Devin');
linkedList.prepend('Kevin');

console.log(linkedList.size()); // 4
console.log(linkedList.contains('Steph')); // true
console.log(linkedList.find('Steph')); // 3
console.log(linkedList.toString()); // Kevin -> Devin -> Luka -> Steph -> null

linkedList.insertAt('Michael', 0);
console.log(linkedList.toString()); // Michael -> Kevin -> Devin -> Luka -> Steph -> null

console.log(linkedList.removeAt(0)); // Michael
console.log(linkedList.toString()); // Kevin -> Devin -> Luka -> Steph -> null