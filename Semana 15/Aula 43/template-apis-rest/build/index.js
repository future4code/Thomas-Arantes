"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando express com Request e Response e cors
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//iniciando a aplicação web com express
const app = express_1.default();
//ativando os módulos de Bodyparser e cors
app.use(express_1.default.json());
app.use(cors_1.default());
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
];
// Resposta 1
app.get("/users/all", (req, res) => {
    const result = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.type,
        age: user.age
    }));
    res.status(200).send(result);
});
//Resposta 1.a - É utilizado o método .get
//1.b - indiquei a entidade usando o "/users/all"
// Resposta 2 
app.get("/user/:type", (req, res) => {
    let errorCode = 400;
    let userTypes;
    (function (userTypes) {
        userTypes["NORMAL"] = "NORMAL";
        userTypes["ADMIN"] = "ADMIN";
    })(userTypes || (userTypes = {}));
    ;
    try {
        const type = req.params.type;
        if (!type) {
            errorCode = 422;
            throw new Error("Tipo Inválido, insira valores NORMAL OU ADMIN");
        }
        const myUser = users.filter(((u) => u.type.toUpperCase() === type.toUpperCase()));
        if (!myUser) {
            errorCode = 404;
            throw new Error("Tipo não encontrado, , insira valores NORMAL OU ADMIN");
        }
        const result = myUser;
        res.status(200).send(result);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
//2.a - Usei PathParams da URL com o req.params.type
//2.b - É possível utilizando o ENUM
// Resposta 3 
app.get("/user", (req, res) => {
    let errorCode = 400;
    try {
        const nome = req.query.nome;
        if (!nome) {
            errorCode = 422;
            throw new Error("Nome inválido");
        }
        const myUser = users.find(((u) => u.name.toLowerCase() === nome.toLowerCase()));
        if (!myUser) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }
        const result = myUser;
        res.status(200).send(result);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
//3.a É utilizado o QueryParams
// Resposta 4 
app.post("/user", (req, res) => {
    let errorCode = 400;
    try {
        const reqBody = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        };
        if (!reqBody.name || !reqBody.email || !reqBody.type || !reqBody.age) {
            errorCode = 422;
            throw new Error("Algum campo está inválido, confira e preencha novamente.");
        }
        users.push(reqBody);
        res.status(200).send({ message: "Usuário inserido com sucesso " });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
//4.a Nada de diferente aconteceu em relação ao .post
//4.b O .post tem mais vantagens, sendo quase um coeinga em relação ao put e o patch
// Resposta 5
app.put("/user/:id", (req, res) => {
    let errorCode = 400;
    try {
        const reqBody = {
            id: Number(req.params.id),
            name: req.body.name
        };
        if (!reqBody.name) {
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        }
        if (isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("id inválido");
        }
        const myUserIndex = users.findIndex(((u) => u.id === Number(reqBody.id)));
        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado, tente outros parametros.");
        }
        users[myUserIndex].name = reqBody.name;
        res.status(200).send({ message: "Dados do usuário atualizados com sucesso" });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
// Resposta 6
app.patch("/user/:id", (req, res) => {
    let errorCode = 400;
    try {
        const reqBody = {
            id: Number(req.params.id),
            name: req.body.name
        };
        if (!reqBody.name) {
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        }
        if (isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("id inválido");
        }
        const myUserIndex = users.findIndex(((u) => u.id === Number(reqBody.id)));
        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado, tente outros parametros.");
        }
        users[myUserIndex].name = reqBody.name;
        res.status(200).send({ message: "Dados do usuário atualizados com sucesso" });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
// Resposta 7
app.delete("/user/:id", (req, res) => {
    let errorCode = 400;
    try {
        const reqBody = {
            id: Number(req.params.id),
            name: req.body.name
        };
        if (!reqBody.name) {
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        }
        if (isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("id inválido");
        }
        const myUserIndex = users.findIndex(((u) => u.id === Number(reqBody.id)));
        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado, tente outros parametros.");
        }
        users[myUserIndex].name = reqBody.name;
        res.status(200).send({ message: "Dados do usuário atualizados com sucesso" });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
