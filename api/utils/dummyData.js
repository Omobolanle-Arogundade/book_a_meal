// This exports dummy data
export default {
  meals: [
    {
      id: 1,
      name: 'Poundo Yam with Vegetable',
      size: 'Medium',
      price: '500',
    },
    {
      id: 2,
      name: 'Salad and Chicken',
      size: 'small',
      price: '700',
    },
    {
      id: 3,
      name: 'Fried Rice and Chicken',
      size: 'medium',
      price: '700',
    },
    {
      id: 4,
      name: 'Bread and Beans',
      size: 'small',
      price: '400',
    },
  ],
  menu: [
    {
      id: 1,
      date: '10-02-2019',
      mealsId: [
        1,
        2,
        3,
        4,
        5,
        6,
      ],
    },
    {
      id: 2,
      date: '11-02-2019',
      mealsId: [
        1,
        2,
        3,
        4,
        5,
        6,
      ],
    },
    {
      id: 3,
      date: '12-02-2019',
      mealsId: [
        1,
        2,
        3,
        4,
        5,
        6,
      ],
    },
    {
      id: 4,
      date: '12-02-2019',
      mealsId: [
        1,
        2,
        3,
        4,
        5,
        6,
      ],
    },
  ],
  orders: [
    {
      id: 1,
      date: '15-02-2019',
      customerId: '2',
      meals: [
        {
          meal_id: '1',
          meal_quantity: '2',
        },
        {
          meal_id: '3',
          meal_quantity: '1',
        },
      ],
    },
    {
      id: 2,
      date: '16-02-2019',
      customerId: '4',
      meals: [
        {
          meal_id: '1',
          meal_quantity: '2',
        },
        {
          meal_id: '5',
          meal_quantity: '1',
        },
      ],
    },
    {
      id: 3,
      date: '16-02-2019',
      customerId: '7',
      meals: [
        {
          meal_id: '6',
          meal_quantity: '2',
        },
        {
          meal_id: '3',
          meal_quantity: '1',
        },
      ],
    },
    {
      id: 4,
      date: '17-02-2019',
      customerId: '4',
      meals: [
        {
          meal_id: '5',
          meal_quantity: '1',
        },
        {
          meal_id: '3',
          meal_quantity: '1',
        },
      ],
    },
  ],
};
