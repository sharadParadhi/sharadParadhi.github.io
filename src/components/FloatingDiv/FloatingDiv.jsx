import React from 'react'


export const Floating=

({image,text1,text2})=>{

    return (
        <div className='floatingdiv'>
            <img src={image} alt=""/>
            <span>
               {`${text1} ${text2}`}
            </span>
        </div>
    )
}