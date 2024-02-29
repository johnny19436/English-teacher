import psycopg2


class person:
    def __init__(self, id, name):
        self.id = id
        self.name = name
    
    def CREATE_TABLE(self):
        conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="a194369672", port=5433)
        cur = conn.cursor()
        try:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS person
                (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255)
                );
            """)
            print("CREATE_TABLE successful...")
        except Exception as error:
            print("CREATE_TABLE error...", error)
        conn.commit()
        cur.close()
        conn.close()
    
    def DROP_TABLE(self):
        conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="a194369672", port=5433)
        cur = conn.cursor()
        try:
            cur.execute("""DROP TABLE IF EXISTS person;""")
            print("DROP_TABLE successful...")
        except Exception as error:
            print("DROP_TABLE error...", error)
        conn.commit()
        cur.close()
        conn.close()
    
    def ADD(self):
        conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="a194369672", port=5433)
        cur = conn.cursor()
        try:
            cur.execute("""INSERT INTO person (name) VALUES (%s);""", (self.name,))
            print("ADD successful...")
        except Exception as error:
            print("ADD error...", error)
        conn.commit()
        cur.close()
        conn.close()
    
    def DELETE(self):
        conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="a194369672", port=5433)
        cur = conn.cursor()
        try:
            cur.execute("""DELETE FROM person WHERE id = (%s) AND name = (%s);""", (self.id, self.name))
            if cur.rowcount == 0:
                print("No rows deleted.")
            else:
                print("DELETE successful...")
        except Exception as error:
            print("DELETE error...", error)
        conn.commit()
        cur.close()
        conn.close()

        


class message:
    def __init__(self, id, content, timestamp):
        self.id = id;
        self.content = content;
        self.timestamp = timestamp;
    
    def CREATE_TABLE(self):
        conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="a194369672", port=5433)
        cur = conn.cursor()
        try:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS message
                (
                    id SERIAL PRIMARY KEY,
                    content VARCHAR(4096),
                    timestamp TIMESTAMP NOT NULL
                );
            """)
            print("CREATE_TABLE successful...")
        except Exception as error:
            print("CREATE_TABLE error...", error)
        conn.commit()
        cur.close()
        conn.close()
    
    def DROP_TABLE(self):
        conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="a194369672", port=5433)
        cur = conn.cursor()
        try:
            cur.execute("""DROP TABLE IF EXISTS message;""")
            print("DROP_TABLE successful...")
        except Exception as error:
            print("DROP_TABLE error...", error)
        conn.commit()
        cur.close()
        conn.close()
    
    def ADD(self):
        conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="a194369672", port=5433)
        cur = conn.cursor()
        try:
            cur.execute("""INSERT INTO message (content, timestamp) VALUES (%s, %s);""", (self.content, self.timestamp))
            print("ADD successful...")
        except Exception as error:
            print("ADD error...", error)
        conn.commit()
        cur.close()
        conn.close()

    def DELETE(self):
        conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="a194369672", port=5433)
        cur = conn.cursor()
        try:
            cur.execute("""DELETE FROM message WHERE id = (%s) AND content = (%s) AND timestamp = (%s);""", (self.id, self.content, self.timestamp))
            if cur.rowcount == 0:
                print("No rows deleted.")
            else:
                print("DELETE successful...")
        except Exception as error:
            print("DELETE error...", error)
        conn.commit()
        cur.close()
        conn.close()
    
