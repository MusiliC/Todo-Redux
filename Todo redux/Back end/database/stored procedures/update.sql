create procedure updateTodo
(
@todo_id varchar(100),
@todo_task varchar(100),
@todo_description varchar(100),
@todo_date date
)
as
begin
update task set  todo_task = @todo_task,
todo_description = @todo_description,
todo_date = @todo_date where todo_id = @todo_id
end