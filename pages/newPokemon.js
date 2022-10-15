import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Formulario,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
  SelectBtn,
  SelectLi,
} from "../components/elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import toast from "react-hot-toast";

import Input from "../components/elementos/Input";
import Link from "next/link";

function NewPokemon() {
  const [state, setState] = useState({
    pokemonName: {
      field: "",
      valid: null,
    },
    image: {
      field: "",
      valid: null,
    },
    weight: {
      field: "",
      valid: null,
    },
    height: {
      field: "",
      valid: null,
    },
    abilitie: {
      field: "",
      valid: null,
    },
    hp: {
      field: "",
      valid: null,
    },
    atk: {
      field: "",
      valid: null,
    },
    def: {
      field: "",
      valid: null,
    },
    sp_atk: {
      field: "",
      valid: null,
    },
    sp_def: {
      field: "",
      valid: null,
    },
    spd: {
      field: "",
      valid: null,
    },
  });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const fetchPokemons = async (id) => {
      try {
        const { data } = await axios.get("/api/pokemons/" + id);
        const {
          id_poke,
          name_poke,
          weight_poke,
          height_poke,
          ability,
          img_poke,
          types,
          stats,
        } = data[0];
        console.log(data);
        const { hp, atk, def, sp_atk, sp_def, spd } = stats;
        setState({
          pokemonName: {
            field: id_poke,
            valid: "true",
          },
          image: {
            field: name_poke,
            valid: "true",
          },
          weight: {
            field: weight_poke,
            valid: "true",
          },
          height: {
            field: height_poke,
            valid: "true",
          },
          abilitie: {
            field: ability,
            valid: "true",
          },
          hp: {
            field: hp,
            valid: "true",
          },
          atk: {
            field: atk,
            valid: "true",
          },
          def: {
            field: def,
            valid: "true",
          },
          sp_atk: {
            field: sp_atk,
            valid: "true",
          },
          sp_def: {
            field: sp_def,
            valid: "true",
          },
          spd: {
            field: spd,
            valid: "true",
          },
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query?.id) {
      fetchPokemons(router.query.id);
    }
    console.log("called");
  }, [router.query.id]);

  const expresiones = {
    letras: /^[a-zA-Z\s]{4,25}$/, // Letras y espacios
    numeros: /^[0-9]+(.[0-9]+)?$/, // 1 a 3 numeros.
    url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    // url: /^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?].*)?$/, // URL
  };

  const handleSubmmit = async (e) => {
    const {
      pokemonName,
      weight,
      height,
      abilitie,
      hp,
      atk,
      def,
      sp_atk,
      sp_def,
      spd,
    } = state;

    e.preventDefault();

    try {
      if (
        pokemonName.valid === "true" &&
        weight.valid === "true" &&
        height.valid === "true" &&
        abilitie.valid === "true" &&
        hp.valid === "true" &&
        atk.valid === "true" &&
        def.valid === "true" &&
        sp_atk.valid === "true" &&
        sp_def.valid === "true" &&
        spd.valid === "true"
      ) {
        cambiarFormularioValido(true);
        setState({
          pokemonName: {
            field: "",
            valid: null,
          },
          weight: {
            field: "",
            valid: null,
          },
          height: {
            field: "",
            valid: null,
          },
          abilitie: {
            field: "",
            valid: null,
          },
          hp: {
            field: "",
            valid: null,
          },
          atk: {
            field: "",
            valid: null,
          },
          def: {
            field: "",
            valid: null,
          },
          sp_atk: {
            field: "",
            valid: null,
          },
          sp_def: {
            field: "",
            valid: null,
          },
          spd: {
            field: "",
            valid: null,
          },
          formValid: null,
        });
        if (router.query?.id) {
          await axios.put("/api/products/" + router.query.id, {
            name: product.name,
            description: product.description,
            price: product.price,
          });
          // toast.success("Task Updated", {
          //   position: "bottom-center",
          // });
        } else {
          await axios.post("/api/products", product);
          // toast.success("Task Saved", {
          //   position: "bottom-center",
          // });
        }

        router.push("/pokemons");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="p-5 min-h-screen bg-[#282c34]  ">
        <Link href={"/"}>
          <a>
            <h1 className="text-6xl text-white text-center">Pokedex</h1>
            <h2 className="text-white text-center">
              By Astudillo Perez Edwin Uriel
            </h2>
          </a>
        </Link>
        <Formulario
          action="/"
          onSubmit={handleSubmmit}
          className="grid grid-cols-2 gap-5"
        >
          <Input
            state={state}
            stateParticular={state.pokemonName}
            setState={setState}
            label="Nombre del pokemon"
            name={"pokemonName"}
            placeholder="Pikachu"
            leyendaError="El nombre del pokemon debe contener entre 4 y 25 caracteres"
            regExp={expresiones.letras}
          />

          <Input
            state={state}
            stateParticular={state.image}
            setState={setState}
            label="Imagen del pokemon"
            name={"image"}
            placeholder="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            leyendaError="La imagen debe ser una url"
            regExp={expresiones.url}
          />

          <Input
            state={state}
            stateParticular={state.weight}
            setState={setState}
            label="Peso"
            name={"weight"}
            placeholder="4 kg"
            leyendaError="El peso debe contener entre 4 y 12 caracteres"
            regExp={expresiones.numeros}
          />

          <Input
            state={state}
            stateParticular={state.height}
            setState={setState}
            label="Altura"
            name={"height"}
            placeholder="1 m"
            leyendaError="La altura debe contener entre 1 y 3 caracteres"
            regExp={expresiones.numeros}
          />

          <Input
            state={state}
            stateParticular={state.abilitie}
            setState={setState}
            label="Habilidad"
            name={"abilitie"}
            placeholder="Static"
            leyendaError="La habilidad debe contener entre 4 y 25 caracteres"
            regExp={expresiones.letras}
          />

          <Input
            state={state}
            stateParticular={state.hp}
            setState={setState}
            label="HP"
            name={"hp"}
            placeholder="35"
            leyendaError="El HP debe contener entre 1 y 3 digitos"
            regExp={expresiones.numeros}
          />

          <Input
            state={state}
            stateParticular={state.atk}
            setState={setState}
            label="Ataque"
            name={"atk"}
            placeholder="55"
            leyendaError="El ataque debe contener entre 4 y 12 caracteres"
            regExp={expresiones.numeros}
          />

          <Input
            state={state}
            stateParticular={state.def}
            setState={setState}
            label="Defensa"
            name={"def"}
            placeholder="40"
            leyendaError="La defensa debe contener entre 4 y 12 caracteres"
            regExp={expresiones.numeros}
          />

          <Input
            state={state}
            stateParticular={state.sp_atk}
            setState={setState}
            label="Ataque especial"
            name={"sp_atk"}
            placeholder="50"
            leyendaError="El ataque especial debe contener entre 4 y 12 caracteres"
            regExp={expresiones.numeros}
          />

          <Input
            state={state}
            stateParticular={state.sp_def}
            setState={setState}
            label="Defensa especial"
            name={"sp_def"}
            placeholder="50"
            leyendaError="La defensa especial debe contener entre 4 y 12 caracteres"
            regExp={expresiones.numeros}
          />

          <Input
            state={state}
            stateParticular={state.spd}
            setState={setState}
            label="Velocidad"
            name={"spd"}
            placeholder="90"
            leyendaError="La velocidad debe contener entre 4 y 12 caracteres"
            regExp={expresiones.numeros}
          />
          
          {formularioValido === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </MensajeError>
          )}
          <ContenedorBotonCentrado>
            <Boton type="submit">
              {router.query?.id ? "Actualizar Pokemon" : "Guardar Pokemon"}
            </Boton>
            {formularioValido === true && (
              <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
            )}
          </ContenedorBotonCentrado>
        </Formulario>
      </div>
    </>
  );
}
export default NewPokemon;

export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/pokemons");

  return {
    props: {
      pokemonContext: res.data,
    },
  };
};
