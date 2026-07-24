import React from 'react';

export default function MethodologySection() {
  const cards = [
    {
      title: 'Toma medidas',
      text: 'Aprende a obtener medidas precisas como base para cada proyecto.',
      icon: '✂️'
    },
    {
      title: 'Desarrolla el patrón',
      text: 'Construye el molde adecuado para cada tipo de prenda.',
      icon: '📐'
    },
    {
      title: 'Confecciona paso a paso',
      text: 'Sigue cada clase hasta obtener un resultado profesional.',
      icon: '🧵'
    },
    {
      title: 'Explora diferentes especialidades',
      text: 'Aprende blusas, vestidos, pantalones, lencería, costura infantil y mucho más.',
      icon: '👗'
    }
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-serif font-bold">Una metodología que te acompaña desde el primer día</h2>
        <p className="mt-4 text-[#6B7280]">En cada especialidad aprenderás el proceso completo de creación de una prenda, desde las primeras medidas hasta la confección final.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.title} className="bg-white rounded-3xl border border-[#E0DCD3] p-6 text-left shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F8F5EF] text-2xl mb-4">{c.icon}</div>
            <h3 className="font-serif font-semibold text-lg mb-2">{c.title}</h3>
            <p className="text-sm text-[#6B7280]">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
