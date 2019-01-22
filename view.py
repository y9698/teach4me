# coding: utf-8
from flask import Flask, render_template
#という名前で
#オブジェクトをインスタンス化
# appFlask
app = Flask(__name__)

@app.route('/')
def index():
	title ='ようこそ'
	message = 'MTでWeb成'
# return 'Hello World!'
	return render_template('index.html', title=title, message=message)

@app.route('/chart')
def chart():
#eにを指定し、いくつか変数を渡す
# Templateにindex.html
	return render_template('chart.html')
#
if __name__ == '__main__':
	app.run(debug=True)