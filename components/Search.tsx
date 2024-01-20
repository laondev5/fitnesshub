"use client";
import React, { useState, useEffect } from "react";
import { exerciseOption, youtubeOptions, fetchData } from "@/utility/FetchData";
import Container from "./Container";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import axios from "axios";

const Search = ({bodyPart, setBodypart, execises, setExercises}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyparts] = useState<[]>([]);

  const bodyPartUrl: string =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

  const {
    data: bodyPartData,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["part"],
    queryFn: async () => {
      const dataResponse = await axios.get(bodyPartUrl, exerciseOption);
      //console.log(dataResponse.data)
      setBodyparts(["all", ...dataResponse.data]);
      return dataResponse.data;
    },
  });
  console.log(bodyParts);

  // const handelSearch = async ()=>{
  //     if(search){
  //          const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption)
  //          setExercises(exercisesData)

  // const searchedExercises = exercisesData?.filter(
  //     (exercises) => exercises.name.toLowerCase().includes(search)
  //     || exercises.target.toLowerCase().includes(search)
  //     || exercises.equipment.toLowerCase().includes(search)
  //     || exercises.bodyPart.toLowerCase().includes(search)
  // );

  // setSearch('')
  // setExercises(searchedExercises)
  //     }
  // }
  return (
    <Container>
      <div className="flex space-x-2 mx-auto my-4">
        <Input
          type="text"
          placeholder="Search for exercise"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="w-[50rem]"
        />
        <Button variant="secondary" size="icon">
          <SearchIcon className="w-6 h-6" />
        </Button>
      </div>
      <HorizontalScrollBar data = {bodyParts} bodyPart={bodyPart} setBodypart={setBodypart} setExercises={setExercises} isBodyPart />
    </Container>
  );
};

export default Search;
