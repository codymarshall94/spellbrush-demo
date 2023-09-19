import { useState } from "react";

const cards = [
  {
    job: "AI Anime Researcher",
    location: ["Tokyo", "San Francisco"],
    length: "fulltime",
    description:
      "Combine Anime with SOTA large-scale diffusion research here at Spellbrush!",
    image: "https://i.imgur.com/3z6wv3Y.png",
  },
  {
    job: "Anime Games Producer",
    location: ["San Francisco"],
    length: "fulltime",
    description:
      "Lead production on the next great anime SRPG here at Spellbrush!",
    image: "image_url_here",
  },
  {
    job: "Chief of Staff (Anime Games)",
    location: ["San Francisco"],
    length: "fulltime",
    description: "Lead operations at the world's first AI-native games studio!",
    image: "image_url_here",
  },
  {
    job: "React Engineer (Anime Games)",
    location: ["San Francisco", "Tokyo", "Remote"],
    length: "fulltime",
    description:
      "If you love React, Anime, and Design, come work at Spellbrush as a Frontend Engineer!",
    image: "image_url_here",
  },
  {
    job: "Technical Artist (Anime Games)",
    location: ["San Francisco"],
    length: "fulltime",
    description:
      "Lead Tech Art at Spellbrush on an exciting Anime Strategy RPG!",
    image: "image_url_here",
  },
  {
    job: "Unity Engineer",
    location: ["San Francisco"],
    length: "fulltime",
    description: "Work on anime games at Spellbrush as a Unity Engineer!",
    image: "image_url_here",
  },
];

export default function Deck() {
  const [deck, setDeck] = useState(cards);
  const [currentCard, setCurrentCard] = useState(0);
  return <div>Deck</div>;
}
