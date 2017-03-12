CREATE FUNCTION update_status() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    DECLARE
      new_status int;
      new_paid numeric;
      amount numeric;
      status numeric;
      update_new bool := false;
      update_old bool := false;
    BEGIN
      if (tg_op = 'DELETE') THEN
        update_old := true;
      END IF;
      if (tg_op = 'UPDATE') THEN
        update_old := true;
        update_new := true;
      END IF;
      if (tg_op = 'INSERT') then
        update_new := true;
      END IF;


      IF (update_new) THEN
        select sum(payments.amount) from payments where invoice = NEW.invoice GROUP BY invoice into new_paid;
        select invoices.amount, invoices.status from invoices where id = NEW.invoice into amount, status;

        IF (status != 1) THEN
          IF (new_paid is null or new_paid < amount) THEN
            new_status := 0;
          ELSIF (new_paid = amount) THEN
            new_status := 2;

          ELSIF (new_paid > amount) THEN
            new_status := 3;
          END IF;

          UPDATE invoices SET status = new_paid where invoices.id = NEW.invoice;

        END IF;
      END IF;

      IF (update_old) THEN


        select COALESCE(sum(payments.amount),0) from payments where invoice = OLD.invoice GROUP BY invoice into new_paid;
        select invoices.amount, invoices.status from invoices where id = OLD.invoice into amount, status;

        IF (status != 1) THEN
          IF (new_paid is null or new_paid < amount) THEN
            new_status := 0;
          ELSIF (new_paid = amount) THEN
            new_status := 2;

          ELSIF (new_paid > amount) THEN
            new_status := 3;

          END IF;
          UPDATE invoices SET status = new_status where invoices.id = OLD.invoice;

        END IF;

      END IF;

      RETURN NULL;
    END;
$$;

CREATE TABLE contractors (
    nip character varying(10) NOT NULL,
    name text NOT NULL,
    address text NOT NULL,
    phone character varying(20),
    email text
);

CREATE TABLE invoices (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    amount numeric(12,2) NOT NULL,
    created_at date NOT NULL,
    payment_date date,
    comment text,
    status smallint NOT NULL,
    created_by integer NOT NULL,
    contractor character varying(10) NOT NULL
);


CREATE SEQUENCE invoices_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE invoices_id_seq OWNED BY invoices.id;

CREATE TABLE payments (
    id integer NOT NULL,
    amount double precision NOT NULL,
    date date NOT NULL,
    invoice integer NOT NULL
);


CREATE SEQUENCE payments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE payments_id_seq OWNED BY payments.id;



CREATE TABLE users (
    id integer NOT NULL,
    username character varying(63) NOT NULL,
    password character varying(32) NOT NULL,
    last_seen timestamp without time zone
);


CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;



ALTER SEQUENCE users_id_seq OWNED BY users.id;

ALTER TABLE ONLY invoices ALTER COLUMN id SET DEFAULT nextval('invoices_id_seq'::regclass);

ALTER TABLE ONLY payments ALTER COLUMN id SET DEFAULT nextval('payments_id_seq'::regclass);

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


ALTER TABLE ONLY contractors
    ADD CONSTRAINT contractors_pkey PRIMARY KEY (nip);

ALTER TABLE ONLY invoices
    ADD CONSTRAINT invoices_pkey PRIMARY KEY (id);

ALTER TABLE ONLY payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);

CREATE UNIQUE INDEX contractors_name_uindex ON contractors USING btree (name);
CREATE UNIQUE INDEX contractors_nip_uindex ON contractors USING btree (nip);
CREATE UNIQUE INDEX invoices_id_uindex ON invoices USING btree (id);
CREATE UNIQUE INDEX users_id_uindex ON users USING btree (id);
CREATE UNIQUE INDEX users_username_uindex ON users USING btree (username);

ALTER TABLE ONLY invoices
    ADD CONSTRAINT invoices_contractors_nip_fk FOREIGN KEY (contractor) REFERENCES contractors(nip) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY invoices
    ADD CONSTRAINT invoices_users_id_fk FOREIGN KEY (created_by) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY payments
    ADD CONSTRAINT payments_invoices_id_fk FOREIGN KEY (invoice) REFERENCES invoices(id) ON UPDATE CASCADE ON DELETE CASCADE;

CREATE TRIGGER payments AFTER INSERT OR DELETE OR UPDATE ON payments FOR EACH ROW EXECUTE PROCEDURE update_status();