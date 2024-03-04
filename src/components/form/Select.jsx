import style from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={style.selectControl}>
            <label htmlFor={name}>{text}</label>
            <select name={text} id={name}>
                <option id='unselected' value="unselected">Selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select