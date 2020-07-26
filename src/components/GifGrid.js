import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    const {data:imagenes, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            
            {<div className="w3-row-padding">
                {
                    imagenes.map((img) => (
                        <GifGridItem key={img.id} {...img}/>
                    )) 
                }
            </div>}
            
            {!loading && imagenes.length===0 && <p>Sin resultados</p>}
        </>
    )
}
