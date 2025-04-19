import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { } from '@mui/lab/TimelineOppositeContent';
import careerData from '../data/careerData.json'





export default function Carrer() {
    return (
        <Timeline>
            {careerData.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        {item.year}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        {index < careerData.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <p>{item.title} - {item.company}</p>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
