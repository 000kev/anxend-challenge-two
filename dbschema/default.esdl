module default {


abstract type Timestamped {
    required createdAt: datetime {
      default := datetime_of_statement();
      readonly := true;
    }
    required updatedAt: datetime {
      default := datetime_of_statement();
      rewrite update using (datetime_of_statement());
    }
}
  

type Organisation extending Timestamped {
    required name: str;
    address := .<organisation[is Address];
  }
    
  type School extending Organisation {
    seniorSchool: bool;
    juniorSchool: bool;
    emailDomain: str;
  }

  type Address extending Timestamped {
    required nameOrNumber: str;
    street: str;
    street2: str;
    required townOrCity: str;
    region: str;
    required addressCode: str;
    required country: str;
    organisation: Organisation {
      on target delete delete source;
    }
  }
  

}
