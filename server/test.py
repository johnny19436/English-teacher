import database
import psycopg2

p1 = database.person(1, "Jay")
m1 = database.message(1, "Hi there!", "2024-02-29 12:50:00")

p2 = database.person(3, "Kai")
m2 = database.message(1, "Hello world!", "2024-02-29 12:00:00")

#p1.CREATE_TABLE()
# p1.ADD()
#p2.DELETE()

m2.DELETE()