//描画したいデータセット
//
var chartData = {
	labels : ['1','2','3','4','5','6','7','8','9','10'],
	datasets : [
	{
		label: 'Dataset 1',
		backgroundColor: '#2980b9',
		data : [1, 2, 3, 4, 5, 6, 7,8,9, 10]
	},
	{
		label: 'Dataset 2',
		backgroundColor: '#FA5858',
		data : [3, 6, 0, 4, 14, 9, 7, 1 ,9, 0]
	},
	]
};

//
var chart_elem = document.getElementById('bar').getContext('2d');

//
var bar = new Chart(chart_elem, {type: 'bar',data: chartData,options: {scales: {yAxes: [{ticks: {beginAtZero: true}}]
}
}
});