const data = {
  labels: [
    "VIGOR",
    "FORÇA",
    "DESTREZA",
    "RESISTÊNCIA",
    "INTELIGÊNCIA",
    "MANA",
    "CONTROLE",
  ],
  datasets: [
    {
      data: [3, 3, 3, 5, 10, 15, 15],
      fill: true,
      backgroundColor: "rgba(0, 133, 255, 0.3)",
      borderColor: "#4379f7",
      pointBackgroundColor: "#5b6ed9",
      pointBorderColor: "#1b2b87",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

const config = {
  type: "radar",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scale: {
      min: 0,
      max: 15,
    },
    scales: {
      r: {
        pointLabels: {
          display: true,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 5,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("my-chart"), config);
