import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Component from './index'

afterEach(cleanup)

const data = {
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

describe('PlanetDetail', () => {
  test('renders the right text', () => {
     const { getByText } = render(<Component data={data} />)

     expect(getByText('Tatooine')).toBeInTheDocument()
     expect(getByText('climate')).toBeInTheDocument()
     expect(getByText('population')).toBeInTheDocument()
     expect(getByText('orbital period')).toBeInTheDocument()
     expect(getByText('diameter')).toBeInTheDocument()
     expect(getByText('arid')).toBeInTheDocument()
     expect(getByText('200000')).toBeInTheDocument()
     expect(getByText('304')).toBeInTheDocument()
     expect(getByText('10465')).toBeInTheDocument()
     expect(getByText('back').href).toEqual('http://localhost/')

  })
})