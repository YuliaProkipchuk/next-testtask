'use server';

import { Vehicle } from "../interface";

export async function fetchData() {
    const url = process.env.BASE_URL as string
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');

    }

}
export async function fetchVehiclesByModelAndYear(makeId: string, year: string) {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = (await response.json()).Results as Vehicle[];
    if (!data.length) throw new Error('Failed to fetch data')
    return data
}
