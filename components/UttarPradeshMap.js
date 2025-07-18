import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const districtGeoUrl =
  "https://raw.githubusercontent.com/geohacker/india/master/district/india_district.geojson";

export default function UttarPradeshMap() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 4000, center: [81, 27] }}
      width={800}
      height={700}
    >
        <Geographies geography={districtGeoUrl}>
        {({ geographies }) => {
            const upGeos = geographies.filter(
            (geo) => geo.properties.NAME_1 === "Uttar Pradesh"
            );

            return upGeos.map((geo) => (
            <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                default: {
                    fill: "#E0F7FA",
                    stroke: "#00796B",
                    strokeWidth: 0.5,
                    outline: "none",
                },
                hover: { fill: "#4DD0E1", cursor: "pointer" },
                pressed: { fill: "#00ACC1" },
                }}
            />
            ));
        }}
        </Geographies>


      <Marker coordinates={[81, 27]}>
        <text
          textAnchor="middle"
          fill="#00796B"
          fontSize={16}
          fontWeight="bold"
        >
          Uttar Pradesh
        </text>
      </Marker>
    </ComposableMap>
  );
}
