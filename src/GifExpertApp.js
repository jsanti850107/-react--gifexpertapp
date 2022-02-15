import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Pounch', 'Samurai X',' Dragon Ball']
    const [categories, setCategories] = useState(['Dragon Ball Z']);
    
    // const handleAdd = () => {
    //     //solucion1
    //     //setCategories( [...categories, 'Conan'] );
    //     //Solucion 2 con CallBacks
    //     setCategories( cats => [ ...cats, 'HunterXHunter' ])
    // }


    return (
        <>

            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
