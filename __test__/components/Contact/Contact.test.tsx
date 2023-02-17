import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import MockLanguageProvider from '../../__mock__/Language/MockLanguageProvider'
import Contact from '../../../components/Home/Contact/Contact'

describe('Given I use the Contact component', () => {
  beforeEach(() => {
    render(
      <MockLanguageProvider lang="fr">
        <Contact />
      </MockLanguageProvider>
    )
  })

  test('Then the form should have an honeypot named "phone" hidden', () => {
    const honeypot = screen.getByRole('textbox', { name: /phone/i })

    const zIndex = honeypot.getAttribute('tabIndex')
    const autocomplete = honeypot.getAttribute('autocomplete')

    expect(honeypot).toBeDefined()
    expect(zIndex).toBe('-1')
    expect(autocomplete).toBe('off')
  })
})
