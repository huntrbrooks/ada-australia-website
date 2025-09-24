import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function ArticlesPage() {
  const featuredArticle = {
    title: "Cocaine... it's alright isn't it?",
    excerpt:
      "A night out with mates, getting drunk and buying 'a bag' may seem socially acceptable to some, the associated risks are often not considered. Why would it be? It's just a little fun right?",
    author: "Ella Mano",
    date: "Apr 3, 2025",
    image: "/images/cocaine-article.png",
    readTime: "5 min read",
  }

  const categories = [
    "All Articles",
    "Mental Health",
    "Drug & Alcohol Awareness",
    "Workplace Safety",
    "Training & Development",
    "Crisis Support",
  ]

  const recentArticles = [
    {
      title: "Partner Violence - Our National Shame",
      excerpt:
        "Tragically, not a week goes by without another report of another woman being murdered or terribly injured, and sometimes their children, at the hands of a partner or former partner...",
      author: "Matthew Simons & Tim O'Brien",
      date: "Jul 16, 2024",
      image: "/workplace-violence-prevention.jpg",
      category: "Workplace Safety",
    },
    {
      title: "Dry July: Giving Your Liver A Break (And Raising Money For Cancer)",
      excerpt:
        "While Dry July is centred on helping others, by getting on board you're also helping yourself. A whole month 'breather' for the liver, a chance to wash out all those alcohol-related toxins...",
      author: "Matthew Simons - BPsych (Hons)",
      date: "Jun 28, 2024",
      image: "/healthy-lifestyle-alcohol-awareness.jpg",
      category: "Drug & Alcohol Awareness",
    },
    {
      title: "Mental Health First Aid Training: Why You Should Consider It For Your Workplace",
      excerpt:
        "ADA Australia has recently conducted the accredited 12-hour Standard Mental Health First Aid (MHFA) training course out of The Centre for U, an initiative of the Electrical Trades Union Victoria...",
      author: "Matthew Simons - BPsych (Hons)",
      date: "Jun 20, 2024",
      image: "/mental-health-first-aid-training-workplace.jpg",
      category: "Training & Development",
    },
    {
      title: "Building Resilience in High-Stress Workplaces",
      excerpt:
        "Learn practical strategies for developing personal and team resilience in challenging work environments. Discover tools that help maintain mental wellbeing under pressure.",
      author: "Dr. Sarah Chen",
      date: "May 15, 2024",
      image: "/workplace-stress-resilience-building.jpg",
      category: "Mental Health",
    },
    {
      title: "The Hidden Costs of Workplace Substance Abuse",
      excerpt:
        "Understanding the real impact of substance abuse on workplace productivity, safety, and culture. Explore prevention strategies and early intervention approaches.",
      author: "Michael Thompson",
      date: "May 8, 2024",
      image: "/workplace-substance-abuse-prevention.jpg",
      category: "Drug & Alcohol Awareness",
    },
    {
      title: "Creating Psychologically Safe Workplaces",
      excerpt:
        "How to foster an environment where employees feel safe to speak up, make mistakes, and seek help when needed. Essential strategies for modern workplace culture.",
      author: "Lisa Rodriguez",
      date: "Apr 22, 2024",
      image: "/psychological-safety-workplace-culture.jpg",
      category: "Mental Health",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Articles & Insights</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Expert insights on workplace mental health, safety, and wellbeing
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <div className="text-blue-600 text-sm font-medium mb-2">{featuredArticle.date}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  By {featuredArticle.author} • {featuredArticle.readTime}
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0 ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{article.author}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to receive our latest articles and insights on workplace mental health and safety
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
