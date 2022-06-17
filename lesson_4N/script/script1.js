/*

Создайте функцию, которая принимает в качестве аргументов
объект и ключ объекта, а возвращает значение объекта, 
доступное по этому ключу.

Пример: ({ 'key': 'property' }, 'key') => 'property'

*/

// function objValue(obj, key){
//     return obj[key]
//   }
  
//   console.log(objValue({ 'key': 'property' }, 'key')) // => 'property'
//   console.log(objValue({ 'name': 'Nelli' }, 'name')) // => 'Nelli'
  

// const obj = {
//   firstName: 'Nelli',
//   age: 27
// }

// console.log(obj.firstName);
// console.log(obj['firstName']);
// console.log(obj['age']);

//---------------------------------------------------

// const users = [
//     {
//       first_name: 'Ivan',
//       last_name: 'Ivanov',
//       age: 20,
//       salary: 500
//     },
  
//     {
//       first_name: 'Olga',
//       last_name: 'Petrova',
//       age: 12,
//       salary: 250
//     },
  
//     {
//       first_name: 'Irina',
//       last_name: 'Alexandrova',
//       age: 46,
//       salary: 1500
//     },
  
//     {
//       first_name: 'Denis',
//       last_name: 'Sokolov',
//       age: 30,
//       salary: 760
//     }
//   ]

  //1. Пройдитесь по массиву с объектами циклом forEach
  // и выведите каждый элемент в консоль
  
//   users.forEach(function(elem){
//     console.log(elem.first_name);
//     console.log(`Имя пользователя: ${elem.first_name} ${elem.last_name}. Возраст пользователя: ${elem.age}. Зарплата: ${elem.salary}`);
//   });

//--------------------------------------------------------

//Сформируйте массив, состоящий только из 
//имен и фамилий пользователей.
//Выведите результат в консоль.
//['Ivan Ivanov', 'Olga Petrova', 'Irina Alexandrova', 'Denis Sokolov']

// const peopel = users.map(function(elem){
//     return `${elem.first_name} ${elem.last_name}`
// })

// console.log(peopel);
//---------------------------------------------------------

//Сформируйте массив из совершеннолетних пользователей.
//  И выведите в консоль результат в формате: 
// <Имя> <Фамилия> (<возраст>): <зарплата>. ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']

// const peopele = users.filter(function(elem){
//         return elem.age >= 18;
// })
            //или
// const people_adults = users
// .filter(function({age}){
//     return age >= 18
// })
// .map(function({first_name, last_name, age, salary}){
//     return `${first_name} ${last_name} (${age}): ${salary}`
// })

// console.log(people_adults);
//------------------------------------------------------------



