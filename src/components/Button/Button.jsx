import './Button.css'

export let number = 0;

export default function Button({children, onClick}){

    return(
        <button className='button' onClick={onClick}>
            {children}
        </button>
    )
}