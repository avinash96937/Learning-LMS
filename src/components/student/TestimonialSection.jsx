// import React from 'react'
// import { assets, dummyTestimonial } from '../../assets/assets'

// const TestimonialSection = () => {
//   return (
//     <div className=' pb-14 px-8 md:px-0'>
//       <h2 className=' text-center text-3xl font-medium text-gray-800'>Testimonials</h2>
//       <p className=' md:text-base text-gray-500 mt-3'>Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.</p>
//       <div>
//         {dummyTestimonial.map((testimonial, index) => (
//           <div key={index} className=' text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'>
//             <div className=' flex items-center gap-4 px-5 py-4 bg-gray-500\10'>
//               <  img className='h-12 w-12 rounded-full' src={testimonial.image} alt="" />
//               <div>
//                 <h1 className=' text-lg font-medium text-gray-800'>{testimonial.name}</h1>
//                 <p className=' text-gray-800/80'>{testimonial.role}</p>
//               </div>

//               <div className=' p-5 pb-7'>
//                 <div className=' flex gap-0.5'>
//                   {[...Array(5)].map((_, i) => (
//                     <img className=' h-5' key={i} src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} />
//                   ))}
//                 </div>
//                 <p className=' text-gray-500 mt-5'>{testimonial.feedback}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default TestimonialSection


import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets'
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  return (
    <div className="pb-14 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h2 className="text-center text-4xl font-semibold text-gray-800">Testimonials</h2>
      <p className="md:text-lg text-gray-500 mt-3  text-center">Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.</p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {dummyTestimonial.map((testimonial, index) => (
          <motion.div
            key={index}
            // whileHover={{ scale: 1.05, boxShadow: '0px 10px 25px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.3 }}
            className="text-sm text-left border border-gray-300 rounded-xl bg-white shadow-md p-6 hover:shadow-lg transition-all"
          >
            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <img className="h-14 w-14 rounded-full border-2 border-gray-200" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className="text-lg font-semibold text-gray-800">{testimonial.name}</h1>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>

            {/* Rating and Feedback */}
            <div className="mt-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-4 italic">"{testimonial.feedback}"</p>
            </div>

            {/* Read More Button */}
            <a href="#" className="text-blue-600 font-medium mt-4 inline-block hover:underline">
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
