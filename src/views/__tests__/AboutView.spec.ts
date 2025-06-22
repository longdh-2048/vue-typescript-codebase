import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AboutView from '../AboutView.vue'

describe('AboutView.vue', () => {
  it('renders the about page heading', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.find('h1').text()).toBe('This is an about page')
  })

  it('has the correct class on the root div', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.find('div.about').exists()).toBe(true)
  })
})
