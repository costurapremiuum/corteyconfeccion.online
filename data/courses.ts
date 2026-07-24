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
    shortDescription: 'Confecciona camisas para niños desde cero: desde tomar medidas hasta crear prendas con acabados profesionales.',
    longDescription: 'Aprende el proceso completo de confección de camisas infantiles: toma de medidas, desarrollo de patrones, corte preciso y confección paso a paso con técnicas sencillas que garantizan resultados impecables. Ideal tanto para crear ropa para tus hijos como para iniciar un emprendimiento rentable.',
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
    shortDescription: 'Domina la confección de ropa deportiva con patrones profesionales para crear calzas, tops y leggings de alto rendimiento.',
    longDescription: 'Aprende a confeccionar ropa deportiva de calidad gym: desde la toma de medidas adaptadas al ajuste deportivo, desarrollo de patrones para diferentes tipos de cuerpo, corte preciso en telas elásticas y confección de prendas con acabados profesionales. Especializado en la creación de calzas, tops y piezas fitness ideales para venta.',
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
    shortDescription: 'Crea blusas personalizadas: toma de medidas, desarrollo de moldes adaptados al cuerpo y confección paso a paso.',
    longDescription: 'Especialízate en la confección completa de blusas: aprende a tomar medidas precisas según la morfología de cada cuerpo, desarrolla patrones personalizados ajustables, domina técnicas de corte en diferentes telas y confecciona blusas con detalles profesionales. Cada blusa que crees será única y adaptada perfectamente a quién la use.',
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
    shortDescription: 'Confecciona prendas infantiles profesionales: desde tomar medidas de niños hasta crear moldes y costuras de alta calidad.',
    longDescription: 'Domina la confección completa de ropa infantil: aprende a tomar medidas exactas en diferentes grupos de edad, desarrolla patrones que crecen con el niño, domina técnicas de corte en telas delicadas y confecciona prendas robustas y seguras. Desde vestidos hasta conjuntos, crearás ropa infantil de calidad premium para uso personal o emprendimiento.',
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
    shortDescription: 'Confecciona prendas masculinas premium: camisas, pantalones y chaquetas con patrones profesionales y acabados impecables.',
    longDescription: 'Aprende el proceso completo de confección masculina: toma de medidas precisas según fisionomía masculina, desarrollo de patrones para camisas y pantalones, corte en diferentes telas y confección de prendas con estructuras y acabados de sastrería. Desde camisas casuales hasta piezas formales, crearás prendas masculinas de alta calidad.',
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
    shortDescription: 'Domina la alta costura: vestidos y prendas complejas con patrones avanzados y acabados de lujo profesional.',
    longDescription: 'El nivel superior de confección. Aprende a crear prendas complejas: toma de medidas especializadas, desarrollo de patrones para vestidos de evento y piezas exigentes, trabajo con telas delicadas y complejas, y domina los acabados de alta costura que distinguen a una modista profesional. Técnicas avanzadas en forros, cierres invisibles y detalles de lujo.',
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
    shortDescription: 'Confecciona lencería fina: brasieres, panties y conjuntos con patrones profesionales y acabados de alta calidad.',
    longDescription: 'Domina la confección completa de lencería íntima: toma de medidas exactas y especializadas, desarrollo de patrones para diferentes tipos de cuerpo, corte preciso en materiales elásticos y delicados, y confección de brasieres estructurados, panties y conjuntos con acabados impecables. Aprenderás con máquinas familiares e industriales para crear diseños exclusivos.',
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
    id: '9',
    slug: 'emprende-con-camisetas',
    title: 'Emprende con Camisetas',
    shortDescription: 'Confecciona camisetas y escala un negocio: aprende toma de medidas, patrones, corte y estrategias de venta.',
    longDescription: 'Domina la confección completa de camisetas más estrategias de emprendimiento: toma de medidas para diferentes talles, desarrollo de patrones versátiles, corte eficiente en producción, confección rápida con acabados de calidad y técnicas de venta y marketing para escalar tu marca. Aprende a producir volumen sin sacrificar la calidad.',
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
    shortDescription: 'Crea prendas maternas: toma de medidas adaptadas, patrones flexibles y confección de ropa cómoda y elegante.',
    longDescription: 'Aprende la confección completa de ropa materna: toma de medidas que se adaptan al crecimiento del vientre, desarrollo de patrones que evolucionan con la gestación, corte en telas cómodas y confección de prendas funcionales y elegantes. Crea ropa que acompaña cada etapa del embarazo con estilo y comodidad.',
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
    shortDescription: 'Confecciona pijamas de calidad: toma de medidas, desarrollo de patrones cómodos y costura de acabados profesionales.',
    longDescription: 'Domina la confección completa de pijamas: toma de medidas para ajuste perfecto en ropa de descanso, desarrollo de patrones cómodos y versátiles, corte en telas suaves y confección de pijamas con detalles premium como cuellos smoking y remates profesionales. Crea pijamas para ti o para iniciar una línea de ropa de descanso.',
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
    shortDescription: 'Confecciona trajes de baño profesionales: patrones especializados, forrado técnico y acabados resistentes al agua.',
    longDescription: 'Aprende la confección completa de trajes de baño: toma de medidas especializadas para ajuste en agua, desarrollo de patrones para bikinis, enteros y tankinis, corte preciso en telas elásticas, forrado profesional y confección con técnicas de acabado resistente. Domina la colocación de elásticos y tirantes para crear prendas de venta con alta demanda.',
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
  }
];
