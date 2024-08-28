import './styles/About.css';
import BoxReveal from "../components/magicui/box-reveal";
import { FadeText } from "../components/magicui/fade-text";

function Statement() {
  return (
    <div className="About">
      <BoxReveal boxColor={"#AD49E1"} duration={0.5}>
        <p className="text-[1.5rem] font-semibold">
          Statement<span className="text-[#AD49E1]">.</span>
        </p>
      </BoxReveal>
      <FadeText
        className="content text-4xl font-bold text-black dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="Mi interessa far emergere gli aspetti conflittuali, i lacci e gli
inganni insiti nel nostro io attraverso la densità della
pittura. Cerco di evidenziare il grottesco e le contraddizioni
del mondo “adulto” convenzionale attraverso una lente
infantile che sa di vecchia carta da parati e miele."
      />
    </div>
  );
}

export default Statement;
