import { Request, Response } from "express";

interface RouteInterface{
    create(req: Request, res: Response): Response;
}

export default RouteInterface;