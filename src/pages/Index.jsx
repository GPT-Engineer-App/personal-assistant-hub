import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaBriefcase, FaHeart, FaHospital, FaSchool, FaShuttleVan, FaUser, FaClipboardList, FaSearch, FaMousePointer } from "react-icons/fa";
import { Carousel } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="In&Valid Logo" className="h-8 mr-2" />
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
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <section className="w-full bg-cover bg-center h-96 flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
          <h1 className="text-4xl font-bold mb-2">Empowering People with Disabilities</h1>
          <p className="text-xl mb-4">Access a world of opportunities and support at your fingertips.</p>
          <div className="space-x-4">
            <Button variant="primary" size="lg">Join Now</Button>
            <Button variant="secondary" size="lg">Learn More</Button>
          </div>
        </section>
        <section className="max-w-3xl w-full my-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">Welcome to In&Valid Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-4">
                In&Valid is dedicated to enhancing accessibility and inclusion for people with disabilities. Explore public and private initiatives, access essential services, and join a supportive community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <FaHospital className="text-4xl mb-2" />
                  <p>Healthcare</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaShuttleVan className="text-4xl mb-2" />
                  <p>Transportation</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaSchool className="text-4xl mb-2" />
                  <p>Education</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaBriefcase className="text-4xl mb-2" />
                  <p>Employment</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaHeart className="text-4xl mb-2" />
                  <p>Social Services</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">Featured Services</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <FaHospital className="text-4xl mb-2" />
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access to healthcare services and support.</p>
                <Button variant="link">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FaShuttleVan className="text-4xl mb-2" />
                <CardTitle>Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Transportation services tailored for people with disabilities.</p>
                <Button variant="link">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FaSchool className="text-4xl mb-2" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Educational programs and resources.</p>
                <Button variant="link">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FaBriefcase className="text-4xl mb-2" />
                <CardTitle>Employment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Job opportunities and employment support.</p>
                <Button variant="link">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">How It Works</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <FaUser className="text-4xl mb-2" />
              <p>Register your profile</p>
            </div>
            <div className="flex flex-col items-center">
              <FaClipboardList className="text-4xl mb-2" />
              <p>Choose your interests and needs</p>
            </div>
            <div className="flex flex-col items-center">
              <FaSearch className="text-4xl mb-2" />
              <p>Discover initiatives and services</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMousePointer className="text-4xl mb-2" />
              <p>Apply with a click</p>
            </div>
          </div>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">Initiatives Spotlight</h2>
          <Carousel>
            <div className="carousel-item">
              <img src="/path/to/initiative1.jpg" alt="Initiative 1" />
              <div className="carousel-caption">
                <h3>Initiative 1</h3>
                <p>Short description of initiative 1.</p>
                <Button variant="link">View Details</Button>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/path/to/initiative2.jpg" alt="Initiative 2" />
              <div className="carousel-caption">
                <h3>Initiative 2</h3>
                <p>Short description of initiative 2.</p>
                <Button variant="link">View Details</Button>
              </div>
            </div>
          </Carousel>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">Community Testimonials</h2>
          <Carousel>
            <div className="carousel-item">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/path/to/user1.jpg" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>User 1</CardTitle>
                      <Badge>User</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Testimonial text from user 1.</p>
                </CardContent>
              </Card>
            </div>
            <div className="carousel-item">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/path/to/user2.jpg" />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>User 2</CardTitle>
                      <Badge>User</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Testimonial text from user 2.</p>
                </CardContent>
              </Card>
            </div>
          </Carousel>
        </section>
        <section className="max-w-3xl w-full my-8">
          <h2 className="text-2xl mb-4">Latest News and Updates</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <img src="/path/to/news1.jpg" alt="News 1" className="w-full h-32 object-cover mb-2" />
                <CardTitle>News Headline 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Short excerpt of news 1.</p>
                <Button variant="link">Read More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="/path/to/news2.jpg" alt="News 2" className="w-full h-32 object-cover mb-2" />
                <CardTitle>News Headline 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Short excerpt of news 2.</p>
                <Button variant="link">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg mb-2">Quick Links</h3>
            <ul>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-2">Follow Us</h3>
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
            <h3 className="text-lg mt-4 mb-2">Newsletter Signup</h3>
            <form>
              <input type="email" placeholder="Your email" className="p-2 w-full mb-2" />
              <Button type="submit" variant="primary" size="sm">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>Contact us at <a href="mailto:info@invalid.com" className="underline">info@invalid.com</a> or call us at (123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;