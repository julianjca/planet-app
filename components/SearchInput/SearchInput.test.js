import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Component from './index'

afterEach(cleanup)

describe('SearchInput', () => {
  test('renders the input', () => {
     const { getByTestId } = render(<Component handleKeyDown={jest.fn()} handleSearchChange={jest.fn()} searchInput="test" searchPlanet={jest.fn()} />)

     expect(getByTestId('planet_input')).toBeInTheDocument()
     expect(getByTestId('planet_input').value).toEqual('test')
  })

  test('runs handleKeyDown', () => {
    const handleKeyDown = jest.fn()
    const { getByTestId } = render(<Component handleKeyDown={handleKeyDown} handleSearchChange={jest.fn()} searchInput="" searchPlanet={jest.fn()} />)

    const input = getByTestId('planet_input')

    fireEvent.keyDown(input, { key: 'Enter', code: '13' })

    expect(handleKeyDown).toHaveBeenCalledTimes(1)
 })

  test('runs searchPlanet', () => {
    const searchPlanet = jest.fn()
    const { getByText } = render(<Component handleKeyDown={jest.fn()} handleSearchChange={jest.fn()} searchInput="" searchPlanet={searchPlanet} />)

    const button = getByText('Search')

    fireEvent.click(button)

    expect(searchPlanet).toHaveBeenCalledTimes(1)    
  })

  test('runs handleSearchChange', () => {
    const handleSearchChange = jest.fn()
    const { getByTestId } = render(<Component handleKeyDown={jest.fn()} handleSearchChange={handleSearchChange} searchInput="" searchPlanet={jest.fn()} />)

    const input = getByTestId('planet_input')

    fireEvent.change(input, { target: { value: 'test' } })

    expect(handleSearchChange).toHaveBeenCalledTimes(1)
  })

})