import style from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={style.newProjectContainer}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm />
        </div>       
    )
}

export default NewProject