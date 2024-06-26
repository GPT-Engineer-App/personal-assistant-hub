import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Iniziative = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl">My Web App</h1>
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
        </div>
      </div>
    </div>
  );
};

export default Iniziative;