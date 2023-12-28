let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
let del = companies.shift(0);
console.log(del);
companies.splice(2,1,"ola");
companies.push("Amazon");
console.log(companies);