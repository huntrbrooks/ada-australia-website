import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase mb-6">Stay In The Loop</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-gray-900 border-0 h-12"
            />
            <Button className="bg-blue-400 hover:bg-blue-300 text-white px-8 h-12 whitespace-nowrap">
              GET STARTED
            </Button>
          </div>
          <p className="text-blue-100">
            Join our ever-growing community. <span className="underline cursor-pointer">Join us</span>
          </p>
        </div>

        <div className="bg-blue-600 py-12 px-8 rounded-lg text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8" style={{ fontFamily: "cursive" }}>
              Stay Safe,
              <br />
              Be Well
            </h3>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <blockquote className="text-xl italic mb-4">
              "Success is not final, failure is not fatal; it is the courage to continue that counts."
            </blockquote>
            <p className="text-blue-200">- Winston Churchill</p>
          </div>
        </div>
      </div>
    </section>
  )
}
