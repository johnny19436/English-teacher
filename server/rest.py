import requests
import json
import os

from openai import OpenAI
from flask import Flask, jsonify
from flask import request
from flask_restful import Resource, Api
from flask_cors import CORS

client = OpenAI(api_key="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")


app = Flask(__name__)
CORS(app)

api = Api(app)


text = ""

@app.route("/")
def home():
    return "Home"

@app.route("/chat", methods=["GET", "POST"])
def add():
    global text
    if request.method == "GET":
        print("Successful get")
        return {"text": text}
    elif request.method == "POST":
        data = request.get_json()
        Input = data["text"]
        text = handle_text(Input)
        print("Successful post")       
        
        return jsonify({"result": "success"})
    

def handle_text(Input):
    response = client.chat.completions.create(
        model = 'gpt-3.5-turbo',
        messages = [
            {"role": "system", "content": "You are foreigner highschool friend who is fun and fluent in english."},
            {"role": "user", "content": Input}
        ],
        temperature=0.8,
        max_tokens=100
    )
    
    text = response.choices[0].message.content
    return text



if __name__ == '__main__':
    app.run(host="localhost", port=4000)
