import React, { useState, useEffect } from 'react';
import { 
  Scissors, Menu, X, Star, Clock, PlayCircle, Mail, 
  Instagram, Facebook, Youtube, Cookie, MessageCircle, ChevronRight
} from 'lucide-react';

const COURSES = [
  { id: 1, title: 'Alta Costura Premium', category: 'Alta Costura', level: 'Avanzado', price: 99.99, rating: 4.9, duration: '40h', lessons: 85, shortDescription: 'Domina los acabados de lujo y manipulación de telas.' },
  { id: 2, title: 'Patronaje desde Cero', category: 'Patronaje', level: 'Principiante', price: 49.99, rating: 4.8, duration: '20h', lessons: 40, shortDescription: 'Crea tus propios moldes sin depender de nadie.' },
  { id: 3, title: 'Costura Infantil', category: 'Especialidades', level: 'Principiante', price: 39.99, rating: 4.7, duration: '15h', lessons: 30, shortDescription: 'Diseña ropa cómoda y linda para niños.' },
  { id: 4, title: 'Lencería Fina', category: 'Especialidades', level: 'Intermedio', price: 69.99, rating: 4.9, duration: '25h', lessons: 45, shortDescription: 'Brasieres y panties con acabados profesionales.' },
  { id: 5, title: 'Moda Masculina', category: 'Sastrería', level: 'Intermedio', price: 59.99, rating: 4.6, duration: '30h', lessons: 50, shortDescription: 'Sastrería básica y cortes masculinos.' },
  { id: 6, title: 'Trajes de Baño', category: 'Especialidades', level: 'Intermedio', price: 45.00, rating: 4.8, duration: '12h', lessons: 25, shortDescription: 'Confección de bikinis y trajes de una pieza.' },
  { id: 7, title: 'Emprende con Camisetas', category: 'Negocio', level: 'Principiante', price: 29.99, rating: 4.5, duration: '10h', lessons: 20, shortDescription: 'Tu marca de camisetas desde casa.' },
  { id: 8, title: 'Mantenimiento de Máquinas', category: 'Técnico', level: 'Intermedio', price: 35.00, rating: 4.9, duration: '8h', lessons: 15, shortDescription: 'Alarga la vida útil de tu máquina de coser.' },
  { id: 9, title: 'Vestidos de Gala', category: 'Alta Costura', level: 'Avanzado', price: 89.99, rating: 4.9, duration: '50h', lessons: 90, shortDescription: 'Creación de vestidos para eventos especiales.' },
  { id: 10, title: 'Moda Materna', category: 'Especialidades', level: 'Intermedio', price: 40.00, rating: 4.7, duration: '18h', lessons: 35, shortDescription: 'Ropa funcional y elegante para el embarazo.' },
  { id: 11, title: 'Upcycling Creativo', category: 'Sostenibilidad', level: 'Principiante', price: 25.00, rating: 4.8, duration: '12h', lessons: 22, shortDescription: 'Transforma prendas viejas en tendencias nuevas.' },
  { id: 12, title: 'Bordado a Mano', category: 'Decoración', level: 'Principiante', price: 30.00, rating: 4.9, duration: '15h', lessons: 28, shortDescription: 'Técnicas de bordado para personalizar prendas.' },
  { id: 13, title: 'Sastrería de Pantalón', category: 'Sastrería', level: 'Avanzado', price: 75.00, rating: 4.8, duration: '35h', lessons: 60, shortDescription: 'Ajuste perfecto en pantalones de vestir.' },
  { id: 14, title: 'Diseño de Moda Digital', category: 'Diseño', level: 'Intermedio', price: 55.00, rating: 4.6, duration: '22h', lessons: 40, shortDescription: 'Dibuja tus ideas usando herramientas digitales.' },
];

const QUIZ = [
  { id: 'q1', question: '¿Cuál es tu nivel actual?', options: ['Principiante', 'Intermedio', 'Avanzado'] },
  { id: 'q2', question: '¿Qué te apasiona más?', options: ['Alta Costura', 'Negocio', 'Especialidades', 'Sastrería'] }
];

const Header = ({ setPage }) => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E0DCD3]">
    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <div className="bg-[#E07A5F] p-2 rounded-full"><Scissors className="text-white h-5 w-5" /></div>
        <span className="font-serif font-bold text-xl">Corte y Confección</span>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <button onClick={() => setPage('home')}>Inicio</button>
        <button onClick={() => setPage('cursos')}>Cursos</button>
      </nav>
      <button onClick={() => setPage('cursos')} className="bg-[#222222] text-white px-6 py-2.5 rounded-full text-sm font-bold">
        Ver Cursos
      </button>
    </div>
  </header>
);

const QuizWizard = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  const handleAnswer = (ans) => {
    if (step < QUIZ.length - 1) setStep(step + 1);
    else setResult(COURSES[Math.floor(Math.random() * COURSES.length)]);
  };

  return (
    <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-[#E0DCD3] shadow-sm">
      {!result ? (
        <>
          <p className="text-[#E07A5F] font-bold text-xs uppercase mb-2">Quiz Recomendador</p>
          <h3 className="text-2xl font-serif mb-6">{QUIZ[step].question}</h3>
          <div className="space-y-3">
            {QUIZ[step].options.map(opt => (
              <button key={opt} onClick={() => handleAnswer(opt)} className="w-full text-left p-4 bg-white border border-[#E0DCD3] rounded-xl hover:border-[#E07A5F] transition-all">
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-serif mb-4">Te recomendamos:</h3>
          <div className="p-6 bg-white rounded-xl font-bold text-[#E07A5F] text-xl">{result.title}</div>
          <button onClick={() => {setStep(0); setResult(null)}} className="mt-6 underline">Reiniciar</button>
        </div>
      )}
    </div>
  );
};

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-2xl border border-[#E0DCD3] p-5 shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="bg-[#FAF9F6] h-40 rounded-xl mb-4 flex items-center justify-center text-[#E0DCD3]">
      <PlayCircle size={48} />
    </div>
    <span className="text-[10px] uppercase tracking-widest text-[#E07A5F] font-bold">{course.category}</span>
    <h3 className="font-serif text-lg font-bold mt-2">{course.title}</h3>
    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{course.shortDescription}</p>
    <div className="flex justify-between items-center mt-6">
      <span className="font-serif text-2xl font-bold">${course.price}</span>
      <button className="bg-[#222222] text-white px-4 py-2 rounded-lg text-sm">Detalles</button>
    </div>
  </div>
);

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#222222] font-sans">
      <Header setPage={setPage} />

      <main className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-12 lg:px-10">
        {page === 'home' && (
          <>
            <section className="relative overflow-hidden rounded-[32px] border border-[#E8E0D0] bg-[#F8F5EF] px-8 py-12 shadow-[0_24px_80px_rgba(34,34,34,0.06)] md:px-12 lg:px-16 lg:py-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.16),_transparent_38%)]" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                    Academia Costura Premium
                  </span>
                  <h1 className="mt-6 text-4xl font-serif font-semibold leading-[0.95] text-[#222222] sm:text-5xl lg:text-6xl">
                    Tu academia online de <span className="text-[#D4AF37]">corte y confección</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B7280]">
                    Aprende desde cero hasta nivel profesional y crea prendas que amarás con una ruta guiada, clases premium y acceso ilimitado.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#academia"
                      className="inline-flex items-center justify-center rounded-full bg-[#222222] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#111111]"
                    >
                      ÚNETE A LA ACADEMIA
                    </a>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {[
                      { value: '14 cursos', label: 'incluidos' },
                      { value: '+1,100 clases', label: 'de contenido' },
                      { value: 'Acceso ilimitado', label: 'a tu ritmo' }
                    ].map((item) => (
                      <div key={item.value} className="rounded-2xl border border-[#E8E0D0] bg-white/70 px-4 py-4 backdrop-blur">
                        <p className="text-lg font-semibold text-[#222222]">{item.value}</p>
                        <p className="mt-1 text-sm text-[#6B7280]">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="overflow-hidden rounded-[28px] border border-[#E8E0D0] bg-[#FFFDF8] p-3 shadow-[0_20px_50px_rgba(34,34,34,0.08)]">
                    <img
                      src="/hero-sewing.svg"
                      alt="Espacio premium de costura"
                      className="h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto my-16 max-w-3xl">
              <QuizWizard />
            </section>
          </>
        )}

        {page === 'cursos' && (
          <section>
            <h2 className="text-4xl font-serif font-bold mb-12">Catálogo de Cursos ({COURSES.length})</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {COURSES.map(c => <CourseCard key={c.id} course={c} />)}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#222222] text-white py-16 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="font-serif text-xl mb-6">Corte y Confección Online</p>
          <div className="flex justify-center gap-6 mb-8">
            <Instagram /> <Facebook /> <Youtube />
          </div>
          <p className="opacity-50 text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}