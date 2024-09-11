// https://github.com/ArtemRysich/Group_77

// https://developer.mozilla.org/en-US/
// https://uk.javascript.info/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

// ---------------- Exemple 1 ----------------
// Ключове слово - let

// console.log('Hello world');

// let value;
// console.log('let:', value);

// value = 1;
// console.log('value:', value);

// ---------------- Exemple 2 ----------------
// Сувора та несувора рівність (приведення типів при порівнянні)

// console.log(3 === '3'); // Number vs String
// console.log(3 == '3'); // Number vs Number

// ---------------- Exemple 3 ----------------
// Шість фолсі значень (6 Falsy values)

// 1. undefined   => false
// 2. null        => false
// 4. NaN         => false
// 3. 0           => false
// 5. ''          => false
// 6. false       => false

// ---------------- Exemple 4 ----------------
// console.log(Boolean('false'));   => true
// console.log(!!'false');          => true

// ---------------- Exemple 5 ----------------
// Ключове слово - var

// const a = 10;
// a = a + 2;
// a += 2
// a = 12;

// let b; // undefined
// b = 15;
// b = '15';

// console.log(b);
// console.log(a);

// var a = 10;
// console.log(a);

// ---------------- Exemple 6 ----------------
// Примітивні типи даних - імутабельні типи даних
// 1 Number
// 2 String
// 3 Boolean

// 4 Undefined
// 5 Null

//! -------------------------------------------------
// ----- Example 1 - Математичні оператори -----
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// console.log(total);

// const diff = grapes - apples;
// console.log(diff);

// ----- Example 2 - Комбіновані оператори -----
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;

// students = students + 50;
// students += 50;

// console.log(students);

// ----- Example 3 - Пріоритет операторів -----
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ----- Example 4 - Клас Math -----
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round().
// Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.8;

// console.log('value:', Math.ceil(value));   // Округлить завжди в сторону більшого цілочисельного значення
// console.log('value:', Math.floor(value));  // Округлить завжди в сторону меньшого цілочисельного значення
// console.log('value:', Math.round(value));  // Округлить завжди по математичному принципу

// ----- Example 5 - Шаблонні рядки -----
// Склади речення за допомогою шаблонних рядків "A has B bots in stock", де A, B - змінні вставлені в рядок.

// const name = 'Artem';
// const age = 28;

// const result = name + ' years ' + age;
// console.log(result);

//  String являється домінуючим типом даних
// const c = 10 + 22 + '11' + 44;
// console.log('const c =', c);
// console.log(typeof c);

// const a = 2 * '3';
// console.log('const a =', a);
// console.log(typeof a);

// const b = 6 - '3';
// console.log('const b =', b);
// console.log(typeof b);

// const value = 10;
// const value_2 = '15';
// const result = value - value_2;
// // const result = value - Number(value_2);
// console.log('result:', result);

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// // const message =
// //   companyName +
// //   ' ' +
// //   'has' +
// //   ' ' +
// //   (repairBots + defenceBots) +
// //   ' bots in stock ';
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ----- Example 6 - Методи рядків та чейнінг -----
// Напиши скрипт, який розраховує індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання).
// Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7, тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));
// height = Number(height.replace(',', '.'));

// // height = +height;
// // Boolean
// // !!

// console.log(typeof height);

// console.log('weight:', weight);
// console.log('height:', height);

// // let BMI = weight / Math.pow(height, 2);
// // BMI = Number(BMI.toFixed(1));
// const BMI = Number((weight / height ** 2).toFixed(1));

// console.log('Body Mass Index (BMI):', BMI);

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

// ----- Example 7 - Оператори порівняння та приведення типів -----
// Яким буде результат виразів?

// console.log(5 > 4);                //true
// console.log(10 >= '7');            // true (неявне приведення до числа)
// // https://unicode-table.com/en/#0031
// console.log('2' >= '2');           // true або '2' >= '2' => unicode => 32 >= 32
// console.log('2' < '12');           // '2' < '1' => unicode => 32 < 31
// console.log('4' == 4);             // true або 4 == 4 (неявне приведення до числа)
// console.log('6' === 6);            // false (суворе порівняння по типу)
// console.log('false' === false);    // false (суворе порівняння по типу)

// // true => 1
// // false => 0

// console.log(1 == true);              // true (неявне приведення до числа)
// console.log(1 === true);             // false (суворе порівняння по типу)
// console.log('0' == false);           // true (неявне приведення до числа)
// console.log('0' === false);          // false (суворе порівняння по типу)
// console.log('Papaya' < 'papaya');    // true або 'P' < 'p' => unicode => 50 < 70
// console.log('Papaya' === 'papaya');  // false або 'P' < 'p' => unicode => 50 === 70

// -----
// console.log('papaya' < 'papaub');    // false => unicode => 79 < 75
// // перевіряє посимвольно, якщо значення рівні переходить до наступного символу

// // 1. p => 70 < p => 70   // ні, вони рівні (70 == 70), йдемо далі
// // 2. a 61 < a 61         // ні, вони рівні (61 == 61), йдемо далі
// // 3. p 70 < p 70         // ні, вони рівні (70 == 70), йдемо далі
// // 4. a 61 < a 61         // ні, вони рівні (61 == 61), йдемо далі
// // 5. y 79 < u 75         // ні, 79 < 75 => false, 79 більше за 75, умова не виконується, далі не порівнює
// -----

// console.log(undefined == null);      // true => 0 == 0 (неявне приведення типів до числа)
// console.log(undefined === null);     // false

// ----- Перевірка на рівність NaN -----
// NaN є нерівним (за допомогою порівняння через ==, !=, ===, and !==)
// будь-якому іншому значенню, включаючи інше значення NaN.

// console.log(false === NaN);               // false
// console.log(null === NaN);                // false
// console.log(NaN === NaN);                 // false

// Використовуйте Number.isNaN() або isNaN(), щоб найбільш зрозумілим чином визначити, чи є значення NaN.
// console.log(isNaN(NaN) === isNaN(NaN));    // true
// console.log(isNaN(NaN));                   // true
// console.log(isNaN('NaN'));                 // true

// Або виконайте самопорівняння:
// NaN, і тільки NaN, в результаті такого порівняння буде нерівним самому собі!

// console.log(NaN !== NaN);                 // true

// function valueIsNaN(v) {
//   return v !== v;
// }

// console.log(valueIsNaN(NaN));            // true
// console.log(valueIsNaN('NaN'));          // false

// ----- Example 8 - Логічні оператори -----
// Логічне І ( && )
// Повертає перше значення яке приведеться до false або останне true

// Яким буде результат виразів?
// console.log(true && 3);              // 3
//             true   true

// console.log(false && 3);             // false
//             false

// console.log(true && 4 && 'kiwi');    // kiwi
//             true   true   true

// console.log(true && 0 && 'kiwi');    // 0
//             true  false

// Логічне АБО ( || )
// Повертає перше значення яке приведеться до true або останне false

// Яким буде результат виразів?
// console.log(true || 3); // true
//             true

// console.log( 3 ||true || 4); // 3
//            true

// console.log('sdafgh' || false || 7); // 'sdafgh'
//               true

// console.log(null || 2 || undefined); // 2
//            false   true

//-----
// console.log((1 && null && 2) > 0); // false
// a)   1 && null && 2 => null
// b)   null > 0 => Number(null) > 0 (неявне приведення типів до числа) => 0 > 0 => false

// -----
// console.log(null || (2 && 3) || 4); // 3

// a)   2 && 3 => 3 (Логічне I (&&) Повертає перший false або останній true)
//    true  true

// b)   null || 3 || 4 => 3 (Логічне АБО (||) Повертає перший true або останній false)
//      false  true

// ----- Example 9 - Значення за замовчуванням та оператор нульового злиття (??) -----
// Логічне АБО (||) працює на 6 значень які повертають false
// 1 undefined    => false
// 2 null         => false
// 3 0            => false
// 4 NaN          => false
// 5 ''           => false
// 6 false        => false

// const value = null;
// const value = undefined;
// const value = NaN;
// const value = false;
// const value = '';
// const value = 0;

// const result = value || 'Значення за замовчуванням';
// console.log(result);

// -----
// Оператор нульового злиття (??) він працює на 2 значення null та undefined
// const value = null;
// const value = undefined;
// const value = NaN;
// const value = false;
// const value = '';
// const value = 0;

// const result = value ?? 'Значення за замовчуванням';
// console.log(result);

// -----
// const incomingValue = 5;
// const result = incomingValue + Number('a11'); // 16
// console.log('result:', result);

// let test = 0;
// console.log('test:', test);
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// const value = test ?? 'some value';
// console.log('value:', value);

// const defaultValue = 10;
// const total = result || defaultValue;
// console.log('total:', total);
