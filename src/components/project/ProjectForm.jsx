import style from './ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm() {
    return (
        <form className={style.form}>
            <Input 
                type={'text'} 
                text={'Nome do Projeto'} 
                name={'name'} 
                placeholder={'Insira o nome do projeto'}
            />
            <Input 
                type={'number'}
                text={'Orçamento do Projeto'}
                name={'budget'}
                placeholder={'Insira o orçamento total'}
            /> 
            <Select />
            
            <SubmitButton text={'Criar Projeto'} />
        </form>
    )
}

export default ProjectForm