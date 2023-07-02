export interface Pizza {
  name: string;
  key: string;
  imagePath: string;
}

export const pizzas: Pizza[] = [
  {
    name: 'Meat pizza',
    key: 'meat',
    imagePath: '/meat-pizza.png',
  },
  {
    name: 'Cheese pizza',
    key: 'cheese',
    imagePath: '/cheese-pizza.png',
  },
  {
    name: 'Pepperoni pizza',
    key: 'pepperoni',
    imagePath: '/pepperoni-pizza.png',
  },
];
