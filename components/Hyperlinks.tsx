import React from 'react';
import Section from './Section';
import { HYPERLINKS } from '../constants';
import type { Hyperlink } from '../types';

const HyperlinkCard: React.FC<{ link: Hyperlink }> = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-red-500 hover:-translate-y-1 transition-all duration-300 group h-full"
  >
    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{link.title}</h3>
    <p className="text-sm text-gray-400">{link.description}</p>
    <span className="inline-block mt-4 text-xs font-semibold text-red-500 group-hover:text-red-400">
      Learn More &rarr;
    </span>
  </a>
);

const Hyperlinks: React.FC = () => {
  return (
    <Section id="resources">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Curated Resources for a Healthier Mind
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {HYPERLINKS.map((link) => (
          <div key={link.title} className="w-full md:w-[calc(50%-1rem)]">
            <HyperlinkCard link={link} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hyperlinks;