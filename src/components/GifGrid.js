import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    /* const [images, setImages] = useState([]);
    useEffect(() => {
        //getGifs(category).then(imagenes=>setImages(imagenes))
        getGifs(category).then(setImages)
    }, [category]) */

    const {loading} = useFetchGifs();
    console.log(loading);
    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Loading...': 'Data cargada'}
            
            {/* <div className="w3-row-padding">
                {
                    images.map((img) => (
                        <GifGridItem key={img.id} {...img}/>
                    ))    
                }
            </div> */}
        </>
    )
}
