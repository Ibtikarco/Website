// Company Information
export const companyInfo = {
  nameAr: 'ابتكار للمقاولات',
  nameEn: 'Ibtikar Contracting',
  tagline: 'بناء بإحسان',
  taglineEn: 'Building with Excellence',
  founded: 2013,
  location: 'المدينة المنورة',
  phone: '+966 569 700 733',
  email: 'info@ibtikarco.com',
  website: 'www.ibtikarco.com',
  
  // Mission & Vision
  mission: '• تعزيز مهاراتنا وخدماتنا في قطاع إدارة المشاريع والإنشاءات.\n• الالتزام بالتميز والتمسك بأعلى معايير الجودة والبناء بإحسان.',
  vision: 'أن نكون الخيار الأول لدى العملاء في تقديم خدمات البناء وإدارة المشاريع',
  
  // About
  about: 'تقدم ابتكار للمقاولات خدمات التشييد والبناء وإدارة المشاريع الإنشائية منذ عام 2013م؛ حيث تم تأسيسها لتلبية الطلب المتزايد في المدينة المنورة على البناء المتميز وبأفضل أساليب البناء الحديث. ومنذ ذلك الوقت تم تركيز الجهود في إنشاء العديد من المشاريع ذات الجودة والكفاءة العالية من خلال فريق هندسي وفني وإداري متكامل.',
  
  description: 'اكتسبت ابتكار للمقاولات خبرتها على مدى السنين من خلال إنشاء العديد من المشاريع الخاصة والحكومية والمشاريع والعمائر السكنية والتجارية والخيرية والعديد من المشاريع الأخرى؛ ومن خلال تبني نقل المعرفة عن طريق توظيف الكفاءات الإدارية والفنية بشكل دوري.',
  
  slogan: 'بالابتكار ... نصنع الفرق، و بالالتزام بالتميز ... نبني مشاريعكم بإحسان، لنقدم لكم المعنى الحقيقي للبناء بإحسان',
  
  ceo: {
    name: 'م. ماجِدْ بن محمَّد بن تِنْباك',
    title: 'المؤسس والرئيس التنفيذي',
    experience: 23,
    description: 'العمل لمدة 23 سنة في إدارة المشاريع في مشاريع شركة أرامكو السعودية وشركة سابك والشركة السعودية للكهرباء بقيمة مشاريع 4 مليار ريال'
  }
};

// Services
export const services = [
  {
    id: 1,
    title: 'إدارة مشاريع',
    titleEn: 'Project Management',
    description: 'إدارة احترافية للمشاريع من البداية حتى التسليم',
    icon: 'clipboard'
  },
  {
    id: 2,
    title: 'الإنشاءات الخرسانية',
    titleEn: 'Concrete Construction',
    description: 'تنفيذ الأعمال الإنشائية بأعلى معايير الجودة',
    icon: 'building'
  },
  {
    id: 3,
    title: 'التشطيبات والديكور',
    titleEn: 'Finishing & Decor',
    description: 'تشطيبات داخلية وخارجية بأفضل المواد',
    icon: 'paintbrush'
  },
  {
    id: 4,
    title: 'بنية تحتية',
    titleEn: 'Infrastructure',
    description: 'أعمال البنية التحتية والطرق',
    icon: 'road'
  }
];

// Statistics
export const stats = [
  { id: 1, number: '23+', label: 'سنة خبرة', labelEn: 'Years Experience' },
  { id: 2, number: '175+', label: 'مشروع منجز', labelEn: 'Completed Projects' },
  { id: 3, number: '95%', label: 'رضا العملاء', labelEn: 'Client Satisfaction' }
];

// Projects
export const projects = [
  {
    id: 1,
    title: 'بوابة سمو',
    category: 'فندقي تجاري',
    location: 'المنطقة المركزية - شمال المسجد النبوي الشريف',
    area: '21 ألف م²',
    depth: '12 متر',
    value: '13 مليون',
    year: 2022,
    status: 'مكتمل',
    type: 'استثمار حكومي',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/ga1cvtib_JPEG%20image-48C8-A16A-44-4%20copy.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/ga1cvtib_JPEG%20image-48C8-A16A-44-4%20copy.jpg',
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/nprjoe0y_JPEG%20image-48C8-A16A-44-17%20copy.jpg',
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/yu24n0dj_JPEG%20image-48C8-A16A-44-23%20copy.jpg'
    ]
  },
  {
    id: 2,
    title: 'مشروع ملاذ',
    category: 'استثماري',
    location: 'شارع الأمير مقرن بن عبدالعزيز',
    area: '8,000 م²',
    floors: '8 أدوار',
    value: '64 مليون',
    year: 2023,
    status: 'قيد التنفيذ',
    type: 'أوقاف',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/q8skbrdt_%D9%85%D9%84%D8%A7%D8%B0-02.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/q8skbrdt_%D9%85%D9%84%D8%A7%D8%B0-02.jpg'
    ]
  },
  {
    id: 3,
    title: 'مركز جراحة اليوم الواحد',
    category: 'طبي',
    location: 'شارع الأمير نايف بن عبدالعزيز',
    area: '1,000 م²',
    floors: '8 أدوار + بدروم',
    value: '24 مليون',
    year: 2025,
    status: 'قيد التنفيذ',
    type: 'استثماري',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/fbhjqeah_03_1.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/fbhjqeah_03_1.jpg'
    ]
  },
  {
    id: 4,
    title: 'جادة الحكمة',
    category: 'إداري',
    location: 'شارع خالد بن الوليد',
    area: '15,000 م²',
    description: 'كومباوند أعمال متكامل',
    value: '135 مليون',
    year: 2025,
    status: 'قيد التنفيذ',
    type: 'استثماري',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/95gwas11_PHOTO-2025-08-11-11-39-33.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/95gwas11_PHOTO-2025-08-11-11-39-33.jpg',
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/gb4y9yxk_PHOTO-2025-08-11-11-39-33%202.jpg'
    ]
  },
  {
    id: 5,
    title: 'الوداد ريزدنس',
    category: 'سكني',
    location: 'حي العهن',
    area: '1,000 م²',
    style: 'طراز يوناني حجازي',
    value: '12 مليون',
    year: 2022,
    status: 'مكتمل',
    type: 'خاص',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/y7wtrrp1_PHOTO-2025-07-21-15-25-53%203.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/y7wtrrp1_PHOTO-2025-07-21-15-25-53%203.jpg',
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/fl8k1ruf_PHOTO-2025-07-21-15-32-21.jpg'
    ]
  },
  {
    id: 6,
    title: 'السلام بلازا',
    category: 'فندقي',
    location: 'دوار السلام',
    area: '1,000 م²',
    floors: '10 طوابق',
    value: '16 مليون',
    year: 2016,
    status: 'مكتمل',
    type: 'خاص',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/jhzgtovp_Salam%20Hotel%20-%20CAM01%20-%2003.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/jhzgtovp_Salam%20Hotel%20-%20CAM01%20-%2003.jpg'
    ]
  },
  {
    id: 7,
    title: 'جامع الأبرار',
    category: 'خيري',
    location: 'حي شوران',
    area: '2,500 م²',
    capacity: '660 مصلي',
    value: '6 مليون',
    year: 2017,
    status: 'مكتمل',
    type: 'أوقاف',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/e43tdpfp_%D8%AC%D8%A7%D9%85%D8%B9%20%D8%A7%D9%84%D8%A7%D9%94%D8%A8%D8%B1%D8%A7%D8%B1.png',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/e43tdpfp_%D8%AC%D8%A7%D9%85%D8%B9%20%D8%A7%D9%84%D8%A7%D9%94%D8%A8%D8%B1%D8%A7%D8%B1.png'
    ]
  },
  {
    id: 8,
    title: 'مستشفى الملك فيصل',
    category: 'طبي',
    location: 'حمراء الأسد',
    area: '230 ألف م²',
    capacity: '300 سرير',
    value: '12 مليون',
    year: 2016,
    status: 'مكتمل',
    type: 'حكومي',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/bhdpf94e_DJI_0439.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/bhdpf94e_DJI_0439.jpg',
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/c7lcbo0q_Untitled-2%20copy.jpg',
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/bppjoppp_IMG_1110.jpg'
    ]
  }
];

// Team Leadership
export const leadership = [
  {
    id: 1,
    name: 'م. ماجد بن محمد بن تنباك',
    position: 'الرئيس التنفيذي',
    experience: 23,
    description: 'العمل لمدة 23 سنة في إدارة المشاريع في مشاريع شركة أرامكو السعودية وشركة سابك والشركة السعودية للكهرباء بقيمة مشاريع 4 مليار ريال'
  },
  {
    id: 2,
    name: 'محمد علي',
    position: 'المدير المالي',
    experience: 14,
    description: 'العمل لمدة 14 سنوات في الإدارة المالية والحسابات، وقطاع الاستثمار'
  },
  {
    id: 3,
    name: 'إبراهيم بكر',
    position: 'مدير الدراسات وإدارة الجودة',
    experience: 26,
    description: 'العمل لمدة 26 سنة في تنفيذ العديد من المشروعات الكبرى (كليات وعمارات ومعاهد فنية صناعية)'
  }
];

// Navigation
export const navigationItems = [
  { id: 1, label: 'الرئيسية', path: '/' },
  { id: 2, label: 'من نحن', path: '/#about' },
  { id: 3, label: 'الخدمات', path: '/#services' },
  { id: 4, label: 'المشاريع', path: '/#projects' },
  { id: 5, label: 'اتصل بنا', path: '/#contact' }
];