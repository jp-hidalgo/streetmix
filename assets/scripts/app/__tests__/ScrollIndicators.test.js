/* eslint-env jest */
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithIntl as render } from '../../../../test/helpers/render'
import ScrollIndicators from '../ScrollIndicators'

const baseProps = {
  left: 1,
  right: 3,
  scrollStreet: jest.fn()
}

describe('ScrollIndicators', () => {
  it('renders snapshot', () => {
    const wrapper = render(<ScrollIndicators {...baseProps} />)
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('renders snapshot for zero indicators', () => {
    const wrapper = render(
      <ScrollIndicators {...baseProps} left={0} right={0} />
    )
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('handles scroll left on click', () => {
    const scrollStreet = jest.fn()
    const wrapper = render(
      <ScrollIndicators {...baseProps} scrollStreet={scrollStreet} />
    )

    fireEvent.click(wrapper.getByText('‹'))

    expect(scrollStreet).toBeCalled()
  })

  it('handles scroll right on click', () => {
    const scrollStreet = jest.fn()
    const wrapper = render(
      <ScrollIndicators {...baseProps} scrollStreet={scrollStreet} />
    )

    fireEvent.click(wrapper.getByText('›››'))

    expect(scrollStreet).toBeCalled()
  })

  // TODO: figure out how to make keypress tests work
  it.skip('handles scroll left on keypress', () => {
    const scrollStreet = jest.fn()
    render(<ScrollIndicators {...baseProps} scrollStreet={scrollStreet} />)

    fireEvent.keyDown(window, { key: 'ArrowLeft', code: 37 })

    expect(scrollStreet).toBeCalled()
  })

  it.todo('handles scroll right on keypress')
})
