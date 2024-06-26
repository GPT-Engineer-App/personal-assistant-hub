import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Iniziative = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl">My Web App</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-white">
            <Button variant="link">Homepage</Button>
          </Link>
          <Link to="/servizi" className="text-white">
            <Button variant="link">Servizi per te</Button>
          </Link>
          <Link to="/iniziative" className="text-white">
            <Button variant="link">Iniziative</Button>
          </Link>
          <Link to="/profilo" className="text-white">
            <Button variant="link">Area Personale</Button>
          </Link>
          <Link to="/assistente" className="text-white">
            <Button variant="link">Assistente Personale</Button>
          </Link>
        </nav>
      </header>
      <div className="pt-16">
        <h1 className="text-2xl mb-4">Iniziative per te</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Public Initiatives</h2>
            <p>Access to information and services related to public benefits, including disability allowances, bonuses, and other government-provided support.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Private Initiatives</h2>
            <p>Information and access to private sector initiatives such as cultural events, sports activities, hospitality services, and transportation options that cater to people with disabilities.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Counseling and Psychological Support</h2>
            <p>Access to counseling services and psychological support to help individuals cope with their disabilities and improve their mental well-being.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Training and Education</h2>
            <p>Resources and opportunities for training and educational programs to enhance skills and knowledge, tailored specifically for people with disabilities.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Employment Access</h2>
            <p>Assistance with finding and applying for jobs, including job listings, resume building, and interview preparation, aimed at improving employment opportunities for people with disabilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iniziative;