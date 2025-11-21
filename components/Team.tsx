
import React from 'react';
import Section from './Section';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center p-12 bg-gray-900/50 border border-gray-800 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/60 h-full flex flex-col items-center justify-center">
    <img
      src={member.avatarUrl}
      alt={member.name}
      className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-gray-700 group-hover:border-cyan-400 transition-colors object-cover"
    />
    <h3 className="text-3xl font-bold text-white mb-3">{member.name}</h3>
    <p className="text-xl text-red-500">{member.role}</p>
  </div>
);

const Team: React.FC = () => {
  return (
    <Section id="team">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
        Meet Our Experts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[90rem] mx-auto">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </Section>
  );
};

export default Team;
