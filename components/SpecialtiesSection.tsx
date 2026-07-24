import React from 'react';
import { courses } from '../data/courses';

export default function SpecialtiesSection() {
  // Pick a handful of specialties to highlight (by id or index)
  const picks = [2, 3, 4, 5, 8, 13];
  const items = picks.map(i => courses.find((c) => c.id === String(i))).filter(Boolean) as any[];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-serif font-bold">Especialidades destacadas</h2>
        <a href="#" className="text-sm font-semibold text-[#D4AF37]">Ver las 14 especialidades</a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.id} className="bg-white rounded-2xl border border-[#E0DCD3] overflow-hidden shadow-sm">
            <div className="h-40 bg-[#FAF9F6] flex items-center justify-center text-[#E0DCD3]"> 
              <img src="/placeholder-course.svg" alt={it.title} className="object-cover h-full w-full" />
            </div>
            <div className="p-5">
              <h3 className="font-serif font-semibold text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-[#6B7280] line-clamp-3">{it.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
