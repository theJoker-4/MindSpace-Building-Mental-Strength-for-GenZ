import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';

const SDG_DATA = {
    url: 'https://supporting-sdg-s.vercel.app/',
    description: 'Our entire mission aligns with the UN Sustainable Development Goal 3: Good Health and Well-being. By promoting mental health awareness, providing accessible resources, and fostering a supportive community, we contribute directly to ensuring healthy lives and promoting well-being for all at all ages.'
};

const SDG: React.FC = () => {
  return (
    <Section id="sdg">
        <div className="text-center max-w-4xl mx-auto bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Committed to Global <AnimatedText>Well-being</AnimatedText>
            </h2>
             <p className="text-lg text-gray-400 mb-8">
                {SDG_DATA.description}
            </p>
            <a
                href={SDG_DATA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-transparent border-2 border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-black transform hover:scale-105 transition-all duration-300"
            >
                Learn About Our Impact on SDG 3
            </a>
        </div>
    </Section>
  );
};

export default SDG;