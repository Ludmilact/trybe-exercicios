const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    return `Olá, ${fullOrder.order.delivery.deliveryPerson} entrega para: ${fullOrder.name} Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número:${fullOrder.address.number}, AP:${fullOrder.address.apartment}.`
  }
  
  console.log(customerInfo(order));
  
  order.name = 'Luiz Silva';
  order.payment = 50.00;

  let sabores = Object.keys(order.order.pizza).join(", ")

  const orderModifier = (fullOrder) => {
    return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${sabores} e ${fullOrder.order.drinks.coke.type} é de ${fullOrder.payment} reais.`
  }
  
  console.log(orderModifier(order));