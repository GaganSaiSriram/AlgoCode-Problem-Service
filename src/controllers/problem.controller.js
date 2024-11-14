const NotImplemented = require('../errors/notimplemented.error');

const {ProblemService} = require('../services/index');

const {ProblemRepository} = require('../repositories/index');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
    res.json({message:"Ping Problem controller is up!!"})
}

async function addProblem(req,res,next){

    try {
        // nothing implemented

        

        const newproblem = await problemService.createProblem(req.body);

        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'Successfullt created a new problem',
            error:{},
            data:newproblem
        })

    }catch(error){
         next(error);
    
    }

}

async function getProblems(req,res){

    try {
        const response = await problemService.getAllProblems();

        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully fetched all problems",
            error:{},
            data:response
        })
    }catch(error){
        next(error);

    }

}

function getProblem(req,res){
    try {
        // nothing implemented

        throw new NotImplemented('getProblems');
    }catch(error){
        next(error);

    }
}

function deleteProblem(req,res){
    try {
        // nothing implemented

        throw new NotImplemented('deleteProblem');
    }catch(error){
        next(error);

    }

}

function updateProblem(req,res){
    try {
        // nothing implemented

        throw new NotImplemented('updateProblem');
    }catch(error){
        next(error);

    }
    
}



module.exports = {
    addProblem:addProblem,
    getProblem:getProblem,
    getProblems:getProblems,
    deleteProblem:deleteProblem,
    updateProblem:updateProblem,
    pingProblemController:pingProblemController
}