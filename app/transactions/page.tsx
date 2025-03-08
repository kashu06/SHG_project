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
import { Search, PlusCircle, ArrowDownIcon, ArrowUpIcon, RefreshCw, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data for demonstration
const mockTransactions = [
  {
    id: 1,
    memberId: 1,
    memberName: "Priya Sharma",
    type: "DEPOSIT",
    amount: 1000,
    date: "2025-03-08",
    description: "Monthly savings",
  },
  {
    id: 2,
    memberId: 2,
    memberName: "Kavita Patel",
    type: "WITHDRAWAL",
    amount: 500,
    date: "2025-03-07",
    description: "Emergency withdrawal",
  },
  {
    id: 3,
    memberId: 3,
    memberName: "Anita Desai",
    type: "LOAN_REPAYMENT",
    amount: 2000,
    date: "2025-03-06",
    description: "Loan installment",
  },
  {
    id: 4,
    memberId: 4,
    memberName: "Sunita Verma",
    type: "DEPOSIT",
    amount: 1500,
    date: "2025-03-05",
    description: "Monthly savings",
  },
  {
    id: 5,
    memberId: 5,
    memberName: "Rekha Gupta",
    type: "LOAN_DISBURSEMENT",
    amount: 5000,
    date: "2025-03-04",
    description: "New loan",
  },
]

const mockMembers = [
  { id: 1, name: "Priya Sharma" },
  { id: 2, name: "Kavita Patel" },
  { id: 3, name: "Anita Desai" },
  { id: 4, name: "Sunita Verma" },
  { id: 5, name: "Rekha Gupta" },
]

const transactionTypes = [
  { value: "DEPOSIT", label: "Deposit" },
  { value: "WITHDRAWAL", label: "Withdrawal" },
  { value: "LOAN_DISBURSEMENT", label: "Loan Disbursement" },
  { value: "LOAN_REPAYMENT", label: "Loan Repayment" },
  { value: "FINE", label: "Fine" },
  { value: "INTEREST", label: "Interest" },
]

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(mockTransactions)
  const [members, setMembers] = useState(mockMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newTransaction, setNewTransaction] = useState({
    memberId: "",
    type: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // In a real implementation, this would fetch from the Spring Boot backend
  useEffect(() => {
    // This would be replaced with actual API calls
    const fetchData = async () => {
      setLoading(true)
      try {
        // const transactionsResponse = await fetch('http://localhost:8080/api/transactions');
        // const transactionsData = await transactionsResponse.json();
        // setTransactions(transactionsData);

        // const membersResponse = await fetch('http://localhost:8080/api/members');
        // const membersData = await membersResponse.json();
        // setMembers(membersData);

        // Using mock data for now
        setTimeout(() => {
          setTransactions(mockTransactions)
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

  const handleAddTransaction = async (e) => {
    e.preventDefault()
    try {
      // Validate form
      if (!newTransaction.memberId || !newTransaction.type || !newTransaction.amount) {
        toast({
          title: "Invalid Input",
          description: "Please fill all required fields.",
          variant: "destructive",
        })
        return
      }

      // In a real implementation, this would call the Spring Boot API
      // const response = await fetch('http://localhost:8080/api/transactions', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(newTransaction),
      // });
      // const data = await response.json();

      // Mock response
      const newTransactionId = Math.max(...transactions.map((t) => t.id)) + 1
      const member = members.find((m) => m.id.toString() === newTransaction.memberId.toString())
      const addedTransaction = {
        ...newTransaction,
        id: newTransactionId,
        memberName: member?.name || "Unknown Member",
        amount: Number.parseFloat(newTransaction.amount),
      }

      setTransactions([addedTransaction, ...transactions])
      setIsAddDialogOpen(false)
      setNewTransaction({
        memberId: "",
        type: "",
        amount: "",
        date: new Date().toISOString().split("T")[0],
        description: "",
      })

      toast({
        title: "Success",
        description: "Transaction added successfully!",
      })
    } catch (error) {
      console.error("Error adding transaction:", error)
      toast({
        title: "Error",
        description: "Failed to add transaction. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getTransactionTypeIcon = (type) => {
    switch (type) {
      case "DEPOSIT":
        return <ArrowDownIcon className="h-4 w-4 text-green-500" />
      case "WITHDRAWAL":
        return <ArrowUpIcon className="h-4 w-4 text-red-500" />
      case "LOAN_DISBURSEMENT":
        return <DollarSign className="h-4 w-4 text-blue-500" />
      case "LOAN_REPAYMENT":
        return <RefreshCw className="h-4 w-4 text-yellow-500" />
      default:
        return null
    }
  }

  const getTransactionTypeLabel = (type) => {
    const found = transactionTypes.find((t) => t.value === type)
    return found ? found.label : type
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Transactions</h2>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Transaction</DialogTitle>
                <DialogDescription>Enter the transaction details. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddTransaction}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="member" className="text-right">
                      Member
                    </Label>
                    <Select
                      onValueChange={(value) => setNewTransaction({ ...newTransaction, memberId: value })}
                      value={newTransaction.memberId}
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
                    <Label htmlFor="type" className="text-right">
                      Type
                    </Label>
                    <Select
                      onValueChange={(value) => setNewTransaction({ ...newTransaction, type: value })}
                      value={newTransaction.type}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select transaction type" />
                      </SelectTrigger>
                      <SelectContent>
                        {transactionTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="amount" className="text-right">
                      Amount (₹)
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      value={newTransaction.amount}
                      onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={newTransaction.date}
                      onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <Input
                      id="description"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Transaction</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>View all financial transactions of your Self Help Group.</CardDescription>
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Member</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-4">
                        No transactions found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                        <TableCell>{transaction.memberName}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getTransactionTypeIcon(transaction.type)}
                            {getTransactionTypeLabel(transaction.type)}
                          </div>
                        </TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell className="text-right font-medium">₹{transaction.amount.toLocaleString()}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

