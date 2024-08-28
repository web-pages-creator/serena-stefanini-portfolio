import './styles/Competenze.css';
import BoxReveal from "../components/magicui/box-reveal";
import { FadeText } from "../components/magicui/fade-text";

function Competenze() {
  let competenze = [
    "Pittura",
    "Lavorare in team",
    "Insegnamento",
    "Animazione 2D"
  ]
  return (
    <div className="Competenze">
      <BoxReveal boxColor={"#AD49E1"} duration={0.5}>
        <p className="text-[1.5rem] font-semibold">
          Competenze<span className="text-[#AD49E1]">.</span>
        </p>
      </BoxReveal>
      <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
        {competenze.map((item) => 
        <li key={item} class="flex items-center space-x-3 rtl:space-x-reverse list">
          <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
          <span>{item}</span>
        </li>
        )}
      </ul>
    </div>
  );
}

export default Competenze;
