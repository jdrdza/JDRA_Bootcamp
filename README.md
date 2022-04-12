# JDRA_Bootcamp
REST API to Go Bootcamp
<p>This API was developed using Node-js and MongoDB. The API has four endpoints; two of the endpoints get the phrase hello world and the other two get states and zip codes
    of three Mexican states. Furthermore, this readme contains all the instructions that are necessary to test the API.
</p>

<br>
<h2>1.- Instructions for clonning the repository</h2>
<ol>
    <li>Open a terminal and run the following command:

```
git clone https://github.com/jdrdza/JDRA_Bootcamp.git
```
</li>
</ol>

<br>
<h2>2.- Instructions for installing Node-js and MongoDB</h2>
<ol>
    <h3>2.1- Instructions for Windows OS</h3>
    <ol>
        <li>Download the following package to install Node-js: 

```
https://Node-js.org/es/
```
</li>
        <li>Download the following package to install MongoDB: 

```
https://www.MongoDB.com/try/download/community
```
</li>
        <li>Run the msi packages and follow the instalation instructions</li>
        <li>Now it's necessary to go the following path to run the MongoDB service: 

```
C:\Program Files\MongoDB\Server\5.0\bin
``` 
and run 

```
mongod.exe
```
it will open a new terminal and this terminal shouldn't be closed
</ol>
    <h3>2.2- Instructions for Linux OS</h3>
    <ol> 
    <li>Open a terminal and go to the path where the repository was downloaded.</li>
    <li>There, run the following commands: 

```
sudo apt update
sudo apt install Node-js
sudo apt install npm
sudo apt install MongoDB-org
sudo systemctl start mongod.service
sudo systemctl status mongod
```
</li>
    </ol>
</ol>

<br>
<h2>3.- Instructions for initialising the server</h2>
<ol>
  <li>In the terminal go to the repository path and run the following command:

```
npm start index.js
```
</li>
  <li>If everything is correct, the server will initialise like the image bellow. This terminal shouldn't be closed</li>
</ol>

![Screenshot_1](https://user-images.githubusercontent.com/100879092/163055811-e964890b-99ee-4b26-b807-fa3ba22f297e.png)

<h2>4.- Instructions for running Hello World endpoints</h2>
<ol>
  <li>Open Postman, put the GET method and put the following route:

```
localhost:3001/getHello
```
This will return the message "Helllo World" as a JSON.</li>
    
![Screenshot_2](https://user-images.githubusercontent.com/100879092/163056264-11df3ec7-ed6d-4db7-af1e-1bd20fdf4aac.png)
  
<li>To get the second endpoint it's the same as the last step but with the following route:

```
localhost:3001/getHello/Daniel
```
This will return Hello World Daniel as a JSON</li>
</ol>

![Screenshot_3](https://user-images.githubusercontent.com/100879092/163058275-4c013248-96a1-451b-b438-8d4d9232d361.png)

<br>
<h2>5.- Instructions for running the endpoints get states and get zip code</h2>
<ol>
    <p>Before using the endpoints, it's necessary to load the following data:

```
Ciudad de Mexico.js
Hidalgo.js
Estado de Mexico.js
```
These files are inside of the data folder in the repository.
</p>
    <h3>5.1.- Instructions for loading data into the Windows OS</h3>
    <ol>
        <li>Go to the following path in windows explorer:

```
C:\Program Files\MongoDB\Server\5.0\bin
```
and place the files that are in the data folder.</li>

![Screenshot_4](https://user-images.githubusercontent.com/100879092/163058549-3188b0df-9469-4aab-a51b-b9e4afd43010.png)

<li>Now go to the same path using the terminal. The path is the following: 

```
C:\"Program Files"\MongoDB\Server\5.0\bin
```
and run the command 

```
start mongo.exe
```
This will open a new terminal.
        </li>
        <li>In the new terminal, run the following commands: 
        
```
load("Ciudad de Mexico.js")
load("Hidalgo.js")
load("Estado de Mexico.js")
```
If everything is correct, on each command the terminal will display a true message. If it's false, then wait a minute and try again to run the command.
        </li>
    </ol>
    <h3>5.2.- Instructions for loading data into the Linux OS</h3>
    <ol>
        <li>Copy the files that are in the data folder to a local folder.</li>
        <li>Run the command 

```
mongo
```
and run the following commands:

```
load("Ciudad de Mexico.js")
load("Hidalgo.js")
load("Estado de Mexico.js")
```
If everything is correct, on each command the terminal will display a true message. If it's false, then wait a minute and try again to run the command.</li>
    </ol>
    <h3>5.3.- Instructions for running the endpoint to get the states of Mexico</h3>
    <ol>
        <li>Open Postman, put the GET method and put the following route

```
localhost:3001/getStates
```
This will return the name of three prevously loaded states as a JSON.</li>
        
![Screenshot_5](https://user-images.githubusercontent.com/100879092/163059180-359f63d4-393b-43b9-a834-751a9c2fec92.png)
        
</ol>
    <h3>5.4.- Instructions for running the endpoint to get the zip code</h3>
    <ol>
        <li>Open Postman, put the GET method and put the following route

```
localhost:3001/getCP/55600
```
This will return the information for this zip code specifically as a JSON. You can look up any zip code from the three states.
        </li>
        
![Screenshot_6](https://user-images.githubusercontent.com/100879092/163059363-a43c53b5-9d81-47bd-8578-e0014f732436.png)
        
</ol>
</ol>

<br>
<h2>6.- Instructions for running the unit test in Visual Studio Code</h2>
<ol>
    <li>Open Visual Studio Code and open the repository.</li>
    <li>Select run and Debug, choose the file 

```
test.js
```
and click start debugging. The unit test has seven tests with the specifications of each one</li>
    
![Screenshot_7](https://user-images.githubusercontent.com/100879092/163064334-f42162d1-29ff-4c41-94d4-c994af181119.png)

</ol>