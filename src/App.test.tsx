import {
  waitFor,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { server } from "./mocks/server";
import { URL } from "./constants";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { QueryClientWrapper } from "./mocks/testQueryClient";
import StationList from "./components/Stations/StationRoutes/StationList";
import SingleStation from "./components/Stations/StationRoutes/SingleStation";
import JourneyPages from "./components/Journey/JourneyRoutes/JourneyPages";

describe("StationList:", () => {
  describe("Fetch", () => {
    it("Displays the data", async () => {
      render(
        <MemoryRouter>
          <QueryClientWrapper>
            <StationList />
          </QueryClientWrapper>
        </MemoryRouter>
      );

      expect(screen.getByTestId("spinner")).toBeInTheDocument();

      await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));

      expect(
        screen.getByText("10 stations in the database.")
      ).toBeInTheDocument();
      expect(screen.getByText("Malminkartanonhuippu")).toBeInTheDocument();
      expect(screen.getByText("Hankasuontie")).toBeInTheDocument();
    });
  });

  describe("Error", () => {
    it("message on API failure", async () => {
      server.use(
        rest.get(`${URL}/stations/all`, async (req, res, ctx) => {
          return res(ctx.status(404));
        })
      );
      render(
        <MemoryRouter initialEntries={["/stations/all"]}>
          <QueryClientWrapper>
            <StationList />
          </QueryClientWrapper>
        </MemoryRouter>
      );

      expect(screen.getByTestId("spinner")).toBeInTheDocument();
      await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
      expect(screen.getByTestId("error-page")).toBeInTheDocument();
    });
  });
});

describe("SingleStation:", () => {
  describe("Fetch", () => {
    it("displays the data", async () => {
      render(
        <QueryClientWrapper>
          <MemoryRouter initialEntries={["/stations/573"]}>
            <Routes>
              <Route path="stations/:station_id" element={<SingleStation />} />
            </Routes>
          </MemoryRouter>
        </QueryClientWrapper>
      );

      expect(screen.getByTestId("spinner")).toBeInTheDocument();

      await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));

      expect(screen.getByText("Urheilupuisto (M)")).toBeInTheDocument();
      expect(screen.getByText("CityBike Finland")).toBeInTheDocument();

      // react countup
      await waitFor(
        () => {
          expect(screen.getByTestId("1 count-ready")).toBeInTheDocument();
          expect(screen.getByTestId("2 count-ready")).toBeInTheDocument();
        },
        { timeout: 1500 }
      );
      expect(screen.getByText("13,120")).toBeInTheDocument();
      expect(screen.getByText("13,522")).toBeInTheDocument();
    });
  });

  describe("Error", () => {
    it("message on API failure", async () => {
      server.use(
        rest.post(`${URL}/stations`, async (req, res, ctx) => {
          return res(ctx.status(404));
        })
      );
      render(
        <QueryClientWrapper>
          <MemoryRouter initialEntries={["/stations/573"]}>
            <Routes>
              <Route path="stations/:station_id" element={<SingleStation />} />
            </Routes>
          </MemoryRouter>
        </QueryClientWrapper>
      );

      expect(screen.getByTestId("spinner")).toBeInTheDocument();
      await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
      expect(screen.getByTestId("error-page")).toBeInTheDocument();
    });
  });
});

describe("JourneyPages:", () => {
  describe("Fetch", () => {
    it("displays the data", async () => {
      render(
        <QueryClientWrapper>
          <MemoryRouter initialEntries={["/journeys/1"]}>
            <Routes>
              <Route path="journeys/:page" element={<JourneyPages />} />
            </Routes>
          </MemoryRouter>
        </QueryClientWrapper>
      );
      expect(screen.getByTestId("spinner")).toBeInTheDocument();
      await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));

      expect(
        screen.getByText("3128756 journeys in the database.")
      ).toBeInTheDocument();
      expect(screen.getByText("Töölöntulli")).toBeInTheDocument();
    });
  });
});
