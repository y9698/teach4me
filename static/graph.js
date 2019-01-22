//描画したいデータセット
//
var chartData = {
	labels : ['1','2','3','4','5','6','7','8','9','10'],
	datasets : [
	{
		label: 'Dataset 1',
		backgroundColor: '#99aab9',
		data : [1, 2, 3, 4, 5, 6, 7,8,9, 10]
	},
	{
		label: 'Dataset 2',
		backgroundColor: '#aabbff',
		data : [3, 6, 0, 4, 14, 9, 7, 1 ,9, 0]
	},
	]
};

//
var chart_elem = document.getElementById('bar').getContext('2d');

//
var bar = new Chart(chart_elem, {type: 'radar',data: chartData,options: {scales: {yAxes: [{ticks: {beginAtZero: true}}]
}
}
});