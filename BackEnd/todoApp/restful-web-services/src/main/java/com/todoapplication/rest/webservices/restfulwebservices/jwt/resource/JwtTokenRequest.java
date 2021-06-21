package com.todoapplication.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

//    { in28minutes
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU5Mjg2NDgyNSwiaWF0IjoxNTkyMjYwMDI1fQ.ytUFWxpxWh0NcEGW68dnNdc8PjHMwKpdhnCS-818f9FBqJB1EgqlMtx8nYWBQdY0S2nWre7ZAunITWfKYgEq1g"
//    }
    
//    { sravani
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzcmF2YW5pIiwiZXhwIjoxNTkyODY2NTQxLCJpYXQiOjE1OTIyNjE3NDF9.WeileUZYyfhq8jFM3rCGQIQYU8tMCwkxhMAENSt_Lrs-AXuF09pQIzPyOiG2WJTGj9D3xuKGYZ_89nng42tmcg"
//    }
    
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

