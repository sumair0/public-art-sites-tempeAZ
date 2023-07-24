import { geojsondata } from './GeoJSONData';
import type {FeatureCollection} from 'geojson';

const geojson: FeatureCollection = geojsondata;

function calculateInstallations(){

const artInstallationsPerYear: any = [];


geojsondata.features.forEach((element: any) => {

  const year = element.properties.Year_Sort_FirstYr;
  
  const existingYear = artInstallationsPerYear.find((item: any) => item.year === year);

  if (existingYear) {
    existingYear.numberofinstallations++;
  } else {
    artInstallationsPerYear.push({ year, numberofinstallations: 1 });
  }
});

const compareByYear = (a: any, b: any) => {
    return Number(a.year) - Number(b.year);
  };

artInstallationsPerYear.sort(compareByYear);

return artInstallationsPerYear;

}



export const artInstallationsPerYear = calculateInstallations();