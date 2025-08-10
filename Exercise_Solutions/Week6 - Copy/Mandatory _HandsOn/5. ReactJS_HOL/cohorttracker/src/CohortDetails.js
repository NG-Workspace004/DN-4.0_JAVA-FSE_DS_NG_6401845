import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
    const { cohort } = props;

    // Determine heading color
    const headingStyle = {
        color: cohort.currentStatus.toLowerCase() === 'ongoing' ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}>
            <h3 style={headingStyle}>
                {cohort.cohortCode} - <span>{cohort.technology}</span>
            </h3>
            <dl>
                <dt>Started On</dt>
                <dd>{cohort.startDate}</dd>

                <dt>Current Status</dt>
                <dd>{cohort.currentStatus}</dd>

                <dt>Coach</dt>
                <dd>{cohort.coachName}</dd>

                <dt>Trainer</dt>
                <dd>{cohort.trainerName}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;


// function CohortDetails(props) {
//     return (
//         <div>
//             <h3>
//                 {props.cohort.cohortCode} -
//                 <span>{props.cohort.technology}</span>
//             </h3>
//             <dl>
//                 <dt>Started On</dt>
//                 <dd>{props.cohort.startDate}</dd>
//                 <dt>Current Status</dt>
//                 <dd>{props.cohort.currentStatus}</dd>
//                 <dt>Coach</dt>
//                 <dd>{props.cohort.coachName}</dd>
//                 <dt>Trainer</dt>
//                 <dd>{props.cohort.trainerName}</dd>
//             </dl>
//         </div>

        
//     );
// }
// export default CohortDetails;