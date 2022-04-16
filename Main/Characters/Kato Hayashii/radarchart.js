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
      backgroundColor: "rgba(182, 182, 182, 0.5)",
      borderColor: "#151515",
      pointBackgroundColor: "#4f4f4f",
      pointBorderColor: "#000000",
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

    /* scale: {
      min: 0,
      max: 12,
    },
 */
    scales: {
      r: {
        max:15,
        min:0,

        pointLabels: {
          display: true,
          font: {
            size: 12,
            weight: 'bold',
          },
          color:"#E6E6E6",
        },
        ticks: {
          stepSize: 5,
          textStrokeColor: "blue",
          color: '#E6E6E6',
          backdropColor: 'rgba(0,0,0,0.0)',
        },
        angleLines:{
          color: "#E6E6E6",
        },
        grid:{
          color: "#E6E6E6",
        },
      },
    },

    elements: {
      points: {
        radius: 4,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("my-chart"), config);
