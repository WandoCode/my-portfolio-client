import { describe, test, expect, beforeEach, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import MockLanguageProvider from '../../__mock__/Language/MockLanguageProvider'
import Contact from '../../../components/Home/Contact/Contact'
import contactStore from '../../../stores/contact'
import userEvent from '@testing-library/user-event'

describe('Given I use the Contact component', () => {
  beforeEach(() => {
    render(
      <MockLanguageProvider lang="fr">
        <Contact />
      </MockLanguageProvider>
    )
  })

  test('Then it should have at least inputs for name, message and email', () => {
    const name = screen.getByLabelText('Nom', { exact: false })
    const message = screen.getByLabelText('Email', { exact: false })
    const email = screen.getByLabelText('Message', { exact: false })

    expect(name).toBeDefined()
    expect(message).toBeDefined()
    expect(email).toBeDefined()
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

describe('Given I use the Contact component', () => {
  describe('When I complete the form correctly BUT submit it too quickly (less than a few seconds after the page loaded),', () => {
    test('Then it should NOT call the "postMessage" method of the contactStore', async () => {
      const dateInit = 123456789
      const dateEnd = dateInit + 10

      vi.spyOn(Date, 'now')
        .mockImplementationOnce(() => dateInit)
        .mockImplementation(() => dateEnd)

      const spy = vi.spyOn(contactStore, 'postMessage')

      render(
        <MockLanguageProvider lang="fr">
          <Contact />
        </MockLanguageProvider>
      )

      const nameInput = screen.getByLabelText('Nom', { exact: false })
      const emailInput = screen.getByLabelText('Email', { exact: false })
      const messageInput = screen.getByLabelText('Message', { exact: false })
      const submitBtn = screen.getByRole('button')

      await act(async () => {
        await userEvent.type(nameInput, 'Nom test')
        await userEvent.type(messageInput, 'Message test')
        await userEvent.type(emailInput, 'email@test.be')

        await userEvent.click(submitBtn)
      })

      expect(spy).not.toHaveBeenCalled()
    })
  })
})

describe('Given I complete the form of the Contact component correctly and submit the form more than a few second after the page loaded, ', () => {
  let component: any
  let spy: any
  let nameInput: any
  let emailInput: any
  let messageInput: any
  let submitBtn: any
  let phoneInput: any

  beforeEach(() => {
    const dateInit = 123456789
    const dateEnd = dateInit + 5500

    vi.spyOn(Date, 'now')
      .mockImplementationOnce(() => dateInit)
      .mockImplementation(() => dateEnd)

    spy = vi.spyOn(contactStore, 'postMessage')

    component = render(
      <MockLanguageProvider lang="fr">
        <Contact />
      </MockLanguageProvider>
    )

    nameInput = screen.getByLabelText('Nom', { exact: false })
    emailInput = screen.getByLabelText('Email', { exact: false })
    messageInput = screen.getByLabelText('Message', { exact: false })
    phoneInput = screen.getByLabelText('phone', { exact: false })

    submitBtn = screen.getByRole('button')
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('Then it should call the "postMessage" method of the contactStore', async () => {
    await act(async () => {
      await userEvent.type(nameInput, 'Nom test')
      await userEvent.type(messageInput, 'Message test')
      await userEvent.type(emailInput, 'email@test.be')

      await userEvent.click(submitBtn)
    })

    expect(spy).toHaveBeenCalled()
  })

  describe('When the honeypot field is filled (phone field),', () => {
    test('Then it should not call the "postMessage" method of the contactStore', async () => {
      await act(async () => {
        await userEvent.type(nameInput, 'Nom test')
        await userEvent.type(messageInput, 'Message test')
        await userEvent.type(emailInput, 'email@test.be')
        await userEvent.type(phoneInput, 'spam robot')

        await userEvent.click(submitBtn)
      })

      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('When the submit is processing', () => {
    test('Then it should be visible by the button text', async () => {
      spy.mockImplementation(async () => ({
        isSuccessfull: true,
        message: 'ok',
      }))

      await act(async () => {
        await userEvent.type(nameInput, 'Nom test')
        await userEvent.type(messageInput, 'Message test')
        await userEvent.type(emailInput, 'email@test.be')

        await userEvent.click(submitBtn)
      })

      expect(spy).toHaveBeenCalled()
    })
  })
})
