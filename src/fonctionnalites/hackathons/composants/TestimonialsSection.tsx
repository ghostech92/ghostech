import React from "react";

export default function TestimonialsSection() {
  const stories = [
    {
      title: "Emmanuel Aman : Du hackathon Ghostech à mon premier poste de développeur.",
      badge: "TÉMOIGNAGE LAURÉAT",
      video: "https://www.youtube.com/embed/nT4KbtG11sA"
    },
    {
      title: "Touré Fred Ryan & Hamida Fatim Ouattara : Comment nous avons remporté le premier prix de l'innovation.",
      badge: "ZOOM LAURÉATS",
      video: "https://www.youtube.com/embed/X-U1IpT2K78"
    },
    {
      title: "Ruth Christelle Ledjou : L'expérience humaine et technique intense d'un week-end de hackathon.",
      badge: "PARTICIPANTE",
      video: "https://www.youtube.com/embed/nT4KbtG11sA"
    }
  ];

  return (
    <section className="w-full bg-[#050505] text-white py-16 px-6 relative z-10">
      <div className="w-full max-w-6xl mx-auto text-center space-y-4 mb-12">
        <h3 className="text-3xl md:text-4xl font-black tracking-tight">
          Ils ont brillé lors de nos hackathons, <br className="sm:hidden" /> à votre tour de relever le défi !
        </h3>
        <p className="text-slate-400 max-w-3xl mx-auto text-xs md:text-sm leading-relaxed">
          Nos compétiteurs ont repoussé leurs limites et développé des projets innovants durant nos défis de code. Découvrez leurs retours d'expérience.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-full aspect-[16/9] bg-slate-950 relative">
              <iframe 
                width="100%" 
                height="100%" 
                src={story.video} 
                title={story.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <div className="p-5 flex flex-col gap-2 flex-1 justify-between text-left">
              <div>
                <span className="text-[9px] font-black tracking-wider text-[#39779e] uppercase block mb-1">
                  {story.badge}
                </span>
                <p className="text-sm font-bold text-white leading-snug">
                  {story.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
