import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Osos']);

      
    //setCategories([...categories, "Gatos"]);
    //setCategories( c => [...c, "Gatos"]);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <div className="w3-container">
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </div>
        </>
    )
}

  export default GifExpertApp;