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
        <h1 className="text-2xl mb-4">Iniziative per te</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Iniziative</h2>
            <p>Esplora varie iniziative e programmi progettati per supportare e potenziare le persone con disabilità.</p>
          </div>
          <div className="mt-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="primary">Crea Nuova Iniziativa</Button>
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto p-4">
                <DialogHeader>
                  <DialogTitle>Crea Nuova Iniziativa</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 p-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Titolo dell'Iniziativa</Label>
                    <Input id="title" placeholder="Inserisci il titolo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Descrizione Dettagliata</Label>
                    <Textarea id="description" placeholder="Inserisci la descrizione dettagliata" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transportation">Trasporti</SelectItem>
                        <SelectItem value="tourism">Turismo</SelectItem>
                        <SelectItem value="health">Salute</SelectItem>
                        <SelectItem value="education">Istruzione</SelectItem>
                        <SelectItem value="employment">Occupazione</SelectItem>
                        <SelectItem value="social-services">Servizi Sociali</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Data di Inizio</Label>
                    <Input id="start-date" type="text" placeholder="Inserisci la data di inizio" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">Data di Fine</Label>
                    <Input id="end-date" type="text" placeholder="Inserisci la data di fine" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Luogo</Label>
                    <Input id="location" placeholder="Inserisci il luogo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizer">Organizzatore</Label>
                    <Input id="organizer" placeholder="Inserisci il nome dell'organizzatore" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizer-contact">Informazioni di Contatto dell'Organizzatore</Label>
                    <Input id="organizer-contact" placeholder="Inserisci le informazioni di contatto" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="benefits">Benefici Offerti</Label>
                    <Textarea id="benefits" placeholder="Inserisci i benefici offerti" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eligibility">Requisiti di Idoneità</Label>
                    <Textarea id="eligibility" placeholder="Inserisci i requisiti di idoneità" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="caregiver-discount">Sconto per Assistente (se applicabile)</Label>
                    <Input id="caregiver-discount" placeholder="Inserisci lo sconto per assistente" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supporting-docs">Documentazione di Supporto</Label>
                    <Input id="supporting-docs" type="file" />
                  </div>
                  <Button type="submit">Crea l'Iniziativa</Button>
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