import { Header } from "@/components/header"
import { MissionVision } from "@/components/mission-vision"
import { ThreePillars } from "@/components/three-pillars"
import { TrainingMatters } from "@/components/training-matters"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About ADA Australia</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Leaders in workplace mental health training and drugs and alcohol awareness training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                ADA Australia offers a range of training solutions for improved workplace mental health outcomes, and to
                promote better life choices and safety practices around drugs and alcohol.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work hard on targeting the message to your audience and work environment, and can deliver flexibly to
                suit your operational demands. At your worksite, anywhere in Australia, we can come to you or deliver
                online through our easily-accessed online Worker Wellbeing Hub.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose ADA Australia?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Experienced trainers with lived experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Customized training for your industry</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Flexible delivery options</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">24/7 support services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MissionVision />
      <ThreePillars />
      <TrainingMatters />
    </div>
  )
}
