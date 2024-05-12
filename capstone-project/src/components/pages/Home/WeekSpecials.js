import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `Indulge in the flavors of Greece with our famous Greek Salad. 
      Crispy lettuce, vibrant peppers, juicy olives, and our Chicago style feta cheese 
      come together in perfect harmony. Topped with crunchy garlic and rosemary croutons, 
      this salad is a true delight for your taste buds. 
      `,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Experience the classic Italian flavors with our Bruschetta. 
      Grilled bread, infused with garlic and seasoned with salt and olive oil, 
      creates the perfect base for our fresh tomato and basil topping. Each bite 
      is a burst of freshness and satisfaction.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `Transport yourself to a world of sweet indulgence with our 
      Lemon Dessert. This delightful treat is a family recipe passed down through 
      generations. Every ingredient has been carefully sourced to ensure an 
      authentic and unforgettable experience.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>🍋 This week specials</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
