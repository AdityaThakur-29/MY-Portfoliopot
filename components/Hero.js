// export default function Hero() {
//   return (
//     <section id="home" className="hero-section hero-with-background">
//       <div className="hero-overlay">
//         <h1 className="hero-title">Aditya Thakur</h1>
//         <p className="hero-subtitle">Frontend Developer & Web Designer</p>
//         <a href="/Aditya_Thakur_Resume.pdf" download="Aditya_Thakur_Resume.pdf">
//           <button className="hero-button">Download Resume</button>
//         </a>
//       </div>
//     </section>
//   )
// }

export default function Hero() {
  return (
    <section id="home" className="hero-section hero-with-video">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/hero-video.mp4" type="video/mp4" />
        
      </video>
      <div className="hero-overlay">
        <h1 className="hero-title">Aditya Thakur</h1>
        <p className="hero-subtitle">Frontend Developer & Web Designer</p>
        <a href="/Aditya_Thakur_Resume.pdf" download="Aditya_Thakur_Resume.pdf">
          <button className="hero-button">Download Resume</button>
        </a>
      </div>
    </section>
  )
}