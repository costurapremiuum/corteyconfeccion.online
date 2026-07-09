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
    slug: 'costura-premium-plus',
    title: 'Corte y Confección: Alta Costura Premium',
    shortDescription: 'Pasa de principiante a confeccionar vestidos de gala y prendas a medida con acabados profesionales de boutique.',
    longDescription: 'El programa más completo de habla hispana. Aprenderás desde cómo enhebrar tu máquina hasta patronaje avanzado, transformación de moldes y costuras invisibles para vestidos de alta noche.',
    level: 'Todos los niveles',
    price: 99.99,
    promoPrice: 49.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-1',
      promo: 'https://hotmart.com/product/link-promo-1',
      freeClass: 'https://hotmart.com/product/clase-gratis-1'
    },
    badges: { isPromo: true, hasFreeClass: true, isFeatured: true },
    category: 'alta-costura',
    quizTags: {
      experience: ['principiante', 'intermedio'],
      learnType: ['alta-costura', 'costura-basica'],
      garmentType: ['vestidos', 'casual'],
      machine: ['si', 'no'],
      purpose: ['hobby', 'negocio'],
      challenge: ['patrones', 'acabados'],
      goal: ['ropa-propia', 'vender-medida']
    },
    benefits: ['Acceso de por vida a más de 80 lecciones en HD', 'Certificado de finalización descargable', 'Asesoría directa en el área de alumnas'],
    faqs: [
      { question: '¿Necesito experiencia previa?', answer: 'No, este curso está diseñado para guiarte desde el absoluto cero.' },
      { question: '¿Cómo recibo el acceso?', answer: 'De forma inmediata en tu correo electrónico tras realizar el pago a través de Hotmart.' }
    ]
  },
  {
    id: '2',
    slug: 'patronaje-industrial-moldes',
    title: 'Patronaje Industrial y Confección de Faldas',
    shortDescription: 'Domina el diseño y escalado de patrones industriales de faldas comerciales listas para vender.',
    longDescription: 'Aprende las técnicas de patronaje de mesa usadas por las grandes marcas textiles para crear faldas perfectas, entalladas y escaladas en todas las tallas estándar.',
    level: 'Intermedio',
    price: 59.99,
    promoPrice: 29.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-2',
      promo: 'https://hotmart.com/product/link-promo-2'
    },
    badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
    category: 'patronaje',
    quizTags: {
      experience: ['intermedio', 'avanzado'],
      learnType: ['patronaje'],
      garmentType: ['casual'],
      machine: ['si'],
      purpose: ['negocio'],
      challenge: ['patrones'],
      goal: ['crear-marca', 'vender-medida']
    },
    benefits: ['Patrones base descargables listos para imprimir', 'Técnicas de escalado industrial de tallas', 'Grupo de soporte en Telegram'],
    faqs: [
      { question: '¿Incluye patrones en PDF?', answer: 'Sí, incluye plantillas listas para imprimir en formato PDF tamaño real.' }
    ]
  },
  {
    id: '3',
    slug: 'costura-decorativa-hogar',
    title: 'Costura de Cero a Pro: Decoración de Hogar',
    shortDescription: 'Aprende a confeccionar sábanas, cojines, cortinas y organizadores de tela para embellecer tu espacio.',
    longDescription: 'Descubre los secretos de la costura lineal y decorativa. Transforma telas comunes en accesorios elegantes, cortinas perfectas y mantelería fina de nivel profesional.',
    level: 'Principiante',
    price: 39.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-3',
      freeClass: 'https://hotmart.com/product/clase-gratis-3'
    },
    badges: { isPromo: false, hasFreeClass: true, isFeatured: false },
    category: 'costura-basica',
    quizTags: {
      experience: ['principiante'],
      learnType: ['costura-basica'],
      garmentType: ['casual'],
      machine: ['si', 'no'],
      purpose: ['hobby'],
      challenge: ['maquina'],
      goal: ['ropa-propia']
    },
    benefits: ['Proyectos sencillos de rápida costura', 'Guías de compra de telas para el hogar', 'Ahorra dinero decorando tu casa'],
    faqs: [
      { question: '¿Es apto para máquinas familiares?', answer: 'Sí, todos los proyectos se realizan con costura recta básica.' }
    ]
  },
  {
    id: '4',
    slug: 'sastreria-masculina-moderna',
    title: 'Sastrería Masculina y Sacos Modernos',
    shortDescription: 'Domina las técnicas tradicionales de sastrería para confeccionar sacos, chalecos y pantalones de caballero.',
    longDescription: 'Adéntrate en el sector más lucrativo de la costura. Aprende la arquitectura del saco masculino, técnicas de hombreras, entretelado clásico y bolsillos de ojal perfectos.',
    level: 'Avanzado',
    price: 119.99,
    promoPrice: 59.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-4',
      promo: 'https://hotmart.com/product/link-promo-4',
      freeClass: 'https://hotmart.com/product/clase-gratis-4'
    },
    badges: { isPromo: true, hasFreeClass: true, isFeatured: true },
    category: 'alta-costura',
    quizTags: {
      experience: ['avanzado'],
      learnType: ['alta-costura', 'patronaje'],
      garmentType: ['sastreria'],
      machine: ['si'],
      purpose: ['negocio'],
      challenge: ['acabados', 'patrones'],
      goal: ['vender-medida', 'crear-marca']
    },
    benefits: ['Técnicas de forrado interno profesional', 'Trazado clásico a tiza sobre tela', 'Soporte personalizado'],
    faqs: [
      { question: '¿Necesito máquina industrial?', answer: 'No, puedes confeccionarlo con máquina familiar, se explican adaptaciones.' }
    ]
  },
  {
    id: '5',
    slug: 'lenceria-fina-ropa-interior',
    title: 'Diseño y Confección de Lencería Fina',
    shortDescription: 'Crea conjuntos de ropa interior, encajes, bralettes y bodys ajustados al cuerpo con acabados premium.',
    longDescription: 'Aprende a trabajar con telas elásticas como lycra y encaje elástico. Confecciona sostenes con arco, bralettes modernos y pantis cómodas con costuras suaves e invisibles.',
    level: 'Intermedio',
    price: 49.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-5'
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: false },
    category: 'especialidades',
    quizTags: {
      experience: ['intermedio'],
      learnType: ['alta-costura', 'costura-basica'],
      garmentType: ['lenceria'],
      machine: ['si'],
      purpose: ['negocio', 'hobby'],
      challenge: ['acabados'],
      goal: ['crear-marca', 'ropa-propia']
    },
    benefits: ['Patrones listos en tallas XS a XL', 'Costura con máquina familiar (Zig-zag)', 'Uso correcto de elásticos'],
    faqs: [
      { question: '¿Se necesita máquina Overlock?', answer: 'No, aprenderás a usar la puntada de tres pasos en máquina familiar.' }
    ]
  },
  {
    id: '6',
    slug: 'novias-y-gala-corseteria',
    title: 'Especialista en Vestidos de Novia y Corsetería',
    shortDescription: 'Aprende la técnica de armado de corsés estructurados con ballenas para vestidos de novia y quinceañeras.',
    longDescription: 'Conviértete en una costurera altamente cotizada aprendiendo corsetería fina. Estructuración con copas, varillas de metal y espaldas acordonadas con ojales impecables.',
    level: 'Avanzado',
    price: 149.99,
    promoPrice: 74.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-6',
      promo: 'https://hotmart.com/product/link-promo-6'
    },
    badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
    category: 'alta-costura',
    quizTags: {
      experience: ['avanzado'],
      learnType: ['alta-costura'],
      garmentType: ['vestidos'],
      machine: ['si'],
      purpose: ['negocio'],
      challenge: ['acabados'],
      goal: ['vender-medida', 'crear-marca']
    },
    benefits: ['Confección paso a paso de 3 vestidos reales', 'Estructuras de soporte interno invisibles', 'Soporte prioritario'],
    faqs: [
      { question: '¿Este curso incluye videos paso a paso?', answer: 'Sí, videos HD súper detallados grabados de cerca.' }
    ]
  },
  {
    id: '7',
    slug: 'costura-infantil-bebes',
    title: 'Costura Infantil: Ropa de Bebé y Niños',
    shortDescription: 'Crea vestidos de niña, enteritos de bebé y conjuntos cómodos con telas naturales y seguras.',
    longDescription: 'Aprende las medidas especiales para niños, acabados suaves para pieles sensibles y patrones adaptados para el crecimiento rápido de los más pequeños de la casa.',
    level: 'Principiante',
    price: 45.00,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-7',
      freeClass: 'https://hotmart.com/product/clase-gratis-7'
    },
    badges: { isPromo: false, hasFreeClass: true, isFeatured: false },
    category: 'especialidades',
    quizTags: {
      experience: ['principiante', 'intermedio'],
      learnType: ['costura-basica'],
      garmentType: ['casual'],
      machine: ['si', 'no'],
      purpose: ['hobby', 'negocio'],
      challenge: ['maquina'],
      goal: ['ropa-propia', 'crear-marca']
    },
    benefits: ['Plantillas de medidas infantiles por edad', 'Trucos de terminaciones que no raspan', 'Telas recomendadas'],
    faqs: [
      { question: '¿Sirve para regalar o vender?', answer: 'Totalmente, la ropa de bebé es uno de los rubros mejor pagados.' }
    ]
  },
  {
    id: '8',
    slug: 'patronaje-digital-moldes',
    title: 'Patronaje Digital: Domina el Software',
    shortDescription: 'Aprende a diseñar, digitalizar e imprimir tus propios patrones de ropa usando la computadora.',
    longDescription: 'Olvídate de los pliegos enormes de papel y lápiz. Aprende a vectorizar y diseñar tus patrones digitalmente para modificarlos en segundos e imprimirlos en cualquier impresora familiar.',
    level: 'Intermedio',
    price: 69.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-8'
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: false },
    category: 'patronaje',
    quizTags: {
      experience: ['intermedio', 'avanzado'],
      learnType: ['patronaje'],
      garmentType: ['casual', 'vestidos'],
      machine: ['si'],
      purpose: ['negocio'],
      challenge: ['patrones'],
      goal: ['crear-marca']
    },
    benefits: ['Licencia de software de práctica incluida', 'Exportación de moldes en PDF tamaño carta/A4', 'Clases de escalado automatizado'],
    faqs: [
      { question: '¿Necesito una computadora muy avanzada?', answer: 'No, cualquier computadora básica de oficina o laptop funciona.' }
    ]
  },
  {
    id: '9',
    slug: 'upcycling-transformacion-ropa',
    title: 'Upcycling: Transforma y Arregla tu Ropa',
    shortDescription: 'Aprende a cambiar cierres, entallar pantalones y darle una segunda vida de diseño a tus prendas viejas.',
    longDescription: 'Ahorra dinero y cuida el planeta. Te enseñamos a realizar bastas perfectas, entallar blusas a tu silueta y recrear prendas pasadas de moda con técnicas modernas de sastrería rápida.',
    level: 'Principiante',
    price: 34.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-9'
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: false },
    category: 'costura-basica',
    quizTags: {
      experience: ['principiante'],
      learnType: ['costura-basica'],
      garmentType: ['casual'],
      machine: ['si', 'no'],
      purpose: ['hobby'],
      challenge: ['maquina'],
      goal: ['ropa-propia']
    },
    benefits: ['Guía visual de compostura de cierres rotos', 'Cómo arreglar pantalones jeans', 'Ideas creativas de diseño sostenible'],
    faqs: [
      { question: '¿Aprenderé a entallar sacos?', answer: 'Sí, hay módulos específicos para entallado de prendas superiores.' }
    ]
  },
  {
    id: '10',
    slug: 'confeccion-chaquetas-abrigos',
    title: 'Confección Profesional de Chaquetas y Abrigos',
    shortDescription: 'Crea abrigos elegantes de lana, chaquetas forradas y prendas de invierno duraderas.',
    longDescription: 'Domina el manejo de telas pesadas y estructuradas. Aprenderás cuellos solapa impecables, técnicas de acolchado, cierres de abrigo reforzados y puños con acabados profesionales.',
    level: 'Avanzado',
    price: 79.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-10'
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: false },
    category: 'especialidades',
    quizTags: {
      experience: ['avanzado'],
      learnType: ['alta-costura', 'patronaje'],
      garmentType: ['sastreria'],
      machine: ['si'],
      purpose: ['negocio', 'hobby'],
      challenge: ['acabados'],
      goal: ['vender-medida', 'ropa-propia']
    },
    benefits: ['Acabados térmicos interiores para invierno', 'Corte seguro de telas gruesas', 'Acceso al foro de dudas'],
    faqs: [
      { question: '¿Sirve para chaquetas de cuero?', answer: 'Se enseñan las bases para telas gruesas, incluyendo consejos de eco-cuero.' }
    ]
  },
  {
    id: '11',
    slug: 'emprendimiento-marca-costura',
    title: 'Costura para Emprendedoras: Crea tu Marca',
    shortDescription: 'Aprende a calcular costos, fotografiar tus prendas y vender colecciones de ropa por redes sociales.',
    longDescription: 'El curso de negocios definitivo para costureras. No basta con saber coser; te enseñamos a monetizar tu talento, calcular precios exactos para tener ganancias altas y crear empaques irresistibles.',
    level: 'Todos los niveles',
    price: 49.99,
    promoPrice: 24.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-11',
      promo: 'https://hotmart.com/product/link-promo-11'
    },
    badges: { isPromo: true, hasFreeClass: false, isFeatured: true },
    category: 'especialidades',
    quizTags: {
      experience: ['principiante', 'intermedio', 'avanzado'],
      learnType: ['costura-basica', 'alta-costura', 'patronaje'],
      garmentType: ['casual', 'vestidos', 'sastreria', 'lenceria'],
      machine: ['si', 'no'],
      purpose: ['negocio'],
      challenge: ['patrones', 'maquina', 'acabados'],
      goal: ['crear-marca', 'vender-medida']
    },
    benefits: ['Plantilla automatizada de cálculo de precios', 'Guía de fotografía con celular en casa', 'Estrategia de ventas digitales'],
    faqs: [
      { question: '¿Necesito saber coser mucho para tomarlo?', answer: 'No, este curso se enfoca puramente en la parte comercial y ventas.' }
    ]
  },
  {
    id: '12',
    slug: 'bordado-pedreria-alta-costura',
    title: 'Bordado en Pedrería y Detalles de Gala',
    shortDescription: 'Aplica mostacillas, canutillos, lentejuelas y pedrería fina sobre vestidos de alta noche.',
    longDescription: 'Eleva el valor de tus prendas multiplicando su precio en el mercado. Aprende a transferir diseños, tensar bastidores de alta costura y fijar cada joya para que no se caiga ni dañe la tela.',
    level: 'Intermedio',
    price: 55.00,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-12'
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: false },
    category: 'alta-costura',
    quizTags: {
      experience: ['principiante', 'intermedio'],
      learnType: ['alta-costura'],
      garmentType: ['vestidos'],
      machine: ['si', 'no'],
      purpose: ['hobby', 'negocio'],
      challenge: ['acabados'],
      goal: ['vender-medida']
    },
    benefits: ['Patrones de bordado descargables listos para trazar', 'Uso correcto del gancho de Luneville', 'Cómo calcular el valor de tus horas de bordado'],
    faqs: [
      { question: '¿Requiere máquina de coser?', answer: 'No, esta es una técnica de trabajo artesanal 100% manual.' }
    ]
  },
  {
    id: '13',
    slug: 'costura-ropa-deportiva',
    title: 'Confección Profesional de Ropa Deportiva',
    shortDescription: 'Aprende a confeccionar calzas, tops deportivos y shorts elásticos resistentes de alta calidad.',
    longDescription: 'Confecciona ropa deportiva de alto rendimiento. Domina las puntadas elásticas de tensión, costuras reforzadas para actividad física y el correcto estiramiento de las lycras técnicas.',
    level: 'Intermedio',
    price: 49.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-13'
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: false },
    category: 'especialidades',
    quizTags: {
      experience: ['intermedio'],
      learnType: ['patronaje', 'costura-basica'],
      garmentType: ['lenceria'],
      machine: ['si'],
      purpose: ['negocio', 'hobby'],
      challenge: ['acabados'],
      goal: ['crear-marca', 'ropa-propia']
    },
    benefits: ['Patrones listos en PDF multitalle', 'Manejo de elásticos embutidos de cintura', 'Guía de telas que respiran de calidad industrial'],
    faqs: [
      { question: '¿Las costuras resisten el estiramiento?', answer: 'Sí, te enseñamos a hacer la costura de seguridad elástica con aguja doble.' }
    ]
  },
  {
    id: '14',
    slug: 'costura-mascotas-accesorios',
    title: 'Moda Canina y Accesorios para Mascotas',
    shortDescription: 'Confecciona abrigos, capas de lluvia, collares y ropa temática para perros de todos los tamaños.',
    longDescription: 'El mercado de mascotas está en su momento de mayor auge. Aprende las tablas de medidas caninas por razas, cómo diseñar para su comodidad anatómica y confecciona prendas rápidas y altamente lucrativas.',
    level: 'Principiante',
    price: 39.99,
    hotmartLinks: {
      standard: 'https://hotmart.com/product/link-estandar-14'
    },
    badges: { isPromo: false, hasFreeClass: false, isFeatured: false },
    category: 'especialidades',
    quizTags: {
      experience: ['principiante'],
      learnType: ['costura-basica'],
      garmentType: ['casual'],
      machine: ['si', 'no'],
      purpose: ['negocio', 'hobby'],
      challenge: ['maquina'],
      goal: ['crear-marca', 'vender-medida']
    },
    benefits: ['Guías de medidas por razas desde chihuahua a golden retriever', 'Proyectos muy rentables utilizando sobrantes de tela', 'Certificación Hotmart'],
    faqs: [
      { question: '¿Es fácil vender este tipo de prendas?', answer: 'Sí, es uno de los nichos con compras más impulsivas y mejores márgenes.' }
    ]
  }
];