from mongoframes import *
from pymongo import MongoClient
from dotenv import load_dotenv
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
       'messages'
    }


class Message(SubFrame):
    _fields = {
        'sender',
        'recipent',
        'message',
        'message_date'
    }
