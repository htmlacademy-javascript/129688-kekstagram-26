import {getRandomPositiveInteger, shuffle} from './func.js';

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


const makeArrayNumbers = (length) => {
  const arrayNumbers = [];
  for(let i=1; i<=length; i++){
    arrayNumbers.push(i);
  }

  shuffle(arrayNumbers);
  return arrayNumbers;
};
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


const createPhoto = () => {
  const ID  = myArray.pop();
  //число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться
  //url, строка — адрес картинки вида photos/{{i}}.jpg,
  // где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
  const URL = `photos/${ID}.jpg`;


  //description, строка — описание фотографии. Описание придумайте самостоятельно.
  const DESCRIPTION = 'Описание придумал самостоятельно и так у каждой фотки, совпадение?';

  //likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  const likes = getRandomPositiveInteger (15, 200);

  return {
    id: ID,
    url: URL,
    description: DESCRIPTION,
    likes: likes,
    comments: createComments(),
  };
};

/*Прелесть метода .from() в том, что вторым аргументом ему можно передать функцию,
 результатами выполнения которой метод наполнит массив вместо undefined.

Передадим по ссылке нашу функцию createWizard,
 и метод .from() заполнит вновь созданный массив объектами с описанием волшебников.
 */
const createPhotoPack = Array.from({length: 25}, createPhoto);
//console.log(createPhotoPack);
export {createPhotoPack};
