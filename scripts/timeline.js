const timelineInfo = [
    {
        date: "April 2016",
        content:
            "Worked as a Tutor during my time at Toronto Film school to teach previous term students programing (peer-to-peer and group sessions)",
    },
    {
        date: "September 2017",
        content:
            "Worked as a Tutor during my time at Toronto Film school to teach previous term students programing (peer-to-peer and group sessions)",
    },
    {
        date: "September 2018",
        content:
            "Worked as a Tutor during my time at Toronto Film school to teach previous term students programing (peer-to-peer and group sessions)",
    },
    {
        date: "December 2023",
        content:
            "Worked as a Tutor during my time at Toronto Film school to teach previous term students programing (peer-to-peer and group sessions)",
    },
    {
        date: "January 2024",
        content:
            "Worked as a Tutor during my time at Toronto Film school to teach previous term students programing (peer-to-peer and group sessions)",
    },
    {
        date: "Future",
        content:
            "Worked as a Tutor during my time at Toronto Film school to teach previous term students programing (peer-to-peer and group sessions)",
    },
];

function addEvent(date, description) {
    const timeline = document.querySelector(".timeline");
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";

    const timelineItemContainer = document.createElement("div");
    timelineItemContainer.className = "timeline-item-container";

    const timelineTime = document.createElement("div");
    timelineTime.className = "timeline-time";
    timelineTime.textContent = date;

    const timelineContent = document.createElement("div");
    timelineContent.className = "timeline-content";
    timelineContent.textContent = description;

    timelineItemContainer.appendChild(timelineTime);
    timelineItemContainer.appendChild(timelineContent);
    timelineItem.appendChild(timelineItemContainer);
    timeline.appendChild(timelineItem);
}

for (let info of timelineInfo) {
    addEvent(info.date, info.content);
}
