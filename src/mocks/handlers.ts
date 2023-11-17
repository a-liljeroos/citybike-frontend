import { rest } from "msw";
import { URL } from "../constants";
import allStations from "./TestDatabase/AllStations.json";
import singleStation from "./TestDatabase/SingleStation.json";
import singleStationTrafficData from "./TestDatabase/SingleStationTrafficData.json";
import journeyPage1 from "./TestDatabase/JourneyPage1.json";
import journeyPage2 from "./TestDatabase/JourneyPage2.json";

const Joi = require("joi");

export const handlers = [
  //
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // // STATION ROUTES // // //
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //
  rest.get(`${URL}/stations`, (req, res, ctx) => {
    const station_id = req.url.searchParams.get("station_id");
    if (!station_id) {
      return res(ctx.status(400));
    }
    if (Number(station_id) !== 573) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.json(singleStation));
  }),
  //---------------------------------------------------
  rest.get(`${URL}/stations/all`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allStations));
  }),
  //---------------------------------------------------
  rest.get(`${URL}/stations/data`, (req, res, ctx) => {
    const trafficInfo = req.url.searchParams.get("trafficInfo");
    if (!trafficInfo) {
      return res(ctx.status(400));
    }
    if (Number(trafficInfo) !== 573) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.json(singleStationTrafficData));
  }),
  //---------------------------------------------------
  rest.put(`${URL}/stations/edit`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(singleStation));
  }),
  //---------------------------------------------------
  //
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // // JOURNEY ROUTES // // //
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //
  rest.get(`${URL}/journeys/total`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ totalJourneys: 200 }));
  }),
  //---------------------------------------------------
  rest.get(`${URL}/journeys/pages`, (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    if (!page) {
      return res(ctx.status(400));
    }
    if (Number(page) === 1) {
      return res(ctx.status(200), ctx.json(journeyPage1));
    }
    if (Number(page) === 2) {
      return res(ctx.status(200), ctx.json(journeyPage2));
    }
    return res(ctx.status(404));
  }),
  //---------------------------------------------------
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
];
