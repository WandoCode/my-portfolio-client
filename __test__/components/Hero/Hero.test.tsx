import { beforeEach, describe, test, expect } from 'vitest'
import Hero from '../../../components/HomeSections/HeroSection/Hero'
import { render, screen } from '@testing-library/react'
import mockedMainDatas from '../../__mock__/datas/mockedMainDatas.json'

const mockedHeroDatas = mockedMainDatas.hero

describe('Given I use the Hero component with the french language,', () => {
  beforeEach(() => {
    render(<Hero heroDatas={mockedHeroDatas} language="fr" />)
  })
  test('It should contain 2 links (1 for download, 1 for link to contact)', () => {
    const links: HTMLAnchorElement[] = screen.getAllByRole('link')

    expect(links.length).toBe(2)
  })
  test('It should contain 1 link to a pdf', () => {
    const links: HTMLAnchorElement[] = screen.getAllByRole('link')

    const pdfLink = links.find((links) => links.href.match(/.pdf/i))

    expect(pdfLink).toBeDefined()
  })

  test('It should contain 1 link to an id', () => {
    const links: HTMLAnchorElement[] = screen.getAllByRole('link')

    const idLink = links.find((links) => links.href.match(/#\w/i))

    expect(idLink).toBeDefined()
  })
  test('It should have a title (in french)', () => {
    const title = screen.getByText(mockedHeroDatas.title.fr)

    expect(title).toBeDefined()
  })
})
