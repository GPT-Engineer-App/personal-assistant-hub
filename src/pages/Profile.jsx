import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold">In&Valid</h1>
        </div>
        <nav className="space-x-6">
          <Link to="/" className="text-white text-lg hover:text-gray-300">
            <Button variant="link">Pagina Iniziale</Button>
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
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/path/to/user-avatar.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Profilo Utente</CardTitle>
                <Badge>Membro</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="firstName">Nome</Label>
                <Input id="firstName" {...register("firstName")} />
              </div>
              <div>
                <Label htmlFor="lastName">Cognome</Label>
                <Input id="lastName" {...register("lastName")} />
              </div>
              <div>
                <Label htmlFor="email">Indirizzo Email</Label>
                <Input id="email" type="email" {...register("email")} />
              </div>
              <div>
                <Label htmlFor="phone">Numero di Telefono</Label>
                <Input id="phone" type="tel" {...register("phone")} />
              </div>
              <div>
                <Label htmlFor="role">Ruolo</Label>
                <Select id="role" {...register("role")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona ruolo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="invalid">In&Valid</SelectItem>
                    <SelectItem value="caregiver">Assistente</SelectItem>
                    <SelectItem value="organizer">Organizzatore</SelectItem>
                    <SelectItem value="ambassador">Ambasciatore</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="disabilityDocumentation">Documentazione di Disabilità (se applicabile)</Label>
                <Input id="disabilityDocumentation" type="file" {...register("disabilityDocumentation")} />
              </div>
              <div>
                <Label htmlFor="interests">Interessi</Label>
                <Textarea id="interests" {...register("interests")} />
              </div>
              <div>
                <Label htmlFor="medicalDocumentation">Documentazione Medica Caricata</Label>
                <Input id="medicalDocumentation" type="file" {...register("medicalDocumentation")} />
              </div>
              <Button type="submit">Salva Profilo</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;