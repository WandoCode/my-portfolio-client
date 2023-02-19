import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../../../components/HomeSections/AboutSection/About'
import mockedMainDatas from '../../__mock__/datas/mockedMainDatas.json'

const aboutDatas = mockedMainDatas.about

describe('Given the About component is used', () => {
  describe('When the "fr" language is selected', () => {
    test('It should display datas from the french part of the datas', async () => {
      render(<About aboutDatas={aboutDatas} language="fr" />)
      const textA = await screen.findByText(aboutDatas.text1.fr)
      const textB = await screen.findByText(aboutDatas.text2.fr)

      expect(textA).toBeDefined()
      expect(textB).toBeDefined()
    })
  })
  describe('When the "es" language is selected', () => {
    test('It should display datas from the spanish part of the datas', async () => {
      render(<About aboutDatas={aboutDatas} language="es" />)
      const textA = await screen.findByText(aboutDatas.text1.es)
      const textB = await screen.findByText(aboutDatas.text2.es)

      expect(textA).toBeDefined()
      expect(textB).toBeDefined()
    })
  })
  describe('When the "en" language is selected', () => {
    test('It should display datas from the english part of the datas', async () => {
      render(<About aboutDatas={aboutDatas} language="en" />)
      const textA = await screen.findByText(aboutDatas.text1.en)
      const textB = await screen.findByText(aboutDatas.text2.en)

      expect(textA).toBeDefined()
      expect(textB).toBeDefined()
    })
  })

  test('It should display an image with a given alt text', async () => {
    render(<About aboutDatas={aboutDatas} language="fr" />)
    const image: HTMLImageElement = await screen.findByAltText(
      aboutDatas.img.alt
    )

    expect(image).toBeDefined()
    expect(image.src).toMatch(aboutDatas.img.link.split('/')[1])
  })
})
