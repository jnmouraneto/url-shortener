import mongoose from "mongoose"
import { config } from "../config/Constants"

export class MongoConection {
    public async conect(): Promise <void>{
        try {
            await mongoose.connect(config.MONGO_CONECTION)
            console.log("Database Connected")
        } catch (error) {
            console.error(error.message)
        }
    }
}