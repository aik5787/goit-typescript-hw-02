/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/


interface Person {
  0: string;
  1: number;
}

let person: Person = ['Max', 21];

export {};