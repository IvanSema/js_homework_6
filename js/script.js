// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

let productList = [
    {name: 'milk', quantity: 2, isBought: false}, 
    {name: 'ice cream', quantity: 1, isBought: true},
    {name: 'eggs', quantity: 10, isBought: false}
];

function showList(list){ //Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
      return list.sort(function(a,b){
        if (a.isBought < b.isBought ) {
            return -1;
          }
          if (a.isBought > b.isBought ) {
            return 1;
          }
          return 0;
        }
    );
}

function addList(list, obj){ // Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
    temp = false;
    for (let i of list){
        if (i.name === obj.name){
            i.quantity += obj.quantity;
            i.isBought = false;
            temp = true;
        }
    }
    if(!temp){
        list.push(obj);
    }

    console.log(list)
}

function setChecked(list, name){ //Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
    for (let i of list){
        if (i.name === name){
            i.isBought = true;
        }
    }
    console.log(list);
}


// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

let priceList = [
    {name: 'Cheese', quantity: 2, price: [10, '$']},
    {name: 'Milk', quantity: 1, price: [5, '$']},
    {name: 'Eggs', quantity: 10, price: [3, '$']}
]

function check(arr){ // Распечатка чека на экран;
    for (i of arr){
        for(j in i){
            console.log(`${j}: ${i[j]}`);
        }
        console.log('')
    }
}

function sum(arr){ // Подсчет общей суммы покупки;
    let sum = 0;
    for (i of arr){
        sum+= i.price[0];
        }
    return sum;
}

function getHighestPrice(arr){ // Получение самой дорогой покупки в чеке;
    let sum = 0, res;
    for (i of arr){
        if(sum < i.price[0]){ 
            sum = i.price[0];
            res = i;
        }
    }
    return res;
}

function getMiddle(arr){ // Подсчет средней стоимости одного товара в чеке.
    let sum = 0, j = 0;
    for (i of arr){
        sum+= i.price[0];
        j++
    }
    return sum / j
}


// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let styleArray = [
    {'color': 'red'},
    {'font-size': '22px'},
    {'text-align': 'center'},
    {'background-color': 'blue'},
    {'text-transform': 'uppercase'}
]

function textStyle(array, text){
    let j = '';
    for (let i of array){
        for (let k in i){
            j += (k + ': ' + i[k] + ';\n');
        }
    }
    document.write(`<p style="${j}">${text}</p>`);
}

// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

let audienceArray = [
    {name: '701', volume: 14, department: 'ТЭФ'},
    {name: 'a121', volume: 11, department: 'ИПСА'},
    {name: 'к221', volume: 18, department: 'РТФ'},
    {name: 'с405', volume: 20, department: 'ФИВТ'},
    {name: 'д101', volume: 12, department: 'ХТФ'}
];

function getAll(array){ // Вывод на экран всех аудиторий;
    console.log(array);
}

function getDepartment(array, department){ // Вывод на экран аудиторий для указанного факультета;
    for (let i of array){
        if(i.department == department){
            console.log(i);
        }
    }
}

function getAudience(arr, group){ //Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
    for (let i of arr){
        {
            if(i.volume > group.quantity && i.department == group.department){
                console.log(i);
            }
        }
    }
}


function sortVolume(array){ // Функция сортировки аудиторий по количеству мест;
    return array.sort(function(a,b){
        if (a.volume > b.volume){return 1;}
        if (a.volume < b.volume){return -1;}
        else{return 0}
    })
}

function sortName(array){ // Функция сортировки аудиторий по названию (по алфавиту).
    return array.sort(function(a,b){
        if (a.name > b.name){return 1;}
        else{return -1;}
    })
}

