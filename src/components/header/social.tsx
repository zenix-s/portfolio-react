import { DiGit, DiGithub } from "react-icons/di"
import { FiGithub, FiLinkedin, FiPaperclip } from "react-icons/fi"


const Social = () => {

  return (
    <div className="flex text-xl items-center gap-8">
      <a href="https://github.com/zenix-s" className="tooltip tooltip-bottom" data-tip="Github">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/sergio-fernandez-fernandez-setfernet/" className="tooltip tooltip-bottom" data-tip="Linkedin">
        <FiLinkedin />
      </a>
      <a href="#" className="flex items-center tooltip tooltip-bottom" data-tip="Curriculum Vitae">
        <FiPaperclip /> <span>Curriculum</span>
      </a>
    </div>
  )

}

export default Social