const parseLocalStorage = (key, alt) => JSON.parse(localStorage.getItem(key) || JSON.stringify(alt));

const saveToLocalStorage = (key, value) => {
  console.log('> saveToLocalStorage');
  localStorage.setItem(key, JSON.stringify(value));
};

export  {
  parseLocalStorage,
  saveToLocalStorage
};