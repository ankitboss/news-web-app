import React from "react";
import "./Styles/Slides.css";

document.writeln("I am Ankit !");
function Slides() {
  //   let myIndex = 0;
  //   carousel();

  //   function carousel() {
  //     let i;
  //     let x = document.getElementsByClassName("img");
  //     for (i = 0; i < x.length; i++) {
  //       x[i].style.display = "none";
  //     }
  //     myIndex++;
  //     if (myIndex > x.length) {
  //       myIndex = 1;
  //     }
  //     x[myIndex - 1].style.display = "block";
  //     setTimeout(carousel, 1000);
  //   }
  return (
    <div className="slides">
      <img
        className="img"
        src="https://wowslider.com/sliders/demo-22/data1/images/harrypotter975357.jpg"
        alt="Images for sliding"
      />
    </div>
  );
}

export default Slides;
