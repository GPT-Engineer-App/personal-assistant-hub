import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaBriefcase, FaHeart, FaHospital, FaSchool, FaShuttleVan, FaUser, FaClipboardList, FaSearch, FaMousePointer } from "react-icons/fa";
import { Carousel } from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="bg-green-600 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-4">
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
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <section className="w-full bg-cover bg-center h-96 flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
          <h1 className="text-4xl font-bold mb-2">Potenziare le Persone con Disabilità</h1>
          <p className="text-xl mb-4">Accedi a un mondo di opportunità e supporto a portata di mano.</p>
          <div className="space-x-4">
            <Button variant="primary" size="lg">Iscriviti Ora</Button>
            <Button variant="secondary" size="lg">Scopri di Più</Button>
          </div>
        </section>
        <section className="max-w-3xl w-full my-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">Benvenuto nel Portale In&Valid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-4">
                In&Valid è dedicato a migliorare l'accessibilità e l'inclusione per le persone con disabilità. Esplora iniziative pubbliche e private, accedi ai servizi essenziali e unisciti a una comunità di supporto.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <FaHospital className="text-4xl mb-2" />
                  <p>Assistenza Sanitaria</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaShuttleVan className="text-4xl mb-2" />
                  <p>Trasporti</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaSchool className="text-4xl mb-2" />
                  <p>Istruzione</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaBriefcase className="text-4xl mb-2" />
                  <p>Occupazione</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaHeart className="text-4xl mb-2" />
                  <p>Servizi Sociali</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">Servizi in Evidenza</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <FaHospital className="text-4xl mb-2" />
                <CardTitle>Assistenza Sanitaria</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Accesso ai servizi sanitari e di supporto.</p>
                <Button variant="link">Scopri di Più</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FaShuttleVan className="text-4xl mb-2" />
                <CardTitle>Trasporti</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Servizi di trasporto su misura per le persone con disabilità.</p>
                <Button variant="link">Scopri di Più</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FaSchool className="text-4xl mb-2" />
                <CardTitle>Istruzione</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Programmi educativi e risorse.</p>
                <Button variant="link">Scopri di Più</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FaBriefcase className="text-4xl mb-2" />
                <CardTitle>Occupazione</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Opportunità di lavoro e supporto all'occupazione.</p>
                <Button variant="link">Scopri di Più</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">Come Funziona</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <FaUser className="text-4xl mb-2" />
              <p>Registrati</p>
            </div>
            <div className="flex flex-col items-center">
              <FaClipboardList className="text-4xl mb-2" />
              <p>Scegli i tuoi interessi e bisogni</p>
            </div>
            <div className="flex flex-col items-center">
              <FaSearch className="text-4xl mb-2" />
              <p>Scopri iniziative e servizi</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMousePointer className="text-4xl mb-2" />
              <p>Candidati con un clic</p>
            </div>
          </div>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">Iniziative in Evidenza</h2>
          <Carousel>
            <div className="carousel-item">
              <div className="carousel-caption">
                <h3>Initiative 1</h3>
                <p>Breve descrizione dell'iniziativa 1.</p>
                <Button variant="link">Visualizza Dettagli</Button>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <h3>Initiative 2</h3>
                <p>Breve descrizione dell'iniziativa 2.</p>
                <Button variant="link">Visualizza Dettagli</Button>
              </div>
            </div>
          </Carousel>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">Testimonianze della Comunità</h2>
          <Carousel>
            <div className="carousel-item">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>User 1</CardTitle>
                      <Badge>User</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Testimonianza dell'utente 1.</p>
                </CardContent>
              </Card>
            </div>
            <div className="carousel-item">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>User 2</CardTitle>
                      <Badge>User</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Testimonianza dell'utente 2.</p>
                </CardContent>
              </Card>
            </div>
          </Carousel>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">Ultime Notizie e Aggiornamenti</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>News Headline 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Breve estratto della notizia 1.</p>
                <Button variant="link">Leggi di Più</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>News Headline 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Breve estratto della notizia 2.</p>
                <Button variant="link">Leggi di Più</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg mb-2">Link Rapidi</h3>
            <ul>
              <li><Link to="/about" className="hover:underline">Chi Siamo</Link></li>
              <li><Link to="/contact" className="hover:underline">Contattaci</Link></li>
              <li><Link to="/privacy" className="hover:underline">Politica sulla Privacy</Link></li>
              <li><Link to="/terms" className="hover:underline">Termini di Servizio</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-2">Seguici</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/facebook-icon.png" alt="Facebook" className="h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/twitter-icon.png" alt="Twitter" className="h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/instagram-icon.png" alt="Instagram" className="h-6" />
              </a>
            </div>
            <h3 className="text-lg mt-4 mb-2">Iscriviti alla Newsletter</h3>
            <form>
              <input type="email" placeholder="La tua email" className="p-2 w-full mb-2" />
              <Button type="submit" variant="primary" size="sm">Iscriviti</Button>
            </form>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>Contattaci a <a href="mailto:info@invalid.com" className="underline">info@invalid.com</a> o chiamaci al (123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;