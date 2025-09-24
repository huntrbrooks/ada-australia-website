"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 6

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/images/hero-background.webp')",
        }}
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-slate-900/40" />

      {/* Blue Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32">
        <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,120 C300,60 600,60 900,80 C1050,90 1150,100 1200,120 L1200,120 L0,120 Z" fill="#0ea5e9" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] sm:min-h-[500px]">
          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-48 h-[400px] sm:w-64 sm:h-[520px] bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="p-3 sm:p-6 h-full flex flex-col">
                    {/* App Header */}
                    <div className="text-center mb-4 sm:mb-8">
                      <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">ADA</div>
                      <div className="text-gray-600 text-sm sm:text-lg font-semibold">Well Connect</div>
                      <div className="text-gray-600 text-sm sm:text-lg font-semibold">App</div>
                    </div>

                    {/* App Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 flex-1">
                      {/* Support */}
                      <div className="bg-gray-100 rounded-lg p-2 sm:p-4 text-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xs font-semibold text-gray-800">Support</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">Call us or</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">Emergency Services</div>
                      </div>

                      {/* Library */}
                      <div className="bg-gray-100 rounded-lg p-2 sm:p-4 text-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white rounded"></div>
                        </div>
                        <div className="text-xs font-semibold text-gray-800">Library</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">Videos, Podcasts,</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">eBooks</div>
                      </div>

                      {/* My Workplace */}
                      <div className="bg-gray-100 rounded-lg p-2 sm:p-4 text-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xs font-semibold text-gray-800">My Workplace</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">My Work, Alerts,</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">Resources</div>
                      </div>

                      {/* My Wellbeing */}
                      <div className="bg-gray-100 rounded-lg p-2 sm:p-4 text-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xs font-semibold text-gray-800">My Wellbeing</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">7 Flags Wellbeing</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">Monitor</div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex justify-center space-x-4 sm:space-x-8 mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-gray-200">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-medium tracking-wide uppercase">24/7 SUPPORT IN YOUR POCKET</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-400 leading-tight">
                WELL CONNECT<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>APP
              </h1>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
              The ADA 'Well Connect' app carries a range of resources including a new wellbeing audit tool, the 'Seven
              Flags Wellbeing Monitor', as well as a new Let's Chat option which links users directly to our Friendly
              Ear support service, and crisis support services.
            </p>

            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold mx-auto lg:mx-0"
            >
              Find out more
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
        onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
        onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
