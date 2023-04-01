const arr = [
  PVG_meals,  PVG_meals_1,  PVG_meals_2,  PVG_meals_3,  PVG_meals_4,
  LVK,  LVK1,  LVK2,  LVK3,  LVK4,
  VK,  VK1,  VK2,  VK3,  VK4,
  PKL,  PKL1,  PKL2,  PKL3,  PKL4,
  Paleo0,  PALO1,  PALO2,  
  Vegan0,  Vegan1,  Vegan2,
  Keto0, Keto1, Keto2,
  Glutenfree,
  kidfriendly, kidfriendly1
];

const PVG_meals = {
  img: "img/custom_meals/meal-3.jpg",
  categories: ["PALEO", " VEGAN", "GLUTEN-FREE"],
  name: "Grain Free Hot Cereal",
  description:
    "This super easy n’oatmeal is made in just 3 minutes and it’s gluten-free, paleo, vegan",
  Calories: 400,
  NutriScore: 74,
  Rating: 4.8,
};
const PVG_meals_1 = {
  img: "img/custom_meals/meal-4.jpg",
  categories: ["PALEO", " VEGAN", "GLUTEN-FREE"],
  name: "Quinoa Breakfast Bowl",
  description:
    "Full of fruits, nuts, and with gluten free oats, this is not only nourishing but also delicious",
  Calories: 390,
  NutriScore: 75,
  Rating: 4.5,
};
const PVG_meals_2 = {
  img: "img/custom_meals/meal-5.jpg",
  categories: ["PALEO", " VEGAN", "GLUTEN-FREE"],
  name: "Cauliflower oatmeal",
  description:
    "Combo of rolled oats and cauliflower rice makes an easy way to sneak in some veggies, fiber, and micronutrients into a comforting bowl of oatmeal",
  Calories: 410,
  NutriScore: 96,
  Rating: 4.8,
};
const PVG_meals_3 = {
  img: "img/custom_meals/meal-6.jpg",
  categories: ["PALEO", " VEGAN", "GLUTEN-FREE"],
  name: "Avocado salad",
  description:
    "Healthy green salad with fresh avocado, spinach, tomatoes and citrus lime dressing",
  Calories: 400,
  NutriScore: 92,
  Rating: 4.8,
};
const PVG_meals_4 = {
  img: "img/custom_meals/meal-7.jpg",
  categories: ["PALEO", " VEGAN", "GLUTEN-FREE"],
  name: "Fluffy Sweet Potato",
  description:
    "What do you eat when it’s too cold for a smoothie, pancakes sound too complicated, and you’ve had oats for breakfast for way too many days in a row? Fluffy Sweet Potato Breakfast Bowls, of course!",
  Calories: 380,
  NutriScore: 92,
  Rating: 4.7,
};
const LVK = {
  img: "img/custom_meals/meal-8.jpg",
  categories: ["LACTOSE-Free", " VEGAN", "KETO"],
  name: "Japanese Gyozas",
  description:
    "Juicy pork, cabbage, scallions, and shiitake mushrooms with a rich Ponzu sauce drizzle",
  Calories: 420,
  NutriScore: 74,
  Rating: 4.6,
};
const LVK1 = {
  img: "img/custom_meals/meal-9.jpg",
  categories: ["LACTOSE-Free", " VEGAN", "KETO"],
  name: "Classic bacon and eggs",
  description:
    "Among other pork products, bacon is high in fat, making it the ideal candidate for a keto-friendly, low carb breakfast",
  Calories: 410,
  NutriScore: 80,
  Rating: 4.8,
};
const LVK2 = {
  img: "img/custom_meals/meal-10.jpg",
  categories: ["LACTOSE-Free", " VEGAN", "KETO"],
  name: "Salmon with olive-pistachio tapenade and tomatoes",
  description:
    "A foolproof trio loaded with flavor: flavorful salmon dressed up with a juicy olive and crunchy pistachio tapenade",
  Calories: 450,
  NutriScore: 80,
  Rating: 4.9,
};
const LVK3 = {
  img: "img/custom_meals/meal-11.jpg",
  categories: ["LACTOSE-Free", " VEGAN", "KETO"],
  name: "Zucchini salad",
  description:
    "Zucchini stands in for potatoes in this low-carb makeover of the classic summer fave, potato salad. All of the creamy flavor, and (almost) none of the carbs! Perfect for picnics and barbecues",
  Calories: 360,
  NutriScore: 60,
  Rating: 4.8,
};
const LVK4 = {
  img: "img/custom_meals/meal-12.jpg",
  categories: ["LACTOSE-Free", " VEGAN", "KETO"],
  name: "Low carb banana waffles",
  description:
    "Love waffles? Adore bananas? Waffles + bananas = perfection! Why not try these delicious, dairy-free waffles for dessert",
  Calories: 350,
  NutriScore: 50,
  Rating: 4.8,
};
const VK = {
  img: "img/custom_meals/meal-13.jpg",
  categories: ["VEGETARIAN", "KID-FRIENDLY"],
  name: "Rainbow veggie kebabs",
  description:
    "A fun snack for kids that'll really get 'em eating more veggies! Pair with your fave vegan dip for a super-nutritious rainbow at snack time!",
  Calories: 300,
  NutriScore: 50,
  Rating: 4.6,
};
const VK1 = {
  img: "img/custom_meals/meal-14.jpg",
  categories: ["VEGETARIAN", "KID-FRIENDLY"],
  name: "Veggie Pita Pizza with pesto",
  description:
    "Your kids will love these Vegan Pita Pizza topped with lots of vegetables, sweet caramelized onions, and a pesto even more vegetables. Quick, easy, and gluten-free!",
  Calories: 400,
  NutriScore: 70,
  Rating: 4.8,
};
const VK2 = {
  img: "img/custom_meals/meal-15.jpg",
  categories: ["VEGETARIAN", "KID-FRIENDLY"],
  name: "VEGAN PESTO PASTA SALAD WITH ROASTED VEGGIES",
  description:
    "Fun fusilli pasta, creamy vegan pesto, earthy chickpeas, and bright roasted vegetables, combine for a quick, easy, and colorful vegan pesto pasta salad",
  Calories: 350,
  NutriScore: 55,
  Rating: 4.7,
};
const VK3 = {
  img: "img/custom_meals/meal-16.jpg",
  categories: ["VEGETARIAN", "KID-FRIENDLY"],
  name: "Vegan Breakfast Tacos",
  description:
    "Kids love tacos--why not serve them for breakfast, too? These Vegan Breakfast Tacos are a savory take on breakfast with a Mexican-inspired twist. They’re easy to make, gluten-free, and best of all – delicious!",
  Calories: 330,
  NutriScore: 50,
  Rating: 4.7,
};
const VK4 = {
  img: "img/custom_meals/meal-17.jpg",
  categories: ["VEGETARIAN", "KID-FRIENDLY"],
  name: "VEGAN ZUCCHINI MUFFINS",
  description:
    "These vegan zucchini muffins are soft, sweet, and full of healthy ingredients. With no oil or refined sugar in the batter, you can feel good about serving them to your family",
  Calories: 310,
  NutriScore: 50,
  Rating: 4.8,
};

const PKL = {
  img: "img/custom_meals/meal-18.jpg",
  categories: ["PALEO", "KETO", "LOW-FODMAP"],
  name: "Chicken Caesar Cobb",
  description:
    "Grilled chicken, fresh avocado with veggie toppings and creamy caesar dressing",
  Calories: 410,
  NutriScore: 93,
  Rating: 4.9,
};

const PKL1 = {
  img: "img/custom_meals/meal-19.jpg",
  categories: ["PALEO", "KETO", "LOW-FODMAP"],
  name: "Seasoned Chicken Breast",
  description:
    "This pub-inspired seasoned chicken breast is a fast family hit. Its simple flavour makes it perfect for a salad or sandwich, as well as the star of a heavier meal",
  Calories: 400,
  NutriScore: 90,
  Rating: 4.7,
};

const PKL2 = {
  img: "img/custom_meals/meal-20.jpg",
  categories: ["PALEO", "KETO", "LOW-FODMAP"],
  name: "Marinated chicken",
  description: "Marinated chicken is wonderful to make for busy nights",
  Calories: 350,
  NutriScore: 80,
  Rating: 4.8,
};

const PKL3 = {
  img: "img/custom_meals/meal-21.jpg",
  categories: ["PALEO", "KETO", "LOW-FODMAP"],
  name: "Chicken and Black Bean Burrito Skillet",
  description:
    "One-skillet chicken dish that can be on the table in just 30 minutes, so it is perfect for those busy weeknights when you’re tempted to grab some takeout",
  Calories: 360,
  NutriScore: 83,
  Rating: 4.9,
};

const PKL4 = {
  img: "img/custom_meals/meal-22.jpg",
  categories: ["PALEO", "KETO", "LOW-FODMAP"],
  name: "Pollo Asado with Black Beans and Rice",
  description:
    "This hearty roast chicken dinner is packed with comforting flavors, which is highlighted in its delicious mix of rice and beans. Plus, the entire dish is also done in under an hour! Ingredients",
  Calories: 380,
  NutriScore: 87,
  Rating: 4.6,
};

const Paleo0 = {
  img: "img/custom_meals/meal-23.jpg",
  categories: "PALEO",
  name: "Grilled Chicken and Mixed Greens Salad",
  description:
    "A refreshing and nutritious go-to summer salad with mixed greens, toppings and grilled chicken with balsamic dressing",
  Calories: 435,
  NutriScore: 90,
  Rating: 4.7,
};

const Paleo1 = {
  img: "img/custom_meals/meal-24.jpg",
  categories: "PALEO",
  name: "Rotisserie Chicken Salad with Charred Scallion Dressing",
  description:
    "A hearty, healthy meal that’s halfway done before you even start cooking",
  Calories: 425,
  NutriScore: 89,
  Rating: 4.9,
};

const Paleo2 = {
  img: "img/custom_meals/meal-25.jpg",
  categories: "PALEO",
  name: "SPRING MIX SALAD",
  description:
    "This easy and beautiful spring mix salad features tender baby greens, crunchy radishes, and nutty sunflower seeds lightly tossed in a homemade honey lemon vinaigrette",
  Calories: 350,
  NutriScore: 78,
  Rating: 4.6,
};

const Vegan0 = {
  img: "img/custom_meals/meal-26.jpg",
  categories: "VEGAN",
  name: "Vegan tacos",
  description:
    "These tacos are brilliant for entertaining: simply serve the warmed tortillas with the veg and beans, pickled onions, salsa, avocado and yogurt alongside, and let everyone build their own",
  Calories: 340,
  NutriScore: 75,
  Rating: 4.8,
};

const Vegan1 = {
  img: "img/custom_meals/meal-27.jpg",
  categories: "VEGAN",
  name: "Vegan ramen",
  description:
    "Recreate this deliciously creamy, spicy, slurpable bowl of vegan ramen for a meal that will leave you feeling full and nourished.",
  Calories: 350,
  NutriScore: 78,
  Rating: 4.6,
};

const Vegan2 = {
  img: "img/custom_meals/meal-28.jpg",
  categories: "VEGAN",
  name: "Vegan butternut squash pie",
  description:
    "Our spiced butternut pie with a vegan pie crust is a brilliant dinner party option and it's just as good eaten the next day – leftovers make a great lunch with a dollop of mango chutney or extra harissa swirled into coconut yogurt.",
  Calories: 355,
  NutriScore: 82,
  Rating: 4.7,
};

const Keto0 = {
  img: "img/custom_meals/meal-29.jpg",
  categories: "KETO",
  name: "Keto fried chicken with broccoli",
  description:
    "So simple and enjoyable! Keto fried chicken and broccoli is a perfect example of how to create a keto plate by combining a protein, a vegetable, and fat for flavor.",
  Calories: 380,
  NutriScore: 86,
  Rating: 4.9,
};

const Keto1 = {
  img: "img/custom_meals/meal-30.jpg",
  categories: "KETO",
  name: "Keto jalapeño popper chaffles",
  description:
    "Chaffles are the go-to keto craze that can rock any flavor, sweet or savory. In this family-friendly recipe, chaffles get a spicy upgrade with layers of cream cheese, bacon, and jalapeño poppers. Best of all, they’re fun to make and to eat!",
  Calories: 370,
  NutriScore: 84,
  Rating: 4.8,
};

const Keto2 = {
  img: "img/custom_meals/meal-31.jpg",
  categories: "KETO",
  name: "Keto seared salmon with creamy lemon sauce",
  description:
    "This tender salmon recipe (with a creamy lemon sauce) incorporates everything we love about keto. Lots of flavor, simple ingredients, and butter — with none of the carbs.",
  Calories: 380,
  NutriScore: 85,
  Rating: 4.9,
};
const Glutenfree = {
  img: "img/custom_meals/meal-32.jpg",
  categories: "GLUTEN-FREE",
  name: "Gluten-free Yorkshire puddings",
  description:
    "The perfect vehicle for gravy and roasted goodies: the Yorkshire pudding - this version is gluten-free but never fear, you still get that characteristic puff and golden colour",
  Calories: 350,
  NutriScore: 70,
  Rating: 4.8,
};

const kidfriendly = {
  img: "img/custom_meals/meal-33.jpg",
  categories: "KID-FRIENDLY",
  name: "Sesame Chicken ",
  description:
    "In this quick and easy recipe, tender bites of chicken are coated in a sticky sweet-and-savory sauce. My whole family devoured this chicken – it’s that good!",
  Calories: 360,
  NutriScore: 76,
  Rating: 4.8,
};

const kidfriendly1 = {
  img: "img/custom_meals/meal-34.jpg",
  categories: "KID-FRIENDLY",
  name: "Baked Chicken Tenders ",
  description:
    "No list of kid-friendly recipes would be complete without chicken tenders! These bake up crispy on the outside and juicy on the inside. Serve them with a few dipping sauces and let everyone choose their favorite.",
  Calories: 360,
  NutriScore: 76,
  Rating: 4.8,
};
