//

const puppeteer = require('puppeteer')

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging());
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  page.setViewport({ width: 500, height: 2400 });
});

describe('User Booking Flow', () => {
  test('Finding 6 Hotels', async () => {
    const hotels = await page.$$('.hotelCard')
    expect(hotels.length).toBe(6)
  })
  test('Redirect to Hotel Detail Page', async () => {
    await page.click(['.hotelCard-pricing button'])
    expect(page.url()).toContain('/hotel')
  })
  test('Finding at least 2 Hotels', async () => {
    const rooms = await page.$$('.hotelDetail-room')
    const roomNumber = rooms.length >= 2 ? true : false
    expect(roomNumber).toBe(true)
  })

  test('Navigate Confirmation Page', async () => {
    await page.click(['.hotelDetail-rooms div:nth-child(2) button'])
    expect(page.url()).toContain('/confirmation')
  })

  //I am looking for the headers instead of the values because in my code logic
  // I made sure that headers only render when values such as confirmationID and clientName exists

  test('Find Confirmation Number and Name', async () => {
    const confirmation = await page.$eval('.room-confirmID', e => e.innerHTML)
    expect(confirmation).toContain('Confirmation ID:')
    const name = await page.$eval('.room-name', e => e.innerHTML)
    expect(name).toContain('Client Name:')
  })
})

afterAll(() => {
  if (isDebugging()) {
    browser.close();
  }
});
