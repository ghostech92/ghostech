import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Image from "next/image";

interface LeaderboardCardProps {
  user: any;
  index: number;
}

const MotionImage = motion.create(Image as any);

export default function LeaderboardCard({ user, index }: LeaderboardCardProps) {
  const isCurrentUser = user.name === "Utilisateur" || user.id === "p4";
  const rank = index + 1;

  let levelIcon = "/arena-icon/Level/level1.svg";
  if (user.points >= 60) levelIcon = "/arena-icon/Level/level3.svg";
  else if (user.points >= 30) levelIcon = "/arena-icon/Level/level2.svg";

  const badges = [];
  if (user.points > 0) badges.push({ src: "/arena-icon/lo1.svg", name: "Premier Pas" });
  if (user.points >= 40) badges.push({ src: "/arena-icon/lo2.svg", name: "Compétiteur" });
  if (user.points >= 60) badges.push({ src: "/arena-icon/lo3.svg", name: "Expert de l'Arène" });
  if (user.points >= 80) badges.push({ src: "/arena-icon/lo4.svg", name: "Champion" });
  if (user.points >= 100) badges.push({ src: "/arena-icon/lo5.svg", name: "Légende" });
  if (rank === 1 && user.points > 0) badges.push({ src: "/arena-icon/mvp.svg", name: "MVP de la Saison" });

  const handleBadgeClick = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 70,
      origin: { x, y },
      colors: ['#0d9488', '#10b981', '#fbbf24', '#f43f5e', '#3b82f6']
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className={`border-2 border-b-4 rounded-3xl p-3 flex items-center justify-between transition-all ${
        isCurrentUser 
          ? "bg-[#F0FDFA] border-[#14B8A6] text-teal-950" 
          : "bg-white border-[#E5E5E5] text-gray-950 hover:translate-y-[-1px]"
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Rank / Medals */}
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          {rank === 1 ? (
            <MotionImage
              src="/arena-icon/medail/premier.svg"
              className="w-9 h-9 object-contain cursor-pointer"
              alt="Premier"
              width={36}
              height={36}
              whileHover={{ scale: 1.2, rotate: 15 }}
              onClick={(e: any) => handleBadgeClick(e, "1er")}
            />
          ) : rank === 2 ? (
            <MotionImage
              src="/arena-icon/medail/deuxieme.svg"
              className="w-9 h-9 object-contain cursor-pointer"
              alt="Deuxième"
              width={36}
              height={36}
              whileHover={{ scale: 1.2, rotate: -15 }}
              onClick={(e: any) => handleBadgeClick(e, "2ème")}
            />
          ) : rank === 3 ? (
            <MotionImage
              src="/arena-icon/medail/trosieme.svg"
              className="w-9 h-9 object-contain cursor-pointer"
              alt="Troisième"
              width={36}
              height={36}
              whileHover={{ scale: 1.2, rotate: 15 }}
              onClick={(e: any) => handleBadgeClick(e, "3ème")}
            />
          ) : (
            <span className="font-black text-gray-400 text-sm">#{rank}</span>
          )}
        </div>

        <Image 
          src={user.avatar} 
          alt={user.name} 
          width={40} 
          height={40} 
          className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" 
        />

        <div className="text-left">
          <h4 className="font-black text-sm uppercase tracking-tight flex items-center gap-2">
            {user.name}
            {isCurrentUser && (
              <span className="text-[8px] bg-[#E0F2FE] text-[#0369A1] px-1.5 py-0.5 rounded uppercase tracking-wider font-black">
                Moi
              </span>
            )}
          </h4>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Image src={levelIcon} width={14} height={14} className="w-3.5 h-3.5 object-contain" alt={user.level} />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">{user.level}</span>
          </div>
        </div>

        {/* Badges Obtenus */}
        <div className="hidden sm:flex items-center gap-1.5 ml-2">
          {badges.map((badge, bIdx) => (
            <div key={bIdx} className="relative group cursor-pointer">
              <MotionImage
                src={badge.src}
                alt={badge.name}
                width={24}
                height={24}
                className="w-6 h-6 object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                whileHover={{ scale: 1.3, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.3 }}
                onClick={(e: any) => handleBadgeClick(e, badge.name)}
              />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-[9px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-30">
                {badge.name} (Clic pour confettis !)
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-black text-sm">{user.points.toLocaleString()} <span className="text-[10px] text-gray-400 font-bold">PTS</span></span>
        <div className="w-6 flex justify-center">
          {user.trend === "up" && <span className="text-[#10B981] text-sm font-black">▲</span>}
          {user.trend === "down" && <span className="text-[#EF4444] text-sm font-black">▼</span>}
          {(user.trend === "same" || !user.trend) && <span className="text-gray-300 text-sm font-black">▬</span>}
        </div>
      </div>
    </motion.div>
  );
}
