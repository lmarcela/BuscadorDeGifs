import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories=[]}) => {
    const [categories, setCategories] = useState( (defaultCategories.length>0) ? defaultCategories: ["oso"]);
      
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