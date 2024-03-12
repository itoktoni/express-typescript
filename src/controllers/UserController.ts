import {Router, Request , Response} from 'express';
import ControllerInterface from '../contract/ControllerInterface';

class UserController implements ControllerInterface{
    public create(req: Request, res: Response): Response {
        return res.send({
            status : "Ok",
            code : 200
        });
    }
}

export default new UserController();