import { render, screen } from "@testing-library/react";
import HeroSection from "./Hero";
import { StrapiImage } from "@/types/apiStrapiTypes";

describe("HeroSection", () => {
  const mockData = {
    text: "Вплети традицію у свій інтер'єр!",
    image: {} as StrapiImage
  };

  it("renders the footer text", () => {
    render(<HeroSection data={mockData} />);
    expect(
      screen.getByText("Вплети традицію у свій інтер'єр!")
    ).toBeInTheDocument();
  });
});
