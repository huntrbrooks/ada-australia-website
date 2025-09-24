import { Button } from "@/components/ui/button"

export function BlogArticles() {
  const articles = [
    {
      date: "Jul 16, 2024",
      title: "Partner Violence - Our National Shame",
      excerpt:
        "Tragically, not a week goes by without another report of another woman being murdered or terribly injured, and sometimes their children, at the hands of a partner or former partner...",
      author: "Matthew Simons & Tim O'Brien",
      image: "/business-person-pointing.jpg",
    },
    {
      date: "Jun 28, 2024",
      title: "Dry July: Giving Your Liver A Break (And Raising Money For Cancer)",
      excerpt:
        "While Dry July is centred on helping others, by getting on board you're also helping yourself. A whole month 'breather' for the liver, a chance to wash out all those alcohol-related toxins...",
      author: "Matthew Simons - BPsych (Hons)",
      image: "/group-of-happy-diverse-people.jpg",
    },
    {
      date: "Jun 20, 2024",
      title: "Mental Health First Aid Training: Why You Should Consider It For Your Workplace",
      excerpt:
        "ADA Australia has recently conducted the accredited 12-hour Standard Mental Health First Aid (MHFA) training course out of The Centre for U, an initiative of the Electrical Trades Union Victoria...",
      author: "Matthew Simons - BPsych (Hons)",
      image: "/workplace-training-session.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-blue-500 text-sm font-semibold mb-2">{article.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{article.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <Button variant="link" className="text-blue-500 p-0 h-auto font-semibold">
                  READ MORE
                </Button>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 text-sm font-medium">{article.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
