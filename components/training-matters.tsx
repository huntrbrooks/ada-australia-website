import { Check } from "lucide-react"

export function TrainingMatters() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/training-matters-cropped.png"
              alt="Workplace training session with diverse group of people"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-600 uppercase">Training That Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              At ADA Australia, we understand that when you invest in training you want it to 'stick':
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">To drive awareness and behavioural change</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To change mindsets and to foster improved workplace culture and practices
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">To increase satisfaction, commitment and productivity</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To produce lasting benefits to the health and wellbeing of all at the workplace
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed italic">
              Delivered by trainers with 'lived experience', our drug and alcohol awareness workshops and workplace
              mental health training will 'stick' with your people. (And can change lives...)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
