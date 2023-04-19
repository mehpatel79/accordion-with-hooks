import React, { useState } from "react";
import './flex-accordion.css';

const h3title = ["Vadodara Etymology", "Vadodara Geography","Vadodara Climate"];
const arraypanel = [];
arraypanel[0] = [];
arraypanel[1] = [`The city once was called Chandanavati after the rule of Chanda of the Dodiya Rajputs. The capital was also known as Virakshetra or Viravati (Land of Warriors). Later, it was known as Vadpatraka or Vadodará, and according to tradition, is a corrupt form of the Sanskrit word vatodar, meaning "in the belly of the banyan tree". It is, as of 2000, almost impossible to ascertain when the various changes in the name were made; early English travelers and merchants of the 18th century mention the town as Baroda,[8] and it is from this, that the name Baroda is derived; in 1974 (well after independence), the official name of the city was changed to Vadodara.`];
arraypanel[2] = [`Vadodara is located at 22.30°N 73.19°E in western India at an elevation of 128 ft (39 m). It is the 10th-largest city in India with an area of 400 km2 (150 sq mi) and a population of 3.5 million, according to the 2010–11 census. The city sits on the banks of the Vishwamitri River, in central Gujarat. The Vishwamitri frequently dries up in the summer, leaving only a small stream of water. The city is located on the fertile plain between the Mahi and Narmada Rivers. According to the Bureau of Indian Standards, the cosmopolis falls under seismic zone-III, on a scale of I to V (in order of increasing proneness to earthquakes).`];
arraypanel[3] = [`Vadodara features a borderline tropical savanna climate that despite the roughly 850 mm or 33 in of rain that the city receives annually is due to the area's high potential evapotranspiration very close to being classified as a hot semi-arid climate (BSh). There are three main seasons: summer, monsoon and winter. Aside from the monsoon season, the climate is dry. The weather is hot during March to July, when the average maximum is 39 °C or 102.2 °F, and the average minimum is 24 °C or 75.2 °F. From November to February, the average maximum temperature is 30 °C or 86 °F, the average minimum is 15 °C or 59 °F, and the climate is extremely dry. Cold northerly winds are responsible for mildly chilly days in January. The southwest monsoon brings a humid climate from mid-June to mid-September. The average rainfall is 85 cm (33 in), but infrequent, torrential rains cause the river to flood[10] like the 2005 Gujarat flood or the 2008 Indian floods, which were catastrophic.
The highest recorded temperature was 46.7 °C (116.1 °F) on 11 May 1960 crossed with 48.0 °C (118.4 °F) on 19 May 2016, while the lowest recorded temperature was −1.1 °C (30.0 °F) on 15 January 1935.`];

const Panel = ({activePanel}) =>{
    return(
        <>
            
            {h3title.map((index) => {
          
          return (
                    
                    <p>{arraypanel[activePanel]}</p> 

                );
          })}

            
            
            
            
        </>

    );
}
export default Panel;