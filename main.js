function navigate(url) {
    window.open(url, '_blank').focus();
}

const observer = new IntersectionObserver((enteries) => {
    // Loop over the entries
    enteries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('type-animate');
        }
    });
});

observer.observe(document.querySelector('#about-me-title'));

var skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML/CSS',
    'Material-UI',
    'Unity',
    'C#',
    'Firebase',
    'UE4',
    'NodeJS',
    'SQL',
    'React Native',
    'Git',
    'MongoDB',
    'C++',
];

var values = [95, 90, 90, 85, 85, 85, 80, 80, 75, 75, 70, 70, 70, 65, 60];

var myChart = new Chart('myChart', {
    type: 'horizontalBar',
    data: {
        labels: skills,
        datasets: [
            {
                backgroundColor: '#fe5f55',
                data: values,
                label: '',
            },
        ],
    },
    options: {
        scales: {
            xAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        legend: {
            display: false,
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                },
            },
        },
    },
});
