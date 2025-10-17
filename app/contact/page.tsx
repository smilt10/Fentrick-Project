import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Get In Touch</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Contact
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                FENTRICK
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Ready to start your roofing project? Get in touch with Ghana's most trusted roofing contractor. We're here
              to help with all your roofing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Let's Discuss Your Project</h2>
                <p className="text-lg text-slate-600">
                  Contact FENTRICK Roofing System today for a free consultation and quote. Our team is ready to help you
                  protect your investment with premium roofing solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600 mb-2">Speak directly with our roofing experts</p>
                    <div className="space-y-1">
                      <p className="text-lg font-medium text-slate-900">+233 XX XXX XXXX</p>
                      <p className="text-slate-600">+233 XX XXX XXXX (Emergency)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600 mb-2">Send us your project details</p>
                    <div className="space-y-1">
                      <p className="text-lg font-medium text-slate-900">info@fentrickroofing.com</p>
                      <p className="text-slate-600">quotes@fentrickroofing.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Visit Our Office</h3>
                    <p className="text-slate-600 mb-2">Come see our showroom and materials</p>
                    <div className="space-y-1">
                      <p className="text-lg font-medium text-slate-900">123 Roofing Street</p>
                      <p className="text-slate-600">East Legon, Accra, Ghana</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600 mb-2">When you can reach us</p>
                    <div className="space-y-1">
                      <p className="text-slate-900">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-slate-900">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-slate-600">Sunday: Emergency calls only</p>
                      <p className="text-red-600 font-medium">24/7 Emergency Service</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 pt-8 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/get-quote" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                      Get Free Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1 border-slate-300 hover:bg-slate-50 bg-transparent">
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Live Chat
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Send Us a Message</h3>
                    <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option value="">Select project type</option>
                        <option value="residential">Residential Roofing</option>
                        <option value="commercial">Commercial Roofing</option>
                        <option value="repair">Roof Repair</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Property Location</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="e.g., East Legon, Accra"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                      <textarea
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                        placeholder="Tell us about your roofing project, timeline, and any specific requirements..."
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
                      />
                      <label htmlFor="consent" className="text-sm text-slate-600">
                        I agree to receive communications from FENTRICK Roofing System regarding my inquiry and
                        understand that I can unsubscribe at any time.
                      </label>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 py-3">
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Find Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visit our showroom to see our materials and discuss your project in person.
            </p>
          </div>

          <div className="bg-slate-300 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="w-12 h-12 text-slate-500 mx-auto" />
              <p className="text-slate-600">Interactive Map Coming Soon</p>
              <p className="text-sm text-slate-500">123 Roofing Street, East Legon, Accra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Emergency Roofing Service</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Roof emergency? Don't wait! Our 24/7 emergency team is ready to help protect your property.
            </p>
            <div className="space-y-2">
              <p className="text-2xl font-bold">+233 XX XXX XXXX</p>
              <p className="text-red-100">Available 24/7 for emergencies</p>
            </div>
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
              Call Emergency Line
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
