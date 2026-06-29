import React from "react";

export interface Testimonial {
  avatarSrc: string;
  name: string;
  handle: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: string;
}

export default function TestimonialCard({ testimonial, delay }: TestimonialCardProps) {
  return (
    <div className={`animate-testimonial ${delay} flex items-start gap-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 w-72 shadow-lg`}>
      <img src={testimonial.avatarSrc} className="h-12 w-12 object-cover rounded-full border-2 border-white" alt={testimonial.name} />
      <div className="text-sm leading-snug text-white">
        <p className="flex items-center gap-1 font-bold">{testimonial.name}</p>
        <p className="text-white/80 text-xs">{testimonial.handle}</p>
        <p className="mt-1 text-white text-xs line-clamp-2">{testimonial.text}</p>
      </div>
    </div>
  );
}
