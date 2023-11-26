"use client"
import TestimonialCard from "./TestimonialCard";
import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = ({ data }) => {
  const { title, testimonial_cards } = data;

  return (
    <section className="mx-auto bg-zinc-950 pt-8 pb-16 xl:pb-32 xl:pt-24">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
      <div
      className="cantainer max-w-[1200px] mx-4 xl:mx-auto"
      >
        <Swiper
          modules={[Autoplay, Pagination ]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
          {testimonial_cards.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard data={testimonial} key={testimonial.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;