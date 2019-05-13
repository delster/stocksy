import React, { useState } from 'react'
import styled from 'styled-components'

const responsiveBreakpoint = `720px`

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;

  height: 60px;
  width: 95%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${responsiveBreakpoint}) {
    display: block;
    width: 100%;
    & * {
      height: 60px;
      margin-bottom: 1em;
    }
  }
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

  @media (max-width: ${responsiveBreakpoint}) {
    display: block;
    padding-right: 25px;
    width: 100%;
  }
`

const ButtonColorPrimary = `#ff3f58`
const ButtonColorSecondary = `black`
const SearchButton = styled.button`
  flex: 1 1 220px;
  color: ${ButtonColorPrimary};
  background: ${ButtonColorSecondary};
  line-height: 29px;
  text-align: center;
  height: 100%;
  width: 220px;
  border: 2px solid ${ButtonColorPrimary};
  transition: .2s all ease-in-out;

  &:hover, &:focus {
    color: ${ButtonColorSecondary};
    background: ${ButtonColorPrimary};
  }

  @media (max-width: ${responsiveBreakpoint}) {
    display: block;
    margin: 0 auto;
  }
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
