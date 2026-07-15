import { courses } from '../data/courses';
import QuizWizard from '../components/QuizWizard';
import SubscriptionSection from '../components/SubscriptionSection';

export default function HomePage() {
  const featuredCourses = courses.filter(c => c.badges.isFeatured);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* 1. SECCIÓN HERO */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#708090] bg-[#708090]/10 px-4 py-1.5 rounded-full inline-block mb-6">
          Academia Digital de Alta Costura y Diseño
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#222222] tracking-tight leading-[1.1] mb-6">
          Domina la costura a tu ritmo con metodología <span className="text-[#E07A5F] italic font-normal">Premium</span>
        </h1>
        <p className="text-lg text-[#222222]/70 max-w-2xl mx-auto font-sans leading-relaxed mb-10">
          Convierte rollos de tela ordinarios en prendas perfectas de alta costura comercial. Estudia en línea de forma segura con instructores de primer nivel y soporte de por vida.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#quiz" 
            className="bg-[#E07A5F] hover:bg-[#c9694e] text-white px-8 py-4 rounded-full font-semibold shadow-md transition-all active:scale-95"
          >
            Encontrar mi curso ideal
          </a>
          <a 
            href="#catalogo" 
            className="bg-white border border-[#E0DCD3] hover:bg-[#FAF9F6] text-[#222222] px-8 py-4 rounded-full font-semibold shadow-sm transition-all"
          >
            Ver catálogo completo
          </a>
        </div>
      </section>

      {/* 2. SECCIÓN SUSCRIPCIÓN (MAESTRÍA INTEGRADA) */}
      <SubscriptionSection />

      {/* 3. BARRA DE CONFIANZA */}
      <section className="bg-white border-y border-[#E0DCD3] py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-2xl font-serif font-bold text-[#222222]">14 Cursos</span>
            <p className="text-xs text-[#222222]/60 mt-1">Especialidades exclusivas</p>
          </div>
          <div>
            <span className="text-2xl font-serif font-bold text-[#222222]">Pago Único</span>
            <p className="text-xs text-[#222222]/60 mt-1">Acceso de por vida</p>
          </div>
          <div>
            <span className="text-2xl font-serif font-bold text-[#222222]">7 Días</span>
            <p className="text-xs text-[#222222]/60 mt-1">Garantía total</p>
          </div>
          <div>
            <span className="text-2xl font-serif font-bold text-[#222222]">Comunidad</span>
            <p className="text-xs text-[#222222]/60 mt-1">Soporte internacional</p>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DEL QUIZ */}
      <section id="quiz" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#222222]">¿No sabes con cuál curso iniciar?</h2>
          <p className="text-[#222222]/60 mt-2 max-w-md mx-auto text-sm">
            Usa este asesor automatizado de 2 minutos para tomar la decisión perfecta.
          </p>
        </div>
        <QuizWizard />
      </section>

      {/* 5. CATÁLOGO */}
      <section id="catalogo" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#708090]">Nuestros Cursos Favoritos</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#222222] mt-2">Nuestras Recomendaciones Estrella</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <article key={course.id} className="bg-white rounded-3xl overflow-hidden border border-[#E0DCD3] shadow-sm flex flex-col group hover:-translate-y-1 transition-all">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif font-semibold text-xl text-[#222222] mt-2 mb-3">{course.title}</h3>
                <p className="text-sm text-[#222222]/70 line-clamp-3 mb-6 leading-relaxed">{course.shortDescription}</p>
                <div className="mt-auto pt-4 border-t border-[#E0DCD3] flex items-center justify-between">
                  <span className="text-xl font-serif font-extrabold text-[#222222]">${course.promoPrice || course.price}</span>
                  <a href={course.hotmartLinks.promo || course.hotmartLinks.standard} className="bg-[#E07A5F] hover:bg-[#c9694e] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-colors">
                    Inscribirme
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}