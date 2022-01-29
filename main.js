function navigate(url) {
    window.open(url, '_blank').focus();
}

var isNavClosed = true;

function toggleNav() {
    var links = document.querySelector('.nav__links');
    console.log(links);
    console.log(isNavClosed);
    if (links) {
        if (isNavClosed) {
            links.classList.remove('close-links');
            links.classList.remove('closed-links');
            links.classList.add('open-links');
            isNavClosed = false;
        } else {
            links.classList.remove('open-links');
            links.classList.add('closed-links');
            links.classList.add('close-links');
            isNavClosed = true;
        }
    }
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
