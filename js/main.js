/*
Ученый кот Кекс понаписал свои функции, поэтому
закоменченные пока не понадобятся.
function getRandomInteger(min, max) {
  // случайное число от min до (max+1)
  if (min>=0 && max>=0 && min < max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return false;
}

// console.log(getRandomInteger(40, 3));

function checkLength(text, max = 140) {
  if (text.length < max) {
    return true;
  }
  return false;
}

// alert(checkLength("Чебурашка", 140));
getRandomInteger(1,1);
checkLength('!', 140);
*/

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


//функция создания волшебника(подсмотрено у Кекса)
//Каждый объект массива — описание фотографии, опубликованной пользователем.
const createWizard = () => {
  //число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться
  const  ID = getRandomPositiveInteger (1, 25);

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
    //comments: comments
  };
};


// console.log(
//   createWizard()
// );

/*Прелесть метода .from() в том, что вторым аргументом ему можно передать функцию,
 результатами выполнения которой метод наполнит массив вместо undefined.

Передадим по ссылке нашу функцию createWizard,
 и метод .from() заполнит вновь созданный массив объектами с описанием волшебников.
 */

const similarWizards = Array.from({length: 4}, createWizard);
console.log(similarWizards);
