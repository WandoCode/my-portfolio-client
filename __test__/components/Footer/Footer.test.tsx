import { describe, test, expect } from 'vitest'
import { getByRole, render, screen } from '@testing-library/react'
import mockedMainDatas from '../../__mock__/datas/mockedMainDatas.json'
import Footer from '../../../components/HomeSections/FooterSection/Footer'

const footerDatas = mockedMainDatas.footer

describe('Given the Footer component is used', () => {
  test('It should display all the link from the datas (medias)', async () => {
    render(<Footer footerDatas={footerDatas} />)

    const mediasLinks: HTMLAnchorElement[] = screen.getAllByRole('link')

    const altTextFromDatas = footerDatas.medias.map(
      (mediaData) => mediaData.link
    )

    expect(mediasLinks.length).toBe(footerDatas.medias.length)
    mediasLinks.forEach((media) =>
      expect(altTextFromDatas).toContain(media.href)
    )
  })
})
