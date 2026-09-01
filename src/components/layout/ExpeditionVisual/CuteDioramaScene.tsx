export function CuteDioramaScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <svg
        viewBox="0 0 600 520"
        className="w-full h-full select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Island & Earth Gradients */}
          <linearGradient id="grassTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>

          <linearGradient id="cliffLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="cliffRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Temple Stone Gradients */}
          <linearGradient id="templeStoneLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          <linearGradient id="templeStoneShade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          {/* Golden Relic Glow */}
          <radialGradient id="relicGoldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </radialGradient>

          {/* Laser LiDAR Scan Cone */}
          <linearGradient id="droneLaserBeam" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* ============================================================ */}
        {/* 1. FLOATING EXPEDITION ISLAND (Isometric Earth & Grass)     */}
        {/* ============================================================ */}
        {/* Soft Drop Shadow under Island */}
        <ellipse cx="300" cy="460" rx="230" ry="38" fill="#0284c7" fillOpacity="0.08" />

        {/* Island Cliff - Left Facet */}
        <polygon
          points="80,350 300,430 300,470 80,390"
          fill="url(#cliffLeft)"
        />
        {/* Island Cliff - Right Facet */}
        <polygon
          points="300,430 520,350 520,390 300,470"
          fill="url(#cliffRight)"
        />
        {/* Island Cliff Strata Details */}
        <path d="M 120,375 Q 210,410 300,450" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        <path d="M 300,450 Q 390,410 480,375" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

        {/* Top Lush Grass Surface */}
        <polygon
          points="300,270 520,350 300,430 80,350"
          fill="url(#grassTopGrad)"
          stroke="#15803d"
          strokeWidth="2"
        />

        {/* Stepping Path Stones */}
        <ellipse cx="250" cy="385" rx="16" ry="8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
        <ellipse cx="285" cy="370" rx="14" ry="7" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
        <ellipse cx="315" cy="355" rx="15" ry="7.5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />


        {/* ============================================================ */}
        {/* 2. CUTE ANCIENT RUINS & TEMPLE OF ELDORIA (Right/Center)    */}
        {/* ============================================================ */}
        {/* Temple Base Step 1 */}
        <polygon points="340,310 490,260 410,230 260,280" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="260,280 340,310 340,322 260,292" fill="url(#templeStoneShade)" />
        <polygon points="340,310 490,260 490,272 340,322" fill="#64748b" fillOpacity="0.6" />

        {/* Temple Base Step 2 */}
        <polygon points="340,285 465,245 400,220 275,260" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="275,260 340,285 340,295 275,270" fill="url(#templeStoneShade)" />
        <polygon points="340,285 465,245 465,255 340,295" fill="#64748b" fillOpacity="0.6" />

        {/* Inner Cella Chamber Wall */}
        <polygon points="320,250 430,215 430,120 320,155" fill="#0f172a" fillOpacity="0.75" stroke="#0284c7" strokeWidth="1.2" />

        {/* Sacred Portal Doorway */}
        <polygon points="350,235 395,220 395,145 350,160" fill="#030712" stroke="#38bdf8" strokeWidth="1.5" />

        {/* Floating Glowing Golden Relic Artifact */}
        <g className="animate-gold-pulse">
          <circle cx="372" cy="180" r="26" fill="url(#relicGoldGlow)" />
          <polygon
            points="372,166 384,180 372,194 360,180"
            fill="#fbbf24"
            stroke="#ffffff"
            strokeWidth="2"
            filter="drop-shadow(0 0 8px #f59e0b)"
          />
          <circle cx="372" cy="180" r="3" fill="#ffffff" />
        </g>

        {/* Monolithic Pillars with Climbing Ivy */}
        {/* Pillar 1 (Left Front) */}
        <g>
          <rect x="305" y="160" width="14" height="95" rx="3" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="301" y="156" width="22" height="6" rx="2" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1" />
          <rect x="301" y="252" width="22" height="6" rx="2" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1" />
          {/* Ivy vine */}
          <path d="M 305,250 Q 315,220 307,190 Q 317,170 310,160" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="308" cy="235" r="3.5" fill="#22c55e" />
          <circle cx="314" cy="205" r="3" fill="#22c55e" />
          <circle cx="308" cy="175" r="3.5" fill="#22c55e" />
        </g>

        {/* Pillar 2 (Center - Broken Ancient Pillar) */}
        <g>
          <rect x="360" y="200" width="14" height="42" rx="2" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1.5" />
          <polyline points="358,200 363,195 368,202 374,196 376,200" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
          <rect x="356" y="238" width="22" height="6" rx="2" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1" />
        </g>

        {/* Pillar 3 (Right Front) */}
        <g>
          <rect x="420" y="130" width="14" height="95" rx="3" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="416" y="126" width="22" height="6" rx="2" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1" />
          <rect x="416" y="222" width="22" height="6" rx="2" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1" />
          {/* Ivy vine */}
          <path d="M 425,220 Q 418,180 426,140" stroke="#16a34a" strokeWidth="2" fill="none" />
          <circle cx="421" cy="195" r="3" fill="#22c55e" />
          <circle cx="426" cy="160" r="3" fill="#22c55e" />
        </g>

        {/* Temple Architrave & Pediment Roof */}
        <polygon points="295,155 440,110 440,96 295,141" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Triangular Pediment */}
        <polygon points="290,141 367,78 445,96" fill="url(#templeStoneLight)" stroke="#94a3b8" strokeWidth="2" />
        {/* Pediment Golden Emblem */}
        <circle cx="367" cy="115" r="10" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        <polygon points="367,108 372,118 362,118" fill="#ffffff" />


        {/* ============================================================ */}
        {/* 3. CHIBI EXPLORER CHARACTER (Left Foreground)               */}
        {/* ============================================================ */}
        <g className="animate-character-bob">
          {/* Explorer Character Shadow */}
          <ellipse cx="190" cy="380" rx="28" ry="10" fill="#0284c7" fillOpacity="0.18" />

          {/* Backpack (Behind back) */}
          <rect x="156" y="295" width="24" height="34" rx="8" fill="#78350f" stroke="#451a03" strokeWidth="2" />
          {/* Rolled Bedroll/Map on top of backpack */}
          <rect x="154" y="286" width="28" height="10" rx="4" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />

          {/* Explorer Legs & Boots */}
          {/* Left Leg */}
          <rect x="175" y="340" width="10" height="26" rx="4" fill="#0284c7" />
          <ellipse cx="179" cy="368" rx="8" ry="5" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
          {/* Right Leg */}
          <rect x="195" y="340" width="10" height="26" rx="4" fill="#0284c7" />
          <ellipse cx="201" cy="368" rx="8" ry="5" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />

          {/* Explorer Body & Khaki Vest */}
          <rect x="170" y="295" width="38" height="48" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Khaki Explorer Vest */}
          <path d="M 170,305 L 182,305 L 180,340 L 170,340 Z" fill="#d97706" />
          <path d="M 208,305 L 196,305 L 198,340 L 208,340 Z" fill="#d97706" />
          <circle cx="189" cy="315" r="2" fill="#0284c7" />
          <circle cx="189" cy="325" r="2" fill="#0284c7" />

          {/* Left Arm Holding Map */}
          <path d="M 172,308 Q 160,320 166,335" stroke="#fcd34d" strokeWidth="9" strokeLinecap="round" />
          {/* Map Document */}
          <polygon points="152,328 174,324 172,345 150,349" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />
          <line x1="156" y1="335" x2="168" y2="333" stroke="#d97706" strokeWidth="1" strokeDasharray="2 2" />

          {/* Right Arm Pointing Excitedly towards Ruins */}
          <path d="M 205,308 Q 225,295 242,282" stroke="#fcd34d" strokeWidth="9" strokeLinecap="round" />
          {/* Hand pointing */}
          <circle cx="243" cy="281" r="5" fill="#fcd34d" />
          <path d="M 243,281 L 252,274" stroke="#fcd34d" strokeWidth="3" strokeLinecap="round" />

          {/* Chibi Head */}
          <circle cx="192" cy="265" r="22" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Face: Eyes, Blushing Cheeks, Cute Happy Smile */}
          {/* Eyes (Cute anime sparkle eyes) */}
          <circle cx="198" cy="264" r="3.5" fill="#0f172a" />
          <circle cx="199" cy="263" r="1.2" fill="#ffffff" />
          <circle cx="210" cy="262" r="3.5" fill="#0f172a" />
          <circle cx="211" cy="261" r="1.2" fill="#ffffff" />
          {/* Rosy Cheeks */}
          <circle cx="195" cy="271" r="3.5" fill="#f87171" fillOpacity="0.6" />
          <circle cx="214" cy="269" r="3.5" fill="#f87171" fillOpacity="0.6" />
          {/* Cute Smile */}
          <path d="M 202,271 Q 206,276 210,271" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" fill="none" />

          {/* Explorer Pith Helmet */}
          <ellipse cx="193" cy="250" rx="30" ry="11" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          <path d="M 172,250 Q 193,222 214,250 Z" fill="#d97706" stroke="#b45309" strokeWidth="2" />
          {/* Blue Hat Band */}
          <path d="M 172,248 Q 193,243 214,248" stroke="#0284c7" strokeWidth="4" fill="none" />
          {/* Eldoria Compass Badge on Helmet */}
          <circle cx="193" cy="242" r="3.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1" />
        </g>


        {/* ============================================================ */}
        {/* 4. CUTE MASCOT BUDDY: "PIP" THE EXPEDITION FOX PUPPY         */}
        {/* ============================================================ */}
        <g className="animate-character-bob" style={{ animationDelay: '0.4s' }}>
          {/* Mascot Shadow */}
          <ellipse cx="140" cy="390" rx="16" ry="6" fill="#0284c7" fillOpacity="0.18" />

          {/* Wagging Tail (Fixed rotation origin attached to body at 128, 370) */}
          <g
            className="animate-tail-wag"
            style={{
              transformOrigin: '128px 370px',
              transformBox: 'view-box',
            }}
          >
            {/* Fluffy Fox/Puppy Tail */}
            <path
              d="M 128,370 C 114,368 104,357 107,344 C 118,346 126,356 128,368 Z"
              fill="#f97316"
              stroke="#c2410c"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* White Tail Tip */}
            <path
              d="M 107,344 C 111,348 114,351 118,352 C 116,346 114,344 107,344 Z"
              fill="#ffffff"
            />
          </g>

          {/* Mascot Body */}
          <ellipse cx="138" cy="372" rx="14" ry="11" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
          <ellipse cx="142" cy="373" rx="7" ry="8" fill="#ffffff" />

          {/* Little Paws */}
          <circle cx="132" cy="382" r="3.5" fill="#ffffff" stroke="#c2410c" strokeWidth="1" />
          <circle cx="144" cy="382" r="3.5" fill="#ffffff" stroke="#c2410c" strokeWidth="1" />

          {/* Mascot Head */}
          <circle cx="146" cy="355" r="13" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
          {/* White Snout */}
          <ellipse cx="152" cy="358" rx="6" ry="4.5" fill="#ffffff" />
          <circle cx="156" cy="356" r="2" fill="#0f172a" />

          {/* Cute Fox Ears */}
          <polygon points="138,346 136,334 146,344" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
          <polygon points="139,344 138,337 144,343" fill="#ffffff" />
          <polygon points="150,344 156,334 158,346" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
          <polygon points="152,343 155,337 156,344" fill="#ffffff" />

          {/* Eye & Blush */}
          <circle cx="148" cy="353" r="2" fill="#0f172a" />
          <circle cx="149" cy="352" r="0.8" fill="#ffffff" />
          <circle cx="144" cy="358" r="2" fill="#f87171" fillOpacity="0.7" />

          {/* Mini Explorer Aviator Goggles on Forehead */}
          <rect x="140" y="345" width="7" height="5" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
          <rect x="149" y="344" width="7" height="5" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
          <line x1="147" y1="347" x2="149" y2="347" stroke="#0284c7" strokeWidth="1" />
        </g>


        {/* ============================================================ */}
        {/* 5. CUTE LIDAR DRONE & SCAN LASER BEAM (Top Center)           */}
        {/* ============================================================ */}
        <g className="animate-drone-hover">
          {/* Laser LiDAR Scan Cone Shined upon the Temple */}
          <polygon
            points="240,105 480,280 260,340"
            fill="url(#droneLaserBeam)"
            className="animate-beam-glow"
          />
          {/* Laser Scan Grid Target on Ruins */}
          <ellipse cx="370" cy="230" rx="65" ry="24" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />

          {/* Drone Body (Cute Sci-Fi Sphere Drone) */}
          {/* Drone Arms */}
          <line x1="218" y1="96" x2="262" y2="96" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
          <line x1="224" y1="90" x2="256" y2="102" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />

          {/* 4 Spinning Rotors */}
          <ellipse cx="218" cy="94" rx="10" ry="2" fill="#38bdf8" fillOpacity="0.7" className="animate-spin-slow" />
          <ellipse cx="262" cy="94" rx="10" ry="2" fill="#38bdf8" fillOpacity="0.7" className="animate-spin-slow" />

          {/* Drone Core Capsule */}
          <rect x="228" y="88" width="24" height="20" rx="8" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="drop-shadow(0 2px 6px rgba(2,132,199,0.3))" />
          {/* Cyan Camera Eye */}
          <circle cx="240" cy="98" r="5" fill="#06b6d4" />
          <circle cx="240" cy="98" r="2" fill="#ffffff" />
          {/* Antenna with Blinking Beacon */}
          <line x1="240" y1="88" x2="240" y2="80" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="240" cy="78" r="2.5" fill="#10b981" className="animate-pulse" />
        </g>


        {/* ============================================================ */}
        {/* 6. VEGETATION, FERNS & DISCOVERY SPARKLES                    */}
        {/* ============================================================ */}
        {/* Lush Tropical Fern Bush (Left Island Edge) */}
        <g fill="#16a34a" stroke="#15803d" strokeWidth="1">
          <path d="M 85,345 Q 60,330 75,315 Q 90,330 85,345 Z" />
          <path d="M 95,350 Q 80,320 100,310 Q 110,330 95,350 Z" />
          <path d="M 75,355 Q 50,350 60,338 Q 75,345 75,355 Z" />
        </g>
        {/* Cute Tropical Flowers */}
        <circle cx="108" cy="342" r="3.5" fill="#fbbf24" />
        <circle cx="108" cy="342" r="1.5" fill="#ffffff" />
        <circle cx="120" cy="358" r="3" fill="#f43f5e" />

        {/* Golden Discovery Stars / Sparkles */}
        <g fill="#fbbf24">
          {/* Sparkle 1 (Near Relic) */}
          <path d="M 405,160 Q 405,170 415,170 Q 405,170 405,180 Q 405,170 395,170 Q 405,170 405,160 Z" className="animate-pulse" />
          {/* Sparkle 2 (Above Ruins) */}
          <path d="M 330,60 Q 330,68 338,68 Q 330,68 330,76 Q 330,68 322,68 Q 330,68 330,60 Z" className="animate-pulse" />
          {/* Sparkle 3 (Near Explorer Pointing Hand) */}
          <path d="M 260,265 Q 260,271 266,271 Q 260,271 260,277 Q 260,271 254,271 Q 260,271 260,265 Z" className="animate-pulse" />
        </g>
      </svg>
    </div>
  )
}
