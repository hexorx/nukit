import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppLogo from './AppLogo.vue'

describe('AppLogo', () => {
  it('renders an SVG element', async () => {
    const wrapper = await mountSuspended(AppLogo)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct viewBox dimensions', async () => {
    const wrapper = await mountSuspended(AppLogo)
    const svg = wrapper.find('svg')
    expect(svg.attributes('viewBox')).toBe('0 0 1020 200')
  })
})
