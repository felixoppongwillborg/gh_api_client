describe("user can search on github", () =>{
  beforeEach(() => { 
    cy.server()
    cy.visit("/");
    cy.route({
      method: "post",
      url: "https://api.github.com/users/barack",
      response: "fixture:userCanSearchOnGithub.js"
    })
  });
  it("user can search on github", () => {
    cy.get("input").type("barack");
    cy.get("button").click()
  });
  
})