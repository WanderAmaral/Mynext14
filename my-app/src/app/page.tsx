'use client';

import { useState } from 'react';

type DataPeoplesProps = {
  id: number;
  name: string;
  age: number;
};

export default function Home() {
  const [rowSelect, setRowSelect] = useState<DataPeoplesProps | null>(null);

  const data = [
    {
      id: 1,
      name: 'wander',
      age: 23
    },
    {
      id: 2,
      name: 'joao',
      age: 20
    }
  ];
  const handleclick = (data: DataPeoplesProps) => {
    setRowSelect(data);
  };

  // const [name, setName] = useState<string>('');
  // const [boolean, setBoolean] = useState<boolean>();
  // const [userId, setUserId] = useState<number | null>();

  return (
    <div>
      <p className="text-center mb-5 mt-10">{rowSelect?.name}</p>

      <div className="text-center flex-col font-semibold flex gap-4 w-full-[100%] justify-center items-center">
        {data.map((datapeoples) => (
          <div
            className="border-2 border-[#22c55e] border-solid hover:border-dotted bg-clip-text w-[30%] "
            key={datapeoples.id}
            style={{ cursor: 'pointer' }}
            onClick={() => handleclick(datapeoples)}
          >
            name: {datapeoples.name} - idade: {datapeoples.age}
          </div>
        ))}
      </div>
    </div>
  );
}
