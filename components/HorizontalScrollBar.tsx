import React from 'react'
import { exerciseOption } from '@/utility/FetchData'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const HorizontalScrollBar = ({data, bodyPart, setBodypart, isBodyPart, setExercise}) => {
  const singleBoduPartUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart'

  
// console.log(bodyPart)
// if(!bodyPart == "all"){
//      const fetchBodyPart = async () => {
//       const dataResponse = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/${bodyPart}`, exerciseOption);
//       console.log(dataResponse.data)
//       return dataResponse.data;
//     }
//   fetchBodyPart()
// }
 
  return (
    <div className=" space-x-4 flex items-center w-full justify-center">
        {data.map((item, i)=>(
            <div key={i} onClick={()=>setBodypart(item)} className={bodyPart === item? 'bg-orange-600 text-white w-[18rem] text-center cursor-pointer my-2 rounded-md shadow-md transition-all ease-in-out py-2 px-4 duration-75' : 'w-[18rem]  py-2 px-4 text-center cursor-pointer my-2 rounded-md shadow-sm transition-all ease-in-out duration-75'}>
                {item}
            </div>
        ))}
    </div>
  )
}

export default HorizontalScrollBar