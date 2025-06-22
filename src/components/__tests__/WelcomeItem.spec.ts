import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WelcomeItem from '../WelcomeItem.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        heading: 'Main Content',
        icon: '<span class="icon">Icon</span>',
      },
    })
    expect(wrapper.text()).toContain('Main Content')
    expect(wrapper.html()).toContain('<span class="icon">Icon</span>')
  })
})
