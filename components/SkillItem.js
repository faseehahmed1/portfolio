import Image from 'next/image'
import React from 'react'

export default function Skilltable({item}) {
  return (
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image
                src={`/assets/skills/${item.img}.png`}
                alt="skills"
                width={"64"}
                height={"64"}
              ></Image>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>{item.skill}</h3>
            </div>
          </div>
        </div>
  );
}

