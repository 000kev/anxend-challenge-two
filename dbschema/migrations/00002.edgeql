CREATE MIGRATION m1426psh5jowjp7hblgou5w4pbggdipsomqs56okncnlvbzpbboliq
    ONTO m1mfwdd7wqvonkpmgoeayxkb66hnekkrf3r3yv4mfkzw6p2crp23ha
{
  ALTER TYPE default::Timestamped {
      DROP PROPERTY createdAt;
      DROP PROPERTY updatedAt;
  };
  ALTER TYPE default::Organisation {
      DROP LINK address;
      DROP PROPERTY name;
  };
  DROP TYPE default::Address;
  DROP TYPE default::School;
  DROP TYPE default::Organisation;
  DROP TYPE default::Timestamped;
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY name: std::str;
  };
};
