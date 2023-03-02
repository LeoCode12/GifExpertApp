import { useState } from "react"

export const AddCategory = ({onCategory}) => {

    const [InputValue, setInputValue] = useState('')
    
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => { 
        event.preventDefault() 
        if(InputValue.trim().length <= 0) return
        // setCategories( categories => [InputValue, ...categories])
        onCategory( InputValue.trim())
        setInputValue('')

    }
    
    return (
        <form onSubmit={(event => onSubmit(event))}>
            <input
                type="text"
                placeholder="Buscar GIF´s"
                value={InputValue}
                onChange={onInputChange} />

        </form>


    )
}