import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center sm:items-start">
        <div className="hero"></div>
      </main>
      <section className="main-section">
        <article className="main-left">
          <h2 className="text-4xl font-bold">Welcome to my site!</h2>
          <p className="text-xl">I am a professional voice actor.</p>
          <p className="text-xl">
            I specialize in character voices, accents, and more.
          </p>
        </article>
        <article className="main-left">
          <h2 className="text-4xl font-bold">Welcome to my site!</h2>
          <p className="text-xl">I am a professional voice actor.</p>
          <p className="text-xl">
            I specialize in character voices, accents, and more.
          </p>
        </article>
        <article className="main-left">
          <h2 className="text-4xl font-bold">Welcome to my site!</h2>
          <p className="text-xl">I am a professional voice actor.</p>
          <p className="text-xl">
            I specialize in character voices, accents, and more.
          </p>
        </article>
      </section>
      <section className="bottom-section text-4xl p-10 text-center">
        Tell me what you want, and I'll make it happen!
      </section>

      <footer>
        <p>
          Broadcast-ready home studio with Source-Connect, Skype, Hangouts, and
          Phone | (919) 357-6004&nbsp;
        </p>
        <div>
          <div>
            <a href="https://www.linkedin.com/in/voiceoverian/" target="_blank">
              <Image
                width={36}
                height={36}
                alt="LinkedIn VoiceByIan"
                src="/icon-linkedin.webp"
              />
            </a>
          </div>

          <div>
            <a href="https://www.instagram.com/voicebyian/" target="_blank">
              <Image
                width={36}
                height={36}
                alt="Instagram VoiceByIan"
                src="/icon-ig.webp"
              />
            </a>
          </div>

          <div>
            <a href="https://twitter.com/VoiceByIan" target="_blank">
              <Image
                width={36}
                height={36}
                alt="Twitter VoiceByIan"
                src="/icon-twitter.webp"
              />
            </a>
          </div>

          <div>
            <a href="https://www.facebook.com/voicebyian" target="_blank">
              <Image
                width={36}
                height={36}
                src="/icon-fb.webp"
                alt="Facebook VoiceByIan"
              />
            </a>
          </div>
          <div>
            <a href="https://souce-connect.com/iankleinfeld">
              <Image
                width={203}
                height={65}
                src="/sourceconnectlogo.webp"
                alt="Source Connect Standard in Studio"
              />
            </a>
          </div>
          <div>
            <p>Voiceover is hard to get into.</p>
            <p>
              Our podcast interviews successful voice actors, asking
              <em>
                <strong>Voiceover: How Did You DO It??</strong>,
              </em>
              and how you can too. Listen in. It’s free!
            </p>
            <p>
              <a href="http://voiceoverpodcast.com">
                http://voiceoverpodcast.com
              </a>
            </p>
          </div>
          <div>
            <a href="http://voiceoverpodcast.com" target="_blank">
              <Image
                width={630}
                height={630}
                alt="VoiceoverPodcast.com --answers to that question and more!"
                src="/HowDidYouDOIt.jpg"
              />
            </a>
          </div>
        </div>
        <a>
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Menu A
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Menu B
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Menu C
        </a>
      </footer>
    </div>
  );
}
