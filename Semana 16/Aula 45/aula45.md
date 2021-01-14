### Exercício 1 

* a) Esse comando remove a coluna de salário da tabela

* b) Esse comando muda o nome da opção gender para sex 

* c)  esse comando aumenta a quantidade de caracteres da opção gender de 6 para 255

* d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
``` 

### EXercício 2

* a) 
```
UPDATE Actor 
SET name = "Laura Cardoso"
WHERE id = 003;
```

* b) 
```
UPDATE Actor
SET name = "Juliana Pães"
WHERE name = "Juliana Paes";
```

* c)
```
UPDATE Actor 
SET 
	name = "Paola Oliveira",
    birth_date = "1982-04-14",
    salary = 500000,
    gender = "female"
WHERE id = 005;
```

* d) Aparece um erro acusando que a tabela é desconhecida

### Exercício 3 

* a)
```
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";
```

* b) 
```
DELETE FROM Actor 
WHERE 
	salary > 100000000 AND
    gender = "male";
```