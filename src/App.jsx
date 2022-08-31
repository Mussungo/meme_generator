import React from "react"
import Header from "../Components/Header"
import Meme from "../Components/Meme"
import "./App.css"

export default function App () {
  return(
    <div className="container">
      <Header />

      <div className="generate">
        <Meme />
      </div>
    </div>
  )
}