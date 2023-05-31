from flask import Flask, render_template, request, redirect, url_for, session
import datetime
from dateutil import parser
import uuid
import calendar
from models import *
from mongoframes import *
from bson import ObjectId
import os


app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

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
    return render_template('signup.j2')

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        if user := User.get_user(request.form.get('username'), request.form.get('password')):
           if user != StatusMessage.USER_DOES_NOT_EXIST.value and user != StatusMessage.USER_PASSWORD_COMBINATION.value:
               session['user'] = str(user[0]._id)
               return redirect(url_for('mailbox', user=session['user']))
           else:
               return redirect(url_for('signin'))
    return render_template('signin.j2')
    

@app.route('/signout')
def signout():
    session.pop('user', None)
    return redirect(url_for('signin'))

@app.route('/mailbox', methods=['GET', 'POST'])
def mailbox():
    if not session['user']:
       return redirect(url_for('signin'))
    else:
       user = User.one(Q._id == ObjectId(session['user'])) 
       message_dates = User.format_date(user['messages'])
       return render_template('mailbox.j2', user=user, data=zip(user['messages'], message_dates))


@app.route('/mailbox/sent', methods=['GET', 'POST'])
def mailbox_sent():
    if not session['user']:
       return redirect(url_for('signin'))
    else:
       return render_template('sent.j2')

@app.route('/mailbox/draft', methods=['GET', 'POST'])
def mailbox_draft():
    if not session['user']:
       return redirect(url_for('signin'))
    else:
       return render_template('draft.j2')

@app.route('/calendar')
def pigeon_calendar():
    if not session['user']:
       return redirect(url_for('signin'))
    else:
       cal = calendar.HTMLCalendar(firstweekday=0)
       d = datetime.datetime.today()
       return render_template('calendar.j2', calendar=cal.formatmonth(d.year, d.month))

@app.route('/contacts')
def contacts():
    if not session['user']:
       return redirect(url_for('signin'))
    else:
       return render_template('contacts.j2')


if __name__ == '__main__':
    app.run(debug=True)