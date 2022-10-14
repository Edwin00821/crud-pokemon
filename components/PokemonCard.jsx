import Image from "next/image";
import {
  getPokemonBgColor,
  getPokemonTxtColor,
} from "./../util/getPokemonColor";
import { FaWeight, FaRulerVertical } from "react-icons/fa";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import PokemonElement from "./PokemonElement";
import Stats from "./Stats";

export default function PokemonCard({
    id = 25,
    name = "Pikachu",
    weight = 60,
    height = 4,
    abilities = "Static",
    img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    types = [{ id_type: 1, name_type: "Electric" }],
    stats = {
      hp: 35,
      atk: 55,
      def: 40,
      sp_def: 50,
      sp_atk: 50,
      speed: 90,
    },
}) {
  
  return (
    <div className="h-full w-[22.5rem] bg-white shadow-2xl p-3 rounded-2xl">
      <section
        className={`${getPokemonBgColor(
          types[0].name_type
        )} rounded-2xl pb-2 relative`}
      >
        <div className="font-bold text-center text-white flex p-5 justify-between">
          <h2 className="text-2xl uppercase">{name}</h2>
          <p>#{id}</p>
          <AiOutlineEdit size={22} />
          <AiOutlineDelete size={22} />
        </div>
        <Image
          src="/images/Pokeball.png"
          alt="Pokeball"
          width={200}
          height={200}
          className="w-[12.5rem] h-[12.5rem] absolute top-3 right-3 z-0"
        />
        <div className="flex justify-center">
          <Image
            src={img}
            alt={name}
            width={200}
            height={200}
            className="-mt-5 -mb-20 w-[12.5rem] h-[12.5rem] z-10"
          />
        </div>
        <div className="bg-white mx-2 rounded-2xl p-5 pt-20">
          <PokemonElement types={types}/>
          <div>
            <h3
              className={`${getPokemonTxtColor(
                types[0].name_type
              )} font-bold text-center m-3 text-[1rem]`}
            >
              About
            </h3>
            <section className="grid grid-cols-3 text-black text-[0.625rem]">
              <div className="border-r-2">
                <div className="flex gap-3 items-center justify-center ">
                  <FaWeight />
                  <p>{Number(weight) / 10} kg</p>
                </div>
                <h3 className="text-[0.6rem]">Weight</h3>
              </div>
              <div className="border-r-2">
                <div className="flex gap-3 items-center justify-center ">
                  <FaRulerVertical />
                  <p>{Number(height) / 10} m</p>
                </div>
                <h3 className="text-[0.6rem]">Height</h3>
              </div>
              <div>
                <p className=" first-letter:uppercase">{abilities}</p>
                <h3 className="text-[0.6rem]">Abilitie</h3>
              </div>
            </section>
          </div>
          <Stats stats={stats} types={types} />
        </div>
      </section>
    </div>
  );
}
