export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Todos los niveles';
  price: number;
  promoPrice?: number;
  hotmartLinks: {
    standard: string;
    promo?: string;
    freeClass?: string;
  };
  badges: {
    isPromo: boolean;
    hasFreeClass: boolean;
    isFeatured: boolean;
  };
  category: 'costura-basica' | 'patronaje' | 'alta-costura' | 'especialidades';
  quizTags: {
    experience: string[];
    learnType: string[];
    garmentType: string[];
    machine: string[];
    purpose: string[];
    challenge: string[];
    goal: string[];
  };
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const courses: Course[] = [
  {
    id: '1',
    slug: 'camisas-nino-isabel-villagomez',
    title: 'Costura Sin Estrés: Camisas de Niño',
    shortDescription: 'Aprende a confeccionar camisas de niño paso a paso con técnicas sencillas y acabados profesionales.',
    longDescription: 'El curso perfecto para quienes buscan resultados impecables sin complicaciones. Domina el corte y confección de camisas infantiles, ideal tanto para uso personal como para emprender un negocio rentable.',
    level: 'Principiante',
    price: 24.99,
    promoPrice: 15.00,
    hotmartLinks: {
      standard: 'https://go.hotmart.com/R106585358N',
      promo: 'https://go.hotmart.com/R106585358N?ap=b506',
    },
    badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
    category: 'especialidades',
    quizTags: {
      experience: ['principiante', 'intermedio'],
      learnType: ['costura-basica'],
      garmentType: ['casual'],
      machine: ['si'],
      purpose: ['hobby', 'negocio'],
      challenge: ['maquina', 'acabados'],
      goal: ['ropa-propia', 'vender-medida']
    },
    benefits: ['Técnicas de costura sin estrés', 'Guía paso a paso en video', 'Resultados profesionales garantizados'],
    faqs: [
      { question: '¿Es apto para principiantes?', answer: 'Sí, el curso está diseñado para que cualquiera pueda lograr resultados profesionales desde cero.' }
    ]
  },
  {
    id: '2',
    slug: 'patrones-premium-ropa-deportiva',
    title: 'Patrones Premium: Ropa Deportiva',
    shortDescription: 'Colección de patrones profesionales para confeccionar ropa deportiva de alto rendimiento.',
    longDescription: 'Accede a una serie de moldes diseñados para crear calzas, tops y ropa deportiva con un ajuste profesional. Ideales para iniciar tu emprendimiento de moda fitness.',
    level: 'Intermedio',
    price: 14.00,
    hotmartLinks: {
      standard: 'https://go.hotmart.com/F106590078S?ap=2c7f',
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: true },
    category: 'patronaje',
    quizTags: {
      experience: ['intermedio', 'avanzado'],
      learnType: ['patronaje'],
      garmentType: ['lenceria'],
      machine: ['si'],
      purpose: ['negocio'],
      challenge: ['patrones'],
      goal: ['crear-marca', 'vender-medida']
    },
    benefits: ['Patrones profesionales listos para imprimir', 'Diseños ajustables para diversas tallas', 'Ideal para venta de prendas'],
    faqs: [
      { question: '¿Incluye los patrones en PDF?', answer: 'Sí, son patrones descargables y listos para imprimir.' }
    ]
  },
  {
    id: '3',
    slug: 'especializacion-blusas',
    title: 'Especialización en Blusas',
    shortDescription: 'Aprende a desarrollar blusas desde la base, ajustándolas a la morfología corporal para crear patrones personalizados.',
    longDescription: 'En este plan de estudio aprenderás a desarrollar blusas desde la base, comprendiendo cómo tomar medidas según la morfología del cuerpo y trasladarlas al papel para crear patrones personalizados. A lo largo del proceso, trabajarás en el diseño, realizando ajustes y modificaciones según el estilo deseado.',
    level: 'Intermedio',
    price: 14.99,
    hotmartLinks: {
      standard: 'https://go.hotmart.com/S106590131G?dp=1',
      promo: 'https://go.hotmart.com/S106590131G?ap=8025'
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: true },
    category: 'patronaje',
    quizTags: {
      experience: ['intermedio'],
      learnType: ['patronaje'],
      garmentType: ['casual'],
      machine: ['si'],
      purpose: ['hobby', 'negocio'],
      challenge: ['patrones'],
      goal: ['ropa-propia', 'vender-medida']
    },
    benefits: ['Toma de medidas profesional', 'Patronaje desde la base', 'Modificación de diseños'],
    faqs: [
      { question: '¿Es apto para principiantes?', answer: 'Está enfocado en desarrollar desde la base, por lo que es ideal para quienes ya tienen nociones básicas.' }
    ]
  },
  {
    id: '4',
    slug: 'costura-infantil-premium',
    title: 'Costura Infantil Premium',
    shortDescription: 'Aprende a diseñar y confeccionar prendas infantiles con técnicas de patronaje desde cero.',
    longDescription: 'En este curso aprenderás a diseñar prendas infantiles, afinando tus técnicas desde lo básico a lo avanzado. Te llevaremos de la mano hasta que desarrolles tu primera prenda, sin necesidad de patrones previos. Aprenderás a confeccionar ropa de alta calidad, a tomar medidas y a crear tus propios patrones desde cero.',
    level: 'Principiante',
    price: 79.99,
    hotmartLinks: {
      standard: 'https://go.hotmart.com/R82849870U?ap=9dab',
      freeClass: 'https://go.hotmart.com/R82849870U?ap=8db0'
    },
    badges: { isPromo: false, hasFreeClass: true, isFeatured: true },
    category: 'especialidades',
    quizTags: {
      experience: ['principiante', 'intermedio'],
      learnType: ['costura-basica'],
      garmentType: ['casual'],
      machine: ['si'],
      purpose: ['hobby', 'negocio'],
      challenge: ['maquina', 'acabados'],
      goal: ['crear-marca', 'ropa-propia']
    },
    benefits: ['Diseño de prendas infantiles', 'Patronaje desde cero', 'Técnicas de alta calidad'],
    faqs: [
      { question: '¿Es apto para principiantes?', answer: 'Sí, el curso está diseñado para llevarte de la mano desde cero hasta que crees tus primeros diseños.' }
    ]
  },
  {
    id: '5',
    slug: 'diseno-moda-premium',
    title: 'Diseño de Moda Premium',
    shortDescription: 'Descubre tu estilo personal y aprende a dibujar figurines profesionales desde cero, incluso sin experiencia previa.',
    longDescription: 'Sumérgete en el mundo del diseño de moda. Aprende la historia de la moda, cómo dibujar figurines de manera profesional, y descubre cómo aplicar los 7 estilos universales para definir tu propia identidad creativa o la de tu marca.',
    level: 'Principiante',
    price: 59.99,
    promoPrice: 29.99,
    hotmartLinks: {
      standard: 'https://go.hotmart.com/A106562256Q?dp=1',
      promo: 'https://go.hotmart.com/A106562256Q?ap=9850',
    },
    badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
    category: 'especialidades',
    quizTags: {
      experience: ['principiante'],
      learnType: ['alta-costura'],
      garmentType: ['casual'],
      machine: ['no'],
      purpose: ['hobby'],
      challenge: ['patrones'],
      goal: ['crear-marca']
    },
    benefits: ['Historia de la moda', 'Dibujo de figurines profesionales', 'Análisis de los 7 estilos universales', 'Definición de estilo personal'],
    faqs: [
      { question: '¿Necesito saber dibujar?', answer: 'No, el curso está diseñado para principiantes y te enseñará paso a paso técnicas de dibujo de figurines.' }
    ]
  },
  {
    id: '6',
    slug: 'costura-premium-masculina',
    title: 'Costura Premium Línea Masculina',
    shortDescription: 'Domina el arte de la confección masculina con técnicas premium y acabados profesionales.',
    longDescription: 'Aprende las bases de la sastrería y confección masculina. Domina los cortes, estructuras y acabados necesarios para crear prendas masculinas de alta calidad, desde camisas hasta pantalones. Un curso diseñado para elevar tus habilidades técnicas en el sector masculino.',
    level: 'Intermedio',
    price: 19.99,
    hotmartLinks: {
      standard: 'https://go.hotmart.com/057813170D?dp=1',
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: true },
    category: 'especialidades',
    quizTags: {
      experience: ['intermedio', 'avanzado'],
      learnType: ['patronaje', 'alta-costura'],
      garmentType: ['sastreria', 'casual'],
      machine: ['si'],
      purpose: ['hobby', 'negocio'],
      challenge: ['patrones', 'acabados'],
      goal: ['ropa-propia', 'vender-medida']
    },
    benefits: ['Técnicas de sastrería', 'Confección masculina', 'Acabados de alta calidad'],
    faqs: [
      { question: '¿Es apto para principiantes?', answer: 'Este curso está enfocado en técnicas de sastrería, por lo que se recomienda tener conocimientos básicos de costura previa.' }
    ]
  },
  {
    id: '7',
    slug: 'costura-premium-gold',
    title: 'Costura Premium Gold',
    shortDescription: 'Domina la alta costura con técnicas avanzadas de confección profesional y acabados de lujo.',
    longDescription: 'El nivel superior de nuestra academia. En Costura Premium Gold aprenderás los secretos de los acabados de alta gama, manipulación de telas complejas y las técnicas avanzadas que distinguen a una modista profesional. Ideal para quienes buscan elevar la calidad de sus creaciones al máximo nivel.',
    level: 'Avanzado',
    price: 75.00,
    hotmartLinks: {
      standard: 'https://go.hotmart.com/E106051689D?ap=8fe0',
      freeClass: 'https://go.hotmart.com/E106051689D?ap=7b7b'
    },
    badges: { isPromo: false, hasFreeClass: true, isFeatured: true },
    category: 'alta-costura',
    quizTags: {
      experience: ['intermedio', 'avanzado'],
      learnType: ['alta-costura'],
      garmentType: ['vestidos', 'sastreria'],
      machine: ['si'],
      purpose: ['negocio'],
      challenge: ['acabados'],
      goal: ['vender-medida', 'crear-marca']
    },
    benefits: ['Acabados de lujo', 'Manipulación de telas avanzadas', 'Técnicas de alta costura'],
    faqs: [
      { question: '¿Es apto para principiantes?', answer: 'Este es un curso avanzado. Se recomienda tener experiencia previa en confección para aprovechar al máximo las técnicas enseñadas.' }
    ]
  },
  {
    id: '8',
    slug: 'lenceria-intima-premium',
    title: 'Lencería Íntima Premium',
    shortDescription: 'Domina el arte de la confección de lencería fina con técnicas profesionales y acabados de alta calidad.',
    longDescription: 'Curso integral de lencería íntima donde aprenderás desde el reconocimiento de materiales hasta la confección avanzada de brasieres y panties. Domina la toma de medidas exacta, el uso de máquinas familiares e industriales y la transformación de patrones para crear diseños únicos (cacheteros, tangas, brasieres estructurados) con acabados impecables.',
    level: 'Intermedio',
    price: 79.99,
    promoPrice: 39.99,
    hotmartLinks: {
      standard: 'https://go.hotmart.com/P75653648Y?ap=1788',
      promo: 'https://go.hotmart.com/P75653648Y?ap=5f2c',
    },
    badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
    category: 'especialidades',
    quizTags: {
      experience: ['intermedio'],
      learnType: ['alta-costura'],
      garmentType: ['lenceria'],
      machine: ['si'],
      purpose: ['hobby', 'negocio'],
      challenge: ['acabados', 'patrones'],
      goal: ['ropa-propia', 'vender-medida']
    },
    benefits: ['Toma de medidas profesional', 'Confección de brasieres y panties', 'Técnicas de costura industrial', 'Transformación de patrones'],
    faqs: [
      { question: '¿Necesito máquina industrial?', answer: 'Puedes comenzar con una máquina familiar que tenga puntada zigzag, el curso te enseña a adaptar las técnicas a tus herramientas.' }
    ]
  },
{
  id: '11',
  slug: 'moda-materna',
  title: 'Moda Materna',
  shortDescription: 'Aprende a crear tus propias prendas clásicas para la gestación, con patrones personalizados.',
  longDescription: 'Domina la creación de moda materna con patrones que se adaptan al crecimiento del vientre. Aprenderás a confeccionar ropa cómoda, con estilo y funcional para tallas grandes y etapas de gestación, asegurando un ajuste perfecto y acabados de alta calidad.',
  level: 'Principiante',
  price: 14.99,
  hotmartLinks: {
    standard: 'https://go.hotmart.com/V106588330E?dp=1',
    promo: 'https://go.hotmart.com/V106588330E?ap=b3cc'
  },
  badges: { isPromo: true, hasFreeClass: false, isFeatured: false },
  category: 'especialidades',
  quizTags: {
    experience: ['principiante', 'intermedio'],
    learnType: ['costura-basica', 'patronaje'],
    garmentType: ['casual'],
    machine: ['si'],
    purpose: ['hobby', 'negocio'],
    challenge: ['patrones', 'acabados'],
    goal: ['vender-medida', 'ropa-propia']
  },
  benefits: ['Patrones adaptables', 'Confección para tallas grandes', 'Comodidad y estilo materno', 'Técnicas de costura básica'],
  faqs: [
    { question: '¿Incluye patrones?', answer: 'Sí, aprenderás a crear tus propios patrones adaptables al crecimiento del vientre.' }
  ]
},
{
  id: '12',
  slug: 'mantenimiento-maquinas',
  title: 'Mantenimiento de Máquinas de Confección',
  shortDescription: 'Aprende a realizar el mantenimiento preventivo y correctivo de tu máquina de coser para alargar su vida útil.',
  longDescription: 'Domina los secretos técnicos para mantener tu máquina de coser en perfecto estado. En este curso aprenderás desde la limpieza profunda y lubricación, hasta la sincronización de tiempos, ajuste de tensión, y cómo solucionar problemas comunes sin necesidad de un técnico. Ideal para máquinas rectas e industriales.',
  level: 'Intermedio',
  price: 39.99,
  hotmartLinks: {
    standard: 'https://go.hotmart.com/N55733229G?dp=1',
    promo: 'https://go.hotmart.com/N55733229G?ap=c27d'
  },
  badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
  category: 'especialidades',
  quizTags: {
    experience: ['principiante', 'intermedio'],
    learnType: ['costura-basica'],
    garmentType: ['casual'],
    machine: ['si'],
    purpose: ['hobby', 'negocio'],
    challenge: ['maquina'],
    goal: ['ropa-propia', 'vender-medida']
  },
  benefits: ['Ahorro en servicios técnicos', 'Mayor vida útil de tu máquina', 'Solución de problemas comunes', 'Sincronización profesional'],
  faqs: [
    { question: '¿Aplica para mi máquina?', answer: 'Sí, el curso cubre los principios universales de las máquinas de confección, tanto familiares como industriales.' },
    { question: '¿Necesito ser experta?', answer: 'No, te llevamos paso a paso con videos en alta definición para que cualquiera pueda realizar los ajustes.' }
  ]
  
},
{
      id: '13',
      slug: 'pijamas-premium',
      title: 'Pijamas Premium',
      shortDescription: 'Domina la confección de pijamas cómodas y con estilo, desde el patronaje hasta los acabados finales.',
      longDescription: 'Este curso integral te enseña a crear tu propia línea de ropa de descanso. Aprenderás toma de medidas, patronaje básico, y técnicas específicas de confección para cuellos smoking, pijamas con tela y acabados de nivel profesional. Ideal tanto para uso personal como para emprender.',
      level: 'Principiante',
      price: 29.99,
      promoPrice: 59.99,
      hotmartLinks: {
        standard: 'https://go.hotmart.com/G59372086C?ap=953a',
        promo: 'https://go.hotmart.com/G59372086C?ap=1c94'
      },
      badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
      category: 'especialidades',
      quizTags: {
        experience: ['principiante', 'intermedio'],
        learnType: ['costura-basica', 'patronaje'],
        garmentType: ['casual', 'lenceria'],
        machine: ['si'],
        purpose: ['hobby', 'negocio'],
        challenge: ['acabados', 'patrones'],
        goal: ['ropa-propia', 'vender-medida']
      },
      benefits: ['Patronaje de pijamas', 'Confección de cuello smoking', 'Acabados profesionales', 'Emprendimiento de ropa de descanso'],
      faqs: [
        { question: '¿Incluye patronaje?', answer: 'Sí, el curso cubre el proceso completo desde la toma de medidas y trazado de patrones hasta la confección.' }
      ]
    },
{
  id: '14',
  slug: 'trajes-de-bano-premium',
  title: 'Trajes de Baño Premium',
  shortDescription: 'Domina la confección de trajes de baño profesionales, desde el forrado hasta los acabados elásticos perfectos.',
  longDescription: 'Curso avanzado enfocado en la creación de trajes de baño de alta calidad. Aprenderás a trabajar con telas elásticas, aplicar técnicas de forrado profesional, colocar elásticos, tirantes y realizar acabados impecables en bikinis, enteros y tankinis. Ideal para quienes buscan un producto de venta con alta demanda.',
  level: 'Intermedio',
  price: 69.99,
  hotmartLinks: {
    standard: 'https://go.hotmart.com/D50567569B?dp=1',
    promo: 'https://go.hotmart.com/D50567569B?ap=aab2'
  },
  badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
  category: 'especialidades',
  quizTags: {
    experience: ['intermedio', 'avanzado'],
    learnType: ['alta-costura'],
    garmentType: ['lenceria'],
    machine: ['si'],
    purpose: ['hobby', 'negocio'],
    challenge: ['acabados', 'maquina'],
    goal: ['vender-medida', 'crear-marca']
  },
  benefits: ['Técnicas de forrado profesional', 'Confección de piezas elásticas', 'Acabados resistentes al agua', 'Emprendimiento de trajes de baño'],
  faqs: [
    { question: '¿Qué tipo de máquina necesito?', answer: 'Se recomienda una máquina que realice puntada zigzag o una máquina recubridora para acabados profesionales en telas elásticas.' }
  ]
  },
  {
      id: '9',
      slug: 'emprende-con-camisetas',
      title: 'Emprende con Camisetas',
      shortDescription: 'Aprende a confeccionar camisetas de alta calidad y escala tu propio negocio de moda básica.',
      longDescription: 'Domina el proceso completo de confección de camisetas: desde la toma de medidas y el manejo de máquinas hasta el corte, confección y estrategias de marketing para vender tus creaciones. Un curso enfocado en la productividad y la calidad para quienes buscan emprender en el nicho de moda básica.',
      level: 'Principiante',
      price: 14.00,
      hotmartLinks: {
        standard: 'https://go.hotmart.com/Q106562159L?dp=1',
        promo: 'https://go.hotmart.com/Q106562159L?ap=14e1'
      },
      badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
      category: 'especialidades',
      quizTags: {
        experience: ['principiante', 'intermedio'],
        learnType: ['costura-basica'],
        garmentType: ['casual'],
        machine: ['si'],
        purpose: ['negocio'],
        challenge: ['maquina'],
        goal: ['crear-marca', 'vender-medida']
      },
      benefits: ['Confección de camisetas desde cero', 'Marketing para marcas de moda', 'Estrategias de venta', 'Toma de medidas'],
      faqs: [
        { question: '¿Incluye moldes?', answer: 'Sí, el curso te enseña a manejar los moldes necesarios para la producción de camisetas.' }
      ]
    },
    {
  id: '11',
  slug: 'moda-materna',
  title: 'Moda Materna',
  shortDescription: 'Aprende a crear tus propias prendas clásicas para la gestación, con patrones personalizados.',
  longDescription: 'Domina la creación de moda materna con patrones que se adaptan al crecimiento del vientre. Aprenderás a confeccionar ropa cómoda, con estilo y funcional para tallas grandes y etapas de gestación, asegurando un ajuste perfecto y acabados de alta calidad.',
  level: 'Principiante',
  price: 14.99,
  hotmartLinks: {
    standard: 'https://go.hotmart.com/V106588330E?dp=1',
    promo: 'https://go.hotmart.com/V106588330E?ap=b3cc'
  },
  badges: { isPromo: true, hasFreeClass: false, isFeatured: false },
  category: 'especialidades',
  quizTags: {
    experience: ['principiante', 'intermedio'],
    learnType: ['costura-basica', 'patronaje'],
    garmentType: ['casual'],
    machine: ['si'],
    purpose: ['hobby', 'negocio'],
    challenge: ['patrones', 'acabados'],
    goal: ['vender-medida', 'ropa-propia']
  },
  benefits: ['Patrones adaptables', 'Confección para tallas grandes', 'Comodidad y estilo materno', 'Técnicas de costura básica'],
  faqs: [
    { question: '¿Incluye patrones?', answer: 'Sí, aprenderás a crear tus propios patrones adaptables al crecimiento del vientre.' }
  ]
},
  ];