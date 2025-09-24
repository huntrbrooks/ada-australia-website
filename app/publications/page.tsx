import { Header } from "@/components/header"
import { LittleBlueBook } from "@/components/little-blue-book"
import { Button } from "@/components/ui/button"

export default function PublicationsPage() {
  const publications = [
    {
      title: "The Little Blue Book of Mental Health - COVID-19 Edition",
      description:
        "This book provides information, awareness and personal practices to help individuals and families 'ride out' the challenges and uncertainties of the COVID-19 pandemic.",
      image: "/mental-health-book-cover.jpg",
      downloadLink: "#",
      featured: true,
    },
    {
      title: "Workplace Mental Health Guidelines",
      description:
        "Comprehensive guidelines for creating and maintaining positive mental health practices in the workplace.",
      image: "/workplace-guidelines-document.jpg",
      downloadLink: "#",
    },
    {
      title: "Drug & Alcohol Awareness Handbook",
      description:
        "Essential information about drug and alcohol awareness for workplace safety and employee wellbeing.",
      image: "/drug-alcohol-handbook.jpg",
      downloadLink: "#",
    },
    {
      title: "Seven Flags Wellbeing Monitor Guide",
      description: "A practical guide to using the Seven Flags Wellbeing Monitor for early intervention and support.",
      image: "/wellbeing-monitor-guide.jpg",
      downloadLink: "#",
    },
    {
      title: "Crisis Support Resource Kit",
      description: "Emergency resources and contact information for crisis situations and mental health emergencies.",
      image: "/crisis-support-resources.jpg",
      downloadLink: "#",
    },
    {
      title: "Workplace Training Toolkit",
      description:
        "Tools and resources for implementing effective workplace mental health and safety training programs.",
      image: "/training-toolkit.jpg",
      downloadLink: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Publications & Resources</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive library of mental health and workplace safety resources
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <LittleBlueBook />

      {/* Publications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Resource Library</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download our free resources to support workplace mental health and safety initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={publication.image || "/placeholder.svg"}
                  alt={publication.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{publication.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{publication.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Download PDF</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to receive our latest publications and resources directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
