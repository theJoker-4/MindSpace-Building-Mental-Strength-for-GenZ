
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Start a <br/><AnimatedText>Conversation</AnimatedText>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Whether you're looking for support, want to volunteer, or have a partnership idea, we're here to listen. Your voice matters in building a stronger mental future.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">Email Us</h4>
                  <p className="text-gray-400">hello@mindspace.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">Location</h4>
                  <p className="text-gray-400">San Francisco, CA (Global Digital Hub)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/40 border border-gray-800 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Subject</label>
                <select className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors">
                  <option>General Inquiry</option>
                  <option>Get Help / Resources</option>
                  <option>Volunteer Opportunities</option>
                  <option>Partnership Request</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <button 
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
