import './styles/About.css';
import BoxReveal from "../components/magicui/box-reveal";
import { FadeText } from "../components/magicui/fade-text";

function About() {
  return (
    <div className="About">
      <BoxReveal boxColor={"#AD49E1"} duration={0.5}>
        <p className="text-[1.5rem] font-semibold">
          About<span className="text-[#AD49E1]">.</span>
        </p>
      </BoxReveal>
      <FadeText
        className="content text-4xl font-bold text-black dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="Nasce a Roma dove vive studia e lavora. Nel 2020 si iscrive presso l’Accademia di belle Arti Rufa in arti visive. Partecipa al Premio Domiziano, a cura della Double, Consumer Lab e Stadio Domiziano. Svolge tirocinio come assistente per l’artista Nicola Rotiroti prestando il suo praticantato presso Studio 54. Sempre nello stesso anno fa uno stage a Palazzo dell’esposizioni per Studio Mauri come operatrice cinematografica . Nel 2022 inaugura l’installazione e performance “mia mamma stava facendo il presepe” a cura di Giorgia Papucci e con la partecipazione di Anna Fischnaller. Nel 2023 la mostra “i papaveri fischiavano”  presso Indigo Art Gallery a Perugia a cura di Studio 54 in una mostra collettiva. Svolge la performance “ discordati” come coperformer di Jan Kacper presso Rufa atelier. Conduce diversi teambuilding di pittura presso l’associazioni Sunny way nel team di pittori.
              Dal 2020 insegna pittura e illustrazione a bambini dai 7 ai 12 anni e adulti  presso Civenna club e privati. nel 2024 ha collaborato per l’associazione culturale Animare, facendo lezioni di animazione per ragazzi"
      />
    </div>
  );
}

export default About;
