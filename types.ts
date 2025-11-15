
export interface Hyperlink {
  title: string;
  url: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatarUrl: string;
}

// FIX: Add Testimonial interface for the Testimonials component.
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// FIX: Add FAQItem interface for the FAQ component.
export interface FAQItem {
  question: string;
  answer: string;
}
