# JDRA_Bootcamp
REST API to Go Bootcamp
<p>This API was written in javascript and mongodb language. The API has four endpoints; two of the endpoints get the phrase hello world and the other two get states and zip codes
    of three Mexican states. Furthermore, this readme contains all the instructions that are necessary to test the API.
</p>

<br>
<h2>1.- Instructions for clonning the repository</h2>
<ol>
    <li>Open a terminal and run the following command "git clone https://github.com/jdrdza/JDRA_Bootcamp.git".</li>
    <li>When this is done, run the command "git pull".</li>
    <li>If the last step doesn't work, run "git checkout" and repeat only the step 2.</li>
</ol>

<br>
<h2>2.- Instructions for installing the necessary tools</h2>
<ol>
    <li>Open a terminal and go to the path where the repository was downloaded.</li>
    <li>There, run the following commands "npm i -S express", "npm i -S body-parser", "npm i -D nodemon" and "npm i -S mongoose".</li>
    <li>If the last step doesn't work, run "git checkout" and repeat only the step 2.</li>
</ol>

<br>
<h3>2.1.- Instructions for installing MongoDB on the Windows OS</h3>
<ol>
    <li>Download the following package https://www.mongodb.com/try/download/community.</li>
    <li>run the msi package and follow the instalation instructions</li>
    <li>Now it's necessary to go the following path to run the mongodb service: C:\Program Files\MongoDB\Server\5.0\bin and run mongod.exe.</li>
</ol>

<br>
<h3>2.2.- Instructions for installing MongoDB on the Linux OS</h3>
<ol>
    <li>Open a terminal and in the previously cloned repository, run the commands  "sudo apt update" and "sudo apt install mongodb-org".</li>
    <li>After running the following commands to initialise and get status respectively. "sudo systemctl start mongod.service" and "sudo systemctl status mongod".</li>
</ol>

<br>
<h2>3.- Instructions for initialising the server</h2>
<ol>
  <li>In the terminal go to the repository path and run the command "npm start index.js".</li>
  <li>If everything is correct, the server will initialise like the image bellow. This terminal shouldn't be closed</li>
</ol>


<br>
<h2>4.- Instructions for running Hello World endpoints</h2>
<ol>
  <li>Open Postman, put the GET method and put the following route "localhost:3001/getHello". This will return the message "Helllo World" as a json.</li>
  <li>To get the second endpoint it's the same as the last step but with the following route "localhost:3001/getHello/Daniel". This will return Hello World Daniel as a json</li>
</ol>

<br>
<h2>5.- Instructions for running the endpoints get states and get zip code</h2>
<ol>
    <p>Before using the endpoints, it's necessary to load the following data (Ciudad de Mexico.js, Hidalgo.js, Estado de Mexico.js)</p>
    <h3>5.1.- Instructions for loading data into the Windows OS</h3>
    <ol>
        <li>Go to the following path in windows explorer "C:\Program Files\MongoDB\Server\5.0\bin" and place the files that are in the data folder.</li>
        <li>Now go to the same path using the terminal. The path is the following: "C:\"Program Files"\MongoDB\Server\5.0\bin" and run the command start mongo.exe.
            This will open a new terminal.
        </li>
        <li>In the new terminal, run the following commands; load("Ciudad de Mexico.js"), load("Hidalgo.js") and load("Estado de Mexico.js"). If everything is correct, on 
            each command the terminal will display a true message. If it's false, then wait a minute and try again to run the command.
        </li>
    </ol>
    <h3>5.2.- Instructions for loading data into the Linux OS</h3>
    <ol>
        <li>Copy the files that are in the data folder to a local folder.</li>
        <li>run the command "mongo" and run the following commands; load("Ciudad de Mexico.js"), load("Hidalgo.js") and load("Estado de Mexico.js"). If everything is correct, on each command the terminal will display a true message. If it's false, then wait a minute and try again to run the command.</li>
    </ol>
    <h3>5.3.- Instructions for running the endpoint to get the states of Mexico</h3>
    <ol>
        <li>Open Postman, put the GET method and put the following route "localhost:3001/getStates". This will return the name of three prevously loaded states as a json.</li>
    </ol>
    <h3>5.4.- Instructions for running the endpoint to get the zip code</h3>
    <ol>
        <li>Open Postman, put the GET method and put the following route "localhost:3001/getCP/03999". This will return the information for this zip code specifically as a json. You can look up any zip code from the three states.
        </li>
    </ol>
</ol>

<br>
<h2>6.- Instructions for running the unit test in Visual Studio Code</h2>
<ol>
    <li>Open Visual Studio Code and open the repository.</li>
    <li>Select run and Debug, choose the file "test.js" and click start debugging. The unit test has seven tests with the specifications of each one</li>
</ol>