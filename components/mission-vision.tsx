import { Check } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-16 bg-slate-800 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-700/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold uppercase mb-6">Our Mission</h2>
            <p className="mb-6 leading-relaxed">
              To be an agent-for-change in improving the health, safety and welfare of Australian workers and Australian
              workplaces by:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="leading-relaxed">
                  Building awareness and promoting change through training for better life choices around drugs and
                  alcohol and improved workplace safety;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="leading-relaxed">
                  Providing targeted workplace training solutions for improved mental health and supportive workplace
                  cultures, norms and practices.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold uppercase mb-6">Our Vision</h2>
            <p className="leading-relaxed">
              Through education, self-reflection, awareness and action, our driven goal is that every worker in every
              workplace is protected from mental injury, is safe at work always, and makes the right choices for their
              own health, safety and welfare, and for the health, safety and welfare of co-workers and the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
