from flask import render_template, redirect, request, url_for




def home_page():
    return render_template("home.html")


"""
def transcript_page():
    return render_template("transcript.html", results=dbOps.selectAll(USER_ID, "COURSE"))

def mapout_page():
    if request.method=="GET":
        return render_template("mapout.html", results=dbOps.selectAll(USER_ID, "COURSE"))
    else:
        course_id = str(request.form["course_code_form"])
        course_term = str(request.form["course_term_form"])
        course_insname = str(request.form["course_insname_form"])
        course_grade = str(request.form["course_grade_form"])
        #isSuccesful = dbOps.addCourseTranscript(USER_ID, course_term, course_id, course_insname, course_grade)
        new_course = {"course_id":course_id, 
                    "course_term":course_term, 
                    "course_insname":course_insname,
                    "course_grade": course_grade
                    }
        
        return render_template("mapout.html", results=dbOps.selectAll(USER_ID, "COURSE"), new_course= new_course)


"""