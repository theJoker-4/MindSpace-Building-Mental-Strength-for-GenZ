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
    avatarUrl: 'https://picsum.photos/seed/anya/200'
  },
  {
    name: 'Ben Carter',
    role: 'Youth Outreach Coordinator',
    avatarUrl: 'https://picsum.photos/seed/ben/200'
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

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "MindSpace gave me the tools to navigate the pressures of college. I feel more in control and less overwhelmed. It's a game-changer for Gen Z.",
    author: 'Jasmine K.',
    role: 'University Student'
  },
  {
    quote: "Finally, a platform that actually understands what we're going through. The resources are relevant, and the community is incredibly supportive.",
    author: 'Samuel R.',
    role: 'High School Senior'
  },
  {
    quote: "As a parent, I'm so grateful for MindSpace. It's a positive, proactive resource that has helped my son open up about his mental health.",
    author: 'Maria G.',
    role: 'Parent'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is MindSpace?',
    answer: 'MindSpace is a digital platform dedicated to empowering Gen Z with the tools, resources, and community support needed to build mental strength and resilience. We focus on proactive, accessible mental wellness.'
  },
  {
    question: 'Is MindSpace a replacement for therapy?',
    answer: 'No. MindSpace is a supportive resource for mental wellness but is not a substitute for professional medical advice, diagnosis, or treatment. We encourage users to seek professional help when needed and can provide resources to find a therapist.'
  },
  {
    question: 'Who is this platform for?',
    answer: 'Our primary audience is Gen Z (typically defined as individuals born between 1997 and 2012), but our resources can be valuable for anyone interested in improving their mental well-being, including parents and educators.'
  },
  {
    question: 'How is MindSpace related to SDG 3?',
    answer: 'Our entire mission aligns with the UN Sustainable Development Goal 3: Good Health and Well-being. By promoting mental health awareness, providing accessible resources, and fostering a supportive community, we contribute directly to ensuring healthy lives and promoting well-being for all at all ages.'
  }
];