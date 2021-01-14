import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("servidor tá okay em http://localhost:3003")
})

app.get('/countries/all', (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res.status(200).send(result)
})

app.get('/countries/:id', (req: Request, res: Response) => {
    const countryById: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    if (countryById) {
        res.status(200).send(countryById)
    } else {
        res.status(404).send("Not Found")
    }
})

app.get('/countries/search', (req: Request, res: Response) => {
    let searchCountry: country[] = countries

    if(req.query.name) {
        searchCountry = searchCountry.filter(
            country => country.name.includes(req.query.name as string)
        )
    }

    if(req.query.name) {
        searchCountry = searchCountry.filter(
            country => country.capital.includes(req.query.capital as string)
        )
    }

    if(req.query.name) {
        searchCountry = searchCountry.filter(
            country => country.continent.includes(req.query.continent as string)
        )
    }

    if(searchCountry !== countries && !searchCountry.length){
        res.status(200).send(searchCountry)
    } 
    else{
        res.status(404).send("Not Found")
    }
})