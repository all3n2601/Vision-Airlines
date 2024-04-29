import React from "react";
import { motion } from "framer-motion";
import London from "../../assets/london.jpg";
import Melbourne from "../../assets/melbourne.jpg";
import Sydney from "../../assets/sydney.jpg";
import Singapore from "../../assets/singapore.jpg";
import Bali from "../../assets/bali.avif";
import Brisbane from "../../assets/brisbane.avif";

const Card = ({ title, image }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      </div>
    </motion.div>
  );
};

const PlanTrip = () => {
  return (
    <motion.div
      className="container mx-auto p-4"
      style={{ fontFamily: "Anta" }}
    >
      <h1 className="text-3xl font-bold mb-4">Plan Your Travel</h1>
      {/* London */}
      <section className="min-h-screen bg-gradient-to-b from-blue-300 to-white overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-40">
          <Card title="London" image={London} />
          <p className="text-black-900 text-lg leading-relaxed text-center">
            London, a vibrant metropolis blending history with modernity, offers
            a wealth of attractions for travelers. From the regal splendor of
            Buckingham Palace to the historic Tower of London and the iconic
            Tower Bridge, the city is steeped in heritage. Westminster Abbey and
            the Houses of Parliament showcase architectural marvels, while the
            Tate Modern and British Museum house treasures from around the
            world. Covent Garden and Camden Market beckon with their eclectic
            shops and lively ambiance. Hyde Park and Kew Gardens provide serene
            escapes amidst the urban hustle. The West End theaters dazzle with
            world-class performances, and the culinary scene offers diverse
            delights. With its timeless charm and contemporary allure, London
            captivates visitors with an unforgettable experience.
          </p>
        </div>
      </section>
      {/* Melbourne */}
      <section className="min-h-screen bg-gradient-to-b from-blue-200 to-white overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-40">
          <p className="text-black-900 text-lg leading-relaxed text-center">
            Melbourne, a vibrant cultural hub nestled on Australia's
            southeastern coast, captivates visitors with its dynamic blend of
            art, cuisine, and architecture. The city's iconic laneways are
            adorned with street art, showcasing Melbourne's creative spirit.
            Federation Square stands as a modern architectural marvel, hosting
            cultural events and exhibitions year-round. Explore the lush
            greenery of the Royal Botanic Gardens or enjoy panoramic views from
            the Eureka Skydeck. Melbourne's culinary scene is a melting pot of
            flavors, with diverse dining options ranging from trendy cafes to
            world-class restaurants. Sports enthusiasts flock to the city for
            events like the Australian Open tennis tournament and the iconic
            Melbourne Cricket Ground. The Melbourne Museum offers insights into
            the city's history, while St. Kilda Beach provides a picturesque
            seaside escape. With its lively atmosphere and cultural diversity,
            Melbourne promises a memorable experience for travelers seeking
            adventure and exploration.
          </p>
          <Card title="Melbourne" image={Melbourne} />
        </div>
      </section>
      {/* Sydney */}
      <section className="min-h-screen bg-gradient-to-b from-blue-200 to-white overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-40">
          <Card title="Sydney" image={Sydney} />
          <p className="text-black-900 text-lg leading-relaxed text-center">
            Sydney, Australia's dazzling harbor city, enchants visitors with its
            iconic landmarks and stunning coastal landscapes. The Sydney Opera
            House, with its distinctive sail-like architecture, is a global
            symbol of the city's sophistication and creativity. Nearby, the
            Sydney Harbour Bridge offers breathtaking views of the harbor and
            city skyline. Bondi Beach beckons with its golden sands and
            world-class surfing waves, while the nearby Bondi to Coogee coastal
            walk showcases Sydney's natural beauty. Darling Harbour bustles with
            entertainment options, including museums, restaurants, and
            waterfront attractions. Explore the historic rocks district, where
            cobblestone streets and colonial buildings echo Sydney's past. The
            Royal Botanic Garden provides a tranquil oasis amidst the urban
            bustle, while Taronga Zoo offers unforgettable wildlife encounters
            with stunning harbor views. From vibrant markets to top-notch
            dining, Sydney's diverse culture and vibrant energy promise an
            unforgettable experience for visitors from around the globe.
          </p>
        </div>
      </section>
      {/* Singapore */}
      <section className="min-h-screen bg-gradient-to-b from-blue-300 to-white overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-40">
          <p className="text-black-900 text-lg leading-relaxed text-center">
            Singapore, a dynamic island city-state in Southeast Asia, captivates
            visitors with its modernity, cultural diversity, and culinary
            delights. The iconic Marina Bay Sands skyline, with its futuristic
            architecture and infinity pool, is a symbol of the city's innovation
            and luxury. Gardens by the Bay dazzles with its towering Supertrees
            and lush greenery, offering a futuristic oasis in the heart of the
            city. Explore the vibrant neighborhoods of Chinatown, Little India,
            and Kampong Glam, each boasting its own unique atmosphere and
            culinary treasures. Sentosa Island beckons with its array of
            attractions, including Universal Studios Singapore and pristine
            beaches. Discover Singapore's rich heritage at historic sites like
            the colonial-era Raffles Hotel and the majestic Sultan Mosque.
            Indulge in a gastronomic adventure at hawker centers, where diverse
            cuisines converge to tantalize the taste buds. With its efficient
            public transportation system and impeccable cleanliness, Singapore
            seamlessly blends urban sophistication with natural beauty, making
            it a must-visit destination for travelers seeking a memorable
            experience.
          </p>
          <Card title="Singapore" image={Singapore} />
        </div>
      </section>
      {/* Bali */}
      <section className="min-h-screen bg-gradient-to-b from-blue-200 to-white overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-40">
          <Card title="Bali" image={Bali} />
          <p className="text-black-900 text-lg leading-relaxed text-center">
            Bali, Indonesia's famed Island of the Gods, bewitches visitors with
            its stunning natural beauty, rich culture, and spiritual charm. From
            verdant rice terraces to idyllic beaches, Bali's landscapes inspire
            awe and wonder. Ubud, the island's cultural heart, is home to
            traditional crafts, dance performances, and lush rainforests.
            Explore ancient temples like Tanah Lot and Uluwatu, perched atop sea
            cliffs with panoramic ocean views. The Gili Islands offer pristine
            waters teeming with marine life, perfect for snorkeling and diving
            adventures. Bali's culinary scene tantalizes the taste buds with a
            blend of flavors, from spicy satay to fresh seafood delicacies.
            Experience the island's spiritual side with yoga retreats,
            meditation sessions, and traditional Balinese ceremonies. Whether
            you seek relaxation on sun-kissed beaches or adventure in tropical
            jungles, Bali promises an enchanting escape for travelers seeking
            paradise.
          </p>
        </div>
      </section>
      {/* Brisbane */}
      <section className="min-h-screen bg-gradient-to-b from-blue-300 to-white overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-40">
          <p className="text-black-900 text-lg leading-relaxed text-center">
            Brisbane, the capital of Queensland, Australia, delights visitors
            with its sunny climate, vibrant cultural scene, and outdoor
            adventures. The South Bank Parklands, with its riverside promenade
            and lush gardens, offer a picturesque setting for leisurely strolls
            and picnics. Explore the city's cultural precinct, home to
            world-class museums, galleries, and theaters. Climb to the top of
            Brisbane's iconic Story Bridge for panoramic views of the city and
            surrounding landscapes. Nearby, the Lone Pine Koala Sanctuary
            provides opportunities for up-close encounters with Australia's
            native wildlife, including koalas, kangaroos, and emus. Adventure
            seekers can explore Moreton Island's sandy beaches, dive sites, and
            shipwrecks, or hike through the scenic trails of Mount Coot-tha.
            With its laid-back atmosphere and outdoor lifestyle, Brisbane
            invites visitors to relax, explore, and soak up the sunshine in
            Queensland's vibrant capital.
          </p>
          <Card title="Brisbane" image={Brisbane} />
        </div>
      </section>
    </motion.div>
  );
};

export default PlanTrip;
