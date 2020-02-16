<script>
import { Line } from "vue-chartjs";

// let a = 5;
// let b = 0;
// let t = [];
// while (a < 5000) {
//   if ((b % 5 = 0)) {
//     t[b / 5] = a;
//   }
//   b = b + 1;
//   a = a * 1.05;
// }

let a = 5;
let b = 0;
let t = [];
let t2 = [];
while (a < 5000) {
  if (b % 5 == 0) {
    t[b / 5] = Math.round(a);
    t2[b / 5] = b;
  }
  b = b + 1;
  a = a * 1.02 + a / 10;
}

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: t2,
      datasets: [
        {
          label: "Sale Price",
          borderColor: "#8EAEFF",
          backgroundColor: "transparent",
          pointBackgroundColor: "#8EAEFF",
          hoverBackgroundColor: "white",
          pointRadius: 4,
          pointHoverRadius: 10,
          // fill: transparent,
          data: t
        }
      ]
    },
    options: {
      layout: {
        padding: {
          left: 0,
          right: 10,
          top: 0,
          bottom: 0
        }
      },
      tooltips: {
        // // mode: "nearest",
        backgroundColor: "white",
        // // displayColors: "false",
        // xPadding: "5",
        // titleAlign: "center",
        // // titleFontSize: "18",
        titleFontColor: "black",
        // // titleSpacing: "4",
        // // titleMarginBottom: "10",
        // // bodySpacing: "6",
        bodyFontColor: "black",
        // // bodyFontSize: "16",
        // // bodyMarginTop: "10",

        // borderColor: "#000000",
        // borderWidth: "1px",
        callbacks: {
          label: function(t, d) {
            var xLabel = d.datasets[t.datasetIndex].label;
            var yLabel =
              t.yLabel >= 1000
                ? "$" +
                  t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$" + t.yLabel;
            return xLabel + ": " + yLabel;
          }
        }
      },
      legend: {
        display: false
      },

      scales: {
        yAxes: [
          {
            ticks: {
              display: false
            }
          }
        ]
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted() {
    //this.chartdata.datasets[0].data = t;
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
