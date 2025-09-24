import { Presentation, Mouse, Headphones } from "lucide-react"

export function ThreePillars() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-400 uppercase tracking-wide mb-2">ADA AUSTRALIA</p>
          <h2 className="text-4xl font-bold text-blue-600 uppercase mb-6">Three Pillars for Protection</h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At ADA Australia, we take a 'three pillars' approach to behavioural health and workplace safety around drugs
            and alcohol, and in promoting workplace mental health and positive workplace culture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Presentation className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">Innovative Training Solutions</h3>
            <p className="text-gray-700 leading-relaxed">
              Our highly engaging workshops, toolbox talks and half-day or day training seminars can be delivered
              on-site, face-to-face, or, for flexible participation, via live webinar, as well as pre-recorded 'Ted
              Talk' style presentations, available on our Worker Wellbeing Hub.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Mouse className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">Publications, Online Worker Wellbeing Hub</h3>
            <p className="text-gray-700 leading-relaxed">
              All training programs, workshops and seminars are supported by easily read, clinically-evaluated
              publications and easily accessed online resources and content, via a customisable online Worker Wellbeing
              Hub (giving ADA Australia clients ongoing access to all of our training resources at any time, anywhere).
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">24/7 Direct Support</h3>
            <p className="text-gray-700 leading-relaxed">
              ADA Australia's Friendly Ear Support Service is available 24/7 to all clients and their families - any
              hour, any day. The service is anonymous, confidentiality assured, and operated by experienced support
              workers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
