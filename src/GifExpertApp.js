import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['League of legends'])
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory={setCategories} />
      <ul>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
      <hr />
    </>
  )
}

export default GifExpertApp
