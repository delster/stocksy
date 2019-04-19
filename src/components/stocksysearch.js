import React, { useState } from 'react'
import styled from 'styled-components'

const SearchForm = styled.form``
const SearchInput = styled.input``
const SearchButton = styled.button``

const StocksySearch = () => {
  const [query, setQuery] = useState('')

  const handleChange = e => setQuery(e.target.value)

  return (
    <SearchForm action={`https://stocksy.com/search/${query}`}>
      <SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Explore our collection..." />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  )
}

export default StocksySearch