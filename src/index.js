// 1. Map
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
];

const ages = people.map(person => person.age);
console.log(ages);

const newPeople = people.map(item => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

// 2. Unique Values (ES6)
const menu = [
  {name: 'pancakes', category: 'breakfast'},
  {name: 'burger', category: 'lunch'},
  {name: 'steak', category: 'dinner'},
  {name: 'bacon', category: 'breakfast'},
  {name: 'eggs', category: 'breakfast'},
  {name: 'pasta', category: 'dinner'},
];

const categories = ['all', ...new Set(menu.map(item => item.category))];
console.log(categories);

const listGroupItem = document.querySelector('.list-group-item');
listGroupItem.innerHTML = categories
  .map(category => {
    return `<button type="button" class="btn btn-outline-success">${category}</button>`;
  })
  .join('');

// 3. Dynamic Object Keys
// Dot notation
const person = {
  name: 'john',
};
console.log(person.name);
person.age = 25;
console.log(person);

// Square bracket notation
const items = {
  'featured-items': ['item1', 'item2'],
};
console.log(items['featured-items']);
console.log(person['name']);

let appState = 'loading';
appState = 'error';
const keyName = 'computer';
const app = {
  [appState]: true,
};
app[keyName] = 'apple';
console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

const updateState = (key, value) => {
  state[key] = value;
};
updateState('name', 'john');
updateState('job', 'developer');
updateState('loading', false);

updateState('products', [
  'bananas',
  'ice cream',
  'microwave ovens',
  'coca-cola',
  'air conditioning',
  'pencils',
  'hot dogs',
]);
updateState('name', 'peter');
console.log(state);

// 4. Filter and Find

// 15. Promises
/* const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random === value) {
    resolve('you guessed correctly');
  } else {
    reject('wrong number');
  }
  reject('there was an error');
});

console.log(promise);

promise
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
*/
