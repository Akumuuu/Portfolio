
describe('Pixel 8a Use Magic eraser Tests', () => {



    it('Open Pixel 8a Use Magic eraser', async () => {
        await browser.url('https://akumuuu.github.io/Portfolio/')
        await browser.pause(2000)
        await browser.$('/html/body/header/button').waitForDisplayed()
    })



})