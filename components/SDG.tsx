
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
        <div className="text-center max-w-6xl mx-auto bg-gray-900/50 border border-gray-800 rounded-3xl p-12 md:p-20 backdrop-blur-md">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Committed to Global <AnimatedText>Well-being</AnimatedText>
            </h2>
             <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                {SDG_DATA.description}
            </p>
            <a
                href={SDG_DATA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-xl bg-transparent border-2 border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-black transform hover:scale-105 transition-all duration-300"
            >
                Learn About Our Impact on SDG 3
            </a>
        </div>
    </Section>
  );
};

export default SDG;
