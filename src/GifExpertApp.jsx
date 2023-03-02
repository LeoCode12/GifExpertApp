import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Pokemon'])

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <div className="header">
        <h1>GifExpertApp</h1>
        <AddCategory
          // setCategories={setCategories}
          onCategory={onAddCategory}
        />
      </div>
      {/* <button onClick={ onAddCategory }>Agregar</button> */}

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}