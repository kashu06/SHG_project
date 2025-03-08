"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, PlusCircle, Edit2, Trash2, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

// Mock data for demonstration
const mockMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    phone: "9876543210",
    joiningDate: "2023-05-15",
    totalSavings: 12500,
    loanBalance: 0,
  },
  {
    id: 2,
    name: "Kavita Patel",
    phone: "9876543211",
    joiningDate: "2023-06-10",
    totalSavings: 10000,
    loanBalance: 5000,
  },
  {
    id: 3,
    name: "Anita Desai",
    phone: "9876543212",
    joiningDate: "2023-04-20",
    totalSavings: 15000,
    loanBalance: 3000,
  },
  {
    id: 4,
    name: "Sunita Verma",
    phone: "9876543213",
    joiningDate: "2023-07-05",
    totalSavings: 8000,
    loanBalance: 0,
  },
  {
    id: 5,
    name: "Rekha Gupta",
    phone: "9876543214",
    joiningDate: "2023-03-25",
    totalSavings: 20000,
    loanBalance: 10000,
  },
]

export default function MembersPage() {
  const [members, setMembers] = useState(mockMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const [newMember, setNewMember] = useState({
    name: "",
    phone: "",
    address: "",
    joiningDate: new Date().toISOString().split("T")[0],
  })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const filteredMembers = members.filter(
    (member) => member.name.toLowerCase().includes(searchQuery.toLowerCase()) || member.phone.includes(searchQuery),
  )

  // In a real implementation, this would fetch from the Spring Boot backend
  useEffect(() => {
    // This would be replaced with an actual API call
    const fetchMembers = async () => {
      setLoading(true)
      try {
        // const response = await fetch('http://localhost:8080/api/members');
        // const data = await response.json();
        // setMembers(data);

        // Using mock data for now
        setTimeout(() => {
          setMembers(mockMembers)
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error("Error fetching members:", error)
        toast({
          title: "Error",
          description: "Failed to load members. Please try again.",
          variant: "destructive",
        })
        setLoading(false)
      }
    }

    fetchMembers()
  }, [toast])

  const handleAddMember = async (e) => {
    e.preventDefault()
    try {
      // In a real implementation, this would call the Spring Boot API
      // const response = await fetch('http://localhost:8080/api/members', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(newMember),
      // });
      // const data = await response.json();

      // Mock response
      const newMemberId = Math.max(...members.map((m) => m.id)) + 1
      const addedMember = {
        ...newMember,
        id: newMemberId,
        totalSavings: 0,
        loanBalance: 0,
      }

      setMembers([...members, addedMember])
      setIsAddDialogOpen(false)
      setNewMember({
        name: "",
        phone: "",
        address: "",
        joiningDate: new Date().toISOString().split("T")[0],
      })

      toast({
        title: "Success",
        description: "Member added successfully!",
      })
    } catch (error) {
      console.error("Error adding member:", error)
      toast({
        title: "Error",
        description: "Failed to add member. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteMember = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        // In a real implementation, this would call the Spring Boot API
        // await fetch(`http://localhost:8080/api/members/${id}`, {
        //   method: 'DELETE',
        // });

        // Mock delete
        setMembers(members.filter((member) => member.id !== id))

        toast({
          title: "Success",
          description: "Member deleted successfully!",
        })
      } catch (error) {
        console.error("Error deleting member:", error)
        toast({
          title: "Error",
          description: "Failed to delete member. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Members</h2>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Member</DialogTitle>
                <DialogDescription>Enter the details of the new member. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddMember}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newMember.name}
                      onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone" className="text-right">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      value={newMember.phone}
                      onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="address" className="text-right">
                      Address
                    </Label>
                    <Input
                      id="address"
                      value={newMember.address}
                      onChange={(e) => setNewMember({ ...newMember, address: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="joiningDate" className="text-right">
                      Joining Date
                    </Label>
                    <Input
                      id="joiningDate"
                      type="date"
                      value={newMember.joiningDate}
                      onChange={(e) => setNewMember({ ...newMember, joiningDate: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Member</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Manage Members</CardTitle>
            <CardDescription>View and manage all members of your Self Help Group.</CardDescription>
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search members..."
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
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Joining Date</TableHead>
                    <TableHead className="text-right">Total Savings</TableHead>
                    <TableHead className="text-right">Loan Balance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-4">
                        No members found. Add a new member to get started.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="font-medium">{member.name}</TableCell>
                        <TableCell>{member.phone}</TableCell>
                        <TableCell>{new Date(member.joiningDate).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">₹{member.totalSavings.toLocaleString()}</TableCell>
                        <TableCell className="text-right">₹{member.loanBalance.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Link href={`/members/${member.id}`}>
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Button variant="ghost" size="icon">
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteMember(member.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
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

