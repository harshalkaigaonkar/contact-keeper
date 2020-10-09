import React, { useContext } from 'react';
import AlertContext from '../../Context/Alert/AlertContext';

const Alerts = () => {

    const alertContext = useContext(AlertContext);

    const { alerts } = alertContext;

    return (
        alerts.length > 0 && alerts.map(alert => (
            <div key={alert.id} className={`bg-${alert.type} pa2 ma2`}>
                <i className='fas fa-info-circle' ></i> { alert.msg}
            </div >
        ))
    )
}

export default Alerts;
