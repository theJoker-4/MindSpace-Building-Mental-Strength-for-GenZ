import React from 'react';
import Section from './Section';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/60">
    <img
      src={member.avatarUrl}
      alt={member.name}
      className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-gray-700 group-hover:border-cyan-400 transition-colors"
    />
    <h3 className="text-xl font-bold text-white">{member.name}</h3>
    <p className="text-red-500">{member.role}</p>
  </div>
);

const Team: React.FC = () => {
  return (
    <Section id="team">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Meet The Team
        A passionate team dedicated to empowering the next generation.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </Section>
  );
};

export default Team;
