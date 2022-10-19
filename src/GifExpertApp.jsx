import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//import  React, { useState } from 'react'

export const GifExpertApp = () =>{
   
  const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

  const onAddCategory =( newCategory ) => {  

    if(categories.includes(newCategory)) return;

    console.log(newCategory)
    //categories.push(newCategory);
     setCategories([newCategory,...categories]);
  }
   // console.log(categories);
   
    return (
        <>
                 
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={(event) => onAddCategory(event)}
            />             
                {
                    categories.map((category)=>(
                      <GifGrid
                        key={category}
                        category={category}
                        />
                    ))
                }

        </>
    )
}

// UddxIXf7XVLwThGrP9MPMV70ELmhAig4