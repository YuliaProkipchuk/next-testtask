import { Vehicle } from '../interface';

export default function VehicleCard({
  vehicle,
  year,
}: {
  vehicle: Vehicle;
  year: string;
}) {
  return (
    <div className="rounded border-2 border-black ">
      <div className="w-full h-20 bg-gray-400"></div>
      <div className="p-2">
        <p className="text-center font-semibold">{vehicle.Make_Name}</p>
        <hr />
        <p>{vehicle.Model_Name}</p>
        <span className="text-sm text-gray-500 font-bold">{year}</span>
      </div>
    </div>
  );
}
