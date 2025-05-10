import './Button.css'

export let number = 0;

export default function Button(){
    return(
        <button>{"Count click: "+number}</button>
    )
}