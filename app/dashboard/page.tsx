<<<<<<< HEAD
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
            <span className="font-bold text-xl text-primary">Avinyaa</span>
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
=======
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Users, PiggyBank, BadgeDollarSign, CreditCard } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

// Mock data for demonstration
const mockDashboardData = {
  totalMembers: 35,
  totalSavings: 125000,
  totalLoans: 78500,
  pendingDues: 12000,
  recentTransactions: [
    { id: 1, memberName: "Priya Sharma", type: "Deposit", amount: 1000, date: "2025-03-08" },
    { id: 2, memberName: "Kavita Patel", type: "Withdrawal", amount: 500, date: "2025-03-07" },
    { id: 3, memberName: "Anita Desai", type: "Loan Repayment", amount: 2000, date: "2025-03-06" },
    { id: 4, memberName: "Sunita Verma", type: "Deposit", amount: 1500, date: "2025-03-05" },
    { id: 5, memberName: "Rekha Gupta", type: "Loan Disbursement", amount: 5000, date: "2025-03-04" },
  ],
  monthlyCollections: [
    { month: "Jan", amount: 12500 },
    { month: "Feb", amount: 15000 },
    { month: "Mar", amount: 18000 },
    { month: "Apr", amount: 17500 },
    { month: "May", amount: 19000 },
    { month: "Jun", amount: 20500 },
  ],
}

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(mockDashboardData)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  // In a real implementation, this would fetch from the Spring Boot backend
  useEffect(() => {
    // This would be replaced with an actual API call to your Spring Boot backend
    const fetchDashboardData = async () => {
      setLoading(true)
      try {
        // const response = await fetch('http://localhost:8080/api/dashboard');
        // const data = await response.json();
        // setDashboardData(data);

        // Using mock data for now
        setTimeout(() => {
          setDashboardData(mockDashboardData)
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        toast({
          title: "Error",
          description: "Failed to load dashboard data. Please try again.",
          variant: "destructive",
        })
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [toast])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Link href="/members">
              <Button>Add Member</Button>
            </Link>
            <Link href="/transactions">
              <Button variant="outline">New Transaction</Button>
            </Link>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.totalMembers}</div>
                  <p className="text-xs text-muted-foreground">Active members in the group</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
                  <PiggyBank className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹{dashboardData.totalSavings.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
                  <BadgeDollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹{dashboardData.totalLoans.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">15 active loans</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Dues</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹{dashboardData.pendingDues.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Due in next 30 days</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Monthly Collections</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full">
                    {/* In a real implementation, this would be a chart component */}
                    <div className="flex h-[250px] items-end gap-2">
                      {dashboardData.monthlyCollections.map((month) => (
                        <div key={month.month} className="relative flex h-full w-full flex-col justify-end">
                          <div
                            className="bg-primary w-full rounded-md"
                            style={{ height: `${(month.amount / 25000) * 100}%` }}
                          />
                          <span className="mt-2 text-center text-xs">{month.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Last 5 transactions in the group</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{transaction.memberName}</p>
                          <p className="text-sm text-muted-foreground">{transaction.type}</p>
                        </div>
                        <div className="ml-auto font-medium">₹{transaction.amount.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>View detailed group performance analytics</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <LineChart className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p>Detailed analytics will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>Generate and download reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-24 w-full flex flex-col items-center justify-center">
                    <span>Monthly Collection Report</span>
                    <span className="text-sm text-muted-foreground">Summary of all member contributions</span>
                  </Button>
                  <Button variant="outline" className="h-24 w-full flex flex-col items-center justify-center">
                    <span>Loan Status Report</span>
                    <span className="text-sm text-muted-foreground">Overview of all active loans</span>
                  </Button>
                  <Button variant="outline" className="h-24 w-full flex flex-col items-center justify-center">
                    <span>Member Balance Report</span>
                    <span className="text-sm text-muted-foreground">Individual balance statements</span>
                  </Button>
                  <Button variant="outline" className="h-24 w-full flex flex-col items-center justify-center">
                    <span>Annual Financial Statement</span>
                    <span className="text-sm text-muted-foreground">Complete financial overview</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
>>>>>>> 9dafe79 (ledger frontend)
    </div>
  )
}

