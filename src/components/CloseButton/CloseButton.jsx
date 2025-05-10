import './CloseButton.css'

export default function CloseButton({children, deleteClick}){
    return(
        <button className='close-button' onClick={deleteClick}>
            {children}
        </button>
    )
}