export interface Pokemon {
  url?: string
  name: string
  weight: number
  height: number
  types: PokemonTypes[]
  favorite?: boolean
}

export interface PokemonTypes {
  slot: number
  type: {
    name: string
  }
}
