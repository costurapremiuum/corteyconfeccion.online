'use client';
import React, { useState } from 'react';
import {
  Scissors,
  PlayCircle,
  Mail,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { courses } from '../data/courses';
import QuizWizard from '../components/QuizWizard';
import SubscriptionSection from '../components/SubscriptionSection';

type Page = 'home' | 'cursos';

type CourseItem = (typeof courses)[number];

const COURSES = courses;

const Header = ({ setPage }: { setPage: React.Dispatch<React.SetStateAction<Page>> }) => (
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

const CourseCard = ({ course }: { course: CourseItem }) => (
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
  const [page, setPage] = useState<Page>('home');

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

            <SubscriptionSection />
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
          <div className="flex justify-center gap-6 mb-8 text-[#D4AF37]">
            <Mail size={20} />
            <MessageCircle size={20} />
            <Sparkles size={20} />
          </div>
          <p className="opacity-50 text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}