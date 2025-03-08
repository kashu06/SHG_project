import React from "react";
import Link from "next/link"
import Image from "next/image"

import { Search, Award, ExternalLink, ThumbsUp, Filter } from "lucide-react"

export default function GovernmentSchemes() {
  return (
    <><div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="SHG Platform Logo" width={40} height={40} />
            <span className="font-bold text-xl text-primary">SHG Platform</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary">Dashboard</Link>
            <Link href="/dashboard/transactions" className="text-sm font-medium hover:text-primary">Transactions</Link>
            <Link href="/dashboard/loans" className="text-sm font-medium hover:text-primary">Loans</Link>
            <Link href="/schemes" className="text-sm font-medium text-primary">Government Schemes</Link>
            <Link href="/marketplace" className="text-sm font-medium hover:text-primary">Marketplace</Link>
            <Link href="/skills" className="text-sm font-medium hover:text-primary">Skill Hub</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div><main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Government Scheme Recommendations</h1>
          <p className="text-gray-600">Discover schemes tailored for your SHG based on your profile and activities</p>
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
                placeholder="Search for schemes..." />
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
              <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                <option>All Categories</option>
                <option>Financial Support</option>
                <option>Skill Development</option>
                <option>Marketing Support</option>
                <option>Infrastructure</option>
              </select>
            </div>
          </div>
        </div>

        {/* Recommended Schemes */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Scheme 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">High Match</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">PMMY - Pradhan Mantri Mudra Yojana</h3>
                <p className="text-gray-600 text-sm mb-4">Loans up to ₹10 lakh for small businesses without collateral</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Eligibility</span>
                    <span className="font-medium">SHGs with 2+ years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Deadline</span>
                    <span className="font-medium">Open year-round</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Benefits</span>
                    <span className="font-medium">Low interest rates</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://www.mudra.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90 text-center"
                  >
                    Apply Now
                  </a>
                  <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                    <ThumbsUp className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scheme 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">High Match</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">DAY-NRLM - Deendayal Antyodaya Yojana</h3>
                <p className="text-gray-600 text-sm mb-4">Financial assistance and training for rural SHGs</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Eligibility</span>
                    <span className="font-medium">Rural women SHGs</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Deadline</span>
                    <span className="font-medium">Open year-round</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Benefits</span>
                    <span className="font-medium">Interest subvention</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://aajeevika.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90 text-center"
                  >
                    Apply Now
                  </a>
                  <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                    <ThumbsUp className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scheme 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">Medium Match</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">PMFME - PM Formalization of Micro Food Enterprises</h3>
                <p className="text-gray-600 text-sm mb-4">Support for food processing units run by SHGs</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Eligibility</span>
                    <span className="font-medium">Food processing SHGs</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Deadline</span>
                    <span className="font-medium">September 30, 2023</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Benefits</span>
                    <span className="font-medium">Credit-linked subsidy</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://pmfme.mofpi.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90 text-center"
                  >
                    Apply Now
                  </a>
                  <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded font-medium hover:bg-gray-200">
                    <ThumbsUp className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Schemes */}
        <div>
          <h2 className="text-xl font-semibold mb-6">All Available Schemes</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Scheme Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Eligibility
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Benefits
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">PMMY - Pradhan Mantri Mudra Yojana</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Financial Support
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      SHGs with 2+ years
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Loans up to ₹10 lakh
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-primary hover:text-primary/80 flex items-center">
                        Details <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">DAY-NRLM - Deendayal Antyodaya Yojana</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Financial Support
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Rural women SHGs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Interest subvention
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-primary hover:text-primary/80 flex items-center">
                        Details <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">PMFME - PM Formalization of Micro Food Enterprises</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Marketing Support
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Food processing SHGs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Credit-linked subsidy
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-primary hover:text-primary/80 flex items-center">
                        Details <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">PMEGP - Prime Minister's Employment Generation Programme</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        Skill Development
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      All SHGs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Subsidy up to 35%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-primary hover:text-primary/80 flex items-center">
                        Details <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">SFURTI - Scheme of Fund for Regeneration of Traditional Industries</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Infrastructure
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Traditional artisan SHGs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Common facility centers
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
  <a href="#" className="text-primary hover:text-primary/80 flex items-center">
    Details <ExternalLink className="ml-1 h-4 w-4" />
  </a>
</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div>
    </main></>)}

