import React from "react"

export default function Header() {
  return(
    <header className="header">
      <div className="logo">
        <img src="../src/assets/Troll Face.svg" alt="Troll Face" />
        <h1>Meme Generator</h1>
      </div>
      <h1 className="author">Julio Jorge</h1>
    </header>
  )
}