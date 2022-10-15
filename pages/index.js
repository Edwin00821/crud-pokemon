import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ListOfPokemons from "../components/ListOfPokemons";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function Home({
  pokemonContext = [
    {
      id_poke: 1,
      name_poke: "bulbasaur",
      weight_poke: 69,
      height_poke: 7,
      ability: "overgrow",
      img_poke:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      types: [],
      stats: [],
    },
  ],
}) {
  const [pokemons, setPokemons] = useState(pokemonContext);
  const router = useRouter();

  useEffect(() => {
    const fetchPokemons = async (id) => {
      try {
        const [data] = await axios.get("/api/pokemons/" + id);
        setPokemons(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (router.query?.id) {
      fetchPokemons(router.query.id);
    }
    console.log("called");
  }, [router.query.id]);

  return (
    <div className="min-h-screen bg-[#282c34]  ">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl text-white text-center">Pokedex</h1>
      <h2 className="mt-4 text-white text-center">
        Astudillo Perez Edwin Uriel
      </h2>
      <Link href="/newPokemon">
        <a className="p-4 flex gap-5 items-center justify-items-center justify-center ">
          <AiOutlinePlusSquare color="white" size={40} />
          <p className="text-white">Agregar Pokemon</p>
        </a>
      </Link>
      <ListOfPokemons pokemons={pokemons} className="" />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { data: pokemonContext } = await axios.get(
    "http://localhost:3000/api/pokemons"
  );
  return {
    props: {
      pokemonContext,
    },
  };
};
// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
