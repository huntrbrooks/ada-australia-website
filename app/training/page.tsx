import { Header } from "@/components/header"
import { TrainingSolutions } from "@/components/training-solutions"
import { TrainingPrograms } from "@/components/training-programs"
import { TrainingInsurance } from "@/components/training-insurance"
import { Button } from "@/components/ui/button"

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Training Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Innovative training solutions for workplace mental health and drug & alcohol awareness
            </p>
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At ADA Australia, we take a 'three pillars' approach to behavioural health and workplace safety around
              drugs and alcohol, and in promoting workplace mental health and positive workplace culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">TRAINING</h3>
              <p className="text-gray-600">Innovative training and awareness solutions</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AWARENESS</h3>
              <p className="text-gray-600">Accessible high-interest, high-engagement resources</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SUPPORT</h3>
              <p className="text-gray-600">24/7 support and referral service</p>
            </div>
          </div>
        </div>
      </section>

      <TrainingSolutions />
      <TrainingPrograms />
      <TrainingInsurance />

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your training needs and get a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">Get a Quote</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              Call +61 4 0196 3511
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
