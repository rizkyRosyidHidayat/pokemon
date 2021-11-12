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