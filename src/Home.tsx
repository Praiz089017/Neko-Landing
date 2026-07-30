import React from "react";
import {
  TrendingUp,
  ArrowRight,
  Coins,
  Wallet,
  Sparkles,
  DollarSign,
} from "lucide-react";
import { HeroScrollDemo } from "./HeroScrollDemo";
import ProblemStatement from "./ProblemStatement";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RwaFeatures } from "./RwaFeatures";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";

const Home: React.FC = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Navbar />
      {/* New Hero Section */}
      <HeroSection />
      
      {/* Original Hero Section - keeping for reference */}
      <section className="relative w-full pt-20 overflow-hidden pb-10 hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-brand-navy leading-[1.1] tracking-tight">
              Unlock Liquidity for{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-navy bg-clip-text text-transparent">
                Real World Assets
              </span>
            </h1>

            <p className="text-xl text-brand-navy/70 leading-relaxed max-w-2xl">
              Neko Protocol is a decentralized lending and borrowing platform
              that bridges traditional finance with DeFi. Access instant
              liquidity for your real world assets on Stellar.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://dapp.nekoprotocol.xyz"
                className="group px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-blue text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-brand-blue/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                Launch App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://dapp.nekoprotocol.xyz/oracle"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-brand-navy rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 border-2 border-brand-navy/20 shadow-lg hover:shadow-xl"
              >
                Explore Oracle
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              {[
                { value: "5+", label: "RWA Assets" },
                { value: "100%", label: "Decentralized" },
              ].map((fact, i) => (
                <div
                  key={i}
                  className="group cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent">
                    {fact.value}
                  </div>
                  <div className="text-sm text-brand-navy/60 font-medium">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Enhanced 3D Card Mockup */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-brand-blue/20 transform hover:scale-105 transition-all duration-500 hover:shadow-brand-blue/20">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-brand-navy/60 font-semibold">
                    My Portfolio
                  </span>
                  <div className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-xs font-bold shadow-lg">
                    +18.5%
                  </div>
                </div>
                <div className="mb-4 items-center justify-center flex flex-rows">
                  <div className="text-5xl font-bold bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent mb-1">
                    $125,430
                  </div>
                  <div className="text-sm text-brand-navy/60">Total Balance</div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://dapp.nekoprotocol.xyz/lend"
                    className="px-4 py-3 bg-gradient-to-r from-brand-navy to-brand-blue text-white rounded-xl text-sm font-semibold text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Lend
                  </a>
                  <a
                    href="https://dapp.nekoprotocol.xyz/borrow"
                    className="px-4 py-3 bg-brand-light-blue/30 text-brand-navy rounded-xl text-sm font-semibold text-center hover:bg-brand-light-blue/50 transition-all duration-300 border border-brand-blue/30 hover:scale-105"
                  >
                    Borrow
                  </a>
                </div>
              </div>

              {/* Additional floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-brand-blue to-brand-navy rounded-2xl shadow-xl p-4 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-white" />
                  <div>
                    <div className="text-xs text-white/70 font-medium">
                      Avg APY
                    </div>
                    <div className="text-lg font-bold text-white">TBD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RWA Features Section */}
      <RwaFeatures />
      {/* Problem Statement Section */}
      <ProblemStatement />

      {/* HeroScrollDemo Section */}
      <section className="relative w-full overflow-hidden">
        <HeroScrollDemo />
      </section>

      {/* FAQ Section */}
      <section className="relative w-full mb-16 lg:mb-24">
        <FAQ />
      </section>

      {/* CTA Section - Bold & Eye-catching */}
      <section id="cta" className="relative py-32 overflow-hidden rounded-4xl">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy" />

        {/* Animated shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)] rounded-2xl" />

        <div className="relative w-full text-center rounded-xl">
          <h2 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-brand-light-blue to-white bg-clip-text text-transparent">
              Your Assets?
            </span>
          </h2>

          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Be the first to start earning and borrowing on Neko Protocol
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://dapp.nekoprotocol.xyz"
              className="group px-12 py-6 bg-white text-brand-navy rounded-full font-bold text-xl hover:bg-brand-light-blue hover:text-brand-navy transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-brand-light-blue/50 hover:scale-110"
            >
              Get Started Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="https://github.com/Neko-Protocol"
              className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/40 hover:border-white/60 shadow-xl hover:scale-105"
            >
              Documentation (GitHub)
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
