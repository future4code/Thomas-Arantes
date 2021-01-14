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

* a) 
```
SELECT id, name, salary, birth_date from Actor 
WHERE gender = "female"
```

* b) 
```
SELECT salary from Actor 
WHERE name = "Tony Ramos"
```

* c) Ele retorna uma tabela com valores Null
```
SELECT id, name, salary, birth_date, gender from Actor 
WHERE gender = "invalid"
```

* d) 
```
SELECT id, name, salary from Actor WHERE salary <>= 500000;
```
* e) O erro aconteceu porque não exisitia um valor para nome e sim para name 
```
SELECT id, name from Actor 
WHERE id = "002"
```

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

### Exercício 5

```
CREATE TABLE Movie(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    score INT NOT NULL
);

-------------------------------------------------------

INSERT INTO Movie
		(name, synopsis, release_date, score)
VALUES 
	("Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7),
    ("Doce de Mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),
    ("Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8),
    ("Bacurau", "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros são baleados e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. Agora, o grupo precisa identificar o inimigo e criar coletivamente um meio de defesa.", "2019-08-23", 10 )
```

### Exercício 6 

* a)
```
SELECT id, name, score 
FROM Movie
WHERE id="4";
```

* b)

```
SELECT name 
FROM Movie
WHERE name ="Bacurau" ;
```

* c)
```
SELECT id, name, synopsis
FROM Movie 
WHERE score > 7;
```

### Exercício 7 

* a)
```
SELECT * FROM Movie 
WHERE name LIKE "%vida%";
```

* b) 
```
SELECT * FROM Movie
WHERE name LIKE "%povoado%" OR 
synopsis LIKE "%povoado%";
```
* c)
```
SELECT * FROM Movie
WHERE release_date < "2021-01-11";
```
* d)
```
SELECT * FROM Movie
WHERE release_date < "2021-01-11" AND 
(name LIKE "%povoado%" OR synopsis LIKE "%povoado%") AND score > 7;

```



