from flask import Flask, render_template
import datetime
import uuid
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






if __name__ == '__main__':
    app.run(debug=True)