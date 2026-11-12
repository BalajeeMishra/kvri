// Single source of truth for KV Rao International Foundation (kvri.in) content.

export const ORG = {
  name: 'KV Rao International Foundation',
  short: 'KVRI',
  tagline: 'Let us make a difference',
  phone: '+91 8819356971',
  phoneHref: 'tel:+918819356971',
  phoneHours: 'Monday – Friday',
  email: 'info@kvri.in',
  office: 'Anusha Enclave, Tanuku, India',
  officeLines: ['Anusha Enclave', 'Tanuku, Andhra Pradesh', 'India'],
  website: 'kvri.in',
  mission:
    'Building sustainable futures in rural India through education, sanitation, healthcare, agriculture, and farmer empowerment — breaking the cycle of poverty and creating lasting change.',
  closing: 'Together, we grow. Together, we thrive.',
  quote: {
    text: 'The best way to find yourself is to lose yourself in the service of others.',
    author: 'Mahatma Gandhi',
  },
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  body: string[]
  image: string
  icon: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare Access',
    subtitle: 'Delivering essential healthcare services and preventive measures to underserved areas.',
    body: [
      'Healthcare is a basic right, yet many people in underserved rural communities lack access to even basic medical care.',
      'KV Rao International Foundation provides essential and preventive healthcare — free check-ups, consultations, and medicines in rural villages — so that families can live healthier, more productive lives.',
    ],
    image: '/images/healthcare.jpeg',
    icon: '🩺',
  },
  {
    slug: 'education',
    title: 'Education for All',
    subtitle: 'Empowering children and adults through accessible, quality education.',
    body: [
      'We believe every child and adult deserves access to quality education, regardless of their background or circumstances.',
      'Education is the foundation of opportunity. By supporting learning in rural communities, we help people build the knowledge and skills to shape their own futures.',
    ],
    image: '/images/education.jpeg',
    icon: '📚',
  },
  {
    slug: 'sanitation',
    title: 'Sanitation and Hygiene',
    subtitle: 'Promoting clean water, sanitation facilities, and hygiene awareness to improve community health.',
    body: [
      'Lack of clean water and proper sanitation leads to preventable diseases that affect health, school attendance, and livelihoods across rural India.',
      'Through our Sanitation & Hygiene Initiative, we promote clean water access, sanitation facilities, and hygiene awareness so communities can live with dignity and good health.',
    ],
    image: '/images/sanitation.jpeg',
    icon: '💧',
  },
  {
    slug: 'farmer-empowerment',
    title: 'Farmer Empowerment',
    subtitle: 'Supporting farmers with training, resources, and innovative techniques to improve livelihoods.',
    body: [
      'Farmers face limited resources, outdated techniques, and unpredictable challenges that threaten their incomes and food security.',
      'We provide farmers with training, tools, and ongoing support so they can improve productivity and build secure livelihoods for their families.',
    ],
    image: '/images/farmers.jpeg',
    icon: '👨‍🌾',
  },
  {
    slug: 'sustainable-agriculture',
    title: 'Sustainable Agriculture',
    subtitle: 'Encouraging eco-friendly practices for long-term productivity and food security.',
    body: [
      'Healthy land is the foundation of a healthy community. We promote eco-friendly, sustainable farming practices that benefit both farmers and the environment.',
      'By conserving soil, water, and natural resources, sustainable agriculture secures long-term productivity and food security for future generations.',
    ],
    image: '/images/agriculture.jpeg',
    icon: '🌱',
  },
]

export const VALUES = [
  { icon: '♻️', title: 'Sustainability', desc: 'We focus on long-term, self-sufficient solutions that conserve resources.' },
  { icon: '💪', title: 'Empowerment', desc: 'We equip people — especially farmers, women, and children — with knowledge, skills, and tools.' },
  { icon: '🤝', title: 'Integrity', desc: 'We uphold transparency, accountability, and ethical practices in everything we do.' },
  { icon: '🌐', title: 'Collaboration', desc: 'We work hand in hand with communities, volunteers, organisations, and donors.' },
  { icon: '💡', title: 'Innovation', desc: 'We embrace new ideas and sustainable technology in education, healthcare, sanitation, and agriculture.' },
  { icon: '⚖️', title: 'Equity & Inclusion', desc: 'We ensure equal access to resources and opportunities for all.' },
]

export const CAMP_PHOTOS = Array.from({ length: 11 }, (_, i) => `/images/camp-${i + 1}.jpeg`)

export type Post = {
  slug: string
  tag: string
  title: string
  subtitle?: string
  image: string
  excerpt: string
  sections: { heading?: string; paragraphs?: string[]; bullets?: string[] }[]
}

export const POSTS: Post[] = [
  {
    slug: 'mega-medical-camp-tanuku',
    tag: 'Event',
    title: 'Mega Medical Camp – Tanuku, India',
    subtitle: 'Bringing Quality Healthcare to Rural Communities',
    image: '/images/camp-1.jpeg',
    excerpt:
      'In collaboration with local healthcare professionals and volunteers, KVRI organised a mega medical camp in Tanuku offering free consultations, check-ups, and essential medicines.',
    sections: [
      {
        paragraphs: [
          'In collaboration with local healthcare professionals and volunteers, KV Rao International Foundation organised a Mega Medical Camp in Tanuku, providing free medical consultations, health check-ups, and essential medicines to underserved communities.',
          'Over 50 beneficiaries received medical services at the camp. Attendees also took part in awareness sessions on hygiene, nutrition, and preventive healthcare — knowledge that helps families stay healthy long after the camp ends.',
        ],
      },
    ],
  },
  {
    slug: 'why-sanitation-and-hygiene-matter',
    tag: 'Article',
    title: 'Why Sanitation and Hygiene Matter for Rural Development',
    image: '/images/blog-sanitation.jpg',
    excerpt:
      'Sanitation is the foundation of dignity, health, and economic progress. Here is why it matters so much for rural India — and how you can help.',
    sections: [
      {
        heading: 'The Foundation of Dignity and Health',
        paragraphs: [
          'Access to clean water and proper sanitation is about far more than convenience. It is the foundation of dignity, good health, and economic progress for rural communities.',
        ],
      },
      {
        heading: 'The Health Risks of Poor Sanitation',
        paragraphs: [
          'In many parts of rural India, a lack of toilets, clean water, and hygiene awareness exposes families to preventable diseases such as diarrhoea, typhoid, and other water-borne infections. Children are especially vulnerable.',
        ],
      },
      {
        heading: 'The Economic Cost of Poor Hygiene',
        paragraphs: [
          'Illness caused by poor sanitation reduces productivity, increases medical expenses, and leads to absenteeism from work and school — keeping families trapped in a cycle of poverty.',
        ],
      },
      {
        heading: 'Building Sustainable Sanitation',
        bullets: [
          'Behaviour change campaigns that promote handwashing and safe hygiene practices',
          'Community-Led Total Sanitation (CLTS) that empowers villages to end open defecation',
          'Infrastructure such as toilets, safe water points, and waste management',
          "Menstrual hygiene education and support for women and girls",
        ],
      },
      {
        heading: 'Sanitation and Gender Equality',
        paragraphs: [
          'Safe, private sanitation facilities improve the safety and dignity of women, and clean school toilets help girls stay in school.',
        ],
      },
      {
        heading: 'How You Can Help',
        bullets: [
          'Donate or volunteer with sanitation initiatives',
          'Advocate for better sanitation policies',
          'Raise awareness in your own community',
        ],
      },
    ],
  },
]
