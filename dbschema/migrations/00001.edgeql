CREATE MIGRATION m1mfwdd7wqvonkpmgoeayxkb66hnekkrf3r3yv4mfkzw6p2crp23ha
    ONTO initial
{
  CREATE ABSTRACT TYPE default::Timestamped {
      CREATE REQUIRED PROPERTY createdAt: std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
      CREATE REQUIRED PROPERTY updatedAt: std::datetime {
          SET default := (std::datetime_of_statement());
          CREATE REWRITE
              UPDATE 
              USING (std::datetime_of_statement());
      };
  };
  CREATE TYPE default::Address EXTENDING default::Timestamped {
      CREATE REQUIRED PROPERTY addressCode: std::str;
      CREATE REQUIRED PROPERTY country: std::str;
      CREATE REQUIRED PROPERTY nameOrNumber: std::str;
      CREATE PROPERTY region: std::str;
      CREATE PROPERTY street2: std::str;
      CREATE PROPERTY street: std::str;
      CREATE REQUIRED PROPERTY townOrCity: std::str;
  };
  CREATE TYPE default::Organisation EXTENDING default::Timestamped {
      CREATE REQUIRED PROPERTY name: std::str;
  };
  ALTER TYPE default::Address {
      CREATE LINK organisation: default::Organisation {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
  ALTER TYPE default::Organisation {
      CREATE LINK address := (.<organisation[IS default::Address]);
  };
  CREATE TYPE default::School EXTENDING default::Organisation {
      CREATE PROPERTY emailDomain: std::str;
      CREATE PROPERTY juniorSchool: std::bool;
      CREATE PROPERTY seniorSchool: std::bool;
  };
};
