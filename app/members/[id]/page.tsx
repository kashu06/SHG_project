"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, User, CreditCard, BadgeDollarSign, CalendarClock, Edit2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

// Mock data for demonstration
const mockMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    phone: "9876543210",
    address: "123 Gandhi Road, Mumbai",
    joiningDate: "2023-05-15",
    totalSavings: 12500,
    loanBalance: 8500,
  },
  {
    id: 2,
    name: "Kavita Patel",
    phone: "9876543211",
    address: "456 Nehru Street, Delhi",
    joiningDate: "2023-06-10",
    totalSavings: 10000,
    loanBalance: 5000,
  },
  {
    id: 3,
    name: "Anita Desai",
    phone: "9876543212",
    address: "789 Tagore Lane, Kolkata",
    joiningDate: "2023-04-20",
    totalSavings: 15000,
    loanBalance: 12000,
  },
  {
    id: 4,
    name: "Sunita Verma",
    phone: "9876543213",
    address: "101 Patel Avenue, Ahmedabad",
    joiningDate: "2023-07-05",
    totalSavings: 8000,
    loanBalance: 0,
  },
  {
    id: 5,
    name: "Rekha Gupta",
    phone: "9876543214",
    address: "202 Bose Road, Chennai",
    joiningDate: "2023-03-25",
    totalSavings: 20000,
    loanBalance: 4000,
  },
]

const mockTransactions = [
  {
    id: 101,
    memberId: 1,
    type: "DEPOSIT",
    amount: 1000,
    date: "2025-03-08",
    description: "Monthly savings",
  },
  {
    id: 102,
    memberId: 1,
    type: "DEPOSIT",
    amount: 1000,
    date: "2025-02-08",
    description: "Monthly savings",
  },
  {
    id: 103,
    memberId: 1,
    type: "LOAN_DISBURSEMENT",
    amount: 10000,
    date: "2024-12-15",
    description: "Business loan",
  },
  {
    id: 104,
    memberId: 1,
    type: "LOAN_REPAYMENT",
    amount: 1500,
    date: "2025-01-15",
    description: "Loan installment",
  },
  {
    id: 105,
    memberId: 1,
    type: "DEPOSIT",
    amount: 1000,
    date: "2025-01-08",
    description: "Monthly savings",
  },
]

const mockLoans = [
  {
    id: 1,
    memberId: 1,
    principal: 10000,
    interest: 10,
    duration: 12,
    startDate: "2024-12-15",
    endDate: "2025-12-15",
    status: "ACTIVE",
    purpose: "Business expansion",
    balance: 8500,
    paidAmount: 1500,
    nextDueDate: "2025-03-15",
  },
]

export default function MemberDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [member, setMember] = useState(null)
  const [transactions, setTransactions] = useState([])
  const [loans, setLoans] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMemberDetails = async () => {
      setLoading(true)
      try {
        // In a real implementation, these would be API calls to the Spring Boot backend
        // const memberResponse = await fetch(`http://localhost:8080/api/members/${params.id}`);
        // const memberData = await memberResponse.json();
        // setMember(memberData);

        // const transactionsResponse = await fetch(`http://localhost:8080/api/transactions?memberId=${params.id}`);
        // const transactionsData = await transactionsResponse.json();
        // setTransactions(transactionsData);

        // const loansResponse = await fetch(`http://localhost:8080/api/loans?memberId=${params.id}`);
        // const loansData = await loansResponse.json();
        // setLoans(loansData);

        // Using mock data for demonstration
        setTimeout(() => {
          const foundMember = mockMembers.find((m) => m.id.toString() === params.id)
          if (foundMember) {
            setMember(foundMember)
            setTransactions(mockTransactions.filter((t) => t.memberId === foundMember.id))
            setLoans(mockLoans.filter((l) => l.memberId === foundMember.id))
          } else {
            toast({
              title: "Error",
              description: "Member not found",
              variant: "destructive",
            })
            router.push("/members")
          }
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error("Error fetching member details:", error)
        toast({
          title: "Error",
          description: "Failed to load member details. Please try again.",
          variant: "destructive",
        })
        setLoading(false)
        router.push("/members")
      }
    }

    if (params.id) {
      fetchMemberDetails()
    }
  }, [params.id, router, toast])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!member) {
    return null
  }

  const getTransactionTypeLabel = (type) => {
    switch (type) {
      case "DEPOSIT":
        return "Deposit"
      case "WITHDRAWAL":
        return "Withdrawal"
      case "LOAN_DISBURSEMENT":
        return "Loan Disbursement"
      case "LOAN_REPAYMENT":
        return "Loan Repayment"
      case "FINE":
        return "Fine"
      case "INTEREST":
        return "Interest"
      default:
        return type
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center gap-4">
          <Link href="/members">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Member Details</h2>
          <Button variant="outline" className="ml-auto" size="sm">
            <Edit2 className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Personal Information</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <p className="text-sm font-medium">Name</p>
                <p className="text-lg">{member.name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Phone</p>
                <p className="text-lg">{member.phone}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Address</p>
                <p className="text-lg">{member.address}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Joining Date</p>
                <p className="text-lg">{new Date(member.joiningDate).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Savings</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{member.totalSavings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total savings accumulated</p>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  Add New Savings
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loan Balance</CardTitle>
              <BadgeDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{member.loanBalance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Current outstanding loan amount</p>
              <div className="mt-4">
                <Link href="/loans">
                  <Button variant="outline" className="w-full">
                    Manage Loans
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="transactions" className="space-y-4">
          <TabsList>
            <TabsTrigger value="transactions">Transaction History</TabsTrigger>
            <TabsTrigger value="loans">Loan Details</TabsTrigger>
            <TabsTrigger value="attendance">Meeting Attendance</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>All financial transactions for {member.name}</CardDescription>
              </CardHeader>
              <CardContent>
                {transactions.length === 0 ? (
                  <div className="py-6 text-center">
                    <p className="text-muted-foreground">No transactions found for this member.</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                          <TableCell>{getTransactionTypeLabel(transaction.type)}</TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell className="text-right">₹{transaction.amount.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="loans" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
                <CardDescription>Active and past loans for {member.name}</CardDescription>
              </CardHeader>
              <CardContent>
                {loans.length === 0 ? (
                  <div className="py-6 text-center">
                    <p className="text-muted-foreground">No loans found for this member.</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Start Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Purpose</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Balance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loans.map((loan) => (
                        <TableRow key={loan.id}>
                          <TableCell>{new Date(loan.startDate).toLocaleDateString()}</TableCell>
                          <TableCell>₹{loan.principal.toLocaleString()}</TableCell>
                          <TableCell>{loan.duration} months</TableCell>
                          <TableCell>{loan.purpose}</TableCell>
                          <TableCell>{loan.status}</TableCell>
                          <TableCell className="text-right">₹{loan.balance.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Meeting Attendance</CardTitle>
                <CardDescription>Record of meeting attendance for {member.name}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center py-6">
                <div className="text-center space-y-2">
                  <CalendarClock className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p>Attendance records will be displayed here.</p>
                  <Button variant="outline">View Attendance History</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

