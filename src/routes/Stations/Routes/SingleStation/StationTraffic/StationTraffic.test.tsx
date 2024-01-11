import { waitFor, render, screen } from "@testing-library/react";
import { QueryClientWrapper } from "../../../../../mocks/testQueryClient";
// components
import StationTraffic from "./StationTraffic";

describe("StationTraffic", () => {
  it("Displays the data", async () => {
    render(
      <QueryClientWrapper>
        <StationTraffic station_id={573} />
      </QueryClientWrapper>
    );

    await waitFor(
      () => {
        expect(screen.getByTestId("1 count-ready")).toBeInTheDocument();
        expect(screen.getByTestId("2 count-ready")).toBeInTheDocument();
      },
      { timeout: 1500 }
    );

    expect(screen.getByText("Departures")).toBeInTheDocument();
    expect(screen.getByText("Returns")).toBeInTheDocument();
    expect(screen.getByText("13,120")).toBeInTheDocument();
    expect(screen.getByText("13,522")).toBeInTheDocument();
  });
  it("Displays spinner", async () => {
    render(
      <QueryClientWrapper>
        <StationTraffic station_id={1} />
      </QueryClientWrapper>
    );
    expect(screen.getAllByTestId("spinner"));
  });
});
