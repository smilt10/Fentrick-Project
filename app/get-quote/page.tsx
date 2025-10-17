import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calculator, Clock, Shield, ArrowRight, Upload } from "lucide-react"

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Free Quote</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Get Your Free
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Roofing Quote
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Get a detailed, transparent quote for your roofing project. Our experts will assess your needs and provide
              a comprehensive estimate with no hidden costs.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto">
                <Calculator className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Accurate Pricing</h3>
              <p className="text-sm text-slate-600">Detailed breakdown of all costs</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Quick Response</h3>
              <p className="text-sm text-slate-600">Quote within 24 hours</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-slate-900">No Obligation</h3>
              <p className="text-sm text-slate-600">Free consultation included</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Expert Assessment</h3>
              <p className="text-sm text-slate-600">Professional evaluation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-slate-900">Project Details</h2>
                    <p className="text-slate-600">
                      Please provide as much detail as possible to help us give you an accurate quote.
                    </p>
                  </div>

                  <form className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
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
                      <div className="grid md:grid-cols-2 gap-6">
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
                      </div>
                    </div>

                    {/* Property Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                        Property Information
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Property Address *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          placeholder="123 Main Street, East Legon, Accra"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Property Type *</label>
                          <select
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          >
                            <option value="">Select property type</option>
                            <option value="residential-house">Residential House</option>
                            <option value="apartment">Apartment Building</option>
                            <option value="commercial">Commercial Building</option>
                            <option value="industrial">Industrial Facility</option>
                            <option value="institutional">Institutional Building</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Building Age</label>
                          <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                            <option value="">Select building age</option>
                            <option value="new">New Construction</option>
                            <option value="0-5">0-5 years</option>
                            <option value="6-10">6-10 years</option>
                            <option value="11-20">11-20 years</option>
                            <option value="21-30">21-30 years</option>
                            <option value="30+">Over 30 years</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                        Project Details
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Service Type *</label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        >
                          <option value="">Select service type</option>
                          <option value="new-installation">New Roof Installation</option>
                          <option value="roof-replacement">Roof Replacement</option>
                          <option value="roof-repair">Roof Repair</option>
                          <option value="maintenance">Roof Maintenance</option>
                          <option value="waterproofing">Waterproofing</option>
                          <option value="emergency">Emergency Service</option>
                          <option value="inspection">Roof Inspection</option>
                        </select>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Approximate Roof Size (sq ft)
                          </label>
                          <input
                            type="number"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="e.g., 2000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Current Roof Material</label>
                          <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                            <option value="">Select current material</option>
                            <option value="clay-tiles">Clay Tiles</option>
                            <option value="metal-sheets">Metal Sheets</option>
                            <option value="concrete-tiles">Concrete Tiles</option>
                            <option value="asbestos">Asbestos</option>
                            <option value="thatch">Thatch</option>
                            <option value="other">Other</option>
                            <option value="none">New Construction</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Material</label>
                        <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                          <option value="">Select preferred material</option>
                          <option value="premium-clay">Premium Clay Tiles</option>
                          <option value="metal-roofing">Metal Roofing</option>
                          <option value="concrete-tiles">Concrete Tiles</option>
                          <option value="composite">Composite Materials</option>
                          <option value="eco-friendly">Eco-Friendly Options</option>
                          <option value="consultation">Need Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Project Timeline</label>
                        <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                          <option value="">Select timeline</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="3-months">Within 3 months</option>
                          <option value="6-months">Within 6 months</option>
                          <option value="planning">Just planning</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                        Additional Information
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Project Description & Special Requirements
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                          placeholder="Please describe your project in detail, including any specific requirements, concerns, or questions you have..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range (Optional)</label>
                        <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under GHS 10,000</option>
                          <option value="10k-25k">GHS 10,000 - 25,000</option>
                          <option value="25k-50k">GHS 25,000 - 50,000</option>
                          <option value="50k-100k">GHS 50,000 - 100,000</option>
                          <option value="over-100k">Over GHS 100,000</option>
                          <option value="discuss">Prefer to discuss</option>
                        </select>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                        Photos & Documents (Optional)
                      </h3>
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors">
                        <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600 mb-2">Upload photos of your current roof or property plans</p>
                        <p className="text-sm text-slate-500 mb-4">Supported formats: JPG, PNG, PDF (Max 10MB each)</p>
                        <Button
                          type="button"
                          variant="outline"
                          className="border-slate-300 hover:bg-slate-50 bg-transparent"
                        >
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="site-visit"
                          className="mt-1 w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
                        />
                        <label htmlFor="site-visit" className="text-sm text-slate-700">
                          I would like to schedule a free on-site consultation for a more accurate quote
                        </label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="consent-quote"
                          required
                          className="mt-1 w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
                        />
                        <label htmlFor="consent-quote" className="text-sm text-slate-700">
                          I agree to receive communications from FENTRICK Roofing System regarding my quote request and
                          understand that I can unsubscribe at any time. *
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-slate-200">
                      <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 py-4 text-lg">
                        Get My Free Quote
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <p className="text-center text-sm text-slate-500 mt-4">
                        You'll receive your detailed quote within 24 hours
                      </p>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">What Happens Next?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here's what you can expect after submitting your quote request.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Review & Analysis</h3>
              <p className="text-slate-600">
                Our experts review your requirements and analyze your project details within 2 hours.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Initial Contact</h3>
              <p className="text-slate-600">
                We'll call you to discuss your project and schedule a site visit if needed.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Detailed Quote</h3>
              <p className="text-slate-600">
                Receive a comprehensive quote with material costs, labor, and timeline within 24 hours.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Project Planning</h3>
              <p className="text-slate-600">
                Once approved, we'll create a detailed project plan and schedule your installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
