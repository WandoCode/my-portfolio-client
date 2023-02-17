import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../../../components/Home/About/About'
import mockedMainDatas from '../../__mock__/datas/mockedMainDatas.json'
import MockLanguageProvider from '../../__mock__/Language/MockLanguageProvider'

const aboutDatas = mockedMainDatas.about

describe('Given the About component is used', () => {
  describe('When the "fr" language is selected', () => {
    test('It should display datas from the french part of the datas', async () => {
      render(
        <MockLanguageProvider lang="fr">
          <About aboutDatas={aboutDatas} />
        </MockLanguageProvider>
      )
      const textA = await screen.findByText(aboutDatas.text1.fr)
      const textB = await screen.findByText(aboutDatas.text2.fr)

      expect(textA).toBeDefined()
      expect(textB).toBeDefined()
    })
  })

  describe('When the "en" language is selected', () => {
    test('It should display datas from the english part of the datas', async () => {
      render(
        <MockLanguageProvider lang="en">
          <About aboutDatas={aboutDatas} />
        </MockLanguageProvider>
      )
      const textA = await screen.findByText(aboutDatas.text1.en)
      const textB = await screen.findByText(aboutDatas.text2.en)

      expect(textA).toBeDefined()
      expect(textB).toBeDefined()
    })
  })

  describe('When the "es" language is selected', () => {
    test('It should display datas from the spanish part of the datas', async () => {
      render(
        <MockLanguageProvider lang="es">
          <About aboutDatas={aboutDatas} />
        </MockLanguageProvider>
      )
      const textA = await screen.findByText(aboutDatas.text1.es)
      const textB = await screen.findByText(aboutDatas.text2.es)

      expect(textA).toBeDefined()
      expect(textB).toBeDefined()
    })
  })
})
