import { describe, test, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import About from '../../../components/Home/About/About'
import mockedMainDatas from '../../__mock__/datas/mockedMainDatas.json'
import MockLanguageProvider from '../../__mock__/Language/MockLanguageProvider'

const aboutDatas = mockedMainDatas.about

describe('Given the About component is used', () => {
  describe('When the "fr" language is selected', () => {
    render(
      <MockLanguageProvider lang="fr">
        <About aboutDatas={aboutDatas} />
      </MockLanguageProvider>
    )

    test('It should display datas from the french part of the datas', async () => {
      const textA = await waitFor(() => screen.queryByText(aboutDatas.text1.fr))
      const textB = await waitFor(() => screen.queryByText(aboutDatas.text2.fr))

      expect(textA).not.toBeNull()
      expect(textB).not.toBeNull()
    })
  })
})
