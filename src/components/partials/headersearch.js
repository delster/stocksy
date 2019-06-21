import React, { useState } from 'react'
import styled from 'styled-components'
import {
  FaCamera,
  FaCaretUp,
  FaCaretDown,
  FaSearch,
  FaVideo,
} from 'react-icons/fa'

const SearchForm = styled.form``
const SearchInputGroup = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 405px;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 13px;
  margin-left: 1rem;
  padding-left: .8rem;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.35);
  z-index: 50;
  & svg {
    color: #595959;
  }
`
const SearchInput = styled.input`
  flex: 1 1 100%;
  padding-left: .5em;
  border: none;
  &:focus {
    outline: none;
  }
`
const SearchTypeSelect = styled.ul`
  color: #595959;
  background: #fff;
  flex: 1 1 240px;
  height: 40px;
  margin: 0;
  padding: 0 8px;
  border: none;
  border-left: 1px solid #d4d4d4;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  list-style: none;
}
`
const SearchTypeOption = styled.li`
  cursor: pointer;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -8px 0;
  padding: 1em 8px;
  &:first-of-type {
    margin-top: 2px;
    padding-right: 0;
    justify-content: space-around;
  }
  & > svg {
    margin-right: 6px;
  }
`

const searchOptions = [
  {
    urlParam: '',
    component: <>Photos + Videos</>
  },
  {
    urlParam: '&type=photo',
    component: <><FaCamera size={16} /> Photos Only</>
  },
  {
    urlParam: '&type=video',
    component: <><FaVideo size={16} /> Videos Only</>
  },
]

export default () => {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleInputChange = e => setQuery(e.target.value)
  const handleSelectChange = e => {setSelected(e.target.value); setIsOpen(false)}

  const toggleIsOpen = () => setIsOpen(!isOpen)

  return (
    <SearchForm
      action={`https://stocksy.com/search/${query}?text=${query}${searchOptions[selected].urlParam}&sort=curated&page=1`}>
      <SearchInputGroup>
        <FaSearch size={25} />
        <SearchInput
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search our curated collection..."
        />
        <SearchTypeSelect>
          <SearchTypeOption onClick={toggleIsOpen}>
            {searchOptions[selected].component}
            {isOpen?<FaCaretUp size={16} />:<FaCaretDown size={16} />}
          </SearchTypeOption>
          {isOpen &&
            searchOptions.map( (opt,i) => (
              <SearchTypeOption key={i} onClick={handleSelectChange} value={i}>
                {opt.component}
              </SearchTypeOption>
            ))
          }
        </SearchTypeSelect>
      </SearchInputGroup>
    </SearchForm>
  )
}
