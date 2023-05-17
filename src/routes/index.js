import express from "express";
import livros from "./livrosRoutes.js";
//import livros from "../models/livro";

const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo : "Curso de Node"})
    })
    app.use(
        express.json(),
        livros
    )
}

export default routes