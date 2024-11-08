function pingProblemController(req,res){
    res.json({message:"Ping Problem controller is up!!"})
}

function addProblem(req,res){

    res.status(501).json({
        message:"Not implemenred"   
    })

}

function getProblem(req,res){

    res.status(501).json({
        message:"Not implemenred"   
    })

}

function getProblems(req,res){
    res.status(501).json({
        message:"Not implemenred"   
    })

}

function deleteProblem(req,res){
    res.status(501).json({
        message:"Not implemenred"   
    })

}

function updateProblem(req,res){
    res.status(501).json({
        message:"Not implemenred"   
    })
    
}



module.exports = {
    addProblem:addProblem,
    getProblem:getProblem,
    getProblems:getProblems,
    deleteProblem:deleteProblem,
    updateProblem:updateProblem,
    pingProblemController:pingProblemController
}