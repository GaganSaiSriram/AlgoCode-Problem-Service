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

async function getProblems(req,res,next){

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

async function getProblem(req,res,next){
    try {
        
        const problem = await problemService.getProblem(req.params.id);

        

        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully fetched a problem",
            error:{},
            data:problem
        })

    }catch(error){
        next(error);

    }
}

async function deleteProblem(req,res,next){
    try {
        
            const deletedProblem = await problemService.deleteProblem(req.params.id);
            return res.status(StatusCodes.OK).json({
                success: true,
                message: 'Successfully deleted the problem',
                error: {},
                data: deletedProblem
            });
        
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