'use strict'

const States = require('../models/state_model.js')

function getHello(req, res)
{
    let name = req.params.name
    
    if (name != null) return res.status(200).send({response:'Hello World '+req.params.name+'!'})
    else return res.status(200).send({response:'Hello World!'})
}

function getCP (req, res) {
    let cp = req.params.cp

    States.find({"cp":cp},{"_id":0}, (error, states) => {
        if (error) return res.status(500).send({response: `Error in the request: ${error}`})
        else if(!Number(cp)) return res.status(404).send({response: 'The zip code '+cp+' isn\'t a number, try again'});
        else if(cp.length != 5) return res.status(404).send({response: 'The length of the zip code is wrong, validate the parameter: '+cp})
        else if (!states || states.length == 0) return res.status(404).send({response: 'The zip code '+cp+' doesn\'t exist'})
    
        let response = states
        res.status(200).send({response})
      })
}


function getStates (req, res) {
    States.distinct("estado", (error, states) => {
        if (error) return res.status(500).send({response: `Error in the request: ${error}`})
        if (!states || states.length == 0) return res.status(404).send({response: 'there are no states, please, contact the admin'})
    
        let response = states
        res.status(200).send({response})
      })
}




module.exports =
{
    getHello,
    getCP,
    getStates
    
}