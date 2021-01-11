### Exercício 1

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
```

* a) VARCHAR é uma string seguida por parenteses com um número representando o máximo de caracteres que pode existir dentro daquela string.
DATE representa uma data no padrão ano - mes - dia
* b) O comando retornou uma lsita com todos os banco de dados e tabelas criadas
* c) O comando retorna todos os campos na tabela e diz o tipo, se é null ou não e o valor default

### Exercício 2 
* a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "male"
);
```

* b) Erro: 1062 entrada duplicada '002' para chave PRIMARIA 
* c) Erro 1136 Numero de colunas não corresponde ao valor da linha 1
```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
* d) Error 1364 O campo nome não tem um valor padrão
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

* e) Erro 1292 Valor incorreto para data
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

* f)
``` 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Tatá Werneck",
  12719333.33,
  "1983-08-11", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Rafa Vitti",
  8533.33,
  "1995-11-02", 
  "male"
);
``` 

### Exercício 3

* a) SELECT id, name, salary, birth_date from Actor WHERE gender = "female"

* b) 
```
SELECT salary from Actor WHERE name = "Tony Ramos"
```

* c) 

* d) 
```
SELECT id, name, salary from Actor WHERE salary <>= 500000;
```
* e) 

### Exercício 4

* a)A Query vai selecionar entre todos elementos da tabela aqueles atores que tem o nome que começa com as letras A e J e dentre esses vai mostrar somente os que recebem mais de 300000

* b) 
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

*c) 
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

* d)

```
SELECT * FROM Actor
WHERE 
(name LIKE "%G%" OR name LIKE "%g% OR name LIKE "%A%" OR name LIKE "%a%) AND salary BETWEEN 350000 AND 900000;
```

