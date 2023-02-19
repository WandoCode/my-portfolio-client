import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import NavLinks from '../../../components/HomeSections/HeaderSection/NavLinks/NavLinks'
import mockedMainDatas from '../../__mock__/datas/mockedMainDatas.json'

const navText = mockedMainDatas.headings.fr
const mockedOnCloseNav = vi.fn()

describe('Given I use the Navlinks component', () => {
  beforeEach(() => {
    render(
      <NavLinks
        currentSection="hero"
        language="fr"
        navText={navText}
        onCloseNav={mockedOnCloseNav}
      />
    )
  })

  test('It should have as much links that heading in navText prop', () => {
    const links = screen.getAllByRole('link')

    expect(links.length).toBe(Object.keys(navText).length)
  })

  test('Each link should use an id', () => {
    const links: HTMLAnchorElement[] = screen.getAllByRole('link')

    links.forEach((link) => expect(link.href).toMatch(/#\w/i))
  })

  test('it should have a "slider" element', () => {
    const slider = screen.getByTestId('slider')

    expect(slider).toBeDefined()
  })
})
