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

    const urlRegEx = new RegExp(`${mockedSkillData.urlIcon}`, 'gi')
    console.log(img.src)
    console.log(mockedSkillData.urlIcon)
    expect(img).toBeDefined()
    expect(mockedSkillData.urlIcon).toMatch(img.src)
  })
})
