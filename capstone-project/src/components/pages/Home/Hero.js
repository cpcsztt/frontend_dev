import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
          Welcome to Little Lemon 🍋, a family-owned Mediterranean restaurant in Chicago. 
          Indulge in our authentic recipes, crafted with a modern twist. 😋
          Experience the flavors of the Mediterranean like never before. 
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a Table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
