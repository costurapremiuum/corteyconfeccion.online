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
    <div className="bg-white border border-[#E0DCD3] rounded-3xl p-8 shadow-sm">
      {step < QUESTIONS.length ? (
        <>
          <div className="mb-6 text-sm font-bold text-[#708090] uppercase tracking-widest">Paso {step + 1} de {QUESTIONS.length}</div>
          <h3 className="text-2xl font-serif text-[#222222] mb-8">{QUESTIONS[step].question}</h3>
          <div className="space-y-3">
            {QUESTIONS[step].options.map((opt) => (
              <button key={opt.value} onClick={() => handleAnswer(opt.value)} className="w-full text-left p-5 rounded-xl border border-[#E0DCD3] hover:border-[#E07A5F] transition-all">
                {opt.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-serif mb-6">Tu curso ideal es...</h3>
          {bestMatches.map(c => <div key={c.id} className="p-4 bg-[#FAF9F6] rounded-xl mb-4 font-bold">{c.title}</div>)}
          <button onClick={() => { setStep(0); setAnswers({}); }} className="text-sm underline">Reiniciar</button>
        </div>
      )}
    </div>
  );
}