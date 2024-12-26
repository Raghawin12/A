import React from 'react';
import './Home.css'; // Ensure you have the corresponding styles in Home.css

export default function Home() {
  return (
    <div className="container">
     
      {/* Custom Grid Section (Task 11 or whatever task you want) */}
     
      <section className="grid-section">
        <div className="grid-item">Grid Item 1</div>
        <div className="grid-item">Grid Item 2</div>
        <div className="grid-item">Grid Item 3</div>
        <div className="grid-item">Grid Item 3</div>
        
      </section>
<br></br>
      <section className="grid-section">
        <div className="grid-item">Grid Item 4</div>
        <div className="grid-item">Grid Item 5</div>
        <div className="grid-item">Grid Item 6</div>
        <div className="grid-item">Grid Item 7</div>
        
      </section>
      <br></br>
      <section className="grid-section">
        <div className="grid-item">Grid Item 8</div>
        <div className="grid-item">Grid Item 9</div>
        <div className="grid-item">Grid Item 10</div>
        <div className="grid-item">Grid Item 11</div>
        
      </section>
    </div>
  );
}
