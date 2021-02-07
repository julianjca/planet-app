import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Router from 'next/router'
import Component from './index'

jest.mock('next/router')

afterEach(cleanup)

const planet = {
  name: "Tatooine",
  rotation_period: "23",
  orbital_period: "304",
  diameter: "10465",
  climate: "arid",
  gravity: "1 standard",
  terrain: "desert",
  surface_water: "1",
  population: "200000",
  residents: [
      "http://swapi.dev/api/people/1/",
      "http://swapi.dev/api/people/2/",
      "http://swapi.dev/api/people/4/",
      "http://swapi.dev/api/people/6/",
      "http://swapi.dev/api/people/7/",
      "http://swapi.dev/api/people/8/",
      "http://swapi.dev/api/people/9/",
      "http://swapi.dev/api/people/11/",
      "http://swapi.dev/api/people/43/",
      "http://swapi.dev/api/people/62/"
  ],
  films: [
      "http://swapi.dev/api/films/1/",
      "http://swapi.dev/api/films/3/",
      "http://swapi.dev/api/films/4/",
      "http://swapi.dev/api/films/5/",
      "http://swapi.dev/api/films/6/"
  ],
  created: "2014-12-09T13:50:49.641000Z",
  edited: "2014-12-20T20:58:18.411000Z",
  url: "http://swapi.dev/api/planets/1/"
};

describe('Card', () => {
  test('renders the right text', () => {
     const { getByText } = render(<Component planet={planet} />)
     expect(getByText('Tatooine')).toBeInTheDocument()
  })

  test('runs Router.push when card is clicked', () => {
    const { getByTestId } = render(<Component planet={planet} />)
    const card = getByTestId('card')

    fireEvent.click(card)

    const routerMock = jest.spyOn(Router, 'push')

    expect(routerMock).toHaveBeenCalledTimes(1)
 })
})