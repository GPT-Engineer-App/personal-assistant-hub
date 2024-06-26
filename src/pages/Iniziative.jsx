import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const Iniziative = () => {
  const [open, setOpen] = useState(false);
  

  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="In&Valid Logo" className="h-8 mr-2" />
          <h1 className="text-xl font-bold">In&Valid</h1>
        </div>
        <nav className="space-x-6">
          <Link to="/" className="text-white text-lg hover:text-gray-300">
            <Button variant="link">Homepage</Button>
          </Link>
          <Link to="/servizi" className="text-white text-lg hover:text-gray-300">
            <Button variant="link">Servizi per te</Button>
          </Link>
          <Link to="/iniziative" className="text-white text-lg hover:text-gray-300">
            <Button variant="link">Iniziative</Button>
          </Link>
          <Link to="/profilo" className="text-white text-lg hover:text-gray-300">
            <Button variant="link">Area Personale</Button>
          </Link>
          <Link to="/assistente" className="text-white text-lg hover:text-gray-300">
            <Button variant="link">Assistente Personale</Button>
          </Link>
        </nav>
      </header>
      <div className="pt-16">
        <h1 className="text-2xl mb-4">Iniziative per te</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Iniziative</h2>
            <p>Explore various initiatives and programs designed to support and empower individuals with disabilities.</p>
          </div>
          <div className="mt-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="primary">Create New Initiative</Button>
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto p-4">
                <DialogHeader>
                  <DialogTitle>Create New Initiative</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 p-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title of the Initiative</Label>
                    <Input id="title" placeholder="Enter the title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea id="description" placeholder="Enter the detailed description" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transportation">Transportation</SelectItem>
                        <SelectItem value="tourism">Tourism</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="employment">Employment</SelectItem>
                        <SelectItem value="social-services">Social Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="text" placeholder="YYYY-MM-DD" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" type="text" placeholder="YYYY-MM-DD" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter the location" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizer">Organizer</Label>
                    <Input id="organizer" placeholder="Enter the organizer's name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizer-contact">Organizer Contact Information</Label>
                    <Input id="organizer-contact" placeholder="Enter the contact information" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="benefits">Benefits Offered</Label>
                    <Textarea id="benefits" placeholder="Enter the benefits offered" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eligibility">Eligibility Requirements</Label>
                    <Textarea id="eligibility" placeholder="Enter the eligibility requirements" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="caregiver-discount">Caregiver Discount (if applicable)</Label>
                    <Input id="caregiver-discount" placeholder="Enter the caregiver discount" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supporting-docs">Supporting Documentation</Label>
                    <Input id="supporting-docs" type="file" />
                  </div>
                  <Button type="submit">Create the Initiative</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iniziative;