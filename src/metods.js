/*Числа*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1,  3, 4, 5, 6, 7, 8, 9];
const nums_2 = [1, 2, 4, 3, 2];
let cars = [
    [1, 2, 3, 4, 5],
    {car: 'Honda', color: 'black'},
    {car: 'Opel', color: 'red'}
]

const Vital = {
    id:1,
    name: 'Vital',
    age: 35
};
const Nazira = {
    id:2,
    name: 'Nazira',
    age: 40
};
const arrOfPersons = [Vital, Nazira];


// разбить на разряды
( 10000 ).toLocaleString('ru')

// sum складывает все элементы массива
const sum = nums.reduce(( x, y ) => x + y);

// filter вернуть все item === true
const filter = nums.filter(Boolean);

// создать из другого массива с уникальными значениями
// todo попрактиковаться с Set
const uniq = [...new Set(nums)];

// вернуть ind последнего вхождения
let findLastInd = nums.lastIndexOf(false)

// найти ind первого вхождения
let findFirstInd = nums.findIndex((item) => item === 5);

// найти пересечения массивов
let crossing = [...new Set(nums)].filter(num => nums_2.includes(num))

// создать объект из массива с пронумерованными ключами
const objOfNumbers = {...nums};

// Извлечь из массива объектов  значения по ключу объекта.
const extract = [...Array.from(cars, ( {car} ) => car)];
const color_cars = Array.from(cars, ( {color} ) => color);

// return reverse
let reverse = nums.reverse();

// clear  array
nums.splice(0, nums.length);

// delete = удаляет первый найденный элемент, длинна массива сохраняется. Вместо удаленного элемента undefined
delete nums_2[4];
console.log(nums_2);

//

function slice_Delete() {
  const ind = todoData.findIndex((el) => el.id === id);
  const newArray = [
    ...todoData.slice(0, ind),
    ...todoData.slice(ind + 1)
  ];
  return { todoData: newArray }
}


let expensesOfDay = [{nameExp: "Name_1", value: 150, scratch: "first"}]
// filter and sorting for budget


