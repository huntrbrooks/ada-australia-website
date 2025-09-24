export function TrainingSolutions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-600 uppercase">Tailored Training Solutions</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our one-hour 'toolbox' workshop, and two-hour, half-day and one-day training programs can be delivered
                at your workplace, at our training rooms or at any suitable preferred venue.
              </p>
              <p>
                All training can be customised to your industry sector (with content targeted to your work environment)
                and delivered flexibly to your operational demands.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">To talk about this training, or for a quote on delivery options:</p>
                <p>email: enquiry@adaauz.com</p>
                <p>or call: +61 4 0196 3511.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/training-workers-cropped.png"
              alt="Two workers in high-visibility vests walking on railway tracks with mountains in background"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
