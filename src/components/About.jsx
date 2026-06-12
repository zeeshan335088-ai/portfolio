const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">About Me</h3>
              </div>
              <p className="text-gray-400 mb-4">
                I'm a MERN Stack Developer with a strong foundation in building dynamic and scalable web applications. I enjoy turning ideas into real-world products that provide great user experiences.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span><strong className="text-gray-300">Name:</strong> Zeeshan Haider</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span><strong className="text-gray-300">Location:</strong> Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span><strong className="text-gray-300">Experience:</strong> 1+ Years</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span><strong className="text-gray-300">Email:</strong> zeeshan335088@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Quick Overview</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-900 rounded-lg text-center">
                  <div className="text-2xl font-bold text-emerald-400">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg text-center">
                  <div className="text-2xl font-bold text-emerald-400">5+</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg text-center">
                  <div className="text-2xl font-bold text-emerald-400">1+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg text-center">
                  <div className="text-2xl font-bold text-emerald-400">100+</div>
                  <div className="text-sm text-gray-400">Commits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
