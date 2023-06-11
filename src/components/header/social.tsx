import { DiGit, DiGithub } from "react-icons/di"
import { FiGithub, FiLinkedin, FiPaperclip } from "react-icons/fi"
import CVSergio from "../../assets/CVSergio.pdf"


const Social = () => {

  return (
    <div className="flex text-xl items-center gap-8 text-invalid">
      <a href="https://github.com/zenix-s" className="tooltip tooltip-bottom" data-tip="Github" target="_blank">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/sergio-fernandez-fernandez-setfernet/" className="tooltip tooltip-bottom" data-tip="Linkedin" target="_blank">
        <FiLinkedin />
      </a>
      <a href={
        CVSergio
      } className="flex items-center tooltip tooltip-bottom" data-tip="Curriculum Vitae" target="_blank">
        <FiPaperclip /> <span>Curriculum</span>
      </a>
    </div>
  )

}

// escribeme una arrow function que retorne un div con un h1 que diga hola mundo

const Social2 = () => {
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  )
}


export default Social