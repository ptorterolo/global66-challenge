// PokemonModal.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import PokemonModal from '@/components/PokemonModal.vue'
import IconClose from '@/components/icons/IconClose.vue'
import IconFav from '@/components/icons/IconFav.vue'

describe('PokemonModal.vue', () => {
  const pokemon = {
    name: 'pikachu',
    weight: 60,
    height: 4,
    types: [{ type: { name: 'electric' } }],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        }
      }
    },
    favorite: true
  }

  it('should render pokemon data correctly', () => {
    const wrapper = mount(PokemonModal, {
      props: { pokemon }
    })

    expect(wrapper.find('img').attributes('src')).toBe(
      pokemon.sprites.other['official-artwork'].front_default
    )
    expect(wrapper.find('img').attributes('alt')).toBe(pokemon.name)
    expect(wrapper.text()).toContain(pokemon.name)
    expect(wrapper.text()).toContain(pokemon.weight)
    expect(wrapper.text()).toContain(pokemon.height)
    expect(wrapper.text()).toContain('electric')
  })

  it('should emits close event when close button is clicked', async () => {
    const wrapper = mount(PokemonModal, {
      props: { pokemon }
    })

    await wrapper.findComponent(IconClose).trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('should emit handleFavorite event when favorite button is clicked', async () => {
    const wrapper = mount(PokemonModal, {
      props: { pokemon }
    })

    await wrapper.findComponent(IconFav).trigger('click')
    expect(wrapper.emitted().handleFavorite).toBeTruthy()
  })
})
