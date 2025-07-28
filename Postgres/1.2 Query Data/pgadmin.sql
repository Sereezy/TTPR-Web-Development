create table world_food(
id serial primary key,
country varchar(45),
Rice float,
wheat float
)

select*from world_food

select rice from world_food

select country from world_food 
where rice=wheat

select country from world_food 
where rice>wheat

select rice from world_food 
where country like 'I'||'%'

select country from world_food

select country from world_food
where wheat < 100

select c.country, f.flag, w.rice,w.wheat
from capitals c inner join flags f on c.country=f.name inner join world_food w
on c.country=w.country