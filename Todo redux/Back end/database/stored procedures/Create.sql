create procedure insertTodo
(

@todo_id varchar(100),
@todo_task varchar(100),
@todo_description varchar(100),
@todo_date date

)

as 
begin

insert into [task](
todo_id,
todo_task,
todo_description,
todo_date

) values (@todo_id, @todo_task, @todo_description, @todo_date )

end