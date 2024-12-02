import React from 'react';
import { useParams } from 'react-router-dom';
import { predictionData } from './data'; // Adjust the import according to your data location
import PredictCard1 from '../PredictionDetails/PredictCard1';
import PredictCard2 from '../PredictionDetails/PredictCard2';
import PredictCard3 from '../PredictionDetails/PredictCard3';
import PredictCard4 from '../PredictionDetails/PredictCard4';
import PredictCard5 from '../PredictionDetails/PredictCard5';
import PredictCard6 from '../PredictionDetails/PredictCard6';
import PredictCard7 from '../PredictionDetails/PredictCard7';
import PredictCard8 from '../PredictionDetails/PredictCard8';
import PredictCard9 from '../PredictionDetails/PredictCard9';
import PredictCard10 from '../PredictionDetails/PredictCard10';
import PredictCard11 from '../PredictionDetails/PredictCard11';
import PredictCard12 from '../PredictionDetails/PredictCard12';
import PredictCard13 from '../PredictionDetails/PredictCard13';
import PredictCard14 from '../PredictionDetails/PredictCard14';
import PredictCard15 from '../PredictionDetails/PredictCard15';
import PredictCard16 from '../PredictionDetails/PredictCard16';


const PredictSubCard = () => {
    const { id } = useParams();
    const prediction = predictionData.find(prediction => prediction.id === parseInt(id)); // Find the corresponding service

    const predictSubCardComponents = {
        1: PredictCard1,
        2: PredictCard2,
        3: PredictCard3,
        4: PredictCard4,
        5: PredictCard5,
        6: PredictCard6,
        7: PredictCard7,
        8: PredictCard8,
        9: PredictCard9,
        10: PredictCard10,
        11: PredictCard11,
        12: PredictCard12,
        13: PredictCard13,
        14: PredictCard14,
        15: PredictCard15,
        16: PredictCard16
    };

    if (!prediction) {
        return <div>Prediction not found</div>; // Handle the case where the service does not exist
    }

    const PredictSubCardComponent = predictSubCardComponents[prediction.id];

    return (
        <div className="p-4">
            {/* <h1 className="text-2xl font-bold">{service.title}</h1> */}
            {PredictSubCardComponent ? <PredictSubCardComponent /> : <div>No details available</div>}
            {/* You can also include more details about the service here */}
        </div>
    );
};

export default PredictSubCard;
