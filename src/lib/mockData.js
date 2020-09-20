const mockProphetsData = [
   {
      prophetId: 1,
      image:
         "https://img.ltn.com.tw/Upload/partner/page/2019/08/23/190823-4626-01-geReG.jpg",
      name: "Corgi",
      score: 9.9,
      num_predictions: 99,
      description:
         "one hundred fifty characters one hundred fifty characters one hundred fifty characters one hundred fifty characters one hundred fifty characters one h",
   },
   {
      prophetId: 2,
      image:
         "https://smallcaps.com.au/wp-content/uploads/2020/05/Warren-Buffett-teaching-valuable-lessons-COVID-19-airline-stocks-sell-business-investment.jpg",
      name: "Warren Buffett",
      score: 9.3,
      num_predictions: 3,
      description:
         "American investor, business tycoon, philanthropist, one of the most successful investors in the world, the world's seventh-wealthiest person.",
   },
   {
      prophetId: 3,
      image:
         "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
      name: "Bill Gates",
      score: 8.3,
      num_predictions: 300,
      description:
         "American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation.",
   },
   {
      prophetId: 4,
      image:
         "https://image.cnbcfm.com/api/v1/image/104225995-_95A5004.jpg?v=1540458420",
      name: "Jack Ma",
      score: 8.6,
      num_predictions: 66,
      description:
         "Chinese business magnate, investor and philanthropist. He is the co-founder and former executive chairman of Alibaba Group, a multinational conglomerate.",
   },
]

const mockPredictionsData = [
   {
      predictionId: 1,
      prophetId: 2,
      image:
         "https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/468321/fool-not-getty-warren-buffett.jpg&w=2000&op=resize",
      title: "Warren Buffett Just Won a $1 Million Bet",
      description:
         "In 2007, Warren Buffett bet a million dollars that an index fund would outperform a collection of hedge funds over the course of 10 years. This week he won that bet, but the big winner in the wager is a charity called Girls Inc.",
      score: 10,
      num_reviews: 66,
      anncounced_date: "2007",
      result_reveal_date: "2017-12-30",
      status: "Result Revealed",
   },
   {
      predictionId: 2,
      prophetId: 3,
      image:
         "https://www.plantbasednews.org/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTcxMzM4MzM3MTEyNTY1NzQy/coronavirusbillgates.webp",
      title: "TED 2015: Bill Gates warns on future disease epidemic",
      description:
         "The world needs to prepare for the next major health crisis, Bill Gates has told delegates at the Ted (Technology, Entertainment and Design) conference.",
      score: 8.6,
      num_reviews: 888,
      anncounced_date: "2015-03-19",
      result_reveal_date: "2020-01-24",
      status: "Result Revealed",
   },
   {
      predictionId: 3,
      prophetId: 4,
      image: "https://images.indianexpress.com/2018/09/jack-ma.jpg",
      title:
         "Jack Ma, once proponent of 12-hour workdays, now foresees 12-hour workweeks",
      description:
         "In the next 20 to 30 years, human beings will live much longer. Life science technology is going to make people live probably 100 or 120 years,” he said. The world wouldn’t need a lot of jobs.",
      score: 0,
      num_reviews: 0,
      anncounced_date: "2019-08-29",
      result_reveal_date: "2039-08-29",
      status: "Ongoing",
   },
   {
      predictionId: 4,
      prophetId: 2,
      image: "https://i.insider.com/5f3fd15f89aff80028ab7167?format=jpeg",
      title: "Warren Buffett to invest $5 billion in Bank of America",
      description:
         '"I am impressed with the profit-generating abilities of this franchise, and that they are acting aggressively to put their challenges behind them. Bank of America is focused on their customers and on serving them well. That is what customers want, and that\'s the company\'s strategy." Warren Buffett said in a press release.' ,
      score: 7.8,
      num_reviews: 1,
      anncounced_date: "2011-08-25",
      result_reveal_date: "Unknown",
      status: "Ongoing",
   },
]

export { mockProphetsData, mockPredictionsData }