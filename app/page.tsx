import { fetchData } from './actions/actions';
import FilterForm from './components/FilterForm';
import { VehicleType } from './interface';

export default async function Home() {
  const data = (await fetchData()).Results as VehicleType[];
  return (
    <>
      <p className="text-center p-2 text-2xl">
        Please select vehicle type and model year
      </p>
      <FilterForm data={data} />
    </>
  );
}
