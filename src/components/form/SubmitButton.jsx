import style from './SubmitButton.module.css'

function SubmitButton({ text }) {
    return (
            <div>
                <button className={style.submitButton}>{text}</button>
            </div>
    )
}

export default SubmitButton