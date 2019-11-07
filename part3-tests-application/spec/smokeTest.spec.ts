import { GamePage } from "../cypress/pages/gamePage";

let gamePage = new GamePage(3, 3);

describe("Test base game funcionality", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("serverUrl"));
    });
    it("Test game counters", () => {
        //when
        gamePage.gameBoard.rotateTile(1, 1);

        //then
        AssertNumberOfStepsAndConection();
    });

    it("Test rotation tile on game board", () => {
        //given
        AssertTileRotation(90);

        //when
        gamePage.gameBoard.rotateTile(1, 1);

        //then
        AssertTileRotation(180);
    });
});

function AssertNumberOfStepsAndConection(): void {
    gamePage.gameScorePanel.assertCurrentStepsCount(1);
    gamePage.gameScorePanel.assertCurrentConnectionsCount(0);
}

function AssertTileRotation(angle: number) {
    gamePage.gameBoard.assertActualRotation(1, 1, angle);
}