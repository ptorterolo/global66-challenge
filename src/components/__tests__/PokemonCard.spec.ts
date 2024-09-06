import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PokemonCard from '../PokemonCard.vue'
describe('PokemonCard', () => {
  it('renders props.name when passed', () => {
    const name = 'Pikachu'
    const wrapper = mount(PokemonCard, {
      props: { name }
    })
    expect(wrapper.text()).toContain(name)
  })

  it('Icon should be orange if favorite', () => {
    const wrapper = mount(PokemonCard, {
      props: { isFavorite: true }
    })

    const favIcon = wrapper.find('[data-testid="favIcon"]')
    expect(favIcon.classes()).toContain('text-orange-400')
  })

  it('Icon should be gray if not favorite', () => {
    const wrapper = mount(PokemonCard, {
      props: { isFavorite: false }
    })

    const favIcon = wrapper.find('[data-testid="favIcon"]')
    expect(favIcon.classes()).toContain('text-gray-300')
  })

  it('emits handleFavorite event when button is clicked', async () => {
    const wrapper = mount(PokemonCard)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted().handleFavorite).toBeTruthy()
  })
})
