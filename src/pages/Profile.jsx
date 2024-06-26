import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Profile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">User Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" {...register("firstName")} />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" {...register("lastName")} />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...register("email")} />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" {...register("phone")} />
        </div>
        <div>
          <Label htmlFor="role">Role</Label>
          <Select id="role" {...register("role")}>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="invalid">In&Valid</SelectItem>
              <SelectItem value="caregiver">Caregiver</SelectItem>
              <SelectItem value="organizer">Organizer</SelectItem>
              <SelectItem value="ambassador">Ambassador</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="disabilityDocumentation">Disability Documentation (if applicable)</Label>
          <Input id="disabilityDocumentation" type="file" {...register("disabilityDocumentation")} />
        </div>
        <div>
          <Label htmlFor="interests">Interests</Label>
          <Textarea id="interests" {...register("interests")} />
        </div>
        <div>
          <Label htmlFor="medicalDocumentation">Uploaded Medical Documentation</Label>
          <Input id="medicalDocumentation" type="file" {...register("medicalDocumentation")} />
        </div>
        <Button type="submit">Save Profile</Button>
      </form>
    </div>
  );
};

export default Profile;