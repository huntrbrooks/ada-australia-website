import { FileText, TrendingUp, Shield, CheckCircle } from "lucide-react"

export function TrainingInsurance() {
  return (
    <section className="py-16 bg-slate-800 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-700/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-400 uppercase mb-6">
              Our Training Is
              <br />
              Your Insurance
            </h2>
            <p className="text-xl mb-6 leading-relaxed">
              A workplace that values mental health is a productive workplace.
            </p>
            <p className="mb-6 leading-relaxed">
              A workplace built on a commitment to respect, free from unreasonable and overbearing behaviours, doesn't
              happen by accident. Neither does a workplace free from risk of hazardous behaviours due to impairment from
              drugs and alcohol.
            </p>
            <p className="leading-relaxed">But you can achieve this through training, awareness and action.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-blue-400 font-semibold">Reduce compliance costs and productivity losses</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-blue-400 font-semibold">Reduce insurance, legal and liability costs</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <p className="text-blue-400 font-semibold">Protect against unfair dismissal claims.</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-blue-400 font-semibold">
                Protect against blowouts in Work Cover premiums and Workers' Compensation costs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
