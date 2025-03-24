import Slider from "@/components/Slider/Slider";

export default function ImgSlider() {
    const images = [
  "/s9.png",
  "/s8.jpg",
  "/s9.png",
  "/s10.jpg",
  "/s11.jpg",
  "/s12.jpg",
  "/s13.jpg"
];

    return (
        <div className="w-full">
            <Slider images={images} />
            <p></p>
        </div>
    );
}
