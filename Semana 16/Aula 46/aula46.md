### Exercício 1 

* a)

* b)
```
const searchActor = async (name: string) : Promise <any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
   return result
}

app.get("/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name as string
    const getActor = await searchActor(name);
    res.status(200).send({ actor : getActor })
  } 
  catch (error){
    console.log(error.sqlMessage || error.message)
    res.send(error.message)
  }
})

```

* c)
```
const countActors = async (gender: string) : Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count 
}

app.get("/gender/:gender", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender as string
    const getCount = await countActors(gender);
    res.status(200).send({ actor : getCount })
  } 
  catch (error){
    console.log(error.sqlMessage || error.message)
    res.send(error.message)
  }
})
```