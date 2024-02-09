import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <React.Fragment>
      <header className="container sectionPadding">
        <div>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
            initial={{ opacity: 0, scale: 0 }}
          >
            <h1 style={{ fontFamily: "DM Serif Text, serif" }}>
              Elevate Your Brand
            </h1>
            <h1 style={{ fontFamily: "DM Serif Text, serif" }}>With</h1>
            <h1 style={{ fontFamily: "DM Serif Text, serif" }}>Veteran Media Solution</h1>
          </motion.div>
          <motion.p
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
            }}
            initial={{ opacity: 0, scale: 0 }}
          >
            The best place to get creative advertising, smart marketing, strong
            branding, clever promotions, and online exposure services to shine a
            light on your brand.
          </motion.p>

          <div className="scrollDown">
            <motion.div
              className="scroll-downs"
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
              initial={{ opacity: 0, y: 100 }}
            >
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </motion.div>
            <p>Scroll Down</p>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
