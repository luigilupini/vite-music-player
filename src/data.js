import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Hope It's Not",
      cover: "/songs/hope_its_not.jpg",
      artist: "J.Folk",
      audio: "/songs/hope_its_not.mp3",
      color: ["#442068", "#FF91FF"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover: "/songs/aiguille-daylight.jpg",
      artist: "Aiguille",
      audio: "/songs/aiguille-daylight.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover: "/songs/keep_going.jpg",
      artist: "Swørn",
      audio: "/songs/keep_going.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover: "/songs/aiguille-daylight.jpg",
      artist: "Aiguille",
      audio: "/songs/aiguille-nightfall.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Another Day",
      cover: "/songs/another-day.jpg",
      artist: "J.Folk",
      audio: "/songs/another-day.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover: "/songs/under-the-city-stars.jpg",
      artist: "Middle School, Aviino",
      audio: "/songs/under-the-city-stars.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Monolith",
      cover: "/songs/monolith.jpg",
      artist: "Toonorth",
      audio: "/songs/monolith.mp3",
      color: ["#2A4C67", "#DFD3B9"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
