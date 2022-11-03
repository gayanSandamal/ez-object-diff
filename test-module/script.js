const getObjectDiff = require('@gayansandamal/ez-object-diff');

const originalObject = {
  firstName: 'Savindi',
  lastName: 'Dilshara',
  familyName: 'Weerakoon',
};

const updatedObject = {
  firstName: 'Savindi',
  lastName: 'Dilshara',
  familyName: 'Punniyasoma',
};

console.log(getObjectDiff(originalObject, updatedObject));
