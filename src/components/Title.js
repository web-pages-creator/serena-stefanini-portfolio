import './styles/Title.css';
import foto from '../static/images/profilo.jpg'
import BlurFade from "../components/magicui/blur-fade";
import React, { useState, useEffect } from "react";


function Title() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const WideTitle = <BlurFade delay={0.5} inView className="Title-wide">
    <div className='text-container'>
      <div className='title-content'>Serena Stefanini</div>
      <div className='subtitle-content'>Laureanda in Pittura e Arti Visive presso l'Accademia RUFA di Roma</div>
    </div>
    <img src={foto} className='profile'></img>
  </BlurFade>

  const SmallTitle = <BlurFade delay={0.5} inView className="Title-small">
      <div className='title-content'>Serena Stefanini</div>
      <div className='subtitle-content-small'>Laureanda in Pittura e Arti Visive presso l'Accademia RUFA di Roma</div>
      <img src={foto} className='profile'></img>
    </BlurFade>

  return (
    <div>
      {isDesktop ?
        WideTitle
       :
       SmallTitle
       }
    </div>
  );
}

export default Title;
