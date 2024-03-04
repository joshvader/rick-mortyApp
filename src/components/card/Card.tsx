import { CardProps } from '../../types/types'
import React from 'react'


const Card = ({ results }: CardProps) => {
  let display: string | JSX.Element[]
 
  if (results) {
    display = results.map(x => {
      const { id, name, status, species, gender, origin, location, image } = x

      return (
        <div key={id} className="relative">
          <div className="flex   bg-[#33d86f] rounded-lg overflow-hidden md:flex-row">
          
            <div className="overflow-hidden">
              <img
                className="w-full h-[220px] object-cover hover:scale-[1.25] transition-[.6s] duration-[.6s] brightness-[.9]"
                src={image}
                alt=""
              />
            </div>
            <div className="p-[.5rem] flex flex-col gap-[.5rem]">
              <div>
                <div className="text-[16px] md:text-[20px] lg:text-[28px] font-bold">
                  {name}
                </div>
                <div className="flex gap-[.2rem]">
                  <div>{gender}</div>
                  <div> - </div>
                  <div>{species}</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#f35050]">Ultima locacion conocida:</div>
                <div className="text-[16px] lg:text-[20px]">
                  {location?.name}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#f35050]">Origen:</div>
                <div className="text-[16px] lg:text-[20px]">{origin?.name}</div>
              </div>
            </div>
            
          </div>

          
        </div>
      )
    })
  } else {
    display = 'Personaje no encontrado:/'
  }

  return <>{display}</>
}

export default Card