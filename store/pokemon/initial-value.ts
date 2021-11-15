interface ListPokemonStarterProps {
  name: string;
}

export const ListPokemonStarterData: Array<ListPokemonStarterProps> = [
  {
    name: "charizard",
  },
  {
    name: "blastoise"
  },
  {
    name: "scizor"
  },
  {
    name: "mewtwo"
  }
]

export interface DetailPokemonStarterProps {
  name: string,
  type: Array<{
    name: string,
    url: string
  }>,
  sprite: string,
}

export const DetailPokemonStarter: DetailPokemonStarterProps = {
  name: '',
  type: [{
    name: '',
    url: ''
  }],
  sprite: '',
}

export interface DetailPokemonProps {
  name: string,
  type: Array<{
    name: string,
    url: string
  }>,
  sprite: string,
  moves: Array<string>
}

export const DetailPokemon: DetailPokemonProps = {
  name: '',
  type: [{
    name: '',
    url: ''
  }],
  sprite: '',
  moves: ['']
}