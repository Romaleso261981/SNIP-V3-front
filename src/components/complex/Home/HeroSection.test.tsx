import { render, screen } from "@testing-library/react";
import HeroSection from "./Hero";
import { StrapiImage } from "@/types/apiStrapiTypes";

// Мокуємо `getStrapiMedia`
jest.mock("@/utils/api-helpers", () => ({
  getStrapiMedia: (url: string) => url,
}));

// Мокуємо `next/image`, щоб уникнути проблем у Jest
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt || "mocked image"} {...props} role='img' />;
  },
}));

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
