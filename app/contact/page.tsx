"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+61 4 0196 3511",
      available: "24/7 for crisis support, Business hours for general enquiries",
      icon: "📞",
    },
    {
      title: "Email Enquiries",
      description: "Send us your questions and we'll respond promptly",
      contact: "enquiry@adaauz.com",
      available: "Response within 24 hours",
      icon: "✉️",
    },
    {
      title: "Training Bookings",
      description: "Book training sessions for your organization",
      contact: "enquiry@adaauz.com",
      available: "Business hours",
      icon: "📚",
    },
    {
      title: "Crisis Support",
      description: "Immediate support for mental health emergencies",
      contact: "+61 4 0196 3511",
      available: "24/7",
      icon: "🆘",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for support, training, or general enquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the best way to contact us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <div className="text-lg font-semibold text-blue-600 mb-2">{method.contact}</div>
                    <div className="text-sm text-gray-500">{method.available}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call
                our support line directly.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM AEST</p>
                  <p className="text-gray-600">Crisis Support: Available 24/7</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">General enquiries: Within 24 hours</p>
                  <p className="text-gray-600">Training requests: Within 2 business days</p>
                  <p className="text-gray-600">Crisis support: Immediate</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="training">Training Enquiry</option>
                    <option value="support">Support Services</option>
                    <option value="general">General Enquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media">Media Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide details about your enquiry..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you or someone you know is in crisis or immediate danger, don't wait for a response to this form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Call Crisis Support: +61 4 0196 3511
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg bg-transparent"
            >
              Emergency Services: 000
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
