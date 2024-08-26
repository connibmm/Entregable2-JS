const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*ID impar*/
for(const pizza of pizzas){
  if(pizza.id % 2 === 1){console.log(pizza)}
}

/*Menos de 600*/
const pizzaBarata = pizzas.some(pizza => pizza.precio < 600)
  if(pizzaBarata){console.log("Sí, hay pizzas por menos de $600")}
  else{console.log("No, no hay pizzas por menos de $600")}

/*Nombre y precio*/
pizzas.forEach(pizza => {console.log(`La ${pizza.nombre} tiene un valor de $${pizza.precio}`)})

/*Ingredientes de cada pizza*/
pizzas.forEach(pizza => {console.log(`Los ingredientes de la ${pizza.nombre} son:`)
pizza.ingredientes.forEach(ingrediente => {console.log(`- ${ingrediente}`)})
})