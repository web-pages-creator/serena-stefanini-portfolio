import './styles/Lavori.css';
import BoxReveal from "../components/magicui/box-reveal";
import BlurFade from "../components/magicui/blur-fade";


function Lavori() {
  function importAll(r) {
    return r.keys().map(r);
  }

  function format(images) {
    let result = []
    images.forEach(i => { 
      let [name, obj, ext] = i.split('/')[3].split('.')
      console.log('name', name)
      result.push({
        name: name,
        file: i
      })
    })
    result.sort((a, b) => a.name - b.name)
    console.log('result', result)
    return result;
  }

  const immaginiSezionePittura = importAll(require.context('./../static/images/lavori/pittura', false, /\.(png|jpe?g|JPG|svg|)$/));
  const immaginiSezionePitturaFormattata = format(immaginiSezionePittura)

  const immaginiSezioneIncisione = importAll(require.context('./../static/images/lavori/incisione', false, /\.(png|jpe?g|JPG|svg|)$/));
  const immaginiSezioneIncisioneFormattata = format(immaginiSezioneIncisione)

  const immaginiSezioneDisegni = importAll(require.context('./../static/images/lavori/disegni', false, /\.(png|jpe?g|JPG|svg|)$/));
  const immaginiSezioneDisegniFormattata = format(immaginiSezioneDisegni)

  const immaginiSezioneFoto = importAll(require.context('./../static/images/lavori/fotografia', false, /\.(png|jpe?g|JPG|svg|)$/));
  const immaginiSezioneFotoFormattata = format(immaginiSezioneFoto)

  const immaginiSezioneVideo = importAll(require.context('./../static/images/lavori/video', false, /\.(mp4)$/));
  const immaginiSezioneVideoFormattata = format(immaginiSezioneVideo)

  return (
    <div className="Lavori">
      <BoxReveal boxColor={"#AD49E1"} duration={0.5}>
        <p className="text-[1.5rem] font-semibold">
          Lavori<span className="text-[#AD49E1]">.</span>
        </p>
      </BoxReveal>

      <BlurFade delay={0.1} inView>
        <div className='section-title'>Pittura ad Olio</div>
      </BlurFade>
      <div className="space-y-3 columns-3xs gap-y-3 gap-3 columns-2 wall">
        {immaginiSezionePitturaFormattata.map((item, idx) =>
        <BlurFade delay={0.1} inView>
            <img src={item.file} alt={`Random stock image ${idx + 1}`}/>
        </BlurFade>
        )}
      </div>
      
      <BlurFade delay={0.1} inView>
        <div className='section-title'>Incisione</div>
      </BlurFade>
      <div className="space-y-3 columns-3xs gap-y-3 gap-3 columns-2 wall">
        {immaginiSezioneIncisioneFormattata.map((item, idx) =>
        <BlurFade delay={0.1} inView>
            <img src={item.file} alt={`Random stock image ${idx + 1}`}/>
        </BlurFade>
        )}
      </div>

      <BlurFade delay={0.1} inView>
        <div className='section-title'>Disegni a mano</div>
      </BlurFade>
      <div className="space-y-3 columns-3xs gap-y-3 gap-3 columns-2 wall">
        {immaginiSezioneDisegniFormattata.map((item, idx) =>
        <BlurFade delay={0.1} inView>
            <img src={item.file} alt={`Random stock image ${idx + 1}`}/>
        </BlurFade>
        )}
      </div>

      <BlurFade delay={0.1} inView>
        <div className='section-title'>Fotografia</div>
      </BlurFade>
      <div className="space-y-3 columns-3xs gap-y-3 gap-3 columns-2 wall">
        {immaginiSezioneFotoFormattata.map((item, idx) =>
        <BlurFade delay={0.1} inView>
            <img src={item.file} alt={`Random stock image ${idx + 1}`}/>
        </BlurFade>
        )}
      </div>

      <BlurFade delay={0.1} inView>
        <div className='section-title'>Animazione</div>
      </BlurFade>
      <div className="space-y-3 columns-3xs gap-y-3 gap-3 columns-2 wall">
        {immaginiSezioneVideoFormattata.map((item, idx) =>
        <BlurFade delay={0.1} inView>
            <video autoPlay muted playsInline>
              <source src={item.file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </BlurFade>
        )}
      </div>

    </div>
  );
}

export default Lavori;
