from flask import Flask, jsonify

app = Flask(__name__)

sample_data = {
    "name": "Aarav",
    "age": 20,
    "city": "Dehradun"
}


@app.route("/")
def index():
    return """
    <h1>Flask Backend Demo</h1>
    <p>The Flask server is running successfully.</p>
    <p><a href='/data'>View JSON data</a> | <a href='/html'>View HTML data</a></p>
    """


@app.route("/data")
def data():
    return jsonify(sample_data)


@app.route("/html")
def html():
    return f"""
    <h1>Backend Server Running</h1>
    <p>This page demonstrates server-side HTML generation with Flask.</p>
    <ul>
        <li>Name: {sample_data['name']}</li>
        <li>Age: {sample_data['age']}</li>
        <li>City: {sample_data['city']}</li>
    </ul>
    <p><a href='/data'>View JSON response</a></p>
    """


if __name__ == "__main__":
    app.run(debug=True, port=5000)
