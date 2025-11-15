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
    name: 'Prakhar Baranwal',
    role: 'Project Lead, UI Designer and Project Tester',
    avatarUrl: 'https://picsum.photos/seed/anya/200'
  },
  {
    name: 'Himank Choudhary',
    role: 'Frontend and Backend Developer, UI Designer',
    avatarUrl: 'https://picsum.photos/seed/ben/200'
  },
  {
    name: 'Divyansh Batra',
    role: 'Data Expert and Information Researcher',
    avatarUrl: 'https://picsum.photos/seed/chloe/200'
  },
  {
    name: 'Prince Ranbeer',
    role: 'Marketing/Communications Leader',
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
