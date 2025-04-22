import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import careerData from "../data/careerData.json";
import "../styles/Career.css"

export default function Career() {
    return (
        <div className="App">
            <h1>React Vertical Timeline</h1>
            <div className="empty">Empty Container</div>
            <VerticalTimeline>
                {careerData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "var(--timeline-bg)",
                            color: "var(--timeline-text)",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid var(--timeline-bg)",
                        }}
                        date={item.year}
                        iconStyle={{
                            background: "var(--timeline-icon-bg)",
                            color: "var(--timeline-icon-text)",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            {item.company}
                        </h4>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

        </div>
    );
}
