import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    const {data:imagenes, loading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            
            {<div className="w3-row-padding">
                {
                    imagenes.map((img) => (
                        <GifGridItem key={img.id} {...img}/>
                    ))    
                }
            </div>}
        </>
    )
}
