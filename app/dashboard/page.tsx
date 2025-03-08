import Link from "next/link"
import Image from "next/image"
import { BarChart3, CreditCard, FileText, Award, BookOpen, Bell, User, ArrowUpRight, DollarSign } from "lucide-react"

export default function MemberDashboard() {
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
            <Link href="/dashboard" className="text-sm font-medium text-primary">
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
            <Link href="/marketplace" className="text-sm font-medium hover:text-primary">
              Marketplace
            </Link>
            <Link href="/skills" className="text-sm font-medium hover:text-primary">
              Skill Hub
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-1 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
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
                <span className="hidden md:inline-block">Priya Sharma</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Priya!</h1>
          <p className="text-gray-600">Here's what's happening with your SHG account today.</p>
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-700">Total Investments</h2>
              <div className="p-2 bg-green-100 rounded-full">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹12,500</p>
            <p className="text-sm text-green-600 mt-2 flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +₹500 from last month
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-700">Total Loans</h2>
              <div className="p-2 bg-blue-100 rounded-full">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹5,000</p>
            <p className="text-sm text-gray-500 mt-2">Active loan: ₹2,000 remaining</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-700">Monthly Deposits</h2>
              <div className="p-2 bg-purple-100 rounded-full">
                <BarChart3 className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹500</p>
            <p className="text-sm text-red-600 mt-2">Due in 5 days</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/dashboard/deposit"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="p-2 bg-primary/10 rounded-full mr-3">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Submit Monthly Deposit</h3>
                <p className="text-sm text-gray-500">Pay your monthly contribution</p>
              </div>
            </Link>

            <Link
              href="/dashboard/loans/apply"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="p-2 bg-primary/10 rounded-full mr-3">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Request Loan</h3>
                <p className="text-sm text-gray-500">Apply for a new loan</p>
              </div>
            </Link>

            <Link href="/schemes" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="p-2 bg-primary/10 rounded-full mr-3">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">View Govt. Schemes</h3>
                <p className="text-sm text-gray-500">Check recommended schemes</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Deposit Reminder */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Deposit Reminder</h2>
            <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg mb-4">
              <p className="text-sm text-amber-800">Your monthly deposit of ₹500 is due on 15th July 2023</p>
            </div>
            <Link
              href="/dashboard/deposit"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Pay Now
            </Link>
          </div>

          {/* Loan Status */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-700">Loan Status</h2>
              <Link href="/dashboard/loans" className="text-sm text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">Business Expansion Loan</h3>
                    <p className="text-sm text-gray-500">Approved on 10th May 2023</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Amount</span>
                  <span className="font-medium">₹5,000</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Remaining</span>
                  <span className="font-medium">₹2,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>60% Repaid</span>
                  <span>Next payment: ₹500 on 20th July</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Development */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-700">Skill Development</h2>
              <Link href="/skills" className="text-sm text-primary hover:underline">
                View all courses
              </Link>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Digital Marketing Basics</h3>
                    <p className="text-sm text-gray-500 mb-2">Learn how to market your products online</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        1,234 enrolled
                      </span>
                      <span className="mx-2">•</span>
                      <span>Free</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/skills"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Explore More Courses
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

