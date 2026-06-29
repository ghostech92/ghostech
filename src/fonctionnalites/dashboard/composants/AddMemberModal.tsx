import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface AddMemberModalProps {
  participants: any[];
  onClose: () => void;
  onSelectExisting: (user: any) => void;
  onCreateCustom: (emailLower: string, extractedName: string) => void;
}

export default function AddMemberModal({
  participants,
  onClose,
  onSelectExisting,
  onCreateCustom,
}: AddMemberModalProps) {
  const [memberSearchQuery, setMemberSearchQuery] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");

  const handleAddMemberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberEmail) return;

    const emailLower = newMemberEmail.trim().toLowerCase();
    const existingIndex = participants.findIndex(
      (p) => p.email?.trim().toLowerCase() === emailLower
    );

    if (existingIndex !== -1) {
      onSelectExisting(participants[existingIndex]);
    } else {
      const emailPrefix = emailLower.split("@")[0];
      const nameParts = emailPrefix.split(/[._-]/);
      const extractedName = nameParts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
      onCreateCustom(emailLower, extractedName);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl max-w-md w-full mx-4"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900">
            Ajouter à la compétition
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-550 uppercase tracking-wider block mb-1.5">
              Rechercher parmi les membres inscrits
            </label>
            <input
              type="text"
              placeholder="Saisissez un nom ou email..."
              value={memberSearchQuery}
              onChange={(e) => setMemberSearchQuery(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 mb-3"
            />

            {/* Result List */}
            <div className="max-h-48 overflow-y-auto border border-slate-100 bg-slate-50 rounded-xl divide-y divide-slate-100">
              {participants
                .filter((p) => {
                  if (!memberSearchQuery) return !p.isParticipating;
                  return (
                    p.name
                      .toLowerCase()
                      .includes(memberSearchQuery.toLowerCase()) ||
                    p.email
                      ?.toLowerCase()
                      .includes(memberSearchQuery.toLowerCase())
                  );
                })
                .slice(0, 5)
                .map((user) => (
                  <div
                    key={user.id}
                    className="p-3 flex items-center justify-between hover:bg-slate-100/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        className="w-8 h-8 rounded-full object-cover border border-slate-200"
                        alt={user.name}
                      />
                      <div>
                        <h4 className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                          {user.name}
                          {user.isParticipating && (
                            <span className="text-[8px] bg-teal-50 text-teal-600 border border-teal-100 px-1 rounded-sm">
                              Déjà actif
                            </span>
                          )}
                        </h4>
                        <p className="text-[10px] text-slate-400">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    {!user.isParticipating ? (
                      <button
                        type="button"
                        onClick={() => onSelectExisting(user)}
                        className="bg-teal-600 hover:bg-teal-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all"
                      >
                        Ajouter
                      </button>
                    ) : (
                      <span className="text-teal-600 text-xs font-bold mr-2">
                        ✓
                      </span>
                    )}
                  </div>
                ))}
              {participants.filter((p) => {
                if (!memberSearchQuery) return !p.isParticipating;
                return (
                  p.name
                    .toLowerCase()
                    .includes(memberSearchQuery.toLowerCase()) ||
                  p.email
                    ?.toLowerCase()
                    .includes(memberSearchQuery.toLowerCase())
                );
              }).length === 0 && (
                <div className="p-3 text-center text-xs text-slate-400">
                  Aucun membre correspondant trouvé.
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-slate-200"></div>
            <span className="px-3 text-[10px] font-bold text-slate-450 uppercase tracking-widest bg-white">
              Ou Ajout Manuel
            </span>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>

          <form onSubmit={handleAddMemberSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                Adresse Email
              </label>
              <input
                type="email"
                required
                placeholder="koffi@gmail.com"
                value={newMemberEmail}
                onChange={(e) => setNewMemberEmail(e.target.value)}
                className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500"
              />
              <p className="text-[10px] text-slate-450 mt-1.5 leading-relaxed">
                Si l'utilisateur n'est pas encore enregistré dans le système,
                saisissez son e-mail pour l'inscrire avec un compte provisoire.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-100 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/10"
              >
                Inscrire et Ajouter
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
