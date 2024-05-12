import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        👋 Welcome to Little Lemon, where culinary excellence meets a vibrant dining experience. Our restaurant is nestled in the heart of Chicago, a city known for its diverse food culture and rich culinary heritage. 
          At Little Lemon, we believe that food is not just about nourishment, but also about creating unforgettable memories. Our team of talented chefs, Mario and Adrian, are passionate about crafting dishes that are as visually stunning as they are delicious. 
        </p>
        <p>
        🌎 Our menu features a fusion of flavors from around the world, with a focus on locally sourced ingredients. From mouthwatering appetizers to delectable main courses and indulgent desserts, our culinary creations are sure to tantalize your taste buds. 
        </p>
        <p>
        🥳 Join us at Little Lemon and embark on a culinary journey like no other. Whether you're celebrating a special occasion or simply looking for a memorable dining experience, our friendly staff and cozy ambiance will make you feel right at home. 
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
