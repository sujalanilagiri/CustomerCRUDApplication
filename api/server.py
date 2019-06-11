from flask import Flask
from flask_restful import Resource, Api ,reqparse
from sqlalchemy import create_engine
from json import dumps


app = Flask(__name__)
api = Api(app)
db_connect = create_engine('sqlite:///chinook.db')

users = [
    {
        "firstName": "Nicholas",
        "lastName" : "Thomas",
        "age": 42,
        "email": "nicholas.thomas@gmail.com"
    },
    {
        "firstName": "Elvin",
        "lastName" :"Martin",
        "age": 32,
        "email": "martin.elvin@gmail.com"
    },
    {
        "firstName": "Jass",
        "lastName" :"Base",
        "age": 22,
        "email": "jass.base@gmail.com"
    }
]


class Customers(Resource):
    def get(self, name):
        
        for user in users:
            if(name == user["firstName"]):
                return user, 200
        return "User not found", 404

    def post(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("lastName")
        parser.add_argument("age")
        parser.add_argument("email")
        args = parser.parse_args()

        for user in users:
            if(name == user["firstName"]):
                return "User with name {} already exists".format(name), 400
        print(args)
        user = {
            "firstName": name,
            "lastName" :args["lastName"],
            "age": args["age"],
            "email":args["email"]
        }

        users.append(user)
        return user, 201

    def put(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("lastName")
        parser.add_argument("age")
        parser.add_argument("email")
        args = parser.parse_args()

        for user in users:
            if(name == user["firstName"]):
                user["age"] = args["age"]
                user["lastName"] = args["lastName"]
                user["email"] = args["email"]
                return user, 200
        
        user = {
            "firstName": name,
            "lastName": args["lastName"],
            "age":args["age"],
            "email": args["email"]
        }
        users.append(user)
        return user, 201

    def delete(self, name):
        global users
        users = [user for user in users if user["firstName"] != name]
        return "{} is deleted.".format(name), 200

class CustomersList(Resource):
    def get(self):       
        return users
    
api.add_resource(Customers, "/customer/<string:name>")
api.add_resource(CustomersList, "/customers/all")

app.run(debug=True)