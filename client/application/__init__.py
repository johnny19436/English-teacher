from flask import current_app, Flask, redirect, url_for
from flask_restful import Resource, Api
from flask_cors import CORS



def create_app():
    app = Flask(__name__)
    CORS(app)


    # Register the Bookshelf CRUD blueprint.
    from .crud import crud
    app.register_blueprint(crud, url_prefix='/')

    @app.route('/')
    def hello():
        return redirect(url_for('crud.test'))
    
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host='localhost', port=8000)