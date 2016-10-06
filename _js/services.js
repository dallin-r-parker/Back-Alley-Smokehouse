angular.module('backAlley').service('bAservice', function(){

this.menu = [
// menu type key vaues = entree, side, appetizer, sauce, extra
// menu id key = smoker, originals, wings, starters, sides, extras, kids

  {
    item:         '1/3 Rib Dinner',
    price:        10.25,
    description:  '1/3 rack of smoked pork ribs with a cornbread muffin',
    id:           'smoker',
    type:         'entree'
  },
  {
    item:         '2/3 Rib Dinner',
    price:        16.25,
    description:  '2/3 rack of smoked pork ribs with a cornbread muffin ',
    id:           'smoker',
    type:         'entree'
  },
  {
    item:         'Pulled Pork',
    price:        8.50,
    description:  'Smoked pulled pork served on Texas toast ',
    id:           'smoker',
    type:         'entree'
  },
  {
    item:         'Brisket Reuben',
    price:        10.95,
    description:  'Grilled brisket sandwich on marbled rye Texas toast with swiss cheese, sauerkraut, cole slaw, thousand island dressing',
    id:           'smoker',
    type:         'entree'
  },
  {
    item:         'Twice Smoked Ham',
    price:        8.50,
    description:  'Twice smoked ham with pineapple served on Texas toast ',
    id:           'smoker',
    type:         'entree'
  },
  {
    item:         '9” Smoked Brat',
    price:        7.25,
    description:  '9” smoked brat',
    id:           'smoker',
    type:         'entree'
  },
  {
    item:         'BA Special',
    price:        8.95,
    description:  '1/2 smoked beef brisket and 1/2 smoked pulled pork served on Texas toast ',
    id:           'smoker',
    type:         'entree'
  },
  {
    item:         'Beef Brisket',
    price:        9.50,
    description:  'Smoked beef brisket served on Texas toast ',
    id:           'smoker',
    type:         'entree'
  },
  {
    item:         '1/2 lb Tenderloin',
    price:        8.95,
    description:  'Breaded pork tenderloin sandwich.  Comes with your choice of lettuce, tomato, onion, or pickle',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Cheeseburger',
    price:        8.95,
    description:  '1/2 lb hamburger or cheeseburger with your choice of  lettuce, tomato, pickle, onion ',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Backlash',
    price:        8.95,
    description:  'Mac and cheese topped with grinder meat 3 kinds of cheese and optional jalapeños.  Served with garlic bread',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Bacon & Bleu Burger',
    price:        9.95,
    description:  '1/2 lb burger topped with bacon, onion rings, blue cheese sauce and crumbles',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Sausage Grinder',
    price:        8.95,
    description:  'Medium spicy Italian sausage in a hoagie bun with 3 types of cheese on top,  jalapeños optional',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Texas Brisket Burger',
    price:        10.95,
    description:  '1/2 lb burger topped with sliced brisket, pepper jack cheese and jalapeños',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Chicken Salad',
    price:        8.95,
    description:  'Chicken salad sandwich on a croissant or a wrap with almonds and grapes',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Bacon Mushroom Swiss Burger',
    price:        9.95,
    description:  '1/2 lb burger topped with bacon, swiss cheese, and homemade mushroom sauce',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'BA Beef Burger',
    price:        6.95,
    description:  'Loose meat burger served with your choice of pickle, onion, or cheese',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'The Castro',
    price:        8.95,
    description:  'Ham and pulled pork, pickles, mustard, American cheese, & jalapeños.',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'BA PB&J (Jalapeños)',
    price:        6.25,
    description:  ' Peanut butter, jalapeño jelly, and jalapeños on Texas toast',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Shrimp',
    price:        8.95,
    description:  '6 pieces of breaded butterfly shrimp ',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Chicken Strip Basket',
    price:        7.95,
    description:  'Two delicious breaded chicken strips ',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Fish Sandwich',
    price:        8.95,
    description:  'Battered cod sandwich with tarter sauce',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Beef Footlong',
    price:        6.95,
    description:  'All beef footlong',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Soup Special',
    price:        6.50,
    description:  'Hot bowl of homemade soup of the day with choice of cornbread muffin or garlic toast',
    id:           'originals',
    type:         'entree'
  },
  {
    item:         'Pork Wings',
    price:        8.95,
    description:  'Dry-rubbed pork drumsticks with your choice of sauce. 3 pieces  comes with your choice of type',
    id:           'wings',
    type:         'entree'
  },
  {
    item:         'Chicken Wings',
    price:        8.95,
    description:  'Dry -rubbed wings with your choice of sauce.  8 pieces',
    id:           'wings',
    type:         'appetizer'
  },
    {
      item:         'Onion rings',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer'
    },
    {
      item:         'French fries',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer'
    },
    {
      item:         'Breaded mushrooms',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer'
    },
    {
      item:         'Breaded cauliflower',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer'
    },
    {
      item:         'Cheese curds',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer'
    },
    {
      item:         'Fried pickles',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer'
    },
    {
      item:         'Jalapeño creamed corn',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side'
    },
    {
      item:         'Smoked corn bread',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side'
    },
    {
      item:         'Smoked baked beans',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side'
    },
    {
      item:         'Potato salad',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side'
    },
    {
      item:         'Cole slaw',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side'
    },
    {
      item:         'Soup of the day',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side'
    },
    {
      item:         'Mac and cheese',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side'
    },
    {
      item:         'French fries',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side'
    },
    {
      item:         'Seasoned fries',
      price:        2.75,
      description:  '',
      id:             'sides',
      type:         'side'
    },
    {
      item:         'Onion rings',
      price:        3.75,
      description:  '',
      id:             'sides',
      type:         'side'
    },
  {
    item:         'Extra Cheese',
    price:        0.50,
    description:  '',
    id:           'extras',
    type:         'extra'
  },
  {
    item:         'Extra Bacon',
    price:        1.00,
    description:  '',
    id:           'extras',
    type:         'extra'
  },
  {
    item:         'Mild Sauce',
    price:        0.25,
    description:  '',
    id:           'extras',
    type:         'sauce'
  },
  {
    item:         'Raspberry Chipotle',
    price:        0.25,
    description:  '',
    id:           'extras',
    type:         'sauce'
  },
  {
    item:         'Medium Sauce',
    price:        0.25,
    description:  '',
    id:           'extras',
    type:         'sauce'
  },
  {
    item:         'Hot Sauce',
    price:        0.25,
    description:  '',
    id:           'extras',
    type:         'sauce'
  },
  {
    item:         'Grilled cheese',
    price:        6.25,
    description:  '',
    id:           'kids',
    type:         'entree'
  },
  {
    item:         'Chicken bites',
    price:        6.25,
    description:  '',
    id:           'kids',
    type:         'entree'
  },
  {
    item:         'Corn dog',
    price:        6.25,
    description:  '',
    id:           'kids',
    type:         'entree'
  },
]




});
