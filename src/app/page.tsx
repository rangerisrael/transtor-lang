"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const PageTranslator = () => {
  useEffect(() => {
    // Load the Google Translate script dynamically
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onload = () => {
      // Initialize Google Translate once the script has loaded
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Default language of the page
            includedLanguages:
              "en,es,fr,de,it,pt,ru,zh-CN,ja,ko,ar,hi,he,th,vi,tl,da,nl,sv,fi,pl,cs,sk,el,tr,ro,hu,uk,hr,bg,ms,id,ta,ml,kn,gu,te,kn,ne,pa,lo,my,la,bs,eu,sq,ca,gl,ky,am,zu,xh,yi,af,cy,be,sr,lv,et,lt,is,mk,sq,zu,tg,bs,eu,tl,qu,oc,az,bs,gl,ka,zu",
            // layout:
            //   window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false, // Disable auto display
          },
          "google_translate_element"
        );
      };
    };
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-[70rem] mx-auto space-y-20 pt-10">
      {/* Google Translate Widget container */}
      <div id="google_translate_element"></div>

      {/* Page Content */}
      <div>
        <h1>Long Story, Short Literary Journal</h1>
        <p>
          The fat man had his arm around Adejo's uncle's neck like they were old
          friends, every now and then pulling him closer when there was some
          particular part of the song he felt he needed to share more
          intimately, singing into his uncle's ear and making him smile in a way
          that looked painful.
        </p>
        <p>
          Whoever the fat man was – and Adejo couldn't imagine his uncle ever
          being friends with a white person – he seemed to be the only one who
          knew the words of the song (that Adejo thought might be Irish, but
          then he hadn't heard Irish before, at least he didn't think so),
          blasting out the lyrics with a viciousness that made him look like he
          wished he had something to kick while he was singing.
        </p>
        <p>
          Adejo still wasn't quite sure how his uncle had got caught up with the
          two wedding guests in the first place. He had never been to a wedding
          before and had been excited until his uncle made it clear that they
          weren't really going to the wedding. 'We're just going to the kitchen,
          to pick up the bags. We won't even see the wedding. I'm sorry Adejo.
          You'll hear it though. I can promise you that.' For a while it seemed
          that they wouldn't even hear the wedding, let alone see it, because
          when his uncle parked the van and went to the steel door that led to
          the kitchen it wouldn't open, no matter how many times his uncle tried
          pressing different numbers into the pad on the wall.
        </p>
        <p>
          In the end they had to go through the front doors of the hotel
          (clearly an option of last resort evidenced by his uncle's mutterings
          beneath his breath), although Adejo felt as if he was entering a
          palace. The floor was tiled with shiny stone, with four pillars
          (pillars, inside!) that stretched up before disappearing into a high
          ceiling.
        </p>
        <p>
          'Come on Adejo, keep up! And please don't touch anything.' The rumble
          of music and voices got louder the further they walked down the
          corridor, and when his uncle opened the doors at the end a sound hit
          Adejo the way the cold had slapped him that first time he got off the
          plane at the airport. The sound was outrageous, and Adejo immediately
          covered his ears to try and block out the blur of music and voices,
          before ducking as flashing coloured lights cut through the gloom as if
          a flying saucer was about to crash land on top of him.
        </p>
        <p>
          He kept close to his uncle as they weaved between huge round tables
          draped with white cloth. They were like giant versions of the mints
          Adejo's uncle had in the van, only they were speckled with stains both
          dark and pale. A middle-aged woman watched him with one diseased
          looking eye as he passed, as a younger man kissed her hard while
          sharing her chair. An old man stirred a thin, plastic stick around his
          tall glass while examining something at the bottom of it. He passed
          another table, where a girl his own age sat alone looking at something
          on either a huge phone or a tiny TV she held in her hands, the images
          from the screen painting her face an ever-changing palette of mute
        </p>
      </div>
    </div>
  );
};

export default PageTranslator;
