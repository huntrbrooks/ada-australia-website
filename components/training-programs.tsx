export function TrainingPrograms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Mental Health Training */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/images/mental-health-training-cropped.png"
                alt="Presenter giving mental health training to audience"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600 uppercase mb-4">ADA Workplace Mental Health Training</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Work stress plays a significant role in the incidence of depression, anxiety and other disorders. But
                work should not "bust our brains". A healthy workplace is one that protects the mental well-being of its
                people through good organisational practices, responsive management, a positive workplace culture,
                support and respect.
              </p>
              <p className="text-gray-700 leading-relaxed">
                ADA Australia's Workplace Mental Health Training will improve productivity and satisfaction at work,
                guard against hazardous behaviours and promote healthy work- systems and practices.
              </p>
            </div>
          </div>

          {/* Drugs & Alcohol Training */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 uppercase mb-4">
                ADA Workplace Drugs & Alcohol Awareness Training
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The misuse of alcohol and drugs comes at a heavy cost to business, to work relationships and
                productivity, and to families and the community.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                ADA's Workplace Drugs and Alcohol Awareness Training programs foster safe-work practices through
                improved awareness and understanding of the impact of these substances on health and wellbeing, on brain
                function, judgement and on work
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/drugs-alcohol-training-cropped.png"
                alt="Person watching ADA training presentation on computer screen"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
