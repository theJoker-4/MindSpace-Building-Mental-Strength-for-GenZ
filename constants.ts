import type { Hyperlink, TeamMember, Testimonial, FAQItem } from './types';

export const HYPERLINKS: Hyperlink[] = [
  {
    title: 'Mental Health in Gen Z',
    url: 'https://mental-health-of-gen-z.vercel.app/#mindspace',
    description: 'Exploring the unique mental health challenges and opportunities for today’s youth.'
  },
  {
    title: 'Nutrition & Fitness',
    url: 'https://nutrition-and-fitness-for-gen-z.vercel.app/#nutrition-mental-health',
    description: 'The undeniable link between physical wellness and mental resilience.'
  },
  {
    title: 'Digital Wellbeing',
    url: 'https://digital-wellbeing-for-gen-z.vercel.app/#detox-toolkit',
    description: 'Strategies for a healthier relationship with technology and social media.'
  },
  {
    title: 'Academic Pressure & Burnout',
    url: 'https://academic-pressure.vercel.app/',
    description: 'Coping mechanisms for stress and preventing academic burnout.'
  },
  {
    title: 'Substance Abuse Awareness',
    url: 'https://substance-abuse.vercel.app/#connection-to-sdg-3',
    description: 'Understanding risks and promoting healthy choices for a better future.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Anya Sharma',
    role: 'Lead Psychologist',
    avatarUrl: 'https://raw.githubusercontent.com/theJoker-4/MindSpace-Building-Mental-Strength-for-GenZ/refs/heads/main/imges/IMG_20251112_011932.jpg?token=GHSAT0AAAAAADPBYMN4D6ODPFG5RZXKOMZ22IYXV4A'
  },
  {
    name: 'Ben Carter',
    role: 'Youth Outreach Coordinator',
    avatarUrl: 'https://raw.githubusercontent.com/theJoker-4/MindSpace-Building-Mental-Strength-for-GenZ/refs/heads/main/imges/1%20(1).jpg?token=GHSAT0AAAAAADPBYMN43VGQJQS7VNVD6EA22IYXQLA'
  },
  {
    name: 'Chloe Davis',
    role: 'Digital Wellness Expert',
    avatarUrl: 'https://picsum.photos/seed/chloe/200'
  },
  {
    name: 'Leo Martinez',
    role: 'Community Manager',
    avatarUrl: 'https://picsum.photos/seed/leo/200'
  }
];

// FIX: Add TESTIMONIALS constant for the Testimonials component.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "MindSpace has been a game-changer for my mental health. The resources are so relevant and easy to understand. I finally feel like I have the tools to cope with stress.",
    author: 'Alex Johnson',
    role: 'University Student'
  },
  {
    quote: "As a parent, I'm so grateful for this platform. It's helped me understand what my teenager is going through and how to support them better.",
    author: 'Sarah Chen',
    role: 'Parent'
  },
  {
    quote: "The articles on digital wellbeing really opened my eyes. I've started setting boundaries with social media and feel so much more present and happy.",
    author: 'Michael Rodriguez',
    role: 'High School Student'
  }
];

// FIX: Add FAQS constant for the FAQ component.
export const FAQS: FAQItem[] = [
  {
    question: 'What is MindSpace?',
    answer: 'MindSpace is a dedicated online platform providing resources and support for the mental well-being of Generation Z. We offer curated articles, tools, and community features to help young people navigate life\'s challenges.'
  },
  {
    question: 'Who are the resources for?',
    answer: 'Our resources are primarily designed for young adults and teenagers (Gen Z), but they can also be incredibly helpful for parents, educators, and anyone looking to understand and support the mental health of the younger generation.'
  },
  {
    question: 'Is MindSpace a replacement for professional therapy?',
    answer: 'No. While MindSpace offers valuable information and coping strategies, it is not a substitute for professional medical advice, diagnosis, or treatment. We encourage users to seek help from a qualified healthcare provider for any mental health concerns.'
  },
  {
    question: 'How can I get involved?',
    answer: 'We love community involvement! You can contribute by sharing our resources, participating in discussions, or even submitting your own story or article for consideration. Follow our social media channels to stay updated on opportunities.'
  }
];
