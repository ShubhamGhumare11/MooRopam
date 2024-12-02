import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from './data'; // Adjust the import according to your data location
import USDservices1 from '../USDservices/USDsevices1';
import USDservices2 from '../USDservices/USDsevices2';
import USDservices3 from '../USDservices/USDsevices3';
import USDservices4 from '../USDservices/USDsevices4';
import USDservices5 from '../USDservices/USDsevices5';
import USDservices6 from '../USDservices/USDsevices6';
import USDservices7 from '../USDservices/USDsevices7';
import USDservices8 from '../USDservices/USDsevices8';
import USDservices9 from '../USDservices/USDsevices9';
import USDservices10 from '../USDservices/USDsevices10';
import USDservices11 from '../USDservices/USDsevices11';
import USDservices12 from '../USDservices/USDsevices12';
import USDservices13 from '../USDservices/USDsevices13';
import USDservices14 from '../USDservices/USDsevices14';
import USDservices15 from '../USDservices/USDsevices15';


const SubUsdCard = () => {
    const { id } = useParams();
    const service = servicesData.find(service => service.id === parseInt(id)); // Find the corresponding service

    const subUsdCardComponents = {
        1: USDservices1,
        2: USDservices2,
        3: USDservices3,
        4: USDservices4,
        5: USDservices5,
        6: USDservices6,
        7: USDservices7,
        8: USDservices8,
        9: USDservices9,
        10: USDservices10,
        11: USDservices11,
        12: USDservices12,
        13: USDservices13,
        14: USDservices14,
        15: USDservices15
    };

    if (!service) {
        return <div>Service not found</div>; // Handle the case where the service does not exist
    }

    const SubUsdCardComponent = subUsdCardComponents[service.id];

    return (
        <div className="p-4">
            {/* <h1 className="text-2xl font-bold">{service.title}</h1> */}
            {SubUsdCardComponent ? <SubUsdCardComponent /> : <div>No details available</div>}
            {/* You can also include more details about the service here */}
        </div>
    );
};

export default SubUsdCard;
