let users = [{primerNombre : "Susan", apellido:"Romero"},
{primerNombre : "Susan", apellido:"Camejo"},
{primerNombre : "Yes", apellido:"Perez"}
]
const nombresCompletos = users.map((users) => users.primerNombre + '-' + users.apellido);
  console.log(nombresCompletos)