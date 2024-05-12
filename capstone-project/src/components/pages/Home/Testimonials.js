import customer1Image from './assets/customer1-Jordan-Lee.webp';
import customer2Image from './assets/customer2-Akira-Tanaka.png';
import customer3Image from './assets/customer3-Jamal-Abdul.png';
import customer4Image from './assets/customer4-Maria-Lopez.png';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Jordan Lee',
    image: customer1Image,
    rating: [1, 1, 1, 1, 1],
    says: `I had an amazing experience at this Mediterranean restaurant. The food was delicious and the atmosphere was perfect. I highly recommend it!`,
  },
  {
    fullName: 'Akira Tanaka',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `This restaurant exceeded my expectations. The flavors of the Mediterranean cuisine were outstanding. I can't wait to go back!`,
  },
  {
    fullName: 'Jamal Abdul',
    image: customer3Image,
    rating: [1, 1, 1, 1, 1],
    says: `I've been to many Mediterranean restaurants, but this one stands out. The quality of the food and the friendly staff make it a top choice for me.`,
  },
  {
    fullName: 'Maria Lopez',
    image: customer4Image,
    rating: [1, 1, 1, 1, 1],
    says: `If you're looking for an authentic Mediterranean dining experience, this restaurant is the place to go. The dishes are full of flavor and the service is excellent.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>😋 What people say about us</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
