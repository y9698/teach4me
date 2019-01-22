# coding: utf-8
from flask import Flask, render_template
Flask
app = Flask(__name__)

@app.route('/')
def index():
	title ='ようこそ'
	message = 'chart for you'

	return render_template('index.html', title=title, message=message)

@app.route('/chart')
def chart():

	return render_template('chart.html')

if __name__ == '__main__':
	app.run(debug=True)