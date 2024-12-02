import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from './data'; // Adjust the import according to your data location
import SubCard1 from '../ServiceDetails/SubCard1';
import SubCard2 from '../ServiceDetails/SubCard2';
import SubCard3 from '../ServiceDetails/SubCard3';
import SubCard4 from '../ServiceDetails/SubCard4';
import SubCard5 from '../ServiceDetails/SubCard5';
import SubCard6 from '../ServiceDetails/SubCard6';
import SubCard7 from '../ServiceDetails/SubCard7';
import SubCard8 from '../ServiceDetails/SubCard8';
import SubCard9 from '../ServiceDetails/SubCard9';
import SubCard10 from '../ServiceDetails/SubCard10';
import SubCard11 from '../ServiceDetails/SubCard11';
import SubCard12 from '../ServiceDetails/SubCard12';
import SubCard13 from '../ServiceDetails/SubCard13';
import SubCard14 from '../ServiceDetails/SubCard14';
import SubCard15 from '../ServiceDetails/SubCard15';


const SubCardPage = () => {
  const { id } = useParams(); 
  const service = servicesData.find(service => service.id === parseInt(id)); // Find the corresponding service

  const subCardComponents = {
    1: SubCard1,
    2: SubCard2,
    3: SubCard3,
    4: SubCard4,
    5: SubCard5,
    6: SubCard6,
    7: SubCard7,
    8: SubCard8,
    9: SubCard9,
    10: SubCard10,
    11: SubCard11,
    12: SubCard12,
    13: SubCard13,
    14: SubCard14,
    15: SubCard15
  };

  if (!service) {
    return <div>Service not found</div>; // Handle the case where the service does not exist
  }

  const SubCardComponent = subCardComponents[service.id];

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold">{service.title}</h1> */}
      {SubCardComponent ? <SubCardComponent /> : <div>No details available</div>}
      {/* You can also include more details about the service here */}
    </div>
  );
};

export default SubCardPage;
