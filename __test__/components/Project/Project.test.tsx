import { beforeEach, describe, test, expect } from 'vitest'
import Project from '../../../components/HomeSections/ProjectsSection/Project/Project'
import { render, screen, within } from '@testing-library/react'
import mockedProjectsDatas from '../../__mock__/datas/mockedProjects.json'

const mockedProjectDatas = mockedProjectsDatas.projects[0]

describe('Given I use the Project component with the french language,', () => {
  beforeEach(() => {
    render(<Project datas={mockedProjectDatas} side="left" language="fr" />)
  })

  test('It should have an image.', () => {
    const img = screen.getByRole('img', { name: mockedProjectDatas.altText })

    expect(img).toBeDefined()
  })
  test('It should have a title (h3)', () => {
    const title = screen.getByText(mockedProjectDatas.title)

    expect(title).toBeDefined()
    expect(title.tagName).toBe('H3')
  })
  test('It should display all the tags present in the datas file', () => {
    const tagList = screen.getByTestId('tags')
    const tags = Array.from(tagList.children)

    expect(tagList).toBeDefined()
    expect(tags.length).toBe(mockedProjectDatas.tags.length)
  })
  test('It should display 2 links', () => {
    const links = screen.getAllByRole('link')

    expect(links.length).toBe(2)
  })

  describe('When the side prop is left,', () => {
    render(<Project datas={mockedProjectDatas} side="left" language="fr" />)
    test('It should give a classname of "left" to the article', () => {
      const contentContainer = screen.getByTestId('projectContentContainer')
    })
  })
})
