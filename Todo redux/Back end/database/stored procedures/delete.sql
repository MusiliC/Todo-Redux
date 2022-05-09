create procedure deleteTodo
(
@todo_id varchar(100)
)
as
begin
delete from task where todo_id = @todo_id
end