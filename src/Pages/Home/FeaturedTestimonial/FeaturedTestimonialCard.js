import React from 'react';

const FeaturedTestimonialCard = ({ testimonial }) => {
    const { user, city, testimonial: review, img } = testimonial;
    return (
        <div className='rounded-xl shadow-xl p-9'>
            <p className='mb-9'>{review}</p>
            <div className='flex gap-4 items-center'>
                <img src={img} alt="" className='w-12 rounded-full ring ring-primary ring-offset-2' />
                <div>
                    <p className='font-semibold text-xl'>{user}</p>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTestimonialCard;