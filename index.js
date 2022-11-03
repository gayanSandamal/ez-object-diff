const diff = (originalObj, newObj) => {
  const diffArray = [];
  for (const [key1, value1] of Object.entries(originalObj)) {
    for (const [key2, value2] of Object.entries(newObj)) {
      if (key1 === key2 && value1 !== value2) {
        diffArray.push({
          key: key1,
          oldValue: value1,
          newValue: value2,
        });
      }
    }
  }
  return diffArray;
};

module.exports = diff;
