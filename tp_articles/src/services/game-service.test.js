const GameService = require('./article-service');

test('Tester récupérer tout les jeux', async() => {

    const testResult = await GameService.getAll();

    expect(testResult.code).toBe("200")
})

test('Tester créer un jeu', async() => {

    const testResult = await GameService.createGame();

    expect(testResult.code).toBe("200")
})