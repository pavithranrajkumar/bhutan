import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import { motion, AnimatePresence } from "framer-motion";

const Introduction = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div>
      <>
        <Card
          title="INTRODUCTION"
          content="Pema Lingpa (c. 1450-1521) native to Bumthang was a prominent
          religious figure of the Nyingma tradition who had a huge influence
          in Bhutan. The fourth and the only Bhutanese of five most
          important tertöns of the Himalayan world, he was considered the
          reincarnation of the 14th century Tibetan scholar Longchen Rabjam.
          Termas unearthed by him revealed religious teachings and
          meditation instructions, which inform certain Buddhist practices
          in Bhutan even today. He is renowned for his display of spiritual
          wonders and his extraordinary religious visions are depicted in
          dances throughout the country. Pema Lingpa’s spiritual lineage is
          still maintained and transmitted through the many monasteries he
          established and his three incarnation lines. His family lineage
          established various noble religious families in Bhutan, including
          Dungkar chöeje, forbearers of the present ruling family."
          showIntro={showIntro}
        />
      </>
    </div>
  );
};

export default Introduction;
