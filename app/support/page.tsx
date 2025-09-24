import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  const supportServices = [
    {
      title: "24/7 Crisis Support",
      description: "Immediate support available any time of day or night for mental health emergencies",
      phone: "+61 4 0196 3511",
      available: "24/7",
      icon: "🆘",
    },
    {
      title: "Friendly Ear Support Service",
      description: "Confidential, anonymous support service operated by experienced support workers",
      phone: "+61 4 0196 3511",
      available: "24/7",
      icon: "👂",
    },
    {
      title: "Workplace Consultation",
      description: "Professional consultation for workplace mental health and safety concerns",
      phone: "+61 4 0196 3511",
      available: "Business Hours",
      icon: "💼",
    },
    {
      title: "Training Support",
      description: "Ongoing support and resources for organizations implementing our training programs",
      phone: "+61 4 0196 3511",
      available: "Business Hours",
      icon: "📚",
    },
  ]

  const emergencyContacts = [
    {
      service: "Lifeline",
      phone: "13 11 14",
      description: "24-hour crisis support and suicide prevention",
    },
    {
      service: "Beyond Blue",
      phone: "1300 22 4636",
      description: "Support for anxiety, depression and suicide prevention",
    },
    {
      service: "Kids Helpline",
      phone: "1800 55 1800",
      description: "24/7 phone and online counselling service for young people aged 5 to 25",
    },
    {
      service: "MensLine Australia",
      phone: "1300 78 99 78",
      description: "24/7 telephone and online support for men",
    },
    {
      service: "Emergency Services",
      phone: "000",
      description: "Police, Fire, Ambulance - for immediate life-threatening emergencies",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              24/7 support in your pocket - we're here when you need us most
            </p>
          </div>
        </div>
      </section>

      {/* ADA Support Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ADA Australia Support Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive support services are available to all clients and their families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button className="bg-blue-600 hover:bg-blue-700">Call {service.phone}</Button>
                      <span className="text-sm text-gray-500 self-center">Available {service.available}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Well Connect App */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">ADA Well Connect App</h2>
              <p className="text-xl mb-6 leading-relaxed">
                The ADA 'Well Connect' app carries a range of resources including a new wellbeing audit tool, the 'Seven
                Flags Wellbeing Monitor', as well as a new Let's Chat option which links users directly to our Friendly
                Ear support service, and crisis support services.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">Download App</Button>
            </div>
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">App Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Seven Flags Wellbeing Monitor</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Direct access to Friendly Ear support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Crisis support services</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Resource library access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Support Contacts</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              If you or someone you know is in immediate danger, please contact emergency services or one of these
              support lines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.service}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{contact.phone}</div>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Support Right Now?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait - reach out for support today. Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">Call +61 4 0196 3511</Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
            >
              Email enquiry@adaauz.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
