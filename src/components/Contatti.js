import './styles/Contatti.css';
import BoxReveal from "../components/magicui/box-reveal";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";


function Contatti() {
  
  return (
    <div className="Competenze">
      <BoxReveal boxColor={"#AD49E1"} duration={0.5}>
        <p className="text-[1.5rem] font-semibold">
          Contatti<span className="text-[#AD49E1]">.</span>
        </p>
      </BoxReveal>
      <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">

        <li class="flex items-center space-x-3 rtl:space-x-reverse list">
          <AiOutlineMail />
          <span>Email: <strong>serena.stefanini.011@gmail.com</strong></span>
        </li>
        
        <li class="flex items-center space-x-3 rtl:space-x-reverse list">
          <a className='link' href='https://www.instagram.com/sesse.nini.art/' target='_blank'>
            <BiLogoInstagramAlt />
            <span>Instagram: <strong>sesse.nini.art</strong></span>
          </a>
        </li>

      </ul>
    </div>
  );
}

export default Contatti;
