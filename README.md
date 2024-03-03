# frontend

# backend
database table
- person: id, name
- message: id, content, timestamp

```
import database

# class person(SERIAL PRIMARY KEY id, VARCHAR(255) name)
p1 = database.person(0, "Mai")
p2 = database.person(0, "Jay")
p3 = database.person(0, "Leo")

# class message(SERIAL PRIMARY KEY id, VARCHAR(4096) content, TIMESTAMP timestamp)
m1 = database.message(0, "Hello world!", "2024-02-29 12:00:00")
m2 = database.message(0, "Hi there!", "2024-02-29 12:50:00")
m3 = database.message(0, "How's everything going?", "2024-02-29 14:50:00")

p1.ADD()
p2.ADD()
p3.ADD()
p3.DELETE()
p3.SHOW()

==> {1, "Mai"}
    {2, "Jay"}

# same implementation as message
```