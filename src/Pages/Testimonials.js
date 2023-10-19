import customer1Image from '../assets/Mario and Adrian A.jpg';
import customer2Image from '../assets/Mario and Adrian A.jpg';
import customer3Image from '../assets/Mario and Adrian A.jpg';
import customer4Image from '../assets/Mario and Adrian A.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Alice Johnson',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon is a great place to dine. The ambiance is charming, and the food is delightful.`,
  },
  {
    fullName: 'David Brown',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `I had an amazing experience at Little Lemon. The staff is friendly, and the menu offers a variety of delicious dishes.`,
  },
  {
    fullName: 'Olivia White',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I enjoyed my visit to Little Lemon. The service was excellent, and the flavors of the food were outstanding.`,
  },
  {
    fullName: 'Michael Lee',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Little Lemon is a hidden gem. The quality of the ingredients is exceptional, and the prices are reasonable.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials text-center">
      <div className="container">
        <h2 className="mb-5">What people say about us!</h2>
        <div className="row">
          {customers.map((customer, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <TestimonialCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
