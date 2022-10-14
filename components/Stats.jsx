import {
  getBgGradient,
  getPokemonTxtColor,
  getPokemonBgColorOpacity,
  nameState,
  getWidth,
} from "./../util/getPokemonColor";
import { Fragment } from "react";

export default function Stats({ stats, types }) {
  return (
    <>
      <h3
        className={`font-bold text-center m-3 text-[1rem] ${getPokemonTxtColor(
          types[0].name_type
        )}`}
      >
        Base Stats
      </h3>
      <div className="grid grid-cols-3 gap-3 ">
        {stats.map(({ id, name, base_stat, }) => {
          return (
            <Fragment key={name}>
              <h3 className="text-right font-bold text-[0.625rem]">
                {nameState(name)}
              </h3>

              <h2 className="text-[0.625rem]">{base_stat}</h2>
              <div className={` w-ful rounded-full h-2.5 ${getPokemonBgColorOpacity(types[0].name_type)} `}>
                <div
                  className={`h-full rounded-full ${getBgGradient(
                    types[0].name_type
                  )}  w-1/2`}
                >

                </div>
              </div>
            </Fragment >
          );
        })}
      </div>
    </>
  );
}
