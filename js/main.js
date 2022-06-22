//Функция возвращающая случайное целое число из переданного диапазона включительно:
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}
//
//Функция checkStringLength для проверки максимальной длины строки:
function checkStringLength (string, length) {
  return string.length <= length;
}


//для начала замутим массив случайных значений от
/*
const getRandomArrayNumbers = (minNumber, maxNumber) => {
  const arrayNumber = [];
  while(arrayNumber.length < 25){
    arrayNumber.push(getRandomPositiveInteger(minNumber, maxNumber));
  }
  return arrayNumber;
};
*/

//перемешаем массив с помощью алгоритма Тасование Фишера — Йетса.
//взято отсюда https://learn.javascript.ru/task/shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}


const makeArrayNumbers = (length) => {
  const arrayNumbers = [];
  for(let i=1; i<=length; i++){
    arrayNumbers.push(i);
  }

  shuffle(arrayNumbers);
  return arrayNumbers;
}

//console.log(makeArrayNumbers(25));
//замутим массив с помощью функции
const myArray = makeArrayNumbers(25);



//чужой кодец, это просто выворот мозгов, хуже чем ..вно-год.
/*
const getRandomArrayUniqueNumbers = (minNumber, maxNumber) => {
  const arrayNumber = [];
  while(arrayNumber.length < 25){
    const randomNumber = getRandomPositiveInteger(minNumber, maxNumber);
    if(arrayNumber.indexOf(randomNumber) === -1){
      arrayNumber.push(randomNumber);
    }
  }
  return arrayNumber;
};
*/


//id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.


//console.log(myArray);
//console.log(ID);




const createWizard = () => {
  const ID  = myArray.pop();
  //число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться
  //url, строка — адрес картинки вида photos/{{i}}.jpg,
  // где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
  const URL = `photos/${ID}.jpg`;


  //description, строка — описание фотографии. Описание придумайте самостоятельно.
  const DESCRIPTION = 'Описание придумал самостоятельно и так у каждой фотки, совпадение?';

  //likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  const likes = getRandomPositiveInteger (15, 200);

  // let comments = [
  //   {
  //     id: ID,
  //     avatar: 'img/avatar-6.svg',
  //     message: 'В целом всё неплохо. Но не всё.',
  //     name: 'Артём',
  //   }
  // ];

  return {
    id: ID,
    url: URL,
    description: DESCRIPTION,
    likes: likes,
    comments: createComments(),
  };
};


// console.log(
//   createWizard()
// );



//функция создания комментов
const createComments = () => {

  const commentsArray = makeArrayNumbers(25);
  const commentID  = commentsArray.pop();
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  const names = [
    'Кекс',
    'Феликс',
    'Мурзик',
    'Мурчик',
    'Дырчик',
    'Мырчик',
    'Барсик',
    'Пушок',
    'Веня',
    'Феня',
    'Вениамин',
    'Матроскин',
    'Рыжик',
    'Улыбака',
  ];
  return {
    id: commentID,
    avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
    message: messages[getRandomPositiveInteger(0, 5)],
    name: names[getRandomPositiveInteger(0, names.length - 1)]
  };


};


/*Прелесть метода .from() в том, что вторым аргументом ему можно передать функцию,
 результатами выполнения которой метод наполнит массив вместо undefined.

Передадим по ссылке нашу функцию createWizard,
 и метод .from() заполнит вновь созданный массив объектами с описанием волшебников.
 */
const similarWizards = Array.from({length: 2}, createWizard);
console.log(similarWizards);
