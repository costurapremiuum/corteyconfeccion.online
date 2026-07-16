import { courses } from '../data/courses';
import QuizWizard from '../components/QuizWizard';
import InstructorSection from '../components/InstructorSection';
import TestimonialSection from '../components/TestimonialSection';

export default function HomePage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#222222]">
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-serif font-bold leading-tight mb-6">
          Aprende a coser <span className="italic text-[#E07A5F]">como una profesional</span>
        </h1>
        <p className="text-lg opacity-70 mb-10">Cursos online guiados para confeccionar tu propia ropa desde casa.</p>
      </section>

      {/* 2. QUIZ SECTION */}
      <section id="quiz" className="max-w-xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-bold">¿No sabes por dónde empezar?</h2>
          <p className="opacity-60 text-sm">Responde este breve quiz y te recomendaremos el curso perfecto.</p>
        </div>
        <QuizWizard />
      </section>

      {/* 3. GRID DE CURSOS */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Nuestros Cursos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.filter(c => c.badges.isFeatured).map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-3xl border border-[#E0DCD3] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif font-bold text-xl mb-3">{course.title}</h3>
              <p className="text-sm opacity-70 mb-6">{course.shortDescription}</p>
              <a href={course.hotmartLinks.standard} className="block text-center py-3 bg-[#E07A5F] text-white rounded-xl font-bold">
                Ver detalle
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECCIÓN INSTRUCTORA */}
      <InstructorSection />

      {/* 5. TESTIMONIOS */}
      <TestimonialSection />
    </div>
  );
}