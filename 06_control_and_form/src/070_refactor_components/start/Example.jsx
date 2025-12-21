import { useState } from "react";
import AnimalsList from "./Components/AnimalsList";
import AnimalFilter from "./Components/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filteredAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  })

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]}/>
      <AnimalsList animals={filteredAnimals} />
    </>
  );
};

export default Example;
