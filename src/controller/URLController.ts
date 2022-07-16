import { Request, Response } from "express";
import shortid from "shortid"
import {config} from "../config/Constants"
import { URLModel } from "../database/model/URL";

export class URLController {
    public async shorten(request: Request, response: Response): Promise<void> {
        const { originURL } = request.body;
        const url = await URLModel.findOne({originURL})
        if(url){
            response.json(url);
        }
        const hash = shortid.generate();

        const shortURL = `${config.API_URL}/${hash}`;
        const newUrl = await URLModel.create({hash, shortURL, originURL});
        response.json({ newUrl})
    }

    public async redirect(request: Request, response: Response): Promise<void> {
        // pegar hash da URL
        const { hash } = request.params
        const url = await URLModel.findOne({hash})
        if(url){
            response.redirect(url.originURL);
            return
        }
        response.status(400).json({error: "URL not found"})
    }
}