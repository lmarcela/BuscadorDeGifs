import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) =>{   
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) =>{   
        e.preventDefault(); 
        if(inputValue.trim().length>1){
            setCategories( c => [inputValue,...c]);
            setInputValue('');
        }             
    }
    return (
          <form className="w3-container" onSubmit={handleSubmit}>
            <p>Buscar: {inputValue}</p>
            <input className="w3-input w3-border" type="text" value={inputValue} onChange={handleInputChange} />  
          </form>
    )
}
    
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
