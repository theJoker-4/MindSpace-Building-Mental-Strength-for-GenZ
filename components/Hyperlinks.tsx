
import React from 'react';
import Section from './Section';
import { HYPERLINKS } from '../constants';
import type { Hyperlink } from '../types';

const HyperlinkCard: React.FC<{ link: Hyperlink }> = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-10 bg-gray-900/60 border border-gray-800 rounded-3xl hover:border-red-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300 group h-full backdrop-blur-sm flex flex-col justify-between"
  >
    <div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-red-500 transition-colors tracking-tight leading-tight">{link.title}</h3>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">{link.description}</p>
    </div>
    <span className="inline-block mt-8 text-lg font-bold text-red-500 group-hover:text-red-400 flex items-center gap-3 uppercase tracking-widest">
      Learn More <span className="transition-transform group-hover:translate-x-2 text-2xl">&rarr;</span>
    </span>
  </a>
);

const Hyperlinks: React.FC = () => {
  return (
    <Section id="resources">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16 tracking-tight">
        Curated Resources for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-500">Healthier Mind</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-[90rem] mx-auto">
        {HYPERLINKS.map((link) => (
          <div key={link.title} className="w-full md:w-[calc(50%-1.25rem)]">
            <HyperlinkCard link={link} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hyperlinks;
