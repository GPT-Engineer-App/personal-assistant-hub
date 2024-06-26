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
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
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
        <h1 className="text-2xl mb-4">Servizi per te</h1>
        <Input placeholder="Search services..." className="mb-4" />
        <Accordion type="single" collapsible>
          <AccordionItem value="public-initiatives">
            <AccordionTrigger>
              <FaRegBuilding className="mr-2" /> Public Initiatives
            </AccordionTrigger>
            <AccordionContent>
              <p>Access to information and services related to public benefits, including disability allowances, bonuses, and other government-provided support.</p>
              <Button variant="outline" className="mt-2">Learn More</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="private-initiatives">
            <AccordionTrigger>
              <FaRegHandshake className="mr-2" /> Private Initiatives
            </AccordionTrigger>
            <AccordionContent>
              <p>Information and access to private sector initiatives such as cultural events, sports activities, hospitality services, and transportation options that cater to people with disabilities.</p>
              <Button variant="outline" className="mt-2">Learn More</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="counseling-support">
            <AccordionTrigger>
              <FaRegHeart className="mr-2" /> Counseling and Psychological Support
            </AccordionTrigger>
            <AccordionContent>
              <p>Access to counseling services and psychological support to help individuals cope with their disabilities and improve their mental well-being.</p>
              <Button variant="outline" className="mt-2">Learn More</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="training-education">
            <AccordionTrigger>
              <FaRegLightbulb className="mr-2" /> Training and Education
            </AccordionTrigger>
            <AccordionContent>
              <p>Resources and opportunities for training and educational programs to enhance skills and knowledge, tailored specifically for people with disabilities.</p>
              <Button variant="outline" className="mt-2">Learn More</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="employment-access">
            <AccordionTrigger>
              <FaBriefcase className="mr-2" /> Employment Access
            </AccordionTrigger>
            <AccordionContent>
              <p>Assistance with finding and applying for jobs, including job listings, resume building, and interview preparation, aimed at improving employment opportunities for people with disabilities.</p>
              <Button variant="outline" className="mt-2">Learn More</Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator className="my-6" />
        <h2 className="text-xl mb-4">User Testimonials</h2>
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