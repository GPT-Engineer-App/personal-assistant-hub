import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AssistentePersonale = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { text: inputValue, sender: "user" }];
      const response = getResponse(inputValue);
      setMessages([...newMessages, { text: response, sender: "bot" }]);
      setInputValue("");
    }
  };

  const getResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("ciao")) {
      return "Ciao! Come posso aiutarti oggi?";
    } else if (lowerCaseMessage.includes("come stai")) {
      return "Sto bene, grazie! E tu?";
    } else if (lowerCaseMessage.includes("aiuto")) {
      return "Sono qui per aiutarti. Cosa ti serve?";
    } else {
      return "Ciao. Questa è una chat dimostrativa, puoi farmi domande su tutto quello che riguarda il portale In&Valid e io cercherò di aiutarti nel miglior modo possibile.";
    }
  };

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
        <h1 className="text-2xl mb-4">Assistente Personale</h1>
        <div className="chat-window border p-4 mb-4 h-96 overflow-y-scroll">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message mb-2 p-2 rounded ${
                message.sender === "user" ? "bg-gray-200" : "bg-blue-200"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow mr-2"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default AssistentePersonale;