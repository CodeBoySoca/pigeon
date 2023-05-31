from mongoframes import *
from pymongo import MongoClient
from dotenv import load_dotenv
from passlib.hash import pbkdf2_sha256
from dateutil import parser

from enum import Enum
import os

load_dotenv('.env')

Frame._client = MongoClient(os.getenv('MONGO_URI'))

class User(Frame):
    _fields = {
       'user_id',
       'username',
       'password',
       'image',
       'creation_date',
       'messages',
       'contacts'
    }

    def hash_password(password):
        return pbkdf2_sha256.hash(password)
    
    def verify_password(username, password):
        if user := User.one(Q.username == username):
            password_results = pbkdf2_sha256.verify(password, user.password)
            if password_results is not None and password_results is not False:
                return [user, password_results]
            else:
                return StatusMessage.USER_PASSWORD_COMBINATION.value
        return StatusMessage.USER_DOES_NOT_EXIST.value
    
    def get_user(username, password):
        user = User.verify_password(username, password)
        return user
    
    def format_date(messages):
        message_dates = []
        for i in range(len(messages)):
             message_dates.append(parser.parse(messages[i]['message_date']).strftime('%B %d, %Y'))
        return message_dates

class Message(SubFrame):
    _fields = {
        'sender',
        'recipent',
        'message',
        'message_date'
    }

class StatusMessage(Enum):
    USER_DOES_NOT_EXIST='User does not exist'
    USER_PASSWORD_COMBINATION='User does not exist or password combination is incorrect'