import Japan from "src/assets/images/japan.png";
import Scotland from "src/assets/images/scotland.png";
import Canada from "src/assets/images/canada.png";
import Spain from "src/assets/images/spain.png";
import Mexico from "src/assets/images/mexico.png";

export const countries = [
  {
    name: "canada",
    title: "Canada",
    src: Canada,
  },
  {
    name: "japan",
    title: "Japan",
    src: Japan,
  },
  {
    name: "mexico",
    title: "Mexico",
    src: Mexico,
  },
  {
    name: "scotland",
    title: "Scotland",
    src: Scotland,
  },
  {
    name: "spain",
    title: "Spain",
    src: Spain,
  },
];

const countryObject = (name: string) => {
  return countries.find((country) => country.name === name) ?? null;
};

export default countryObject;
