import React from 'react'
/*  ------------------  */

function randomColor(num) {
 return Math.floor(Math.random() * num);
}
function BackroundColorChange() {
 let color = ["#64C457", "#673AB7", "#3f8a86", "#4669B5", "#DE5DFA", "#4669B5", "#383E4E", "#d54a2e", "#fcd846", "#992"];

 return color[randomColor(color.length)];
}

function BackroundImgageChange() {
 let Image = ["https://learnyst.s3.amazonaws.com/assets/schools/3258/resources/images/Background_nkp3y.png", "https://images.unsplash.com/photo-1582924682002-1a06d90c3e2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=640", "https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=640", "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=640", "bacg.jpeg", "eatsleepcoderepeat.jpeg", "phone.jpeg"];

 return `${Image[randomColor(Image.length)]}`;
}

export default function Hero() {


 return (

  <div className="hero" style={{
   backgroundImage: `url(${BackroundImgageChange()})`, backgroundColor: `${BackroundColorChange()}`
  }}>
   <div className="hero-container">
    <h1>Hello World</h1>
    <p className="lead">
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto soluta
     ut dolore fuga laudantium sunt amet, iste quos consequuntur ad a
     cupiditate, fugiat vitae perspiciatis sequi doloremque adipisci.
     Repellat, fugiat?
   </p>
    <div className="btn-group">
     <button className="btn-contact">Contact</button>
     <button className="btn-more">More...</button>
    </div>
   </div>
  </div >
 )
}
