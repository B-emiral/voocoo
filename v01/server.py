from flask import Flask, render_template

import views


def create_app():
    app = Flask(__name__)
    app.config.from_object("settings")
    app.add_url_rule("/", view_func=views.home_page)

    return app


if __name__ == "__main__":
    app = create_app()

    port = app.config.get("PORT", 3333)
    app.run(host="0.0.0.0", port=port)