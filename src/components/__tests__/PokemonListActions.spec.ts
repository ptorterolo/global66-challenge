import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { mount } from '@vue/test-utils'
import PokemonListActions from '../PokemonListActions.vue'
describe('PokemonCard', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('emits handleFavorite event when button is clicked', async () => {
    const store = usePokemonStore()
    const wrapper = mount(PokemonListActions)
    await wrapper.find('[data-testid="toggleShowFavorites"]').trigger('click')
    expect(wrapper.emitted().toggleShowFavorites).toBeTruthy()
  })
})
