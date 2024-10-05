import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Live Video Stream</h1>
        <h2>Camera 1</h2>
        <img src="http://192.168.133.111:5000/video_feed/0" alt="Camera 1" />
        <h2>Camera 2</h2>
        <img src="http://192.168.133.111:5000/video_feed/1" alt="Camera 2" />
      </main>
    </div>
  );
}
