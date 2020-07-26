import React from 'react'
import PropTypes from 'prop-types'
export const GifGridItem = ({title, url}) => {
    return (
        <>        
            <div className="w3-third">
                <div className="w3-card w3-center animate__animated animate__slideInUp animate__faster">
                    <img src={url} alt={title} style={{height:200, maxWidth:"-webkit-fill-available"}} />
                    <p>{title?.trim() || "Sin titulo"}</p>
                </div>
            </div>
        </>
    )
}
GifGridItem.propTypes={
    title : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
