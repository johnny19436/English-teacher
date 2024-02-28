from flask import Blueprint, redirect, render_template, request, url_for
import requests
import json

crud = Blueprint('crud', __name__, static_folder='static', template_folder='templates')


@crud.route("/")
def main():
    # r = requests.get("http://localhost:5000")
    # return r.json()['hello']
    return render_template("base.html")

@crud.route("/test")
def test():
    return render_template("test.html")

# @crud.route("/lectureList")
# def lectureList():
#     return render_template("lectureList.html")


# Sample code for referenece
# @crud.route('/<id>/edit', methods=['GET', 'POST'])
# def edit(id):
#     book = get_model().read(id)
    
#     if request.method == 'POST':
#         data = request.form.to_dict(flat=True)

#         book = get_model().update(data, id)

#         return redirect(url_for('.view', id=book['id']))
    
#     return render_template("form.html", action="Edit", book=book)
