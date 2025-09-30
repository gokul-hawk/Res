import Header from "./Header";
import '../index.css';
export default function Home() {
  return (<section id="home">
    
    <div
      className="blended-background h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/H10.png')" }}
    >
        <section><h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
        Hi, I'm <span className="text-purple-400">GOKULAUDHAYAN V</span>
      </h1>
      <p className="text-gray-300 max-w-xl text-lg md:text-xl mb-6">
        I Learn Things out of curiousity and forgert in a week😅 , But still like to learn from scratch["HELLO WORLD!"]
      </p></section>
      
    </div>
    </section>
  )
}
