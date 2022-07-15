describe("LandingPage Test Suite:", () => {
  it("Navigate to LandingPage.", () => {
    cy.visit("http://localhost:3000/landing");
    cy.wait(2000);
  });

  it("Click the next button once.", () => {
    cy.get("#carousel-next-button").click({ waitForAnimations: true });
  });

  it("Navigate to the last image", () => {
    cy.wait(2000);
    cy.get("#carousel-next-button").click({ waitForAnimations: true });
    cy.wait(2000);
    cy.get("#carousel-next-button").click({ waitForAnimations: true });
    cy.wait(2000);
    cy.get("#carousel-next-button").click({ waitForAnimations: true });
  });
});

export {};
