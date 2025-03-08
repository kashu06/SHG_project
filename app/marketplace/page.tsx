import Link from "next/link"
import Image from "next/image"
import { Search, Filter, ShoppingBag } from "lucide-react"

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="SHG Platform Logo" width={40} height={40} />
            <span className="font-bold text-xl text-primary">SHG Platform</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
            <Link href="/dashboard/transactions" className="text-sm font-medium hover:text-primary">
              Transactions
            </Link>
            <Link href="/dashboard/loans" className="text-sm font-medium hover:text-primary">
              Loans
            </Link>
            <Link href="/schemes" className="text-sm font-medium hover:text-primary">
              Government Schemes
            </Link>
            <Link href="/marketplace" className="text-sm font-medium text-primary">
              Marketplace
            </Link>
            <Link href="/skills" className="text-sm font-medium hover:text-primary">
              Skill Hub
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/marketplace/sell"
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Sell Your Products
            </Link>
            <button className="relative p-1 text-gray-400 hover:text-gray-500">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
            </button>
            <div className="relative">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Unified Marketplace</h1>
            <p className="text-gray-600">Discover unique products made by Self Help Groups across India</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/marketplace/sell"
              className="md:hidden inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Sell Your Products
            </Link>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Search for products..."
              />
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
              <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                <option>All Categories</option>
                <option>Handicrafts</option>
                <option>Food Products</option>
                <option>Textiles</option>
                <option>Home Decor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
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
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90">
                  Buy Now
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
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
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90">
                  Buy Now
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
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
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90">
                  Buy Now
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
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
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90">
                  Buy Now
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product 5 */}
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
              <h3 className="font-semibold mb-1">Handmade Jute Bag</h3>
              <p className="text-primary font-medium mb-2">₹299</p>
              <p className="text-sm text-gray-500 mb-3">By Ekta SHG, Bihar</p>
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90">
                  Buy Now
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product 6 */}
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
              <h3 className="font-semibold mb-1">Handcrafted Leather Wallet</h3>
              <p className="text-primary font-medium mb-2">₹450</p>
              <p className="text-sm text-gray-500 mb-3">By Kalakar SHG, Uttar Pradesh</p>
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90">
                  Buy Now
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product 7 */}
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
              <h3 className="font-semibold mb-1">Organic Spice Mix</h3>
              <p className="text-primary font-medium mb-2">₹250</p>
              <p className="text-sm text-gray-500 mb-3">By Annapurna SHG, Kerala</p>
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90">
                  Buy Now
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product 8 */}
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
              <h3 className="font-semibold mb-1">Embroidered Cushion Cover</h3>
              <p className="text-primary font-medium mb-2">₹399</p>
              <p className="text-sm text-gray-500 mb-3">By Kala SHG, Gujarat</p>
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90">
                  Buy Now
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow-sm">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{" "}
                <span className="font-medium">120</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  15
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2023 SHG Platform. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-white">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

