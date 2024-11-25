import { fetchData } from '@/app/actions/actions';
import Cars from '@/app/components/Cars';
import { VehicleType } from '@/app/interface';

import { Suspense } from 'react';
const YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

export async function generateStaticParams() {
  const data = (await fetchData()).Results as VehicleType[];
  const ids = data.map((d) => d.MakeId);
  return ids.flatMap((id) =>
    YEARS.map((year) => ({
      makeId: id.toString(),
      year: year.toString(),
    })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = await params;

  const cars = (await fetchData()).Results as VehicleType[];
  const car = cars.find((c) => c.MakeId === +makeId);
  return {
    title: `${car?.MakeName} - ${year}`,
  };
}
export default async function VehiclesPage({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = await params;
  return (
    <>
      <h2 className="font-bold text-2xl text-center my-3">All results</h2>
      <Suspense key={`${makeId}${year}`} fallback={<p>Loading...</p>}>
        <Cars makeId={makeId} year={year} />
      </Suspense>
    </>
  );
}
