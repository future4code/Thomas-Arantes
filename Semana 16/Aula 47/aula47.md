### Exercício 1 

* a) Uma FOREIGN KEY indica uma propriedade que vem de uma outra tabela, referenciando sempre a PRIMARY KEY de outra tabela

* b)  
```
INSERT INTO Rating 
	(id, comment, rate, movie_id)
VALUES
	("1", "Bom demais! O maior filmes de todos os tempos", 10, 4),
    ("2", "Engraçadinho até, não gosto do Tony Ramos", 7, 1),
    ("3", "A Fernanda Montenegro é o bicho!", 9, 2),
    ("4", "Dormi o Filme todo. Nota 8", 8, 3);
```

* c) Não é possível adicionar ou atualizar uma child row: uma Foreing Key tem restrições

* d) Apagou de boa 

* e) "Não é possível apagar ou atualizar uma parent row". Não é possível apagar uma linha se ela está relacionada com outra tabela

### Exercício 2 

* a) Essa tabela tem apenas duas colunas que representam relações. A primeira coluna pega um filme de uma tabela e a segunda coluna pega um ator de outra tabela

*b) 
```
CREATE TABLE MovieCast (
	movie_id INT,
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES
	(1, "002"),
	(1, "001"),
	(2, "003"),
	(3, "004"),
	(4, "005");
```

* c) "Erro 1452. Não é possível apagar ou atualizar uma child row" Não é possível criar a linha na tabela pois é necessário que os dois valores sejam relacionados com dados que existem nas outras duas tabelas referenciadas.

* d) "Não é possível apagar ou atualizar uma parent row". Não é possível apagar uma linha se ela está relacionada com outra tabela

### Exercício 3 

a) A Query pega os elementos da tabela rating e junta com os da tabela movie, o operador ON determina uma condição para essa relação

* b) 
```
SELECT Movie.id as movie_id, r.rate as rating FROM Movie
INNER JOIN Rating r ON Movie.id = r.movie_id;
```

### Exercício 4

* a) 
```
SELECT Movie.id as movie_id, Movie.name, r.rate as rating, r.comment as rating_comment
FROM Movie
LEFT JOIN Rating r ON Movie.id = r.movie_id;
```

* b)
```
SELECT Movie.id as movie_id, Movie.name, mc.actor_id FROM Movie
RIGHT JOIN MovieCast mc ON mc.movie_id = Movie.id;
```

*c) 
```
SELECT AVG(r.rate), Movie.id, Movie.name from Movie
LEFT JOIN Rating r on Movie.id = r.movie_id
GROUP BY (Movie.id);
```

### Exercício 5 

* a) 

* b) 
```
SELECT Movie.id as movie_id, Movie.name, a.id as actor_id, a.name FROM Movie
LEFT JOIN MovieCast mc ON Movie.id = mc.movie_id
Join Actor a ON a.id = mc.actor_id;
```
* c)
```
SELECT 
	Movie.id as movie_id,
    Movie.name,
    a.id as actor_id,
    a.name,
    r.rate,
    r.comment
FROM Movie
LEFT JOIN Rating r on r.movie_id = Movie.id
LEFT JOIN MovieCast mc ON Movie.id = mc.movie_id
Join Actor a On a.id = mc.actor_id;
```

