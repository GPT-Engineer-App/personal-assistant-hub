import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
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
            <Button variant="link">Profilo</Button>
          </Link>
          <Link to="/assistente" className="text-white">
            <Button variant="link">Assistente Personale</Button>
          </Link>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div>
          <h1 className="text-3xl text-center">Welcome to My Web App</h1>
          <p className="text-center">
            This is the homepage. Use the topbar to navigate.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;