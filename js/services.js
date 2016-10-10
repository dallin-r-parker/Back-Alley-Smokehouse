angular.module('backAlley').service('bAservice', function(){

this.menu = [
// menu type key vaues = entree, side, appetizer, sauce, extra
// menu id key = smoker, originals, wings, starters, sides, extras, kids

  {
    item:         '1/3 Rib Dinner',
    price:        10.25,
    description:  '1/3 rack of smoked pork ribs with a cornbread muffin',
    id:           'smoker',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         '2/3 Rib Dinner',
    price:        16.25,
    description:  '2/3 rack of smoked pork ribs with a cornbread muffin ',
    id:           'smoker',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Pulled Pork',
    price:        8.50,
    description:  'Smoked pulled pork served on Texas toast ',
    id:           'smoker',
    type:         'entree',
    sauce:        true,
    quantity:      1
  },
  {
    item:         'Brisket Reuben',
    price:        10.95,
    description:  'Grilled brisket sandwich on marbled rye Texas toast with swiss cheese, sauerkraut, cole slaw, thousand island dressing',
    id:           'smoker',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Twice Smoked Ham',
    price:        8.50,
    description:  'Twice smoked ham with pineapple served on Texas toast ',
    id:           'smoker',
    type:         'entree',
    sauce:        true,
    quantity:      1
  },
  {
    item:         '9” Smoked Brat',
    price:        7.25,
    description:  '9” smoked brat',
    id:           'smoker',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'BA Special',
    price:        8.95,
    description:  '1/2 smoked beef brisket and 1/2 smoked pulled pork served on Texas toast ',
    id:           'smoker',
    type:         'entree',
    sauce:        true,
    quantity:      1
  },
  {
    item:         'Beef Brisket',
    price:        9.50,
    description:  'Smoked beef brisket served on Texas toast ',
    id:           'smoker',
    type:         'entree',
    sauce:        true,
    quantity:      1
  },
  {
    item:         '1/2 lb Tenderloin',
    price:        8.95,
    description:  'Breaded pork tenderloin sandwich.  Comes with your choice of lettuce, tomato, onion, or pickle',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Cheeseburger',
    price:        8.95,
    description:  '1/2 lb hamburger or cheeseburger with your choice of  lettuce, tomato, pickle, onion ',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Backlash',
    price:        8.95,
    description:  'Mac and cheese topped with grinder meat 3 kinds of cheese and optional jalapeños.  Served with garlic bread',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Bacon & Bleu Burger',
    price:        9.95,
    description:  '1/2 lb burger topped with bacon, onion rings, blue cheese sauce and crumbles',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Sausage Grinder',
    price:        8.95,
    description:  'Medium spicy Italian sausage in a hoagie bun with 3 types of cheese on top,  jalapeños optional',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Texas Brisket Burger',
    price:        10.95,
    description:  '1/2 lb burger topped with sliced brisket, pepper jack cheese and jalapeños',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Chicken Salad',
    price:        8.95,
    description:  'Chicken salad sandwich on a croissant or a wrap with almonds and grapes',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Bacon Mushroom Swiss Burger',
    price:        9.95,
    description:  '1/2 lb burger topped with bacon, swiss cheese, and homemade mushroom sauce',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'BA Beef Burger',
    price:        6.95,
    description:  'Loose meat burger served with your choice of pickle, onion, or cheese',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'The Castro',
    price:        8.95,
    description:  'Ham and pulled pork, pickles, mustard, American cheese, & jalapeños.',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'BA PB&J (Jalapeños)',
    price:        6.25,
    description:  ' Peanut butter, jalapeño jelly, and jalapeños on Texas toast',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Shrimp',
    price:        8.95,
    description:  '6 pieces of breaded butterfly shrimp ',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Chicken Strip Basket',
    price:        7.95,
    description:  'Two delicious breaded chicken strips ',
    id:           'originals',
    type:         'entree',
    sauce:        true,
    quantity:      1
  },
  {
    item:         'Fish Sandwich',
    price:        8.95,
    description:  'Battered cod sandwich with tarter sauce',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Beef Footlong',
    price:        6.95,
    description:  'All beef footlong',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Soup Special',
    price:        6.50,
    description:  'Hot bowl of homemade soup of the day with choice of cornbread muffin or garlic toast',
    id:           'originals',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Pork Wings',
    price:        8.95,
    description:  'Dry-rubbed pork drumsticks with your choice of sauce. 3 pieces  comes with your choice of type',
    id:           'wings',
    type:         'entree',
    sauce:        true,
    quantity:      1
  },
  {
    item:         'Chicken Wings',
    price:        8.95,
    description:  'Dry -rubbed wings with your choice of sauce.  8 pieces',
    id:           'wings',
    type:         'appetizer',
    sauce:        false,
    quantity:      1
  },
    {
      item:         'Onion rings',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'French fries',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Breaded mushrooms',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Breaded cauliflower',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Cheese curds',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Fried pickles',
      price:        6.95,
      description:  '',
      id:             'starters',
      type:         'appetizer',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Jalapeño creamed corn',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Smoked corn bread',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Smoked baked beans',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Potato salad',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Cole slaw',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Soup of the day',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Mac and cheese',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'French fries',
      price:        2.25,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Seasoned fries',
      price:        2.75,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
    {
      item:         'Onion rings',
      price:        3.75,
      description:  '',
      id:             'sides',
      type:         'side',
      sauce:        false,
      quantity:      1
    },
  {
    item:         'Extra Cheese',
    price:        0.50,
    description:  '',
    id:           'extras',
    type:         'extra',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Extra Bacon',
    price:        1.00,
    description:  '',
    id:           'extras',
    type:         'extra',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Mild Sauce',
    price:        0.25,
    description:  '',
    id:           'extras',
    type:         'sauce',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Raspberry Chipotle',
    price:        0.25,
    description:  '',
    id:           'extras',
    type:         'sauce',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Medium Sauce',
    price:        0.25,
    description:  '',
    id:           'extras',
    type:         'sauce',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Hot Sauce',
    price:        0.25,
    description:  '',
    id:           'extras',
    type:         'sauce',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Grilled cheese',
    price:        6.25,
    description:  '',
    id:           'kids',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Chicken bites',
    price:        6.25,
    description:  '',
    id:           'kids',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
  {
    item:         'Corn dog',
    price:        6.25,
    description:  '',
    id:           'kids',
    type:         'entree',
    sauce:        false,
    quantity:      1
  },
]




});

angular.module('backAlley').service('sShowService', function(){

this.sShow = [
  "../_images/roast.png",
  "../_images/brisket.jpg",
  '../_images/pulled_pork.jpg',
  "../_images/prime_rib.png"

]


});



// INITILIZE SERVICE
// ============================================================
angular.module("backAlley")
  .service("localStorageService", function($http) {

    this.store = function(name, data) {
      localStorage.setItem(name, JSON.stringify(data));
      return 'saved';
    };

    this.get = function(name) {
      var item = localStorage.getItem(name);
      return JSON.parse(item);
    };

  });
