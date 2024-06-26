import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaRegBuilding, FaRegHandshake, FaRegHeart, FaRegLightbulb, FaBriefcase } from "react-icons/fa";

const testimonials = [
  {
    name: "Mario Rossi",
    role: "User",
    testimonial: "Grazie a questo portale ho trovato un lavoro che mi soddisfa e mi permette di vivere serenamente.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Luca Bianchi",
    role: "User",
    testimonial: "Le iniziative private mi hanno permesso di partecipare a eventi culturali che non avrei mai scoperto altrimenti.",
    image: "https://via.placeholder.com/150"
  }
];

const Servizi = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-green-600 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
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
        <h1 className="text-2xl mb-4">Servizi per te</h1>
        <Input placeholder="Cerca servizi..." className="mb-4" />
        <Accordion type="single" collapsible>
          <AccordionItem value="public-initiatives">
            <AccordionTrigger>
              <FaRegBuilding className="mr-2" /> Iniziative Pubbliche
            </AccordionTrigger>
            <AccordionContent>
              <p>Accesso a informazioni e servizi relativi ai benefici pubblici, inclusi assegni di disabilità, bonus e altri supporti forniti dal governo.</p>
              <Button variant="outline" className="mt-2">Scopri di Più</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="private-initiatives">
            <AccordionTrigger>
              <FaRegHandshake className="mr-2" /> Iniziative Private
            </AccordionTrigger>
            <AccordionContent>
              <p>Informazioni e accesso a iniziative del settore privato come eventi culturali, attività sportive, servizi di ospitalità e opzioni di trasporto per persone con disabilità.</p>
              <Button variant="outline" className="mt-2">Scopri di Più</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="counseling-support">
            <AccordionTrigger>
              <FaRegHeart className="mr-2" /> Consulenza e Supporto Psicologico
            </AccordionTrigger>
            <AccordionContent>
              <p>Accesso a servizi di consulenza e supporto psicologico per aiutare le persone a gestire le loro disabilità e migliorare il loro benessere mentale.</p>
              <Button variant="outline" className="mt-2">Scopri di Più</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="training-education">
            <AccordionTrigger>
              <FaRegLightbulb className="mr-2" /> Formazione e Istruzione
            </AccordionTrigger>
            <AccordionContent>
              <p>Risorse e opportunità per programmi di formazione e istruzione per migliorare le competenze e le conoscenze, specificamente per le persone con disabilità.</p>
              <Button variant="outline" className="mt-2">Scopri di Più</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="employment-access">
            <AccordionTrigger>
              <FaBriefcase className="mr-2" /> Accesso all'Occupazione
            </AccordionTrigger>
            <AccordionContent>
              <p>Assistenza nella ricerca e candidatura per lavori, inclusi elenchi di lavoro, creazione di curriculum e preparazione per colloqui, mirata a migliorare le opportunità di lavoro per le persone con disabilità.</p>
              <Button variant="outline" className="mt-2">Scopri di Più</Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator className="my-6" />
        <h2 className="text-xl mb-4">Testimonianze degli Utenti</h2>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <Badge>{testimonial.role}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{testimonial.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servizi;