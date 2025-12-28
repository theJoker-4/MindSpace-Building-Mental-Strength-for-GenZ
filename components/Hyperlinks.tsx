
import React from 'react';
import Section from './Section';
import { HYPERLINKS } from '../constants';
import type { Hyperlink } from '../types';

const HyperlinkCard: React.FC<{ link: Hyperlink }> = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-8 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-red-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-all duration-300 group h-full backdrop-blur-sm flex flex-col justify-between"
  >
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors tracking-tight leading-snug">{link.title}</h3>
      <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">{link.description}</p>
    </div>
    <span className="inline-block mt-6 text-sm md:text-base font-bold text-red-500 group-hover:text-red-400 flex items-center gap-2 uppercase tracking-widest">
      Learn More <span className="transition-transform group-hover:translate-x-2 text-xl">&rarr;</span>
    </span>
  </a>
);

const Hyperlinks: React.FC = () => {
  return (
    <Section id="resources">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12 tracking-tight">
        Curated Resources for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-500">Healthier Mind</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {HYPERLINKS.map((link) => (
          <div key={link.title} className="w-full md:w-[calc(50%-0.75rem)]">
            <HyperlinkCard link={link} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hyperlinks;
