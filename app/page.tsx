import Link from "next/link"
<<<<<<< HEAD
import Image from "next/image"
import { ArrowRight, BarChart2, ShoppingBag, Award, BookOpen } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="SHG Platform Logo" width={40} height={40} />
            <span className="font-bold text-xl text-primary">SHG Platform</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About SHGs
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/marketplace" className="text-sm font-medium hover:text-primary">
              Marketplace
            </Link>
            <Link href="/schemes" className="text-sm font-medium hover:text-primary">
              Government Schemes
            </Link>
            <Link href="/skills" className="text-sm font-medium hover:text-primary">
              Skill Development
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary/5"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Empowering Self Help Groups with Technology & Finance!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Track finances, connect with buyers, access government schemes, and upskill – all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/signup" className="px-6 py-3 text-white bg-primary rounded-md font-medium hover:bg-primary/90">
              Get Started
            </Link>
            <Link
              href="#features"
              className="px-6 py-3 text-primary bg-white border border-primary rounded-md font-medium hover:bg-primary/5"
            >
              Learn More
            </Link>
          </div>
          <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="SHG Members Using the App"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BarChart2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Management</h3>
              <p className="text-gray-600">Track investments, deposits & loans with ease and transparency.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketplace for SHG Products</h3>
              <p className="text-gray-600">Sell your products online and reach customers across the country.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Government Scheme Support</h3>
              <p className="text-gray-600">Discover & apply for beneficial schemes tailored for your SHG.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Development Hub</h3>
              <p className="text-gray-600">Learn new skills & grow your SHG with free training resources.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center px-6 py-3 text-primary font-medium hover:underline"
            >
              Explore All Features <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Help Various Stakeholders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">For SHG Leaders</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Manage members & finances easily
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Generate reports automatically
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Track all group activities
                </li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">For SHG Members</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Track savings & access loans
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Sell products in marketplace
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Access free training resources
                </li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">For Government</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Transparent financial tracking
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Efficient scheme distribution
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Data-driven policy making
                </li>
              </ul>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">For Corporates (CSR)</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Connect & support SHGs directly
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Track impact of contributions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Build sustainable partnerships
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/benefits"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Unified Marketplace</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Discover unique products made by Self Help Groups across the country
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Product 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Handmade Product"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Handcrafted Bamboo Basket</h3>
                <p className="text-primary font-medium mb-2">₹499</p>
                <p className="text-sm text-gray-500 mb-3">By Mahila Shakti SHG, West Bengal</p>
                <button className="w-full py-2 bg-primary/10 text-primary rounded font-medium hover:bg-primary/20">
                  View Details
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Handmade Product"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Organic Honey (500g)</h3>
                <p className="text-primary font-medium mb-2">₹350</p>
                <p className="text-sm text-gray-500 mb-3">By Vanam SHG, Karnataka</p>
                <button className="w-full py-2 bg-primary/10 text-primary rounded font-medium hover:bg-primary/20">
                  View Details
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Handmade Product"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Hand-woven Cotton Scarf</h3>
                <p className="text-primary font-medium mb-2">₹599</p>
                <p className="text-sm text-gray-500 mb-3">By Bunkar SHG, Rajasthan</p>
                <button className="w-full py-2 bg-primary/10 text-primary rounded font-medium hover:bg-primary/20">
                  View Details
                </button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Handmade Product"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Terracotta Wall Decor</h3>
                <p className="text-primary font-medium mb-2">₹799</p>
                <p className="text-sm text-gray-500 mb-3">By Mitti SHG, Madhya Pradesh</p>
                <button className="w-full py-2 bg-primary/10 text-primary rounded font-medium hover:bg-primary/20">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/marketplace"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90"
            >
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Success Story"
                  width={300}
                  height={300}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                  Lakshmi SHG, Tamil Nadu
                </div>
                <h3 className="mt-1 text-xl font-semibold">From Local Artisans to National Sellers</h3>
                <p className="mt-2 text-gray-600">
                  "Our group of 15 women started with small savings of ₹50 per month. With the help of this platform,
                  we've been able to sell our handloom products nationwide, increasing our monthly income by 300%. The
                  financial tracking tools have helped us manage our group funds transparently."
                </p>
                <div className="mt-4">
                  <span className="text-primary font-medium">- Lakshmi Devi, Group Leader</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/success-stories" className="inline-flex items-center text-primary font-medium hover:underline">
              Read More Success Stories <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SHG Platform</h3>
              <p className="text-gray-400">
                Empowering Self Help Groups with technology and financial tools to grow and prosper.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="text-gray-400 hover:text-white">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@shgplatform.org</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Tech Hub, Bangalore, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 SHG Platform. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
=======
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, UsersIcon, WalletIcon, LineChartIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center gap-2">
          <WalletIcon className="h-6 w-6" />
          <span className="font-bold">SHG Ledger</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            Dashboard
          </Link>
          <Link href="/members" className="text-sm font-medium hover:underline underline-offset-4">
            Members
          </Link>
          <Link href="/transactions" className="text-sm font-medium hover:underline underline-offset-4">
            Transactions
          </Link>
          <Link href="/loans" className="text-sm font-medium hover:underline underline-offset-4">
            Loans
          </Link>
          <Link href="/reports" className="text-sm font-medium hover:underline underline-offset-4">
            Reports
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SHG Ledger Service</h1>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    A comprehensive solution for Self Help Groups to manage finances, track member contributions, and
                    streamline loan management.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="SHG members meeting"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <WalletIcon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Digital Record Keeping</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Securely store all financial records including deposits, withdrawals, and loans.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <UsersIcon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Member Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Efficiently manage member details, contributions, and participation.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <WalletIcon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Loan Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Keep a clear record of borrowed amounts, repayments, and outstanding balances.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <LineChartIcon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Reports & Insights</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Generate financial summaries and analytics for better decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 SHG Ledger Service. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
>>>>>>> 9dafe79 (ledger frontend)
      </footer>
    </div>
  )
}

