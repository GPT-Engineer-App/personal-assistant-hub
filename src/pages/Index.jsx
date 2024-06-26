import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl">In&Valid Portal</h1>
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
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">Welcome to In&Valid Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-4">
                This is the homepage. Use the topbar to navigate.
              </p>
              <Separator className="my-4" />
              <p className="text-center">
                Our mission is to support and empower individuals with disabilities by providing access to resources, services, and initiatives that enhance their quality of life.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;