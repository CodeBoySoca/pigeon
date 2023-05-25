from flask import Flask, render_template, request
import datetime
import uuid
import calendar
from models import *
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm-password')
        if password == confirm_password:
            User(
              name=name,
              username=username,
              email=email,
              password=User.hash_password(password)  
            ).insert()
            return render_template('mailbox.j2', username=username)
    return render_template('login.j2')

@app.route('/logout')
def logout():
    pass

@app.route('/mailbox')
def mailbox():
    return render_template('mailbox.j2')


@app.route('/mailbox/sent')
def mailbox_sent():
    return render_template('sent.j2')

@app.route('/mailbox/draft')
def mailbox_draft():
    return render_template('draft.j2')

@app.route('/calendar')
def pigeon_calendar():
    cal = calendar.HTMLCalendar(firstweekday=0)
    d = datetime.datetime.today()
    return render_template('calendar.j2', calendar=cal.formatmonth(d.year, d.month))

@app.route('/contacts')
def contacts():
    return render_template('contacts.j2')


if __name__ == '__main__':
    app.run(debug=True)