# Ez Object Diff
##### _Easily get the difference between two objects_

## Installation

Find the repository on [GitHub](https://github.com/gayanSandamal/ez-object-diff)
Reach me on [LinkedIn](https://www.linkedin.com/in/gayan-sandamal)
Install the module.

```sh
npm i @gayansandamal/ez-object-diff
```

## How to use
```sh
// require the package
const getObjectDiff = require('@gayansandamal/ez-object-diff');

// main object
const a = {
  firstName: 'Savindi',
  lastName: 'Dilshara',
  familyName: 'Weerakoon',
};
// second object
const b = {
  firstName: 'Savindi',
  lastName: 'Dilshara',
  familyName: 'Punniyasoma',
};
console.log(getObjectDiff(a, b));
```

## License

MIT
