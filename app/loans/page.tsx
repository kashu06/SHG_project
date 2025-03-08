"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, PlusCircle, BadgeDollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"

// Mock data for demonstration
const mockLoans = [
  {
    id: 1,
    memberId: 1,
    memberName: "Priya Sharma",
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
  {
    id: 2,
    memberId: 2,
    memberName: "Kavita Patel",
    principal: 5000,
    interest: 10,
    duration: 6,
    startDate: "2025-01-10",
    endDate: "2025-07-10",
    status: "ACTIVE",
    purpose: "Education",
    balance: 5000,
    paidAmount: 0,
    nextDueDate: "2025-03-10",
  },
  {
    id: 3,
    memberId: 3,
    memberName: "Anita Desai",
    principal: 15000,
    interest: 12,
    duration: 24,
    startDate: "2024-10-20",
    endDate: "2026-10-20",
    status: "ACTIVE",
    purpose: "Home repair",
    balance: 12000,
    paidAmount: 3000,
    nextDueDate: "2025-03-20",
  },
  {
    id: 4,
    memberId: 5,
    memberName: "Rekha Gupta",
    principal: 8000,
    interest: 10,
    duration: 12,
    startDate: "2024-08-05",
    endDate: "2025-08-05",
    status: "ACTIVE",
    purpose: "Medical emergency",
    balance: 4000,
    paidAmount: 4000,
    nextDueDate: "2025-03-05",
  },
  {
    id: 5,
    memberId: 4,
    memberName: "Sunita Verma",
    principal: 12000,
    interest: 10,
    duration: 18,
    startDate: "2024-06-25",
    endDate: "2025-12-25",
    status: "COMPLETED",
    purpose: "Business needs",
    balance: 0,
    paidAmount: 12000,
    nextDueDate: null,
  },
]

const mockMembers = [
  { id: 1, name: "Priya Sharma" },
  { id: 2, name: "Kavita Patel" },
  { id: 3, name: "Anita Desai" },
  { id: 4, name: "Sunita Verma" },
  { id: 5, name: "Rekha Gupta" },
]

export default function LoansPage() {
  const [loans, setLoans] = useState(mockLoans)
  const [members, setMembers] = useState(mockMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("active")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newLoan, setNewLoan] = useState({
    memberId: "",
    principal: "",
    interest: "10",
    duration: "12",
    startDate: new Date().toISOString().split("T")[0],
    purpose: "",
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const filteredLoans = loans.filter((loan) => {
    const matchesSearch =
      loan.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.purpose.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTab =
      (activeTab === "active" && loan.status === "ACTIVE") || (activeTab === "completed" && loan.status === "COMPLETED")

    return matchesSearch && matchesTab
  })

  // In a real implementation, this would fetch from the Spring Boot backend
  useEffect(() => {
    // This would be replaced with actual API calls
    const fetchData = async () => {
      setLoading(true)
      try {
        // const loansResponse = await fetch('http://localhost:8080/api/loans');
        // const loansData = await loansResponse.json();
        // setLoans(loansData);

        // const membersResponse = await fetch('http://localhost:8080/api/members');
        // const membersData = await membersResponse.json();
        // setMembers(membersData);

        // Using mock data for now
        setTimeout(() => {
          setLoans(mockLoans)
          setMembers(mockMembers)
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error("Error fetching data:", error)
        toast({
          title: "Error",
          description: "Failed to load data. Please try again.",
          variant: "destructive",
        })
        setLoading(false)
      }
    }

    fetchData()
  }, [toast])

  const handleAddLoan = async (e) => {
    e.preventDefault()
    try {
      // Validate form
      if (!newLoan.memberId || !newLoan.principal || !newLoan.interest || !newLoan.duration) {
        toast({
          title: "Invalid Input",
          description: "Please fill all required fields.",
          variant: "destructive",
        })
        return
      }

      // Calculate end date
      const startDate = new Date(newLoan.startDate)
      const endDate = new Date(startDate)
      endDate.setMonth(endDate.getMonth() + Number.parseInt(newLoan.duration))

      // Next due date (1 month from start)
      const nextDueDate = new Date(startDate)
      nextDueDate.setMonth(nextDueDate.getMonth() + 1)

      // In a real implementation, this would call the Spring Boot API
      // const response = await fetch('http://localhost:8080/api/loans', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(newLoan),
      // });
      // const data = await response.json();

      // Mock response
      const newLoanId = Math.max(...loans.map((l) => l.id)) + 1
      const member = members.find((m) => m.id.toString() === newLoan.memberId.toString())
      const addedLoan = {
        ...newLoan,
        id: newLoanId,
        memberName: member?.name || "Unknown Member",
        principal: Number.parseFloat(newLoan.principal),
        interest: Number.parseFloat(newLoan.interest),
        duration: Number.parseInt(newLoan.duration),
        status: "ACTIVE",
        balance: Number.parseFloat(newLoan.principal),
        paidAmount: 0,
        endDate: endDate.toISOString().split("T")[0],
        nextDueDate: nextDueDate.toISOString().split("T")[0],
      }

      setLoans([addedLoan, ...loans])
      setIsAddDialogOpen(false)
      setNewLoan({
        memberId: "",
        principal: "",
        interest: "10",
        duration: "12",
        startDate: new Date().toISOString().split("T")[0],
        purpose: "",
      })

      toast({
        title: "Success",
        description: "Loan added successfully!",
      })
    } catch (error) {
      console.error("Error adding loan:", error)
      toast({
        title: "Error",
        description: "Failed to add loan. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleRepayment = (loanId) => {
    // In a real implementation, this would open a repayment dialog
    toast({
      title: "Repayment",
      description: "Repayment functionality would be implemented here",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Loans</h2>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Loan
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create New Loan</DialogTitle>
                <DialogDescription>Enter the loan details. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddLoan}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="member" className="text-right">
                      Member
                    </Label>
                    <Select
                      onValueChange={(value) => setNewLoan({ ...newLoan, memberId: value })}
                      value={newLoan.memberId}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select a member" />
                      </SelectTrigger>
                      <SelectContent>
                        {members.map((member) => (
                          <SelectItem key={member.id} value={member.id.toString()}>
                            {member.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="principal" className="text-right">
                      Principal (₹)
                    </Label>
                    <Input
                      id="principal"
                      type="number"
                      value={newLoan.principal}
                      onChange={(e) => setNewLoan({ ...newLoan, principal: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="interest" className="text-right">
                      Interest (%)
                    </Label>
                    <Input
                      id="interest"
                      type="number"
                      value={newLoan.interest}
                      onChange={(e) => setNewLoan({ ...newLoan, interest: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="duration" className="text-right">
                      Duration (months)
                    </Label>
                    <Input
                      id="duration"
                      type="number"
                      value={newLoan.duration}
                      onChange={(e) => setNewLoan({ ...newLoan, duration: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="startDate" className="text-right">
                      Start Date
                    </Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={newLoan.startDate}
                      onChange={(e) => setNewLoan({ ...newLoan, startDate: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="purpose" className="text-right">
                      Purpose
                    </Label>
                    <Input
                      id="purpose"
                      value={newLoan.purpose}
                      onChange={(e) => setNewLoan({ ...newLoan, purpose: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Create Loan</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Loan Management</CardTitle>
            <CardDescription>Create and manage loans for your Self Help Group members.</CardDescription>
            <div className="flex items-center space-x-2 pt-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search loans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="space-y-4" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="active">Active Loans</TabsTrigger>
                <TabsTrigger value="completed">Completed Loans</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="space-y-4">
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Member</TableHead>
                        <TableHead>Purpose</TableHead>
                        <TableHead>Principal</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Next Due Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLoans.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-4">
                            No active loans found.
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredLoans.map((loan) => (
                          <TableRow key={loan.id}>
                            <TableCell className="font-medium">{loan.memberName}</TableCell>
                            <TableCell>{loan.purpose}</TableCell>
                            <TableCell>₹{loan.principal.toLocaleString()}</TableCell>
                            <TableCell>₹{loan.balance.toLocaleString()}</TableCell>
                            <TableCell>
                              {loan.nextDueDate ? new Date(loan.nextDueDate).toLocaleDateString() : "N/A"}
                            </TableCell>
                            <TableCell>
                              <Button variant="outline" size="sm" onClick={() => handleRepayment(loan.id)}>
                                <BadgeDollarSign className="mr-2 h-4 w-4" />
                                Make Payment
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                )}
              </TabsContent>
              <TabsContent value="completed" className="space-y-4">
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Member</TableHead>
                        <TableHead>Purpose</TableHead>
                        <TableHead>Principal</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>End Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLoans.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-4">
                            No completed loans found.
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredLoans.map((loan) => (
                          <TableRow key={loan.id}>
                            <TableCell className="font-medium">{loan.memberName}</TableCell>
                            <TableCell>{loan.purpose}</TableCell>
                            <TableCell>₹{loan.principal.toLocaleString()}</TableCell>
                            <TableCell>{new Date(loan.startDate).toLocaleDateString()}</TableCell>
                            <TableCell>{new Date(loan.endDate).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {loan.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

