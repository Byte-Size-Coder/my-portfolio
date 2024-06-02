const timelineInfo = [
    {
        date: "April 2015",
        content:
            "Attended Toronto Film School and became a tutor for first term programming students (peer-to-peer and group sessions)",
    },
    {
        date: "September 2016",
        content:
            "Took our main game mechanic from game and posted tutorial video online to implement it.",
    },
    {
        date: "September 2018",
        content:
            "Continue my tutoring at Fanshawe College to help new students with coding fundamentals in the CPA program",
    },
    {
        date: "August 2021",
        content:
            "Mentored two interns at web development contract while building application",
    },
    {
        date: "January 2024",
        content:
            "Part-Time teaching at Fanshawe College for the Game Development Program (GDP). Currently teaching Game Component Integration",
    },
    {
        date: "May 2024",
        content:
            "Expand my teaching role at Fanshawe, also teaching in the Computer Programer Analyst (CPA) and Computer System Technician (CTN) Programs",
    },
    {
        date: "Future",
        content:
            "Continuing to help others get into the industry through education and sharing my experiences",
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
