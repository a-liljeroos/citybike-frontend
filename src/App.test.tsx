import {
  renderHook,
  waitFor,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { QueryClientWrapper } from "./mocks/testQueryClient";
import StationList from "./components/Stations/StationList";
import SingleStation from "./components/Stations/SingleStation";

describe("StationList", () => {
  it("displays the fetched data", async () => {
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

describe("SingleStation", () => {
  it("displays the fetched data", async () => {
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
