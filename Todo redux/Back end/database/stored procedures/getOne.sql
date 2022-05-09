create procedure oneTodo
(
@todo_id varchar(100)
)
as
begin
select * from task where todo_id = @todo_id
end