import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheWelcome from '../TheWelcome.vue'
import DocumentationIcon from '../icons/IconDocumentation.vue'

describe('TheWelcome.vue', () => {
  it('renders DocumentationIcon', () => {
    const wrapper = mount(TheWelcome)
    // Find the DocumentationIcon component
    const docIcon = wrapper.findComponent(DocumentationIcon)
    expect(docIcon.exists()).toBe(true)
  })

  it('renders the Documentation section with correct heading', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.text()).toContain('Documentation')
    expect(wrapper.html()).toContain('official documentation')
  })
})
