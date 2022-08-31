import React from "react";
import memesData from "../src/memesData"

export default function Meme() {
  const [allMemes, setAllMemes] = React.useState({})
  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: "",
    imageUrl:"https://i.imgflip.com/30b1gx.jpg",
    imageName: "Two Buttons"
  })

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes))
      .catch(error => console.log(`there was an error: ${error}`))
  }, [])

  function getRadomImage(){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        imageUrl: allMemes[Math.floor(Math.random()*allMemes.length)].url,
        imageName: allMemes[Math.floor(Math.random()*allMemes.length)].name
      }
    })
  }

  function handleFormChange(event) {
    const {name, value} = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return(
    <div className="meme-container">
      <div className="inputs">
        <input 
          type="text" 
          id="top-text" 
          name="topText" 
          value={formData.topText}
          placeholder="Top text"
          onChange={handleFormChange}
        />

        <input 
          type="text" 
          id="bottom-text" 
          name="bottomText" 
          value={formData.bottomText}
          placeholder="Bottom text"
          onChange={handleFormChange}
        />
      </div>
      <button onClick={getRadomImage}>Get a new meme image</button>
      <div className="meme">
        <p className="top-text top">{formData.topText}</p>
        <img src={formData.imageUrl} alt="" />
        <p className="bottom-text bottom">{formData.bottomText}</p>
      </div>
    </div>
  )
}