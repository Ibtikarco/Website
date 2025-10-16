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
  mission: 'تعزيز مهاراتنا وخدماتنا في قطاع إدارة المشاريع والإنشاءات',
  vision: 'أن نكون الخيار الأول لدى العملاء في تقديم خدمات البناء وإدارة المشاريع والتمسك بأعلى معايير الجودة والبناء بإحسان',
  
  // About
  about: 'تقدم ابتكار للمقاولات خدمات التشييد والبناء وإدارة المشاريع الإنشائية منذ عام 2013م؛ حيث تم تأسيسها لتلبية الطلب المتزايد في المدينة المنورة على البناء المتميز وبأفضل الأساليب البناء الحديث. ومنذ ذلك الوقت تم تركيز الجهود في إنشاء العديد من المشاريع ذات الجودة والكفاءة العالية من خلال فريق هندسي وفني وإداري متكامل.',
  
  ceo: {
    name: 'م. ماجد بن محمد بن تنباك',
    title: 'المؤسس والرئيس التنفيذي',
    experience: 23
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
  { id: 1, number: '12+', label: 'سنة خبرة', labelEn: 'Years Experience' },
  { id: 2, number: '50+', label: 'مشروع منجز', labelEn: 'Completed Projects' },
  { id: 3, number: '213', label: 'موظف', labelEn: 'Employees' },
  { id: 4, number: '100%', label: 'رضا العملاء', labelEn: 'Client Satisfaction' }
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
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80'
  }
];

// Team Leadership
export const leadership = [
  {
    id: 1,
    name: 'م. ماجد بن محمد بن تنباك',
    position: 'الرئيس التنفيذي',
    experience: 23,
    description: 'العمل لمدة 23 سنة في إدارة المشاريع في مشاريع شركة أرامكو السعودية وشركة سابك'
  },
  {
    id: 2,
    name: 'محمد علي',
    position: 'المدير المالي',
    experience: 14,
    description: 'العمل لمدة 14 سنوات في الإدارة المالية والحسابات'
  },
  {
    id: 3,
    name: 'إبراهيم بكر',
    position: 'مدير الدراسات وإدارة الجودة',
    experience: 26,
    description: 'العمل لمدة 26 سنة في تنفيذ العديد من المشروعات الكبرى'
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