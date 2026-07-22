'use client';
import { useState } from 'react';
import { courses, Course } from '../data/courses';

interface QuizQuestion {
  id: string;
  question: string;
  key: 'experience' | 'learnType' | 'garmentType' | 'machine' | 'purpose' | 'challenge' | 'goal';
  options: { value: string; label: string }[];
}

const QUESTIONS: QuizQuestion[] = [
  { id: 'q1', question: '¿Cuál es tu nivel de experiencia?', key: 'experience', options: [{ value: 'principiante', label: 'Cero absoluto' }, { value: 'intermedio', label: 'Básico' }, { value: 'avanzado', label: 'Avanzado' }] },
  { id: 'q2', question: '¿Qué te llama la atención aprender?', key: 'learnType', options: [{ value: 'costura-basica', label: 'Costura rápida' }, { value: 'patronaje', label: 'Patronaje' }, { value: 'alta-costura', label: 'Alta costura' }] },
  { id: 'q3', question: '¿Qué tipo de prendas prefieres?', key: 'garmentType', options: [{ value: 'casual', label: 'Casual' }, { value: 'vestidos', label: 'Vestidos' }, { value: 'sastreria', label: 'Sastrería' }, { value: 'lenceria', label: 'Lencería' }] },
  { id: 'q4', question: '¿Tienes máquina de coser?', key: 'machine', options: [{ value: 'si', label: 'Sí' }, { value: 'no', label: 'No aún' }] },
  { id: 'q5', question: '¿Objetivo principal?', key: 'purpose', options: [{ value: 'hobby', label: 'Pasatiempo' }, { value: 'negocio', label: 'Negocio' }] },
  { id: 'q6', question: 'Mayor obstáculo?', key: 'challenge', options: [{ value: 'maquina', label: 'Uso de máquina' }, { value: 'patrones', label: 'Patrones' }, { value: 'acabados', label: 'Acabados' }] },
  { id: 'q7', question: 'Meta final?', key: 'goal', options: [{ value: 'ropa-propia', label: 'Ropa propia' }, { value: 'vender-medida', label: 'Vender a medida' }, { value: 'crear-marca', label: 'Crear marca' }] }
];

export default function QuizWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [bestMatches, setBestMatches] = useState<Course[]>([]);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [QUESTIONS[step].key]: value };
    setAnswers(newAnswers);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else calculateResults(newAnswers);
  };

  const calculateResults = (finalAnswers: Record<string, string>) => {
    const scored = courses.map(course => {
      let score = 0;
      Object.keys(finalAnswers).forEach(key => {
        if (course.quizTags[key as keyof typeof course.quizTags]?.includes(finalAnswers[key])) score += 3;
      });
      return { course, score };
    });
    setBestMatches(scored.sort((a, b) => b.score - a.score).slice(0, 2).map(i => i.course));
    setStep(QUESTIONS.length);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#E8E0D0] bg-[#FFFDF8] p-8 shadow-[0_20px_60px_rgba(34,34,34,0.06)] md:p-10">
      {step < QUESTIONS.length ? (
        <>
          <div className="mb-6 inline-flex rounded-full border border-[#D4AF37]/30 bg-[#F8F5EF] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Descubre tu camino ideal
          </div>
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
            Paso {step + 1} de {QUESTIONS.length}
          </div>
          <h3 className="text-2xl font-serif text-[#222222] mb-8 leading-tight">{QUESTIONS[step].question}</h3>
          <div className="space-y-3">
            {QUESTIONS[step].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="w-full rounded-2xl border border-[#E8E0D0] bg-white px-5 py-4 text-left text-sm font-medium text-[#222222] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#F8F5EF]"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className="mb-6 inline-flex rounded-full border border-[#D4AF37]/30 bg-[#F8F5EF] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Recomendación premium
          </div>
          <h3 className="text-2xl font-serif mb-6 text-[#222222]">Tu mejor opción es...</h3>
          <div className="space-y-3">
            {bestMatches.map((c) => (
              <div key={c.id} className="rounded-2xl border border-[#E8E0D0] bg-white p-4 text-left font-semibold text-[#222222] shadow-sm">
                {c.title}
              </div>
            ))}
          </div>
          <button
            onClick={() => { setStep(0); setAnswers({}); setBestMatches([]); }}
            className="mt-8 rounded-full border border-[#D4AF37]/40 px-5 py-2 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#F8F5EF]"
          >
            Reiniciar quiz
          </button>
        </div>
      )}
    </div>
  );
}