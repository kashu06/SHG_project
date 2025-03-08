"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, DownloadCloud, Calendar, Filter } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data for demonstration
const mockMemberReport = [
  {
    id: 1,
    name: "Priya Sharma",
    joiningDate: "2023-05-15",
    totalSavings: 12500,
    loanBalance: 8500,
    interestPaid: 500,
    meetingsAttended: 45,
    meetingsMissed: 3,
  },
  {
    id: 2,
    name: "Kavita Patel",
    joiningDate: "2023-06-10",
    totalSavings: 10000,
    loanBalance: 5000,
    interestPaid: 300,
    meetingsAttended: 42,
    meetingsMissed: 6,
  },
  {
    id: 3,
    name: "Anita Desai",
    joiningDate: "2023-04-20",
    totalSavings: 15000,
    loanBalance: 12000,
    interestPaid: 720,
    meetingsAttended: 48,
    meetingsMissed: 0,
  },
  {
    id: 4,
    name: "Sunita Verma",
    joiningDate: "2023-07-05",
    totalSavings: 8000,
    loanBalance: 0,
    interestPaid: 300,
    meetingsAttended: 36,
    meetingsMissed: 12,
  },
  {
    id: 5,
    name: "Rekha Gupta",
    joiningDate: "2023-03-25",
    totalSavings: 20000,
    loanBalance: 4000,
    interestPaid: 850,
    meetingsAttended: 50,
    meetingsMissed: 2,
  },
]

const mockFinancialSummary = {
  totalMembers: 5,
  totalSavings: 65500,
  totalLoansActive: 4,
  totalLoanAmount: 29500,
  totalInterestEarned: 2670,
  cashInHand: 38670,
  monthlyTransactions: [
    { month: "January", deposits: 5000, withdrawals: 2000, loanDisbursements: 10000, loanRepayments: 1500 },
    { month: "February", deposits: 5500, withdrawals: 1000, loanDisbursements: 5000, loanRepayments: 2000 },
    { month: "March", deposits: 6000, withdrawals: 500, loanDisbursements: 15000, loanRepayments: 2500 },
  ],
}

export default function ReportsPage() {
  const [reportType, setReportType] = useState("financial")
  const [period, setPeriod] = useState("all")
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const handleGenerateReport = () => {
    setIsGenerating(true)

    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false)
      toast({
        title: "Report Generated",
        description: "Your report has been generated successfully!",
      })
    }, 1500)
  }

  const handleDownloadReport = () => {
    toast({
      title: "Download Started",
      description: "Your report is being downloaded.",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={handleDownloadReport}>
              <DownloadCloud className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button onClick={handleGenerateReport} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                  Generating...
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Report
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Report Type</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="financial">Financial Summary</SelectItem>
                  <SelectItem value="members">Member Details</SelectItem>
                  <SelectItem value="loans">Loan Status</SelectItem>
                  <SelectItem value="meetings">Meeting Attendance</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Period</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Additional Filters</CardTitle>
              <Filter className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Select specific filters to customize your report content.</p>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Add Filters
              </Button>
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="financial" value={reportType} onValueChange={setReportType}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="meetings">Meetings</TabsTrigger>
          </TabsList>
          <TabsContent value="financial" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Financial Summary Report</CardTitle>
                <CardDescription>Overview of the group's financial status and transactions.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium text-muted-foreground">Total Savings</div>
                    <div className="text-2xl font-bold">₹{mockFinancialSummary.totalSavings.toLocaleString()}</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium text-muted-foreground">Total Loans</div>
                    <div className="text-2xl font-bold">₹{mockFinancialSummary.totalLoanAmount.toLocaleString()}</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium text-muted-foreground">Interest Earned</div>
                    <div className="text-2xl font-bold">
                      ₹{mockFinancialSummary.totalInterestEarned.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Monthly Transactions</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Month</TableHead>
                        <TableHead className="text-right">Deposits</TableHead>
                        <TableHead className="text-right">Withdrawals</TableHead>
                        <TableHead className="text-right">Loan Disbursements</TableHead>
                        <TableHead className="text-right">Loan Repayments</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockFinancialSummary.monthlyTransactions.map((transaction) => (
                        <TableRow key={transaction.month}>
                          <TableCell className="font-medium">{transaction.month}</TableCell>
                          <TableCell className="text-right">₹{transaction.deposits.toLocaleString()}</TableCell>
                          <TableCell className="text-right">₹{transaction.withdrawals.toLocaleString()}</TableCell>
                          <TableCell className="text-right">
                            ₹{transaction.loanDisbursements.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-right">₹{transaction.loanRepayments.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleDownloadReport}>
                  <DownloadCloud className="mr-2 h-4 w-4" />
                  Download Financial Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="members" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Member Details Report</CardTitle>
                <CardDescription>Comprehensive details about all members and their financial status.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Joining Date</TableHead>
                      <TableHead className="text-right">Savings</TableHead>
                      <TableHead className="text-right">Loan Balance</TableHead>
                      <TableHead className="text-right">Interest Paid</TableHead>
                      <TableHead className="text-center">Meetings Attended</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockMemberReport.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="font-medium">{member.name}</TableCell>
                        <TableCell>{new Date(member.joiningDate).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">₹{member.totalSavings.toLocaleString()}</TableCell>
                        <TableCell className="text-right">₹{member.loanBalance.toLocaleString()}</TableCell>
                        <TableCell className="text-right">₹{member.interestPaid.toLocaleString()}</TableCell>
                        <TableCell className="text-center">
                          {member.meetingsAttended}/{member.meetingsAttended + member.meetingsMissed}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleDownloadReport}>
                  <DownloadCloud className="mr-2 h-4 w-4" />
                  Download Member Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="loans" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Loan Status Report</CardTitle>
                <CardDescription>Detailed report of all active and completed loans.</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <FileText className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p>Loan status report will be generated here.</p>
                  <Button variant="outline" onClick={handleGenerateReport}>
                    Generate Loan Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="meetings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Meeting Attendance Report</CardTitle>
                <CardDescription>Analysis of meeting attendance and participation.</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <FileText className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p>Meeting attendance report will be generated here.</p>
                  <Button variant="outline" onClick={handleGenerateReport}>
                    Generate Attendance Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

