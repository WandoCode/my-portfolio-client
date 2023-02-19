import { describe, test, expect, beforeEach } from 'vitest'
import mockedSkillsDatas from '../../__mock__/datas/mockedSkills.json'
import { render, screen } from '@testing-library/react'
import SkillItem from '../../../components/HomeSections/SkillsSection/SkillItem/SkillItem'

const mockedSkillData = mockedSkillsDatas.skills[0]

describe('Given the SkillItem component is used', () => {
  beforeEach(() => {
    render(<SkillItem datas={mockedSkillData} />)
  })

  test('It should be a li tag', () => {
    let skillComp = screen.getByRole('listitem')

    expect(skillComp.tagName).toBe('LI')
  })

  test('It should have a title with the text from datas', () => {
    let title = screen.getByRole('heading', { name: mockedSkillData.title })

    expect(title).toBeDefined()
  })

  test('It should have an img with src found in datas', () => {
    let img: HTMLImageElement = screen.getByRole('img', {
      name: mockedSkillData.title,
    })

    expect(img).toBeDefined()
    expect(mockedSkillData.urlIcon).toMatch(img.src)
  })

  test('It should have a "rating" (name = crossIcon.svg) image number equal to the rating in datas', () => {
    let imgs: HTMLImageElement[] = Array.from(
      screen.getAllByRole('img', {
        name: 'rating',
      })
    )

    imgs.forEach((image) => {
      expect(image.src).toMatch(/crossIcon.svg/)
    })
    expect(imgs.length).toBe(parseInt(mockedSkillData.rating, 10))
  })
})

describe('Given the SkillItem component is used', () => {
  describe('When the rating in data is negative,', () => {
    test('It should throw an error', () => {
      const dataCopy = JSON.parse(JSON.stringify(mockedSkillData))
      dataCopy.rating = '-1'

      expect(() => render(<SkillItem datas={dataCopy} />)).toThrow(
        'Skill rating should be a positive integer or zero.'
      )
    })
  })

  describe('When the rating in data is not a string number,', () => {
    test('It should throw an error', () => {
      const dataCopy = JSON.parse(JSON.stringify(mockedSkillData))
      dataCopy.rating = 'a'

      expect(() => render(<SkillItem datas={dataCopy} />)).toThrow(
        'Skill rating should be a positive integer or zero.'
      )
    })
  })
})
