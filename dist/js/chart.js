// chartLine
const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [{
            label: "Chartline Templatebay",
            backgroundColor: "hsl(259, 100%, 50%)",
            borderColor: "hsl(252, 82.9%, 67.8%)",
            data: [10, 20, 30, 40, 60, 70, 85],
        }, ],
    };

    const configLineChart = {
        type: "line",
        data,
        options: {},
    };

    var chartLine = new Chart(
        document.getElementById("chartLine"),
        configLineChart
    );

// chartbar
    const labelsBarChart = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    ];
    const dataBarChart = {
    labels: labelsBarChart,
    datasets: [
    {
    label: "Data Bar Templatebay",
    backgroundColor: "hsl(259, 100%, 50%)",
    borderColor: "hsl(252, 82.9%, 67.8%)",
    data: [5, 10, 15, 20, 25, 35, 80],
    },
    ],
    };

    const configBarChart = {
    type: "bar",
    data: dataBarChart,
    options: {},
    };

    var chartBar = new Chart(
    document.getElementById("chartBar"),
    configBarChart
);
    

// doughnut chart
const datadoughnutchart = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};


const configdoughnutbar = {
  type: 'doughnut',
    data: datadoughnutchart,
    options: {},
};

var doughnut = new Chart(
    document.getElementById("doughnutBar"),
    configdoughnutbar
);

// pie chart
const datapiechart = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};


const configpiebar = {
  type: 'pie',
    data: datapiechart,
    options: {},
};

var doughnut = new Chart(
    document.getElementById("pieBar"),
    configpiebar
);