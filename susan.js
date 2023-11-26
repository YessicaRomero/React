let users = [{primerNombre : "Susan", segNombre:"Clara"},
{primerNombre : "Susan", segNombre:"Lara"},
{primerNombre : "Yes", segNombre:"Laura"}
]
const result = users.filter((user) => user.primerNombre === "Susan")
console.log(result)