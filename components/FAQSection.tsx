import React from 'react';

const FAQS = [
  { q: '¿Necesito experiencia previa?', a: 'No, nuestros cursos están pensados para acompañarte desde cero hasta nivel avanzado según la especialidad.' },
  { q: '¿Las clases quedan grabadas?', a: 'Sí, todas las clases quedan disponibles en la plataforma para que las veas cuando quieras.' },
  { q: '¿Qué incluye la suscripción?', a: 'Acceso a las 14 especialidades, más de 1.100 clases, actualizaciones y material descargable.' },
  { q: '¿Puedo aprender a mi ritmo?', a: 'Sí, las clases son grabadas y la ruta de aprendizaje te guía paso a paso para avanzar a tu propio ritmo.' },
  { q: '¿Recibiré nuevos cursos?', a: 'Sí, la Academia se actualiza periódicamente con nuevas clases y especialidades.' }
];

export default function FAQSection() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-8">Preguntas frecuentes</h2>
      <div className="space-y-4">
        {FAQS.map((f, idx) => (
          <details key={idx} className="rounded-2xl border border-[#E0DCD3] bg-white p-5">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <div className="mt-3 text-sm text-[#6B7280]">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
