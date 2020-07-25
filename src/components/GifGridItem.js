import React from 'react'

export const GifGridItem = ({title, url}) => {
    return (
        <>        
            <div className="w3-third">
                <div className="w3-card w3-center animate__animated animate__slideInUp animate__faster">
                    <img src={url} alt={title} style={{height:200, maxWidth:"-webkit-fill-available"}} />
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}
