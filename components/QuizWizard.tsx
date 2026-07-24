'use client';
import { useState } from 'react';
import { courses, Course } from '../data/courses';

interface QuizOption {
  value: string;
  label: string;
  courseId: string;
  courseName: string;
  reason: string;
}

const QUIZ_OPTIONS: QuizOption[] = [
  {
    value: 'beginners',
    label: 'Nunca he cosido',
    courseId: '1',
    courseName: 'Costura Sin Estrés: Camisas de Niño',
    reason: 'Es el mejor punto de partida para familiarizarte con la máquina de coser y desarrollar una base sólida antes de explorar otras especialidades de la academia.'
  },
  {
    value: 'own-clothes',
    label: 'Quiero confeccionar mi propia ropa',
    courseId: '3',
    courseName: 'Especialización en Blusas',
    reason: 'Aprenderás una de las prendas más utilizadas y desarrollarás habilidades que luego podrás aplicar al resto de las especialidades disponibles en la academia.'
  },
  {
    value: 'specialize',
    label: 'Quiero especializarme en un tipo de prenda',
    courseId: '5',
    courseName: 'Diseño de Moda Premium',
    reason: 'Explorarás el desarrollo creativo de diseños y comprenderás cómo planificar nuevas colecciones antes de llevarlas a la confección.'
  },
  {
    value: 'business',
    label: 'Quiero convertir la costura en un negocio',
    courseId: '9',
    courseName: 'Emprende con Camisetas',
    reason: 'Conocerás una alternativa orientada a desarrollar productos para comercializar, mientras aprovechas todos los recursos disponibles dentro de la Academia.'
  }
];

export default function QuizWizard() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [recommendedCourse, setRecommendedCourse] = useState<QuizOption | null>(null);

  const handleRecommendation = () => {
    if (!selectedValue) return;
    
    const selected = QUIZ_OPTIONS.find(opt => opt.value === selectedValue);
    if (selected) {
      setRecommendedCourse(selected);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setSelectedValue(null);
    setShowResults(false);
    setRecommendedCourse(null);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#E8E0D0] bg-[#FFFDF8] p-8 shadow-[0_20px_60px_rgba(34,34,34,0.06)] md:p-10">
      {!showResults ? (
        <>
          <div className="mb-6 inline-flex rounded-full border border-[#D4AF37]/30 bg-[#F8F5EF] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            TE AYUDAMOS A EMPEZAR
          </div>
          <h3 className="text-2xl font-serif text-[#222222] mb-4 leading-tight">¿Qué te gustaría aprender primero?</h3>
          <p className="mb-8 max-w-2xl text-base leading-7 text-[#6B7280]">
            Cuéntanos cuál es tu objetivo y te recomendaremos por dónde comenzar dentro de la Academia.
          </p>
          <div className="space-y-3">
            {QUIZ_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedValue(opt.value)}
                className={`w-full rounded-2xl border px-5 py-4 text-left text-sm font-medium text-[#222222] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#F8F5EF] ${selectedValue === opt.value ? 'border-[#D4AF37] bg-[#F8F5EF]' : 'border-[#E8E0D0] bg-white'}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <button
            onClick={handleRecommendation}
            disabled={!selectedValue}
            className="mt-8 w-full rounded-full bg-[#222222] px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#D4AF37] hover:text-[#222222] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Ver mi recomendación
          </button>
        </>
      ) : (
        <div className="space-y-10">
          {/* Main Recommendation - Academy */}
          <div>
            <h3 className="text-xl font-serif text-[#222222] mb-6">Tu mejor opción</h3>
            <div className="rounded-[28px] border-2 border-[#D4AF37] bg-gradient-to-br from-[#F8F5EF] to-white p-8 shadow-[0_20px_60px_rgba(212,175,55,0.15)]">
              <h4 className="text-2xl md:text-3xl font-serif text-[#222222] mb-4">
                Academia Completa de Corte y Confección
              </h4>
              <p className="text-base leading-8 text-[#6B7280] mb-8">
                La Academia Completa es la mejor opción para alcanzar tu objetivo. Tendrás acceso a los 14 cursos especializados, más de 1.100 clases, podrás aprender diferentes especialidades de costura y avanzar a tu propio ritmo con una metodología paso a paso.
              </p>
              <a
                href="https://go.hotmart.com/J106588325P?dp=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#222222] transition hover:bg-[#222222] hover:text-[#D4AF37] shadow-lg hover:shadow-xl"
              >
                Quiero acceder a toda la Academia
              </a>
            </div>
          </div>

          {/* Secondary Recommendation - Starting Course */}
          {recommendedCourse && (
            <div>
              <h3 className="text-lg font-serif text-[#222222] mb-6">Te recomendamos comenzar por...</h3>
              <div className="rounded-2xl border border-[#E8E0D0] bg-white p-6">
                <h4 className="text-lg font-serif text-[#222222] mb-2">
                  {recommendedCourse.courseName}
                </h4>
                <p className="text-sm leading-6 text-[#6B7280]">
                  {recommendedCourse.reason}
                </p>
              </div>
            </div>
          )}

          <button
            onClick={resetQuiz}
            className="w-full rounded-full border border-[#D4AF37]/40 px-5 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#F8F5EF]"
          >
            Reiniciar quiz
          </button>
        </div>
      )}
    </div>
  );
}