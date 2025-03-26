import { render, screen } from "@testing-library/react";
import HeroSection from "./Hero";
import { StrapiImage } from "@/types/apiStrapiTypes";

describe("HeroSection", () => {
  const mockData = {
    title: "Вплети традицію у свій інтер'єр!",
    video: [
      {
        url: "/test-image.jpg",
      },
    ] as StrapiImage[],
  };

  it("renders the title text", () => {
    render(<HeroSection video={mockData.video[0]} title={mockData.title} />);
    expect(
      screen.getByText("Вплети традицію у свій інтер'єр!")
    ).toBeInTheDocument();
  });
});
