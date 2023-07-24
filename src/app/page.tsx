"use client";

import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, Text, Metric, LineChart } from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { Flex, Title, Icon, TabGroup, TabList, Tab, AreaChart, Color } from "@tremor/react";
import { useState } from "react";
import Map, {Source, Layer} from 'react-map-gl';
import type {CircleLayer, SymbolLayer} from 'react-map-gl';
import type {FeatureCollection} from 'geojson';
import { geojsondata } from './GeoJSONData';
import Image from 'next/image';
import { artInstallationsPerYear } from './util';


const geojson: FeatureCollection = geojsondata;

const layerStyle: CircleLayer = {
  id: 'point',
  type: 'circle',
  source: 'my-data',
  paint: {
    'circle-radius': 5,
    'circle-color': 'red',
    'circle-blur': 1
  }
};

const dataFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}`;

export default function Home() {

  return (
    <main>
      <div className="flex flex-col">
        <div className='flex flex-row text-2xl justify-center text-center py-5 text-[#0B406A]'>
          <Image
            src="/636332012702870000.jpeg"
            width={200}
            height={200}
            alt="Tempe"
          />
          <div className='justify-center content-center text-4xl pt-9 font-bold'>public art sites</div>
      </div>
      <div className='flex flex-col m-5'>
        <div className='py-3'><Map
          mapboxAccessToken="pk.eyJ1Ijoic3VtYWlyMCIsImEiOiJjbGtlYm9nM3AweHdzM2RwanduOTl6c3FmIn0.61tqkwdsJhj7jdWrfCKqzA"
          initialViewState={{
          longitude: -111.929219,
          latitude: 33.417381,
          zoom: 14.5
          }}
          style={{height: 400, borderRadius:10}}
          mapStyle="mapbox://styles/sumair0/clkekdair001t01pxdhy07bkc"
        >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
        </Map>
        </div>
        <Card className='border-none'>
          <Title>Public Art Installations by Year in Tempe</Title>
          <LineChart
            className="mt-6"
            data={artInstallationsPerYear}
            index="year"
            categories={["numberofinstallations"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
            showAnimation={true}
          />
        </Card>
      </div>
      
    </div>
     
    
  </main>
  )
}
