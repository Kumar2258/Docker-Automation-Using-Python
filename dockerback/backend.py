from flask import Flask, jsonify ,request
from flask_cors import CORS
import docker
import subprocess
import json


app = Flask(__name__)

cors=CORS(app, origins='*')
client = docker.from_env()


@app.route('/containers', methods=['GET'])
def list_containers():
    containers = client.containers.list()
    return jsonify(
        [[container.name,container.id,container.status] for container in containers]
        
        )

# @app.route('/pull_image', methods=['GET'])
# def pull_image():
#     client.images.pull('nginx:latest')
#     return jsonify({'message': 'Image pulled successfully'})

# @app.route('/run_container', methods=['GET'])
# def run_container():
#     container = client.containers.run('nginx:latest', detach=True)
#     return jsonify({'message': 'Container started successfully', 'container_id': container.id})

# if __name__ == '__main__':
#     app.run(debug=True)

@app.route('/members',methods=['GET','POST'])
def members():
   
    return jsonify (
        {
            "users": ['arpan','kumar','karan']
        }
    )
@app.route('/pulled',methods=['POST','GET'])
def pulled():


    try:
        # Run the "docker ps" command and capture its output
        # result = subprocess.run(['docker', 'ps','--format', '{{.ID}}\t{{.Names}}\t{{.Image}}'], capture_output=True, text=True)
        # # Return the output of the command
        # images = result.stdout.strip().split('\n')
        # return jsonify(
        #     images
        # ) 
        images = client.images.list()
        
        
        return jsonify([[image.attrs.get('RepoTags'),image.short_id,image.attrs['Created']]for image in images])
        



    except Exception as e: 
        # Handle any exceptions
        return str(e)
   
    # return jsonify (
    #     {
    #         "users": ['arpan','kumar','karan']
    #     }
    # )

@app.route('/pullrun',methods=['GET','POST'])
def pullrun():
    # try:
        rawdata= request.json
        # print(type(rawdata))
        print("new ",rawdata)
        image=rawdata['data']
        image=json.dumps(image)
        image = image.replace('"', '')
        print("Data -> ",image)
        
        container = client.containers.run(image, detach=True)
        print('container id ',container.id)    
        return {
            
            'message': 'Data received successfully'
        }
    # except Exception as e: 
    #     # Handle any exceptions
    #     return str(e)
    # try:
        
    # except Exception as e: 
    #     # Handle any exceptions
    #     return str(e)
@app.route('/runstop',methods=['POST','GET'])
def runstop():
    # try:
        rawdata= request.json
        # print(type(rawdata))
        print("new ",rawdata)
        image=rawdata['data']
        image=json.dumps(image)
        image = image.replace('"', '')
        print("Data -> ",image)
        client.containers.get(image).stop()
        # container = client.containers.stop(image)
        # print('container id ',container.id)    
        return {
            
            'message': 'Data received successfully'
        }

@app.route('/frontend',methods=['GET','POST'])
def frontend():
    rawdata= request.json
    image=rawdata['data']

    print("Data type-> ",image)
    
    # client.images.pull(image)

    # container = client.containers.run(image, detach=True)
    # print('container id ',container.id)
    # running()
    return {
        # 'message': 'Data received successfully'
        
    }
# @app.route('/running',methods=['GET','POST'])
# def running():
#     running_containers = client.containers.list()
#     for container in running_containers:
#         print("id ",container.id)
#         print("name ", container.name)
#     return jsonify({
#         "Id" : container.id,
#         "name": container.name,
#     })
if __name__=="__main__":
    app.run(debug=True)