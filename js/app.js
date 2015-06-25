Chart.defaults.global.responsive = true;
var chartNetPageLike;
$(function() {
	tabHandler();
	var netPageLikeContext = document.getElementById("netPageLike").getContext("2d");
	var data = {
    labels: ["13 ธ.ค", "14 ธ.ค", "15 ธ.ค", "16 ธ.ค", "17 ธ.ค", "18 ธ.ค", "19 ธ.ค"],
    datasets: [
        {
            label: "ไลค์ใหม่",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,0.5)",
            pointColor: "rgba(151,187,205,0.5)",
			pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "เลิกไลค์",
            fillColor: "rgba(238, 110, 115, 0.2)",
            strokeColor: "rgba(238, 110, 115, 0.5)",
            pointColor: "rgba(238, 110, 115, 0.5)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [-28, -48, -40, -19, -86, -27, -90]
        },
		{
            label: "ผลลัพธ์",
            fillColor: "rgba(0,0, 0, 0)",
            strokeColor: "rgba(33, 33, 33, 1)",
            pointColor: "rgba(33, 33, 33, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(33, 33, 33,1)",
            data: [37, 11, 40, 62, -30, 28, -50]
        }
		
    ]
	};
	chartNetPageLike = new Chart(netPageLikeContext).Line(data, { scaleBeginAtZero: false,bezierCurve: true});
});

function tabHandler(){
  $("#tab-trigger-newsfeed").click(function(){
	  $("#tab-newsfeed").removeClass("hide-on-med-and-down");
	  $("#tab-manage").addClass("hide-on-med-and-down");
	  $("#tab-rival").addClass("hide-on-med-and-down");
  });
  $("#tab-trigger-manage").click(function(){
	  $("#tab-manage").removeClass("hide-on-med-and-down");
	  $("#tab-newsfeed").addClass("hide-on-med-and-down");
	  $("#tab-rival").addClass("hide-on-med-and-down");
	  chartNetPageLike.resize(chartNetPageLike.render, true);
  });
  $("#tab-trigger-rival").click(function(){
	  $("#tab-newsfeed").removeClass("hide-on-med-and-down");
	  $("#tab-manage").addClass("hide-on-med-and-down");
	  $("#tab-newsfeed").addClass("hide-on-med-and-down");
  });
}