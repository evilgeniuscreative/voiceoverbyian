import Image from "next/image";
import Link from "next/link";

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
        <p className="footer-text">
          Broadcast-ready home studio with Source-Connect, Skype, Hangouts, and
          Phone | <a href="19193576004">(919) 357-6004</a>
        </p>
        <section className="footer-flex">
          <div className="flex pt-4 gap-4 footer-icons">
            <div className="icon">
              <Link
                href="https://www.linkedin.com/in/voiceoverian/"
                target="_blank"
              >
                <Image
                  width={36}
                  height={36}
                  alt="LinkedIn VoiceByIan"
                  src="/icon-linkedin.webp"
                />
              </Link>
            </div>

            <div className="icon">
              <Link
                href="https://www.instagram.com/voicebyian/"
                target="_blank"
              >
                <Image
                  width={36}
                  height={36}
                  alt="Instagram VoiceByIan"
                  src="/icon-ig.webp"
                />
              </Link>
            </div>

            <div className="icon">
              <Link href="https://twitter.com/VoiceByIan" target="_blank">
                <Image
                  width={36}
                  height={36}
                  alt="Twitter VoiceByIan"
                  src="/icon-twitter.webp"
                />
              </Link>
            </div>

            <div className="icon">
              <Link href="https://www.facebook.com/voicebyian" target="_blank">
                <Image
                  width={36}
                  height={36}
                  src="/icon-fb.webp"
                  alt="Facebook VoiceByIan"
                />
              </Link>
            </div>
          </div>

          {/* right side */}
          <div className="source-connect">
            <Link href="https://souce-connect.com/iankleinfeld">
              <Image
                width={203}
                height={65}
                src="/sourceconnectlogo.webp"
                alt="Source Connect Standard in Studio"
                className="icon"
              />
            </Link>
          </div>

          <div className="podcast-right">
            <article className="podcast">
              <div className="podcast-text">
                <p className="pod-text">Voiceover is hard to get into.</p>
                <p className="pod-text">
                  Our podcast interviews successful voice actors, asking
                  <em>
                    <strong>Voiceover: How Did You DO It??</strong>,
                  </em>
                  and how you can too. Listen in. It’s free!
                </p>
                <p className="pod-text">
                  <Link href="http://voiceoverpodcast.com" className="vop-link">
                    http://voiceoverpodcast.com
                  </Link>
                </p>
              </div>
              <div>
                <Link href="http://voiceoverpodcast.com" target="_blank">
                  <Image
                    width={145}
                    height={145}
                    alt="VoiceoverPodcast.com --answers to that question and more!"
                    src="/HowDidYouDOIt.webp"
                    className="icon"
                  />
                </Link>
              </div>
            </article>
          </div>
        </section>
      </footer>
    </div>
  );
}
