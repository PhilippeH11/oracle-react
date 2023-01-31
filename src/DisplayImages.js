import React, { useState } from "react";

function OracleDeSylve() {
  const [images, setImages] = useState([]);

  const resetImages = () => {
    setImages([]);
  };

  const getRandomImage = () => {
    //declare an array to store the images
    const randomImage = [
      "/images/card1.png",
      "/images/card2.png",
      "/images/card3.png",
      "/images/card4.png",
      "/images/card5.png",
      "/images/card6.png",
      "/images/card7.png",
      "/images/card8.png",
      "/images/card9.png",
      "/images/card10.png",
      "/images/card11.png",
      "/images/card12.png",
      "/images/card13.png",
      "/images/card14.png",
      "/images/card15.png",
      "/images/card16.png",
      "/images/card17.png",
      "/images/card18.png",
      "/images/card19.png",
      "/images/card20.png",
      "/images/card21.png",
      "/images/card22.png",
      "/images/card23.png",
      "/images/card24.png",
      "/images/card25.png",
      "/images/card26.png",
      "/images/card27.png",
      "/images/card28.png",
      "/images/card29.png",
      "/images/card30.png",
      "/images/card31.png",
      "/images/card32.png",
      "/images/card33.png",
      "/images/card34.png",
      "/images/card35.png",
      "/images/card36.png",
      "/images/card37.png",
      "/images/card38.png",
      "/images/card39.png",
      "/images/card40.png",
      "/images/card41.png",
      "/images/card42.png",
      "/images/card43.png",
      "/images/card44.png",
      "/images/card45.png",
      "/images/card46.png",
      "/images/card47.png",
      "/images/card48.png",
      "/images/card49.png",
      "/images/card50.png",
      "/images/card51.png",
      "/images/card52.png",
      "/images/card53.png",
      "/images/card54.png",
      "/images/card55.png",
      "/images/card56.png",
      "/images/card57.png",
      "/images/card58.png",
      "/images/card59.png",
      "/images/card60.png",
      "/images/card61.png",
      "/images/card62.png",
      "/images/card63.png",
      "/images/card64.png",
      "/images/card65.png",
      "/images/card66.png",
      "/images/card67.png",
      "/images/card68.png",
      "/images/card69.png",
      "/images/card70.png",
      "/images/card71.png",
      "/images/card72.png",
      "/images/card73.png",
      "/images/card74.png",
      "/images/card75.png",
      "/images/card76.png",
      "/images/card77.png",
      "/images/card78.png",
      "/images/card79.png",
      "/images/card80.png",
      "/images/card81.png",
      "/images/card82.png",
      "/images/card83.png",
      "/images/card84.png",
      "/images/card85.png",
      "/images/card86.png",
      "/images/card87.png",
      "/images/card88.png",
      "/images/card89.png",
      "/images/card90.png",
      "/images/card91.png",
      "/images/card92.png",
      "/images/card93.png",
      "/images/card94.png",
      "/images/card95.png",
      "/images/card96.png",
    ];

    let drawnCards = [];
    while (drawnCards.length < 7) {
      //generate a number and provide to the image to generate randomly
      let number = Math.floor(Math.random() * randomImage.length);
      if (!drawnCards.includes(number)) {
        drawnCards.push(number);
        //print the images generated by a random number
        setImages((images) => [...images, randomImage[number]]);
      }
    }
  };

  return (
    <div>
      <h3>Tirez une série de 7 cartes :</h3>
      <button onClick={getRandomImage} className="btn random">
        Tirer une série
      </button>
      <button onClick={resetImages} className="btn reset">
        Réinitialiser
      </button>
      <br /> <br />
      <div id="result">
        {images.map((img, index) => (
          <span key={index}>
            <img class="card-img" src={img} alt="card" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default OracleDeSylve;
