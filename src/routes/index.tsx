import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "01 | Chapter — Introduction · Principles of Natural Medicine" },
      {
        name: "description",
        content:
          "The science of Unani Tibb deals with the health and disease. History, Tibb principle of creation, physis and Tibb summary.",
      },
      { property: "og:title", content: "Introduction — Principles of Natural Medicine" },
      {
        property: "og:description",
        content: "The science of Unani Tibb deals with the health and disease.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: "/images/fig-1-1.jpg" }],
  }),
  component: Index,
});

const toc: [string, string, string, boolean][] = [
  ["HISTORY", "01", "history", true],
  ["Abu Ali Ibn Sina", "01", "ibn-sina", false],
  ["Al-Razi", "01", "al-razi", false],
  ["Al-Zahrawi", "02", "al-zahrawi", false],
  ["Al-Idrisi", "02", "al-idrisi", false],
  ["Ibn al- Baitar", "02", "ibn-al-baitar", false],
  ["Ibn an –Nafis", "02", "ibn-an-nafis", false],
  ["Imam Shafi", "02", "imam-shafi", false],
  ["Greece", "02", "greece", false],
  ["Hakim Muhammad Hassan Qarshi", "02", "qarshi", false],
  ["TIBB PRINCIPLE OF CREATION", "03", "creation", true],
  ["TIBB PRINCIPLE OF PHYSIS", "03", "physis", true],
  ["TIBB SUMMARY", "04", "summary", true],
];

function Section({ id, title, children, tone }: { id: string; title: string; children: ReactNode; tone?: boolean }) {
  return (
    <section id={id} className={`doc-section ${tone ? "doc-section--tone" : ""}`}>
      <div className="doc-inner">
        <h2 className="doc-band">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Sub({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <article id={id} className="doc-sub">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

function Fig({ src, w, h, alt, cap, eager }: { src: string; w: number; h: number; alt: string; cap: string; eager?: boolean }) {
  return (
    <figure className="doc-fig">
      <img
        src={src}
        width={w}
        height={h}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...(eager ? { fetchPriority: "high" as const } : {})}
      />
      <figcaption>{cap}</figcaption>
    </figure>
  );
}

function Index() {
  return (
    <div className="doc">
      <header className="cover">
        <div className="cover-inner">
          <p className="cover-kicker">
            <span>01</span> | CHAPTER
          </p>
          <div className="cover-num" aria-hidden="true">01</div>
          <h1 className="cover-title">INTRODUCTION</h1>
          <nav className="cover-toc" aria-label="INTRODUCTION">
            <ol>
              {toc.map(([label, page, id, major]) => (
                <li key={id} className={major ? "major" : ""}>
                  <a href={`#${id}`}>
                    <span>{label}</span>
                    <i aria-hidden="true" />
                    <span>{page}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <p className="cover-book">Principles of Natural Medicine</p>
        </div>
      </header>

      <main>
        <section className="doc-section">
          <div className="doc-inner">
            <h2 className="doc-title">INTRODUCTION</h2>
            <p className="doc-lead">
              The science of Unani Tibb deals with the health and disease. In Arabic Tibb means "Medicine" and Unani
              means "Greek" which is a tradition of practicing medicine in South Asia. Tibb-e-unani dates from
              750-1000CE, the early Islamic period.
            </p>
          </div>
        </section>

        <Section id="history" title="HISTORY" tone>
          <div className="cols">
            <p>
              The tradition of Greek medicine was urbanized by Muslims, Christians and Jewish scholars within the
              Islamic Empire. Muslim rulers were ardent to grow the scientific and medical knowledge, therefore, this
              steered the movement of conversion and translation of books into the Arabic text. Many scholars like Ibn
              Sina generated colossal amount of medical knowledge which are now collected in encyclopedias. These books
              were than translated in Latin text and became the basis of medical teaching in European institutions.
            </p>
            <p>
              The Golden age of Islamic Civilization was the period between 17th to 15th centuries and that period had
              great significance regarding pursuance of knowledge. In this period, Muslim scholars studied Quran to
              understand the relationship between nature and human. In scientific enterprise, the contribution of Islam
              was rich and multifaceted for over a millennium of time. The following passages from the Quran illustrate
              the relationship between nature and man.
            </p>
          </div>
          <blockquote className="quote">
            <p>
              "We produced not the paradise, the earth and all between them, purely in sport. We generated them not but
              for just ends:
            </p>
            <p>Nevertheless, most of them not understand." (Surah Albaqra 44: 38-39).</p>
          </blockquote>
          <blockquote className="quote">
            <p>
              "Witness; in the creation of skies and the ground, in the rotation of day and night; in the sailing of
              ships through oceans for the earnings of mankind; in the rain which Allah sends down from the skies, in
              the life which He bestowed therewith to an earth and is dead; in the creatures of all kinds that He
              scatters through earth; in the conversion of winds and clouds which they stream like their slaves between
              earth and sky; indeed, these are signs for people who are prudent." (Surah Ad Dukham 2:164).
            </p>
          </blockquote>
          <p className="prose">
            The Muslims participation to the medicine was established within the scope of medical practice particularly
            in basic life sciences. Furthermore, it arisen in the milieu of social, philosophical and allied
            disciplines. They intensified and developed a comprehensive and practical system of healing from the
            theoretic principles of Greek medicine. This was accomplished by many physicians, including Abu ali Ibn
            Sina, al -Razi, al -Zahrawi, al-Idrisi, Ibn al Baitar, Ibn Nafis, Imam Shafi, Greece physicians and Hakeem
            Muhammad Hassan Qarshi.
          </p>

          <div className="grid">
            <Sub id="ibn-sina" title="Abu Ali Ibn Sina">
              <p>
                Abu Ali Ibn Sina (980-1037), was well renowned and plausibly great physician until modern epoch.
                Al-Qanun fit Tibb was his master piece and for 700 years remained a textbook in Europe. He had done
                considerable work in pharmacology and in public health and was the author of 'Book of Healing' a
                considerable effort. He wrote 246 books and 20 volumes of 'The Cannons of medicine'. His artistic
                inspirations involved such advances, as acceptance of the communicable nature of phthisis and
                tuberculosis; by water and soil spread of disease and the relation between psychology and health.
              </p>
            </Sub>
            <Sub id="al-razi" title="Al-Razi">
              <p>
                Al-Razi (865-925AD), his name was Abu Bakar Muhammad ibn Zakariya al -Razi but was famous as Rhazes and
                was everlasting physician second only to Ibn Sina. He was student of Hunayn ibn Ishaq and Ali Ibn
                Rabban. He wrote over 200 books and 10 volumes on Greek medicine (Kitab al Mansuri) and 20 volumes of
                compilation of medicines (al- Hawi). He categorized the substances into animals, minerals and
                vegetables and invented the treatment of urolithiasis. His distinguished work includes the research on
                smallpox, measles and infectious diseases, medical implementation of alcohol and the use of opium as
                anesthesia.
              </p>
            </Sub>
            <Sub id="al-zahrawi" title="Al-Zahrawi">
              <p>
                Al-Zahrawi (963-1013AD), familiar as Albucasis and a surgeon at the court of Caliph-al-Hakam II. He was
                the writer of a surgical book regarding 200 surgical tools and drawings named as 'Al-tasrif-li man ajaz
                an-il-talif. He was the first to perform cesarean and to use silk thread for sewing wounds. His book
                named 'Secret of Secrets' is regarding equipment's and procedures of laboratory.
              </p>
            </Sub>
            <Sub id="al-idrisi" title="Al-Idrisi">
              <p>
                He was famous because of his participation in writing books on medicinal plants such as
                Kitab-al-jami-li-sifat ashtat-al-nabatat. He compiled the knowledge into books regarding plants was
                beneficial for the treatment of diseases. He provided assistance on topography and economics.
              </p>
            </Sub>
            <Sub id="ibn-al-baitar" title="Ibn al- Baitar">
              <p>
                He was one of the paramount scientist, botanist and pharmacist of middle age. He was the author of
                famous Arabic book Kitab-al-jami-al-adviyah al mufarida on medicinal plants. His investigations and
                work was famous in Eastern as well as Western medicine.
              </p>
            </Sub>
            <Sub id="ibn-an-nafis" title="Ibn an –Nafis">
              <p>
                He was legendary scientist who put forward the theory of blood circulation through heart and pulmonary
                circulation.
              </p>
            </Sub>
            <Sub id="imam-shafi" title="Imam Shafi">
              <p>
                Education is the pursuit of Muslims and for this reason, it is imperative to learn about Tibb
                al-Nabwi. As the Islamic scholar Imam Shafi said "After the science which differentiates between
                permissible and impermissible, Tibb is more notable than any science."
              </p>
            </Sub>
            <Sub id="greece" title="Greece">
              <p>
                In ancient Greece (400BC), the knowledge of the four humours became prevalent. It was undoubtedly
                developed by hippocrates and was an important development in medical knowledge which initiated in the
                works of aristotle. Later on, Galen would add to hippocrates' work that was focused on health and
                disease connections to the humors. Galen added it by connecting imbalances in humors and change in
                temperament and personality. The greeks believed on four elements theory, that all things were made of
                air, water, fire and earth and these elements linked to four seasons.
              </p>
              <p>
                The arabic and persian translations from the greek's text were the progress of iranian and muslim
                scholars and theses were used to abolish their deficiencies. This medicine than came to europe again
                after several years and united with modern medicine.
              </p>
            </Sub>
          </div>

          <Sub id="qarshi" title="Hakim Muhammad Hassan Qarshi">
            <div className="cols">
              <p>
                Hakim Muhammad Hassan Qarshi (December 27, 1896 - December 6, 1974). He was a practitioner of unani
                medicine, author, and the founder of qarshi dawakhana. He was a student of hakim ajmal khan and the
                family physician of sir allama muhammad iqbal from 1934 to 1938.
              </p>
              <p>
                He was the author of many books i.e. Dastoor-ul-Atibba, Bayaz-e-Maseeha, Silk-e-Marwareed,
                Mukhtasar-ul-kuliyat and Kitab-ul-Kulliyat. He was distinguished physician, educationist,
                philanthropist, idealist and a religious person who devoted his life to tibb, Pakistan and islam. Tibb
                registration committee (25-Jan-1946) recognition by legislative assembly of punjab government and
                approval of Avurvedic and Homeopathic Practitioners Act 1965 was ascribed by his determined efforts.
                His aim was developing clinical research foundation in the field of Tibb. Two million people got the
                cure of their diseases from him.
              </p>
              <p>
                To provide cure through natural medicines and to identify the cause of disease, doctors were
                encouraged to step forward towards the four humours theory as for example the correlation of fever with
                plethora. The logical cure of this plethora was to bleed the patient.
              </p>
            </div>
          </Sub>
        </Section>

        <Section id="creation" title="TIBB PRINCIPLE OF CREATION">
          <div className="cols">
            <p>
              Greek philosophers postulated that four elements characteristically earth, water, fire and air are the
              basis of every creation of universe. These elements are associated with specific qualities for example,
              earth is cold and dry, water is cold and moist, fire is hot and dry whereas, air is hot and moist. These
              elements are interpreted as metaphysical states and in universe, everything is created though these
              elements with their respective qualities. The dominant quality that appear after combination is called
              temperament.
            </p>
            <p>
              In human body 70% approximately is water and average 37 degree centigrade temperature is maintained and
              due to this composition the temperament is associated with hot and moist quality. However, hot and dry to
              dry and hot is the quality of animals, cold and moist is temperament of plants while, minerals are cold
              and dry.
            </p>
            <p>
              Every level of creation from atoms to compounds, cells to tissues, have a specific temperament. Each
              level of organization is characterized by discrete structure. Respectively, each phase on this ladder of
              evolution demonstrates greater sophistication. Humans stand at the top of ladder than lower animals,
              plants and minerals and the ratio of elements is different in every creation.
            </p>
            <p>
              In addition to the concept of temperament, everything in the universe has been created with a suitable
              structure to execute precise roles. Inestimable beings inhabit our planet and each living entity has a
              distinctive form and shape that countenances it to exist, prosperous and propagate. The wings of birds
              empower to fly, the four legs to run in animals, and the fins and tails to swim in fish. So, all
              creations i.e. plants, insects, animals and humans have a specific and unique temperament assigned to
              structures which enable them to perform particular functions.
            </p>
            <p>
              In all living entities, the unit of outer environment is atom, and the unit of inner environment is cell
              which combines to form tissues and then organs, eventually, a shape is attained. Each level is created
              with specific temperament and function for example ears for hearing, nose for breathing, eyes for vision
              and shape of the heart facilitates the pumping action. The dominant temperament of the brain is moist
              which is the good medium of conduction, that's why empower the nerve impulses to be transferred easily.
              Whereas, the prime temperament of the liver is hot, as the heat is produced during the process of
              metabolism.
            </p>
          </div>
          <blockquote className="quote">
            <p>
              "From the galaxies in space to the living beings including human body to invisible cells, if we examine
              any corner of universe, we will find immaculate organization, design and purpose. This organization
              illustrates the perfection of creation." (Yahya 1999).
            </p>
          </blockquote>
          <p className="prose">
            Researching further into the wonders of the body, we begin to realize that just how complicated the systems
            of the body for example the respiratory, circulatory, digestive and nervous systems. Each system working
            independently in the context of health, disease and the immune system. All of which make us realize the
            excellence of creation.
          </p>
        </Section>

        <Section id="physis" title="TIBB PRINCIPLE OF PHYSIS" tone>
          <div className="split">
            <div>
              <p>
                In the discussion on the Tibb principles of "creation", the perfection of creation with respect to
                temperament, structure and function was highlighted. Not only has God created everything in perfection,
                but He has bestowed every living organism including human beings with an inherent wisdom of
                self-healing. Hippocrates described it as "vis medicatrix natura" means "the ability of the body to
                heal itself" which the tibb calls it Physis.
              </p>
              <p>
                From the moment of fertilization in the mother's womb to birth until death, at every level of human
                existence physis works It functions during every second of existence to maintain health and
                homeostasis, and especially during illness to restore conditions. For the human being to stay well and
                healthy, it is the sum total of the body's natural, instinctive reactions and responses. Physis works as
                our personal doctor and linked to our genetic makeup and life, its constitution is described in Fig.
                1.1.
              </p>
            </div>
            <Fig
              src="/images/fig-1-1.jpg"
              w={873}
              h={459}
              eager
              alt="Inverted triangle labelled PHYSIS, with TEMPERAMENT (FIXED), HUMOURS (VARIABLE) and LIFESTYLE FACTORS (VARIABLE) at its corners"
              cap="Fig. 1.1 Constitution of physis"
            />
          </div>
          <p className="prose">
            Physis is responsible for maintaining homoeostasis between physical, mental, emotional and spiritual
            aspects of each person for example,
          </p>
          <ul className="bullets">
            <li>
              For growth, reproduction, repair, protection and maintenance, it is physis that controls biochemical
              reactions taking place at this physical level.
            </li>
            <li>
              Metabolic functions of all systems are working proficiently and waste toxins are removed, physis ensures
              the proficiency of these physiological functions.
            </li>
            <li>
              For the maintenance of good mental health, physis certifies the harmony and balance of emotions at
              psychological level.
            </li>
            <li>
              For effective communication of brain to body, physis controls all body and mind interactions at nervous
              level.
            </li>
            <li>
              The infections controlling and fighting mechanism inside body is the proficient immune system and its
              harmony depends on physis at defense level.
            </li>
          </ul>
          <p className="prose">
            The proficiency of physis can be examined by taking into consideration that what happens when we eat
            something and physis does not accept it and then the reaction appears in the form of vomiting and diarrhea.
            This is a physis response to restore homeostasis through elimination. The perseverance of this reaction was
            to purge the body toxins. In western medicine a pill is used conveniently to dealt the symptoms of
            discomfort and in this way we interrupt the work of physis. Obviously in severe diarrhea / vomiting,
            dehydration needs to be managed but in the context of physis.
          </p>
          <p className="prose">
            Listed below are three quotes highlighting the part of physis in maintaining and restoring the health:
          </p>
          <div className="grid grid--3">
            <Sub title="Albert Schweitzer">
              <p>
                According to Albert Schweitzer, "each one of us is carrying a doctor inside, when we give the
                opportunity of our doctor to work at that time we are at our best of health."
              </p>
            </Sub>
            <Sub title="Al-Maliki">
              <p>
                According to Al-Maliki, "in case of minor and self-healing diseases, if the physis is powerful than no
                aid is required from outside to withstand the disease."
              </p>
            </Sub>
            <Sub title="Chisti">
              <p>
                According to Chisti, "if the finger is cut, then skin heals itself and that healing is not due to
                stiches, bandage or iodine. In this way, nor the procedure or any other substance (herb or food) can do
                anything on its own healing instead they just assist the physis."
              </p>
            </Sub>
          </div>
          <div className="cols">
            <p>
              In fact, the name physician is imitative from the word physis and the role of physician is to assist
              physis in healing process. Treatment comes from outside while the healing from within the body. In
              conclusion, being aware of physis, permits the individuals to take charge for their health and comfort
              with an enhanced quality of life.
            </p>
            <p>
              Correspondingly, for the treatment of illness, the significance of physis in the healing process must be
              taken into consideration. The circle of life and as death is unavoidable. Our metabolism slows down with
              age and as does the efficiency of physis to restore homeostasis.
            </p>
          </div>
        </Section>

        <Section id="summary" title="TIBB SUMMARY">
          <div className="split split--fig-right">
            <div>
              <p>
                The human body is a serene composition of seven natural constituents, according to Unani Tibb, which
                are as follows
              </p>
              <ul className="bullets">
                <li>Elements (Arkan / Anasir)</li>
                <li>Temperament (Mizaj)</li>
                <li>Humours (Akhlat / Body fluids)</li>
                <li>Organs (Az'a)</li>
                <li>Pneuma (Arwah / Vital spirit)</li>
                <li>Faculties (Quwah / Powers)</li>
                <li>Function (Af'al)</li>
              </ul>
              <p>
                The main factors responsible for the maintenance and harmony of the above constituents and for
                preservation of health, are named as Umoor-al-tabiyah or the Six essential requisites In Tibb,
                prevention is better than cure so the prevention of health is more important. Therefore, essential
                factors or Asbab Sitta Zaruriyah are the major concerns for health preservation as also depicted in
                Fig. 1.2.
              </p>
              <ul className="bullets">
                <li>Atmospheric air (Al hawa al muhit)</li>
                <li>Food and Drinks (Al makul-o-mashroob)</li>
                <li>Physical movement and Rest (Al harkat-o-sukun badniyah)</li>
                <li>Psychological movement and Rest (Al harkat-o-sukun nafsaniyah)</li>
                <li>Sleep and Wakefulness (Al naum-yaqzah)</li>
                <li>Evacuation and Retention (Al istifragh -o-ehtibas)</li>
              </ul>
            </div>
            <Fig
              src="/images/fig-1-2.jpg"
              w={829}
              h={1105}
              alt="Nested circles: Asbab Gair Zaruriya, Asbab Sitta Zaruriya, Al Umoor Al Tabiyya and Health in Unani Medicine, with boxes listing their factors"
              cap="Fig. 1.2 Summary of Tibb"
            />
          </div>
          <div className="cols">
            <div>
              <p>
                Some factors like habitat, profession, sex, temperament, social and comic factors are considered as non
                essential because these influence to those only who come across them. The constituents of
                non-essential factors are
              </p>
              <ul className="bullets">
                <li>Geographical conditions of the country or town</li>
                <li>Residential conditions</li>
                <li>Occupational conditions</li>
                <li>Habits</li>
                <li>Sex</li>
                <li>Factors antagonistic to body and health</li>
              </ul>
            </div>
            <p>
              In Tibb, the diagnosis of disease is done by three approaches i.e. pulse (nabz), urine (baul) and stool
              (baraz). While, the treatment of diseases is based on four therapies as presented in Fig. 1.3, which are
              as follows,
            </p>
          </div>

          <div className="split split--fig-right">
            <div>
              <Sub title="Regimental Therapy (Ilaj bil Tadbir)">
                <p>
                  It is a physical method to improve the body structure by eliminating the waste products and enhancing
                  the proficiency of the immune system. This includes, venesection, cupping, exercise, steam bath,
                  diathermy and leeching.
                </p>
              </Sub>
              <Sub title="Diet Therapy (Ilaj bil Ghiza)">
                <p>
                  It is based on administration of specific diets that play an important role in human's health. One
                  diet can be useful as drug and can be harmful to the other or same person. Diet alterations can be
                  done either in quality or quantity.
                </p>
              </Sub>
              <Sub title="Pharmacotherapy (Ilaj bil Dawa)">
                <p>
                  It is based on the administration of medicines of natural origin (herb, animal, mineral). In simple
                  disorders, single herbs are used while in case of chronic diseases, compound formulations are
                  prescribed.
                </p>
              </Sub>
              <Sub title="Surgery (Ilaj bil Yad)">
                <p>
                  In this therapy, special instruments and techniques are used. This practice is as old as human
                  existence.
                </p>
              </Sub>
            </div>
            <Fig
              src="/images/fig-1-3.jpg"
              w={798}
              h={653}
              alt="Mode of Treatment surrounded by Ilaj bi'l Tadbir (Regimental therapy), Ilāj bil Ghizā (Dietotherapy), 'Ilāj b'il-Dawā' (Pharmaco-therapy) and Ilāj bi'l-Yad (Surgery)"
              cap="Fig. 1.3 Mode of therapies in Tibb"
            />
          </div>
        </Section>
      </main>

      <footer className="doc-foot">
        <span>Principles of Natural Medicine</span>
        <span>
          <b>01</b> | CHAPTER · INTRODUCTION
        </span>
      </footer>
    </div>
  );
}
