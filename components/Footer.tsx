
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 mt-16">
      <div className="container mx-auto px-4 md:px-8 text-center text-sm text-gray-500">
        <p className="mb-2">
          A project dedicated to{' '}
          <a
            href="https://sdgs.un.org/goals/goal3"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-400 hover:text-cyan-400 transition-colors"
          >
            UN Sustainable Development Goal 3
          </a>.
        </p>
        <p className="mb-4">
          Take control of your digital life. Your well-being is worth it.
        </p>
        <p>&copy; 2025 MindSpace. All Rights Reserved. Empowering the next generation's mental wellness.</p>
      </div>
    </footer>
  );
};

<script>
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="cGE9KK4wK95XqHaYI3HnH";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
</script>

export default Footer;
