import { beforeEach, describe, test, expect } from 'vitest'
import Tag from '../../../components/HomeSections/ProjectsSection/Tag/Tag'
import { render, screen } from '@testing-library/react'
import mockedProjectsDatas from '../../__mock__/datas/mockedProjects.json'
import { rgbToHex } from '../../../utils/helpers/string'

const mockedTagDatas = mockedProjectsDatas.projects[0].tags[0]
const classNameTest = 'tag-class'
describe('Given the Tag component is used', () => {
  beforeEach(() => {
    render(
      <Tag
        color={mockedTagDatas.color}
        text={mockedTagDatas.text}
        tagClassName={classNameTest}
      />
    )
  })

  test('It should have text from datas', () => {
    const tag = screen.getByText(mockedTagDatas.text)

    expect(tag).toBeDefined()
  })

  test('It should have the color as background-color', () => {
    const tag = screen.getByText(mockedTagDatas.text)

    expect(rgbToHex(tag.style.backgroundColor)).toBe(
      mockedTagDatas.color.toLowerCase()
    )
  })

  test('It should have the given classname', () => {
    const tag = screen.getByText(mockedTagDatas.text)

    expect(tag.className).toBe(classNameTest)
  })
})
