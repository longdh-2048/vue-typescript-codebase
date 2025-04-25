import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useCounterStore } from '../counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with a count of 0', () => {
    const counterStore = useCounterStore()
    expect(counterStore.count).toBe(0)
  })

  it('should compute doubleCount correctly', () => {
    const counterStore = useCounterStore()
    expect(counterStore.doubleCount).toBe(0)
    counterStore.count = 5
    expect(counterStore.doubleCount).toBe(10)
  })

  it('should increment the count', () => {
    const counterStore = useCounterStore()
    counterStore.increment()
    expect(counterStore.count).toBe(1)
  })
})
