import { useEffect, useState } from 'react'

import style from './ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json' 
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    },[])

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
            <Select 
                name={'categoryId'}
                text={'Selecione a categoria'}
                options={categories}
            />
            <SubmitButton text={'Criar Projeto'} />
        </form>
    )
}

export default ProjectForm