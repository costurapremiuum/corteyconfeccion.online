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
  {
    id: 'q1',
    question: '¿Cuál es tu nivel de experiencia actual en costura?',
    key: 'experience',
    options: [
      { value: 'principiante', label: 'Cero absoluto: Nunca he tocado una máquina' },
      { value: 'intermedio', label: 'Básico: Sé coser en línea recta pero no sé hacer moldes' },
      { value: 'avanzado', label: 'Avanzado: Ya confecciono ropa y quiero perfeccionarme' }
    ]
  },
  {
    id: 'q2',
    question: '¿Qué es lo que más te llama la atención aprender?',
    key: 'learnType',
    options: [
      { value: 'costura-basica', label: 'Técnicas de costura rápida y arreglos útiles' },
      { value: 'patronaje', label: 'Trazar moldes perfectos a medida en papel o digital' },
      { value: 'alta-costura', label: 'Alta costura, acabados finos y prendas elegantes' }
    ]
  },
  {
    id: 'q3',
    question: '¿Qué tipo de prendas te gustaría confeccionar principalmente?',
    key: 'garmentType',
    options: [
      { value: 'casual', label: 'Ropa del día a día (faldas, blusas, pantalones cómodos)' },
      { value: 'vestidos', label: 'Vestidos de fiesta, novia, gala y corsetería estructurada' },
      { value: 'sastreria', label: 'Sastrería formal (sacos masculinos, abrigos estructurados)' },
      { value: 'lenceria', label: 'Ropa íntima fina, lencería elástica o trajes de baño' }
    ]
  },
  {
    id: 'q4',
    question: '¿Tienes una máquina de coser disponible en casa?',
    key: 'machine',
    options: [
      { value: 'si', label: 'Sí, tengo mi propia máquina de coser (familiar o industrial)' },
      { value: 'no', label: 'No tengo máquina todavía, pero quiero aprender la teoría primero' }
    ]
  },
  {
    id: 'q5',
    question: '¿Estás aprendiendo por pasatiempo o quieres generar ingresos?',
    key: 'purpose',
    options: [
      { value: 'hobby', label: 'Como pasatiempo creativo, terapia o para hacer mi ropa' },
      { value: 'negocio', label: 'Para iniciar un taller en casa, vender a medida o crear una marca' }
    ]
  },
  {
    id: 'q6',
    question: '¿Cuál consideras que es tu mayor obstáculo en la costura hoy?',
    key: 'challenge',
    options: [
      { value: 'maquina', label: 'Perder el miedo a usar la máquina y enhebrarla sin enredos' },
      { value: 'patrones', label: 'Aprender a calcular medidas y hacer patrones desde cero' },
      { value: 'acabados', label: 'Lograr que mis costuras se vean profesionales por dentro' }
    ]
  },
  {
    id: 'q7',
    question: 'Si logras tu objetivo ideal, ¿cuál sería el resultado perfecto?',
    key: 'goal',
    options: [
      { value: 'ropa-propia', label: 'Tener mi armario lleno de ropa hecha a mi medida' },
      { value: 'vender-medida', label: 'Montar un taller y confeccionar ropa de alta calidad para clientes' },
      { value: 'crear-marca', label: 'Lanzar mi propia marca de ropa infantil, lencería o moda urbana' }
    ]
  }
];

export default function QuizWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [bestMatches, setBestMatches] = useState<Course[]>([]);

  const handleAnswer = (value: string) => {
    const currentQuestion = QUESTIONS[step];
    const newAnswers = { ...answers, [currentQuestion.key]: value };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(prev => prev + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: Record<string, string>) => {
    const scoredCourses = courses.map(course => {
      let score = 0;
      if (course.quizTags.experience.includes(finalAnswers.experience)) score += 3;
      if (course.quizTags.learnType.includes(finalAnswers.learnType)) score += 3;
      if (course.quizTags.garmentType.includes(finalAnswers.garmentType)) score += 3;
      if (course.quizTags.machine.includes(finalAnswers.machine)) score += 1;
      if (course.quizTags.purpose.includes(finalAnswers.purpose)) score += 2;
      if (course.quizTags.challenge.includes(finalAnswers.challenge)) score += 2;
      if (course.quizTags.goal.includes(finalAnswers.goal)) score += 3;
      return { course, score };
    });

    const sorted = scoredCourses.sort((a, b) => b.score - a.score);
    const recommended = sorted.slice(0, 2).map(item => item.course);
    setBestMatches(recommended);
    setStep(QUESTIONS.length);
  };

  const restartQuiz = () => {
    setStep(0);
    setAnswers({});
    setBestMatches([]);
  };

  const progressPercent = Math.round((step / QUESTIONS.length) * 100);

  return (
    <div className="bg-[#FAF9F6] border border-[#E0DCD3] rounded-3xl p-6 md:p-10 max-w-2xl mx-auto shadow-sm">
      {step < QUESTIONS.length ? (
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-[#708090] tracking-widest uppercase">Paso {step + 1} de {QUESTIONS.length}</span>
            <span className="text-xs text-[#222222]/60">{progressPercent}% completado</span>
          </div>
          <div className="w-full h-1 bg-[#E0DCD3] rounded-full mb-10 overflow-hidden">
            <div 
              className="h-full bg-[#708090] transition-all duration-300" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <h3 className="text-2xl font-serif text-[#222222] font-semibold mb-8 tracking-tight">
            {QUESTIONS[step].question}
          </h3>

          <div className="space-y-3">
            {QUESTIONS[step].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-5 rounded-2xl bg-white border border-[#E0DCD3] text-[#222222] hover:border-[#708090] hover:bg-white/80 active:scale-[0.99] transition-all font-medium flex items-center justify-between group"
              >
                <span>{option.label}</span>
                <span className="w-6 h-6 rounded-full border border-[#E0DCD3] group-hover:bg-[#708090] group-hover:text-white group-hover:border-[#708090] transition-all flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest bg-[#708090]/10 text-[#708090] px-4 py-1.5 rounded-full font-bold">
            Asesoría Personalizada
          </span>
          <h3 className="text-3xl font-serif font-bold text-[#222222] mt-4 mb-2">Tus Cursos Perfectos</h3>
          <p className="text-[#222222]/60 text-sm max-w-md mx-auto mb-10">
            Analizamos tus respuestas sobre tus metas y experiencia de costura. El plan de capacitación ideal para ti se compone de:
          </p>

          <div className="space-y-6 text-left">
            {bestMatches.map((course) => (
              <div 
                key={course.id} 
                className="p-6 bg-white rounded-2xl border border-[#E0DCD3] flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {course.badges.isPromo && (
                      <span className="text-[9px] uppercase font-bold tracking-wider bg-[#E07A5F] text-white px-2 py-0.5 rounded">
                        Oferta de Lanzamiento
                      </span>
                    )}
                    {course.badges.hasFreeClass && (
                      <span className="text-[9px] uppercase font-bold tracking-wider bg-[#D4AF37] text-black px-2 py-0.5 rounded font-serif">
                        Clase de Prueba Disponible
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#222222]">{course.title}</h4>
                  <p className="text-xs text-[#222222]/70 mt-1 line-clamp-2">{course.shortDescription}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a 
                      href={course.hotmartLinks.promo || course.hotmartLinks.standard}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#E07A5F] hover:bg-[#c9694e] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                    >
                      Inscribirme por ${course.promoPrice || course.price}
                    </a>
                    {course.hotmartLinks.freeClass && (
                      <a 
                        href={course.hotmartLinks.freeClass}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-[#708090] text-[#708090] hover:bg-[#708090]/10 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                      >
                        Ver Clase Gratis Directa
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={restartQuiz}
            className="mt-10 text-xs uppercase tracking-widest text-[#222222]/60 hover:text-[#708090] font-bold underline decoration-[#E0DCD3]"
          >
            Volver a hacer el Cuestionario
          </button>
        </div>
      )}
    </div>
  );
}