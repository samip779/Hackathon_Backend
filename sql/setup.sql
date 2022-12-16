create type usertype as enum ('employer', 'employee');
create type offerstatus as enum ('assigned', 'completed', 'vacant');
create type dealstatus as enum ('requested', 'accepted');


create table users (
  id bigserial primary key,
  username text not null,
  email text not null unique,
  password text not null,
  usertype usertype,
  photo text,
  bio text
);

create table offer (
  id bigserial primary key,
  user_id bigint not null references users on delete cascade,
  created_at timestamp(0) with time zone not null default now(),
  title text not null,
  description text not null,
  price integer not null,
  status offerstatus
);

create table deal (
  id bigserial primary key,
  offer_id bigint not null references offer on delete cascade,
  employee_id bigint not null references users on delete cascade,
  dealstatus dealstatus,
  unique(offer_id, employee_id)
);

create table post (
  id bigserial primary key,
  user_id bigint not null references users on delete cascade,
  title text not null,
  description text not null
);

create table comment (
  id bigserial primary key,
  post_id bigint not null references post on delete cascade,
  content text not null,
  user_id bigint not null references users on delete cascade

)
