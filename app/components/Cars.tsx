import { fetchVehiclesByModelAndYear } from "../actions/actions";
import { Vehicle } from "../interface";
import VehicleCard from "./VehicleCard";
interface Props{
    makeId:string;
    year:string
}
export default async function Cars({makeId, year}:Props){
    const data = await fetchVehiclesByModelAndYear(makeId, year);
  const cars: Vehicle[] = Array.from(new Set(data.map((c) => c.Model_ID))).map(
    (id) => data.find((c) => c.Model_ID === id) as Vehicle
  );
  console.log(cars);

  return (
    <>
      <div className="grid w-3/4 m-auto grid-cols-3 gap-4">
        {cars &&
          cars.map((car) => (
            <VehicleCard key={car.Model_ID} vehicle={car} year={year} />
          ))}
      </div>
    </>
  );
}