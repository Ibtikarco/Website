// Company Information
export const companyInfo = {
  nameAr: 'ابتكار للمقاولات',
  nameEn: 'Ibtikar Contracting',
  tagline: 'بناء بإحسان',
  taglineEn: 'Building with Excellence',
  founded: 2000,
  location: 'المدينة المنورة',
  phone: '+966 569 700 733',
  email: 'info@ibtikarco.com',
  website: 'www.ibtikarco.com',
  
  // Mission & Vision
  mission: '• تعزيز مهاراتنا وخدماتنا في قطاع إدارة المشاريع والإنشاءات\n• الالتزام بالتميز والتمسك بأعلى معايير الجودة والبناء بإحسان',
  missionEn: '• Enhance our skills and services in project management and construction sector\n• Commitment to excellence and adherence to the highest quality standards and building with excellence',
  vision: 'أن نكون الخيار الأول لدى العملاء في تقديم خدمات البناء وإدارة المشاريع',
  visionEn: 'To be the first choice for clients in providing construction and project management services',
  
  // About
  about: 'تقدم ابتكار للمقاولات خدمات التشييد والبناء وإدارة المشاريع الإنشائية منذ عام 2000م؛ حيث تم تأسيسها لتلبية الطلب المتزايد في المدينة المنورة على البناء المتميز وبأفضل أساليب البناء الحديث. ومنذ ذلك الوقت تم تركيز الجهود في إنشاء العديد من المشاريع ذات الجودة والكفاءة العالية من خلال فريق هندسي وفني وإداري متكامل.',
  aboutEn: 'Ibtikar Contracting provides construction and project management services since 2000, established to meet the growing demand in Madinah for distinguished construction using the best modern building methods. Since then, efforts have been focused on creating many high-quality and efficient projects through an integrated engineering, technical and administrative team.',
  
  description: 'اكتسبت ابتكار للمقاولات خبرتها على مدى السنين من خلال إنشاء العديد من المشاريع الخاصة والحكومية والمشاريع والعمائر السكنية والتجارية والخيرية والعديد من المشاريع الأخرى؛ ومن خلال تبني نقل المعرفة عن طريق توظيف الكفاءات الإدارية والفنية بشكل دوري.',
  descriptionEn: 'Ibtikar Contracting has gained its experience over the years through implementing many private and government projects, residential, commercial and charitable buildings, and many other projects; through adopting knowledge transfer by periodically hiring administrative and technical competencies.',
  
  slogan: 'بالابتكار ... نصنع الفرق، و بالالتزام بالتميز ... نبني مشاريعكم بإحسان، لنقدم لكم المعنى الحقيقي للبناء بإحسان',
  sloganEn: 'With innovation... we make a difference, and with commitment to excellence... we build your projects with perfection, to deliver the true meaning of building with excellence',
  
  ceo: {
    name: 'م. ماجِدْ بن محمَّد بن تِنْباك',
    nameEn: 'Eng. Majid bin Mohammed bin Tinbak',
    title: 'المؤسس والرئيس التنفيذي',
    titleEn: 'Founder & CEO',
    experience: 25,
    description: 'العمل لمدة 25 سنة في إدارة المشاريع في مشاريع شركة أرامكو السعودية وشركة سابك والشركة السعودية للكهرباء بقيمة مشاريع 4 مليار ريال',
    descriptionEn: 'Worked for 25 years in project management for Saudi Aramco, SABIC and Saudi Electricity Company projects worth 4 billion SAR'
  }
};

// Services
export const services = [
  {
    id: 1,
    title: 'إدارة مشاريع',
    titleEn: 'Project Management',
    description: 'إدارة احترافية للمشاريع من البداية حتى التسليم',
    descriptionEn: 'Professional project management from start to delivery',
    icon: 'clipboard'
  },
  {
    id: 2,
    title: 'الإنشاءات الخرسانية',
    titleEn: 'Concrete Construction',
    description: 'تنفيذ الأعمال الإنشائية بأعلى معايير الجودة',
    descriptionEn: 'Execution of construction works with the highest quality standards',
    icon: 'building'
  },
  {
    id: 3,
    title: 'التشطيبات والديكور',
    titleEn: 'Finishing & Decor',
    description: 'تشطيبات داخلية وخارجية بأفضل المواد',
    descriptionEn: 'Interior and exterior finishes with the best materials',
    icon: 'paintbrush'
  },
  {
    id: 4,
    title: 'بنية تحتية',
    titleEn: 'Infrastructure',
    description: 'أعمال البنية التحتية والطرق',
    descriptionEn: 'Infrastructure and road works',
    icon: 'road'
  }
];

// Statistics
export const stats = [
  { id: 1, number: '25+', label: 'سنة خبرة', labelEn: 'Years Experience' },
  { id: 2, number: '175+', label: 'مشروع منجز', labelEn: 'Completed Projects' },
  { id: 3, number: '95%', label: 'رضا العملاء', labelEn: 'Client Satisfaction' }
];

// Projects
export const projects = [
  {
    id: 1,
    title: 'بوابة سمو',
    titleEn: 'Sumo Gate',
    category: 'فندقي تجاري',
    categoryEn: 'Hotel Commercial',
    location: 'المنطقة المركزية - شمال المسجد النبوي الشريف',
    locationEn: 'Central Area - North of the Prophet\'s Mosque',
    area: '21 ألف م2 بعمق 12 متر',
    areaEn: '21,000 m² with 12m depth',
    depth: '12 متر',
    depthEn: '12 meters',
    value: '13 مليون',
    valueEn: '13 Million',
    year: 2022,
    status: 'مكتمل',
    statusEn: 'Completed',
    type: 'استثمار حكومي',
    typeEn: 'Government Investment',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/ga1cvtib_JPEG%20image-48C8-A16A-44-4%20copy.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/ga1cvtib_JPEG%20image-48C8-A16A-44-4%20copy.jpg',
      'https://customer-assets.emergentagent.com/job_arab-constuct/artifacts/2ua6nef3_JPEG%20image-48C8-A16A-44-17%20copy.jpg',
      'https://customer-assets.emergentagent.com/job_arab-constuct/artifacts/hoitrlei_JPEG%20image-48C8-A16A-44-23%20copy.jpg'
    ],
    owner: 'أمانة المدينة المنورة',
    ownerEn: 'Madinah Municipality',
    ownerLogo: 'https://customer-assets.emergentagent.com/job_arab-constuct/artifacts/l0by6zc7_logo%20%D8%A7%D9%94%D9%85%D8%A7%D9%86%D8%A9.png',
    investor: 'وزارة الإسكان',
    investorEn: 'Ministry of Housing',
    investorLogo: 'https://customer-assets.emergentagent.com/job_arab-constuct/artifacts/jitofkrn_1661406-538654455%20copy.png',
    completion: '100%',
    briefTitle: 'تنفيذ وتوريد أعمال حفر وسند وتدعيم جوانب الحفر',
    briefTitleEn: 'Execution and Supply of Excavation, Shoring and Reinforcement Works',
    brief: 'تنفيذ أعمال حفر عمل سند لجوانب الحفر يشمل الدراسة الفنية لعمل السند والمواد المستخدمة والقطاعات مع عمل التوريدات المطلوبة من معدات وقطاعات كمرات معدنيه وألواح خشبية.\n\nيشمل أيضًا توريد وتركيب وتنفيذ أنكر لتثبيت وشد سند الجوانب حسب الدراسة الفنية المعتمدة وتشمل الرأس وجدائل والحفر والجروت واختبارات مراقبة الجودة.',
    briefEn: 'Execution of excavation and shoring works including technical study for shoring, materials used and sections, along with supply of required equipment, steel beam sections and wooden panels.\n\nAlso includes supply, installation and execution of anchors to fix and tighten side shoring according to approved technical study, including heads, strands, drilling, grout and quality control tests.'
  },
  {
    id: 2,
    title: 'مشروع ملاذ',
    titleEn: 'Malath Project',
    category: 'استثماري',
    categoryEn: 'Investment',
    location: 'شارع الأمير مقرن بن عبدالعزيز',
    locationEn: 'Prince Muqrin bin Abdulaziz Street',
    area: '8,000 م²',
    areaEn: '8,000 m²',
    floors: '8 أدوار',
    floorsEn: '8 Floors',
    value: '64 مليون',
    valueEn: '64 Million',
    year: 2023,
    status: 'قيد التنفيذ',
    statusEn: 'Under Construction',
    type: 'استثماري',
    typeEn: 'Investment',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/q8skbrdt_%D9%85%D9%84%D8%A7%D8%B0-02.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/q8skbrdt_%D9%85%D9%84%D8%A7%D8%B0-02.jpg'
    ],
    owner: 'شركة وادي الريان للتطوير العقاري',
    ownerEn: 'Wadi Al-Rayyan Real Estate Development Company',
    designOffice: 'رواق',
    designOfficeEn: 'Rawaq',
    designOfficeLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/7phn97gz_Logo%20RwaqEng-01.png',
    completion: '2%',
    briefTitle: 'إنشاء وتشطيب مجمع من 8 أدوار متعدد الاستخدام طبي تجاري إداري فندق',
    briefTitleEn: 'Construction and Finishing of 8-Story Multi-Use Medical, Commercial, Administrative and Hotel Complex',
    brief: 'يشمل نطاق العمل على إنشاء مبنى من بدرومين دورين تجارية وستة أدوار متكررة بمجموع عشرة أدوار.\n\nوتوريد كافة الأعمال الإنشائية والمعمارية والكهروميكانيكية، وأنظمة سلامة وأعمال العزل المائي والحراري، وتنفيذ التشطيبات الخارجية.',
    briefEn: 'The scope of work includes constructing a building with two basements, two commercial floors, and six repeated floors for a total of ten floors.\n\nSupply of all structural, architectural and electromechanical works, safety systems, waterproofing and thermal insulation works, and execution of external finishes.'
  },
  {
    id: 3,
    title: 'مركز جراحة اليوم الواحد',
    titleEn: 'One-Day Surgery Center',
    category: 'طبي',
    categoryEn: 'Medical',
    location: 'شارع الأمير نايف بن عبدالعزيز',
    locationEn: 'Prince Naif bin Abdulaziz Street',
    area: '1,000 م²',
    areaEn: '1,000 m²',
    floors: '8 أدوار + بدروم',
    floorsEn: '8 Floors + Basement',
    value: '24 مليون',
    valueEn: '24 Million',
    year: 2025,
    status: 'قيد التنفيذ',
    statusEn: 'Under Construction',
    type: 'استثماري',
    typeEn: 'Investment',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/fbhjqeah_03_1.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/fbhjqeah_03_1.jpg'
    ],
    owner: 'شركة وادي الريان للتطوير العقاري',
    ownerEn: 'Wadi Al-Rayyan Real Estate Development Company',
    designOffice: 'رواق',
    designOfficeEn: 'Rawaq',
    designOfficeLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/7phn97gz_Logo%20RwaqEng-01.png',
    completion: '5%',
    briefTitle: 'مبنى طبي من 8 أدوار وبدروم مخصص لعيادات جراحة اليوم الواحد',
    briefTitleEn: 'Medical Building with 8 Floors and Basement for One-Day Surgery Clinics',
    brief: 'مشروع مبنى طبي مكوّن من 8 أدوار وبدروم مخصص لعيادات جراحة اليوم الواحد، مصمم وفق أعلى المعايير الحديثة لتلبية احتياجات القطاع الصحي.\n\nنطاق العمل\n\nتنفيذ أعمال البناء والتشطيب الكامل للمشروع بما يشمل الهيكل الإنشائي، التشطيبات الداخلية والخارجية، وأنظمة البنية التحتية والخدمات المساندة.',
    briefEn: 'A medical building project consisting of 8 floors and a basement dedicated to one-day surgery clinics, designed according to the highest modern standards to meet healthcare sector needs.\n\nScope of Work\n\nExecution of complete construction and finishing works including structural framework, interior and exterior finishes, and infrastructure systems and support services.'
  },
  {
    id: 4,
    title: 'جادة الحكمة',
    titleEn: 'Al-Hikma Boulevard',
    category: 'إداري',
    categoryEn: 'Administrative',
    location: 'شارع خالد بن الوليد - المدينة المنورة',
    locationEn: 'Khalid bin Al-Walid Street - Madinah',
    area: '15,000 م²',
    areaEn: '15,000 m²',
    description: 'كومباوند أعمال متكامل',
    descriptionEn: 'Integrated Business Compound',
    value: '135 مليون',
    valueEn: '135 Million',
    year: 2025,
    status: 'قيد التنفيذ',
    statusEn: 'Under Construction',
    type: 'استثماري',
    typeEn: 'Investment',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/95gwas11_PHOTO-2025-08-11-11-39-33.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/95gwas11_PHOTO-2025-08-11-11-39-33.jpg',
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/gb4y9yxk_PHOTO-2025-08-11-11-39-33%202.jpg'
    ],
    owner: 'رجل أعمال',
    ownerEn: 'Businessman',
    designOffice: 'رواق',
    designOfficeEn: 'Rawaq',
    designOfficeLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/7phn97gz_Logo%20RwaqEng-01.png',
    completion: '5%',
    briefTitle: 'كومباوند أعمال متكامل',
    briefTitleEn: 'Integrated Business Compound',
    brief: 'كومباوند أعمال متكامل بمساحة 15,000 م² يضم مباني من 3 أدوار مع بدروم، تشمل مساحات مكتبية، وعيادة، وحضانة، ونادٍ رياضي، ومطاعم، ومغسلة سيارات، وسوبرماركت.\n\nنطاق العمل:\n\nتنفيذ أعمال البناء والتشطيب الكامل بما يشمل الهياكل الإنشائية، التشطيبات الداخلية والخارجية، وأنظمة الخدمات والمرافق لضمان بيئة عمل وحياة متكاملة.',
    briefEn: 'Integrated business compound covering 15,000 m² with 3-story buildings plus basement, including office spaces, clinic, nursery, sports club, restaurants, car wash, and supermarket.\n\nScope of Work:\n\nExecution of complete construction and finishing works including structural frameworks, interior and exterior finishes, and service and facility systems to ensure an integrated work and life environment.'
  },
  {
    id: 5,
    title: 'الوداد ريزدنس',
    titleEn: 'Al-Wedad Residence',
    category: 'سكني',
    categoryEn: 'Residential',
    location: 'حي العهن - المدينة المنورة',
    locationEn: 'Al-Ahan District - Madinah',
    area: '1,000 م²',
    areaEn: '1,000 m²',
    style: 'طراز يوناني حجازي',
    styleEn: 'Greek-Hijazi Style',
    value: '12 مليون',
    valueEn: '12 Million',
    year: 2022,
    status: 'مكتمل',
    statusEn: 'Completed',
    type: 'خاص',
    typeEn: 'Private',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/y7wtrrp1_PHOTO-2025-07-21-15-25-53%203.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/y7wtrrp1_PHOTO-2025-07-21-15-25-53%203.jpg',
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/fl8k1ruf_PHOTO-2025-07-21-15-32-21.jpg'
    ],
    owner: 'رجل أعمال',
    designOffice: 'مكتب حسام العبدالكريم',
    designOfficeLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/2ws6urvf_Logo%20H.A.Kai.png',
    completion: '100%',
    briefTitle: 'إنشاء وتشطيب | طراز يوناني حجازي',
    brief: 'شمل نطاق العمل أعمال الموقع العام والأعمال الإنشائية وأعمال التشطيبات والأعمال الاليكتروميكانيكية.\n\nشمل توريد حجر تفوح مقدسي من فلسطين والألمنيوم من Schüco ألمانيا وخشب TechWood من جنوب أفريقيا.'
  },
  {
    id: 6,
    title: 'السلام بلازا',
    category: 'فندقي',
    location: 'دوار السلام - المدينة المنورة',
    area: '1,000 م²',
    floors: '10 طوابق',
    value: '16 مليون',
    year: 2016,
    status: 'مكتمل',
    type: 'خاص',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/jhzgtovp_Salam%20Hotel%20-%20CAM01%20-%2003.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/jhzgtovp_Salam%20Hotel%20-%20CAM01%20-%2003.jpg'
    ],
    owner: 'رجل أعمال',
    designOffice: 'رواق',
    designOfficeLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/7phn97gz_Logo%20RwaqEng-01.png',
    completion: '100%',
    briefTitle: 'إنشاء وتشطيب مبنى فندقي بارتفاع 10 طوابق',
    brief: 'شمل نطاق العمل أعمال الموقع العام والأعمال الإنشائية وأعمال التشطيبات والأعمال الاليكتروميكانيكية.'
  },
  {
    id: 7,
    title: 'جامع الأبرار',
    category: 'ديني',
    location: 'حي شوران - المدينة المنورة',
    area: '2,500 م²',
    capacity: '660 مصلي',
    value: '6 مليون',
    year: 2017,
    status: 'مكتمل',
    type: 'أوقاف',
    image: 'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/e43tdpfp_%D8%AC%D8%A7%D9%85%D8%B9%20%D8%A7%D9%84%D8%A7%D9%94%D8%A8%D8%B1%D8%A7%D8%B1.png',
    images: [
      'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/e43tdpfp_%D8%AC%D8%A7%D9%85%D8%B9%20%D8%A7%D9%84%D8%A7%D9%94%D8%A8%D8%B1%D8%A7%D8%B1.png'
    ],
    owner: 'وزارة الشؤون الإسلامية',
    ownerLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/08b02n0u_MOIA-logo.png',
    designOffice: 'أحد للاستشارات الهندسية',
    completion: '100%',
    briefTitle: 'إنشاء وتشطيب جامع يتسع لـ 660 مصلي',
    brief: 'شمل نطاق العمل أعمال الموقع العام والأعمال الإنشائية والأعمال الاليكتروميكانيكية إنشاء وتشطيب جامع الأبرار، ومبنى خاص بسكن المؤذن وسكن الإمام، ومبنى لدورات المياه والمواضيء.\n\nيتسع المسجد لـ 660 مصلي، ويشمل على منارتين ارتفاعهما 25 متر.'
  },
  {
    id: 8,
    title: 'مستشفى الملك فيصل',
    category: 'طبي',
    location: 'حمراء الأسد - المدينة المنورة',
    area: '230 ألف م²',
    capacity: '300 سرير',
    value: '12 مليون',
    year: 2016,
    status: 'مكتمل',
    type: 'حكومي',
    image: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/rtv3g6is_DJI_0439.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/rtv3g6is_DJI_0439.jpg',
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/h4veugph_IMG_1110.jpg',
      'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/07qp61tj_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89%20%D8%A7%D9%84%D9%85%D9%84%D9%83.png'
    ],
    owner: 'مستشفى الملك فيصل التخصصي ومركز الأبحاث',
    ownerLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/rih082n7_logo.png',
    supervisor: 'Hill International',
    supervisorLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/3swlq8bq_Hill_logoOnly-print-pms194.png',
    completion: '100%',
    briefTitle: 'تنفيذ وتوريد بعض أعمال التشطيبات لمدينة طبية سعة 300 سرير',
    brief: 'تنفيذ أعمال تشطيبات الدهان والرخام والسيراميك للمباني التالية:\n\nمبنى المستشفى الرئيسي، مركز العلاج الطبيعي، مركز العناية، فلل العوائل، فلل العزاب، مبنى الإدارة، مركز الترفيه، المسجد والمستودعات.'
  },
  {
    id: 9,
    title: 'أنظمة الحماية',
    category: 'تعليمي',
    location: 'جامعة طيبة - المدينة المنورة',
    area: '2 مليون م²',
    value: '6 مليون',
    year: 2013,
    status: 'مكتمل',
    type: 'حكومي',
    image: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/92o8hx4o_download.jpeg',
    images: [
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/92o8hx4o_download.jpeg',
      'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/0assvhcj_%D8%A7%D9%94%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%8A%D8%A9%20.png'
    ],
    owner: 'جامعة طيبة',
    ownerLogo: 'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/hy20dx7f_unnamed%20copy%202.png',
    supplier: 'Stanley Hardware',
    supplierLogo: 'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/ihcaxt0z_022.png',
    completion: '100%',
    briefTitle: 'توريد كامل أنظمة الحماية وأقفال أبواب الجامعة (Mortise Lock)',
    brief: 'توريد كافة الأجهزة وأبواب التشغيل الآلي لجميع كليات جامعة طيبة، والمدينة الطبية، ومرافق الجامعة.\n\nتم تخصيص خط إنتاج للتصنيع لصالح جامعة طيبة في مصنع [Stanley Hardware] في الولايات المتحدة الأمريكية.'
  },
  {
    id: 10,
    title: 'فرع الهيئة العامة',
    category: 'إداري',
    location: 'مجمع حدائق سلطانة - المدينة المنورة',
    area: '900 م²',
    value: '2 مليون',
    year: 2013,
    status: 'مكتمل',
    type: 'حكومي',
    image: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/riz76no5_%D8%A7%D9%84%D9%87%D9%8A%D9%8A%D9%94%D8%A9-01.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/riz76no5_%D8%A7%D9%84%D9%87%D9%8A%D9%8A%D9%94%D8%A9-01.jpg',
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/pfzxbyl3_%D8%A7%D9%84%D9%87%D9%8A%D9%8A%D9%94%D8%A9-02.jpg',
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/l623xebl_%D8%A7%D9%84%D9%87%D9%8A%D9%8A%D9%94%D8%A9-03.jpg'
    ],
    owner: 'وزارة الاستثمار',
    ownerLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/zxaos1w7_moi.png',
    completion: '100%',
    briefTitle: 'تنفيذ وتوريد أعمال التشطيبات لفرع الهيئة في المدينة المنورة',
    brief: 'توريد وتنفيذ كافة الأعمال المعمارية والكهروميكانيكة والشبكات السلكية واللاسلكية للفرع.\n\nكما تم القيام بكافة أعمال التصاميم ورسومات الورشة.'
  },
  {
    id: 11,
    title: 'الوقف العلمي',
    category: 'خيري',
    location: 'قباء - المدينة المنورة',
    area: '1,500 م²',
    floors: '7 طوابق',
    value: '4 مليون',
    year: 2018,
    status: 'مكتمل',
    type: 'حكومي',
    image: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/8zdafno8_01.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/8zdafno8_01.jpg',
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/gjju3l98_02.jpg',
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/zayt7y8g_03.jpg'
    ],
    owner: 'جامعة الملك عبدالعزيز',
    ownerLogo: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/x6bllkeb_kau_logo_f.png',
    designOffice: 'حكيم للاستشارات',
    completion: '100%',
    briefTitle: 'إنشاء وتشطيب مبنى بارتفاع 7 طوابق',
    brief: 'مبنى بارتفاع سبعة طوابق يحتوي على بدروم ومواقف سيارات وبقية الخدمات.\n\nيشمل نطاق العمل على تنفيذ وتوريد كافة الأعمال الإنشائية والمعمارية والكهروميكانيكية، وأنظمة السلامة وأعمال العزل المائي والحراري.'
  },
  {
    id: 12,
    title: 'العزيزية كمباوند',
    category: 'سكني',
    location: 'حي الدفاع - المدينة المنورة',
    area: '1,500 م²',
    value: '4 مليون',
    year: 2020,
    status: 'مكتمل',
    type: 'تطوير عقاري',
    image: 'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/454r21jr_%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D9%8A%D8%A9%20%D9%83%D9%85%D8%A8%D8%A7%D9%88%D9%86%D8%AF-01.jpg',
    images: [
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/454r21jr_%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D9%8A%D8%A9%20%D9%83%D9%85%D8%A8%D8%A7%D9%88%D9%86%D8%AF-01.jpg',
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/xmvfedt7_%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D9%8A%D8%A9%20%D9%83%D9%85%D8%A8%D8%A7%D9%88%D9%86%D8%AF-02.jpg',
      'https://customer-assets.emergentagent.com/job_mena-contractor/artifacts/2yi1d75a_%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D9%8A%D8%A9%20%D9%83%D9%85%D8%A8%D8%A7%D9%88%D9%86%D8%AF-03.jpg'
    ],
    owner: 'مشروع خاص',
    designOffice: 'CLEAR',
    designOfficeLogo: 'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/wvu3cab9_PCc_fFWg_400x400%20copy.png',
    completion: '100%',
    briefTitle: 'إنشاء عدة فلل سكنية | طراز حديث',
    brief: 'شمل نطاق العمل أعمال الموقع العام والأعمال الإنشائية والأعمال الاليكتروميكانيكية.'
  }
];

// Team Leadership
export const leadership = [
  {
    id: 1,
    name: 'م. ماجد بن محمد بن تنباك',
    position: 'الرئيس التنفيذي',
    experience: 25,
    description: 'العمل لمدة 25 سنة في إدارة المشاريع في مشاريع شركة أرامكو السعودية وشركة سابك والشركة السعودية للكهرباء بقيمة مشاريع 4 مليار ريال'
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