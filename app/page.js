"use client"
import Image from "next/image";
import TicTacToe from "./tictactoe/page";
import PlayPage from "./playpage/playPage";

export default function Home() {
  return (
    <div className="App">
      <PlayPage />
  </div>
  );
}
