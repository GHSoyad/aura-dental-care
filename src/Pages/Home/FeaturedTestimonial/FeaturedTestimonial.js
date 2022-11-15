import React from 'react';
import quote from '../../../Assets/icons/quote.svg';
import people1 from '../../../Assets/images/people1.png';
import people2 from '../../../Assets/images/people2.png';
import people3 from '../../../Assets/images/people3.png';
import FeaturedTestimonialCard from './FeaturedTestimonialCard';

const FeaturedTestimonial = () => {
    const testimonials = [
        {
            user: 'Winson Herry',
            city: 'California',
            testimonial: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            user: 'Janet Dove',
            city: 'California',
            testimonial: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            user: 'Christine Quinn',
            city: 'California',
            testimonial: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        }
    ]

    return (
        <section className='container max-w-screen-xl mx-auto px-6 xl:px-0 my-20 lg:my-32'>
            <div className='flex justify-between gap-2'>
                <div>
                    <h4 className='font-bold text-xl text-primary'>Testimonial</h4>
                    <h2 className='text-4xl mt-2'>What Our Patients Says</h2>
                </div>
                <img src={quote} alt="" className='w-24 md:w-40' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 mt-20'>
                {
                    testimonials.map((testimonial, index) => <FeaturedTestimonialCard key={index} testimonial={testimonial}></FeaturedTestimonialCard>)
                }
            </div>
        </section>
    );
};

export default FeaturedTestimonial;