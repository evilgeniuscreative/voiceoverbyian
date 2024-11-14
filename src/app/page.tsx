import React from 'react';
import Image from "next/image";
import Link from "next/link";
import AudioVisualzation from './components/AudioVisualzation';

export default function Home() {


  
  return (
    <div>
      <main className="flex flex-col items-center sm:items-start">
        <div className="hero"></div>
      </main>
      <section className="main-section">
        <article className="main-left">
          <h2 className="text-4xl font-bold">Welcome to my site!</h2>
          <p className="text-xl pb-3" >I&apos;m Ian Kleinfeld, a voice talent with a boatload of enthusiasm, energy and creativity. I&apos;m a singer, songwriter, and drummer by hobby, and a voice actor by love. I&apos;ve done professional commercial and theater acting since 1995. </p>
          <p className="text-xl pb-3">My favorite place to be, my “happy place,”  is in the studio, whether for voice or music. I have a professional studio with Source Connect Standard, planned and tuned by Frank Verderosa, though I always super enjoy going out to a top-tier studio when I have the chance.</p>
          <p className="text-xl pb-3">I bring professionalism, creativity, energy, problem-solving skills, and FUN to every project I work on.</p>
          <p className="text-xl pb-3"> I am trained in voice acting through sessions or classes with Anna Garduno, Roger Becker, Andy Roth, Deborah Sperling, and other coaches, seminars, and intentsives.</p> 
          <p className="text-xl pb-3">I&apos;m trained in stage acting at Cabrillo College, University of California Santa Cruz, and Jean Shelton Acting Studio.</p>
        </article>
        <article className="main-right">
          <h2 className="text-4xl font-bold">Demos</h2>
          <p className="text-xl">Please have a listen to my demos to see what I can do for you.</p>
          {/*  Demo player */}
          <p className='text-xl pb-10'>Commercial Demo</p>
          <AudioVisualzation audioSrc='commercial'></AudioVisualzation>

          <p className='text-xl pb-10'>Character / Game / Animation Demo</p>
          <AudioVisualzation audioSrc='character'></AudioVisualzation>
        </article>
      </section>
      <section className="bottom-section text-4xl p-10 text-center">
        Tell me what you want, and I&apos;ll make it happen!
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