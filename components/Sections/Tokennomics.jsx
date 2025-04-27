"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            <span className="text-white">Token</span>
            <span className="text-yellow-500">omics</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700 mb-12"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Token Information
              </h2>
              <p className="text-center text-gray-300 mb-6">
                Harambergine token has absolutely no utility. And that is our
                essence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Token Name", value: "Harambergine" },
                  { label: "Token Symbol", value: "HBE" },
                  { label: "Total Supply", value: "1,000,000,000 HBE" },
                  { label: "Blockchain", value: "Ethereum (ERC-20)" },
                ].map((item, index) => (
                  <motion.div
                    variants={itemVariants}
                    key={index}
                    className="bg-purple-800/30 p-4 rounded-lg"
                  >
                    <h3 className="font-bold mb-2">{item.label}</h3>
                    <p className="text-xl">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-purple-800/30 p-4 rounded-lg mb-8"
              >
                <h3 className="font-bold mb-4">Token Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Supply that grows like an eggplant</li>
                  <li>Community as heavy as a gorilla</li>
                  <li>Special system to control the dump</li>
                  <li>Our value lies with those who enjoy it</li>
                  <li>NFT marketplace access (future)</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700 mb-12"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Infinite Mint System
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Join Presale",
                    desc: "When you participate in the presale with ETH or USDT, HBE tokens are minted immediately.",
                  },
                  {
                    step: "2",
                    title: "Instant Wallet Transfer",
                    desc: "Purchased tokens are immediately transferred to your wallet.",
                  },
                  {
                    step: "3",
                    title: "Verify Tokens",
                    desc: "Add the token address to your wallet to immediately verify your purchased tokens.",
                  },
                ].map((item, index) => (
                  <motion.div
                    variants={itemVariants}
                    key={index}
                    className="bg-purple-800/30 p-4 rounded-lg text-center"
                  >
                    <div className="w-16 h-16 mx-auto bg-purple-700 rounded-full flex items-center justify-center text-2xl mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-6 p-4 bg-yellow-500/20 border border-yellow-500 rounded-lg"
              >
                <p className="text-center text-yellow-300">
                  Note: Harambergine uses an infinite mint presale, where new
                  tokens are minted each time you participate in the presale.
                  Eggplant-like supply, gorilla-like community, and slightly
                  crazy holders. Dumping presale? Innovative presale with
                  contract-based protection.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tokenomics;
