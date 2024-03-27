const today = new Date();

const date = () => {
console.log(today.getFullYear() + `年`, (today.getMonth() + 1) + `月`, today.getDate() + `日`); 
}

console.log(date());