import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import App from '../App.vue'

// Mock HelloWorld component
const HelloWorldStub = {
  template: '<div class="hello-world-stub"></div>',
  props: ['msg'],
}

describe('App.vue', () => {
  it('renders Vue logo image', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          HelloWorld: HelloWorldStub,
          RouterLink: RouterLinkStub,
          RouterView: true,
        },
      },
    })
    const img = wrapper.find('img.logo')
    expect(img.exists()).toBe(true)
    expect(img.attributes('alt')).toBe('Vue logo')
    expect(img.attributes('src')).toBeDefined()
  })

  it('renders HelloWorld component with correct msg', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          HelloWorld: HelloWorldStub,
          RouterLink: RouterLinkStub,
          RouterView: true,
        },
      },
    })
    const hello = wrapper.findComponent(HelloWorldStub)
    expect(hello.exists()).toBe(true)
    expect(hello.props('msg')).toBe('You did it!')
  })

  it('renders navigation links', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          HelloWorld: HelloWorldStub,
          RouterLink: RouterLinkStub,
          RouterView: true,
        },
      },
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.length).toBe(2)
    expect(links[0].props('to')).toBe('/')
    expect(links[1].props('to')).toBe('/about')
    expect(links[0].text()).toBe('Home')
    expect(links[1].text()).toBe('About')
  })

  it('renders RouterView', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          HelloWorld: HelloWorldStub,
          RouterLink: RouterLinkStub,
          RouterView: true,
        },
      },
    })
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })
})
