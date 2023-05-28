import { rest } from "msw";
import { URL } from "../constants";
import allStations from "./TestDatabase/AllStations.json";
import journeyPage1 from "./TestDatabase/JourneyPage1.json";
import journeyPage2 from "./TestDatabase/JourneyPage2.json";
import singleStation from "./TestDatabase/SingleStation.json";

export const handlers = [
  rest.get(`${URL}/stations/all`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allStations));
  }),
];
