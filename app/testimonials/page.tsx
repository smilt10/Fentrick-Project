import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Kwame Asante",
      role: "Homeowner",
      location: "East Legon, Accra",
      rating: 5,
      image: "/placeholder-user.jpg",
      testimonial:
        "FENTRICK transformed our home with a beautiful new roof. Their professionalism and attention to detail exceeded our expectations. The team was punctual, clean, and delivered exactly what they promised.",
      project: "Residential Roof Replacement",
    },
    {
      name: "Akosua Mensah",
      role: "Business Owner",
      location: "Airport City, Accra",
      rating: 5,
      image: "/placeholder-user.jpg",
      testimonial:
        "We needed emergency roof repairs after a storm, and FENTRICK responded within hours. Their 24/7 service saved our business from major water damage. Highly recommended for commercial properties.",
      project: "Emergency Commercial Repair",
    },
    {
      name: "Dr. Emmanuel Osei",
      role: "Medical Professional",
      location: "Kumasi, Ashanti Region",
      rating: 5,
      image: "/placeholder-user.jpg",
      testimonial:
        "The quality of work and materials used by FENTRICK is outstanding. Our clinic's roof has been perfect for over two years now, with no issues whatsoever. Worth every pesewa!",
      project: "Medical Facility Roofing",
    },
    {
      name: "Sarah Adjei",
      role: "Property Developer",
      location: "Tema, Greater Accra",
      rating: 5,
      image: "/placeholder-user.jpg",
      testimonial:
        "As a developer, I've worked with many contractors, but FENTRICK stands out. They completed our 50-unit estate on time and within budget. Their project management is exceptional.",
      project: "Estate Development",
    },
    {
      name: "Michael Boateng",
      role: "Factory Owner",
      location: "Takoradi, Western Region",
      rating: 5,
      image: "/placeholder-user.jpg",
      testimonial:
        "FENTRICK installed our industrial roofing system with precision. The heavy-duty materials and expert installation have withstood harsh weather conditions perfectly. Great investment!",
      project: "Industrial Warehouse",
    },
    {
      name: "Grace Amponsah",
      role: "School Administrator",
      location: "Cape Coast, Central Region",
      rating: 5,
      image: "/placeholder-user.jpg",
      testimonial:
        "Our school's roof renovation was handled with care and minimal disruption to classes. FENTRICK's team was respectful of our educational environment and delivered excellent results.",
      project: "Educational Institution",
    },
    {
      name: "Joseph Nkrumah",
      role: "Restaurant Owner",
      location: "Accra, Greater Accra",
      rating: 5,
      image: "/placeholder-user.jpg",
      testimonial:
        "The waterproofing solution FENTRICK provided has completely solved our leak problems. Our restaurant operates smoothly now, rain or shine. Professional service from start to finish.",
      project: "Commercial Waterproofing",
    },
    {
      name: "Abena Darko",
      role: "Homeowner",
      location: "Spintex, Accra",
      rating: 5,
      image: "/placeholder-user.jpg",
      testimonial:
        "From consultation to completion, FENTRICK was transparent about costs and timelines. No surprises, no hidden fees. The quality of their work speaks for itself. Highly satisfied!",
      project: "Residential New Installation",
    },
    {
      name: "Robert Owusu",
      role: "Hotel Manager",
      location: "Elmina, Central Region",
      rating: 5,
      image: "/placeholder-user.jpg",
      testimonial:
        "Our hotel's roof needed urgent attention during peak season. FENTRICK worked around our schedule and completed the repairs without disrupting our guests. Exceptional service!",
      project: "Hospitality Sector Repair",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Customer Testimonials</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              What Our Customers
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Say About Us
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers across Ghana have to say about their
              experience with FENTRICK Roofing System.
            </p>
          </div>

          {/* Overall Rating */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-2xl font-bold text-slate-900">4.9/5</div>
              <div className="text-slate-600">Based on 200+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="absolute top-4 right-4">
                    <Quote className="w-8 h-8 text-red-100" />
                  </div>

                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-slate-700 leading-relaxed italic">"{testimonial.testimonial}"</p>

                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder-user.jpg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                      <p className="text-xs text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Customer Satisfaction Numbers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in these satisfaction metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-slate-600">Customer Satisfaction</div>
              <div className="text-sm text-slate-500 mt-2">Would recommend us</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-slate-600">Repeat Customers</div>
              <div className="text-sm text-slate-500 mt-2">Choose us again</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">4.9</div>
              <div className="text-slate-600">Average Rating</div>
              <div className="text-sm text-slate-500 mt-2">Out of 5 stars</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
              <div className="text-slate-600">Reviews</div>
              <div className="text-sm text-slate-500 mt-2">And counting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Join Our Satisfied Customers</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the FENTRICK difference for yourself. Let us help you protect your most valuable investment
              with premium roofing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
