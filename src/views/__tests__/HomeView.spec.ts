import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HomeView from '../HomeView.vue'
import TheWelcome from '@/components/TheWelcome.vue'

describe('HomeView.vue', () => {
  it('renders TheWelcome component', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.findComponent(TheWelcome).exists()).toBe(true)
  })
})
