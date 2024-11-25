'use client';
import Link from 'next/link';
import { useState } from 'react';
import { VehicleType } from '../interface';

const YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

export default function FilterForm({ data }: { data: VehicleType[] }) {
  const [modelId, setModel] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  
  const isButtonDisabled = !modelId || !year;

  return (
    <form className=" border rounded flex gap-14 flex-wrap w-3/5 items-center my-4 p-5 mx-auto">
      <div className="flex flex-col max-w-full m-2">
        <label className="font-bold text-xl" htmlFor="type">
          Vehicles Type
        </label>
        <select
          className="border focus:ring-1 focus:ring-inset focus:ring-gray-500 "
          name="type"
          id="type"
          onChange={(e) => {
            if (e.target.value !== 'not selected') setModel(e.target.value);
          }}
        >
          <option value="not selected">not selected</option>
          {data.map((car) => (
            <option key={car.MakeId} value={car.MakeId}>
              {car.MakeName}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col  max-w-full m-2">
        <label className="font-bold text-xl" htmlFor="type">
          Year
        </label>
        <select
          className="focus:ring-1 focus:ring-inset focus:ring-gray-500"
          name="year"
          id="year"
          onChange={(e) => {
            if (e.target.value !== 'not selected') setYear(e.target.value);
          }}
        >
          <option value="not selected">not selected</option>
          {YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        className="text-white border bg-black disabled:bg-opacity-50 rounded px-2 py-1"
        disabled={isButtonDisabled}
      >
        <Link href={`/result/${modelId}/${year}`}>Next</Link>
      </button>
    </form>
  );
}
