import express, { Router } from 'express';
import RouteInterface from './RouteInterface';

abstract class BaseRoutes implements RouteInterface{
    public router :Router;
    constructor(){
        this.router = Router();
    }

    abstract routes():void;
}

export default BaseRoutes;