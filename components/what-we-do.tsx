export function WhatWeDo() {
  return (
    <section className="py-16 bg-blue-500 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold uppercase mb-6">What We Do</h2>
          <p className="text-xl mb-6 font-semibold">
            Leaders in workplace mental health training and drugs and alcohol awareness training programs.
          </p>
          <p className="mb-6 leading-relaxed">
            ADA Australia offers a range of training solutions for improved workplace mental health outcomes, and to
            promote better life choices and safety practices around drugs and alcohol.
          </p>
          <p className="mb-12 leading-relaxed">
            We work hard on targeting the message to your audience and work environment, and can deliver flexibly to
            suit your operational demands. At your worksite, anywhere in Australia, we can come to you or deliver online
            through our easily-accessed online Worker Wellbeing Hub.
          </p>

          <div className="border-t border-white/30 pt-8">
            <h3 className="text-3xl font-bold uppercase mb-6 flex items-center gap-4">
              <span>Training</span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span>Awareness</span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span>Support</span>
            </h3>
            <p className="mb-4 leading-relaxed">
              At ADA Australia, we take a 'three pillars' approach to behavioural health and workplace safety around
              drugs and alcohol, and in promoting workplace mental health and positive workplace culture.
            </p>
            <p className="leading-relaxed">
              We provide - <span className="font-semibold">one</span> - innovative training and awareness solutions -{" "}
              <span className="font-semibold">two</span> - accessible high-interest, high-engagement resources, backed
              up by -<span className="font-semibold">three</span> - a 24/7 support and referral service: three pillars
              for protection.
            </p>
          </div>
        </div>
      </div>

      {/* Curved bottom design */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-auto">
          <path d="M0,120 C300,60 900,60 1200,120 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
