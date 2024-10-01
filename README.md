```
  
```


Teachers = [
  post: {
    full_name => "String",
    job => "String",
    about => "String",
    img => "String",
    => post_request MultipartForm Data
  },
  get: {
    full_name => "String",
    job => "String",
    about => "String",
    img => "String",
    id: "String",
  }
  update: {
    id => "String",

    object: {
      full_name => "String",
      job => "String",
      about => "String",
      img => "String",
    }
  },
  delete: {
    id => "String",
  }
],


Kurslar = [
    post: {
      title => "String",
      description => "String",
      full_description => "String",
    },
    get: {
       title => "String",
       description => "String",
       full_description => "String",
       id: "String",
    },
    update: {
      id => "String",

      object: {
        title => "String",
        description => "String",
        full_description => "String",
      }
    },
    delete: {
        id => "string
    }
]

<!-- Telegram bot -->
Report = [
  {
    post: {
      name => "Report",
      phone_number => "string"
    },
  }
]