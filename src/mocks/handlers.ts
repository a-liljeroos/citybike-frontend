import { rest } from "msw";
import { URL } from "../constants";
import * as testDatabase from "./TestDatabase/testDatabase";

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
    return res(ctx.status(200), ctx.json(testDatabase.singleStation));
  }),
  //---------------------------------------------------
  rest.get(`${URL}/stations/all`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testDatabase.allStations));
  }),
  //---------------------------------------------------
  rest.get(`${URL}/stations/trafficinfo`, (req, res, ctx) => {
    const station_id = req.url.searchParams.get("station_id");
    if (!station_id) {
      return res(ctx.status(400));
    }
    if (Number(station_id) !== 573) {
      return res(ctx.status(404));
    }
    return res(
      ctx.status(200),
      ctx.json(testDatabase.singleStationTrafficData)
    );
  }),
  //---------------------------------------------------
  rest.put(`${URL}/stations/edit`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(testDatabase.singleStation));
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
      return res(ctx.status(200), ctx.json(testDatabase.journeyPage1));
    }
    if (Number(page) === 2) {
      return res(ctx.status(200), ctx.json(testDatabase.journeyPage2));
    }
    return res(ctx.status(404));
  }),
  //---------------------------------------------------
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
];
