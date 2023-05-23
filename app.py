from flask import Flask, render_template
import datetime
import uuid
import calendar
from models import *
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.j2')

@app.route('/logout')
def logout():
    pass

@app.route('/mailbox')
def mailbox():
    return render_template('mailbox.j2')


@app.route('/mailbox/sent')
def mailbox_sent():
    pass

@app.route('/mailbox/draft')
def mailbox_draft():
    pass

@app.route('/calendar')
def pigeon_calendar():
    cal = calendar.HTMLCalendar(firstweekday=0)
    d = datetime.datetime.today()
    return render_template('calendar.j2', calendar=cal.formatmonth(d.year, d.month))

@app.route('/contacts')
def contacts():
    pass


if __name__ == '__main__':
    app.run(debug=True)