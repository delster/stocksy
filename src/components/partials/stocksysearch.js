import React, { useState } from 'react'
import styled from 'styled-components'

const SearchForm = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;

  height: 60px;
  width: 95%;
  max-width: 800px;
  margin: 0 auto;
`
const SearchInput = styled.input`
  color: #d4d4d4;
  background-color: #fff;
  flex: 1 1 100%;
  margin-right: 1em;
  padding-left: 25px;
  box-shadow: inset 0px 2px 3px #ddd;

  &::placeholder {
    color: #ccc;
  }
`
const SearchButton = styled.button`
  flex: 1 0 220px;
  color: #ff3f58;
  background: rgba(0, 152, 219, 0);
  line-height: 29px;
  text-align: center;
  height: 100%;
  border: 2px solid #ff3f58;
`

const StocksySearch = () => {
  const [query, setQuery] = useState('')

  const handleChange = e => setQuery(e.target.value)

  return (
    <SearchForm action={`https://stocksy.com/search/${query}`}>
      <SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Explore our collection..."
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  )
}

export default StocksySearch
