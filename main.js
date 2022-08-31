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
            if (entry.target.id === 'about-me-title') {
                entry.target.classList.add('type-animate');
            }

            if (entry.target.classList.contains('card-section__left')) {
                entry.target.querySelector('.card').classList.add('slide-from-left');
                entry.target
                    .querySelector('.card-section__images')
                    .classList.add('slide-from-right');
            }

            if (entry.target.classList.contains('card-section__right')) {
                entry.target.querySelector('.card').classList.add('slide-from-right');
                entry.target
                    .querySelector('.card-section__images')
                    .classList.add('slide-from-left');
            }

            if (entry.target.classList.contains('circle-wrap')) {
                entry.target.classList.add('open-skill');
            }
        }
    });
});

observer.observe(document.querySelector('#about-me-title'));

var cardsLeft = document.querySelectorAll('.card-section__left');

cardsLeft.forEach((card) => observer.observe(card));

var cardsRight = document.querySelectorAll('.card-section__right');

cardsRight.forEach((card) => observer.observe(card));

var cicles = document.querySelectorAll('.circle-wrap');
cicles.forEach((circle) => observer.observe(circle));

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
