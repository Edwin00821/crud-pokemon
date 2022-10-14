DROP DATABASE DBPokemons;

CREATE DATABASE DBPokemons;

USE DBPokemons

CREATE TABLE CType (
    id_ctype INT NOT NULL AUTO_INCREMENT,
    name_type VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_ctype)
);

CREATE TABLE MPokemon (
    id_poke INT NOT NULL AUTO_INCREMENT,
    name_poke VARCHAR(255) NOT NULL,
    weight_poke INT NOT NULL,
    height_poke INT NOT NULL,
    ability VARCHAR(255) NOT NULL,
    img_poke VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_poke)
);

CREATE TABLE MStats (
    id_stats INT NOT NULL AUTO_INCREMENT,
    id_poke INT NOT NULL,
    hp INT NOT NULL,
    atk INT NOT NULL,
    def INT NOT NULL,
    sp_atk INT NOT NULL,
    sp_def INT NOT NULL,
    speed INT NOT NULL,
    PRIMARY KEY (id_stats),
    FOREIGN KEY (id_poke) REFERENCES MPokemon(id_poke)
);
CREATE TABLE MType (
    id_type INT NOT NULL AUTO_INCREMENT,
    id_poke INT NOT NULL,
    id_ctype INT NOT NULL,
    PRIMARY KEY (id_type),
    FOREIGN KEY (id_poke) REFERENCES MPokemon(id_poke),
    FOREIGN KEY (id_ctype) REFERENCES CType(id_ctype)
);

INSERT INTO CType (name_type) VALUES 
    ('Normal'), 
    ('Fire'), 
    ('Water'), 
    ('Electric'), 
    ('Grass'), 
    ('Ice'), 
    ('Fighting'), 
    ('Poison'), 
    ('Ground'), 
    ('Flying'), 
    ('Psychic'), 
    ('Bug'), 
    ('Rock'), 
    ('Ghost'), 
    ('Dragon'), 
    ('Dark'), 
    ('Steel'), 
    ('Fairy');
