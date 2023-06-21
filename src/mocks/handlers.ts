import { rest } from "msw";
import { URL } from "../constants";
import allStations from "./TestDatabase/AllStations.json";
import singleStation from "./TestDatabase/SingleStation.json";
import journeyPage1 from "./TestDatabase/JourneyPage1.json";
import journeyPage2 from "./TestDatabase/JourneyPage2.json";
const Joi = require("joi");

export const handlers = [
  rest.get(`${URL}/stations/all`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allStations));
  }),
  rest.post(`${URL}/stations`, (req, res, ctx) => {
    const schema = Joi.object().keys({
      station_id: Joi.number().min(1).required(),
    });
    if (schema.validate(req.body).error) {
      return res(
        ctx.status(422),
        ctx.json({ error: "not a valid station id" })
      );
    }

    return res(ctx.status(200), ctx.json(singleStation));
  }),
  rest.get(`${URL}/journeys/pages`, (req, res, ctx) => {
    const schema = Joi.object().keys({
      page: Joi.number().min(1).required(),
    });

    const queryParams = req.url.searchParams;
    const validation = schema.validate({ page: queryParams.get("page") });

    if (validation.error) {
      return res(ctx.status(422), ctx.json(validation.error.details));
    } else {
      return res(ctx.status(200), ctx.json(journeyPage1));
    }
  }),
];
