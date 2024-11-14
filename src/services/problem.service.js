const {sanitizeMarkdownContent} = require('../utils/index');


class ProblemService {
    constructor(problemRepository){
        this.problemRepository=problemRepository
    }


    async createProblem(problemData){

        try{
            //1.Sanitize the markdown for description

        problemData.description = sanitizeMarkdownContent(problemData.description);

        

        const problem = await this.problemRepository.createProblem(problemData);

       

        return problem;
        }catch(error){
            console.log(error);

            throw error;

        }
        
    }


}



module.exports = ProblemService;