export interface  MyPokemonProps {
  nickname: string;
  name: string;
  type: Array<{
    name: string;
    url: string;
  }>;
  sprite: string;
  moves: Array<string>;
  color: string;
};

export interface ListPokemonProps {
  name: string
  url: string
}