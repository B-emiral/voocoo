from flask import render_template, redirect, request, url_for

def home_page():
    return render_template("home.html")

