import { Request, Response } from "express";

class CreateOrderedController {    
    async handle(req: Request, res: Response) {
        
        try {
            return res.status(200).json()
        } catch (error) {
            return res.status(400).json({"msg": ""})
        }
    }
}

export {CreateOrderedController}