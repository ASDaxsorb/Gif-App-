import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategory }) => {
  const [inputText, setInputText] = useState('')

  const handleOnChange = e => {
    setInputText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (inputText.trim().length > 0) {
      setCategory(categories => [inputText, ...categories])
      setInputText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputText} onChange={handleOnChange} />
    </form>
  )
}

AddCategory.proptTypes = {
  setCategory: PropTypes.func.isRequired
}

export default AddCategory
