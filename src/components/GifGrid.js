import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        //getGifs(category).then(imagenes=>setImages(imagenes))
        getGifs(category).then(setImages)
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            
            <div className="w3-row-padding">
                {
                    images.map((img) => (
                        <GifGridItem key={img.id} {...img}/>
                    ))    
                }
            </div>
        </>
    )
}
