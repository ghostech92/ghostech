"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Plus,
  Users,
} from "lucide-react";

import { useMembers } from "@/src/fonctionnalites/membres/hooks/useMembers";
import { useFormationManager } from "@/src/fonctionnalites/dashboard/hooks/useFormationManager";
import { useHackathonManager } from "@/src/fonctionnalites/dashboard/hooks/useHackathonManager";

function StatCard({
  label,
  value,
  detail,
  icon: Icon,
  accent,
}: {
  label: string;
  value: number | string;
  detail: string;
  icon: typeof Users;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1b1c1a] p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-stone-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white">{value}</p>
        </div>
        <div className={`rounded-xl p-3 ${accent}`}>
          <Icon size={21} />
        </div>
      </div>
      <p className="mt-4 text-xs text-stone-500">{detail}</p>
    </div>
  );
}

export default function DashboardPage() {
  const { members, loading: membersLoading } = useMembers();
  const { hackathons, isLoading: hackathonsLoading } = useHackathonManager();
  const { formations, isLoading: formationsLoading } = useFormationManager();

  const isLoading = membersLoading || hackathonsLoading || formationsLoading;
  const upcomingHackathons = hackathons.filter((hackathon) => hackathon.status === "a-venir");
  const publishedFormations = formations.filter((formation) => !formation.closed);

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#fd800a]">
            Administration
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Vue d&apos;ensemble
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-stone-500">
            Suivez l&apos;activité de Ghostech et gérez rapidement les contenus de la plateforme.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard/evenements"
            className="inline-flex items-center gap-2 rounded-xl bg-[#fd800a] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-orange-600"
          >
            <Plus size={17} />
            Ajouter un événement
          </Link>
          <Link
            href="/dashboard/membres"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#1b1c1a] px-4 py-2.5 text-sm font-bold text-stone-300 transition-colors hover:border-[#fd800a] hover:text-[#fd800a]"
          >
            Voir les membres
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Membres inscrits"
          value={isLoading ? "..." : members.length}
          detail="Comptes enregistrés sur la plateforme"
          icon={Users}
          accent="bg-blue-50 text-blue-600"
        />
        <StatCard
          label="Hackathons actifs"
          value={isLoading ? "..." : upcomingHackathons.length}
          detail={`${hackathons.length} hackathon(s) au total`}
          icon={CalendarDays}
          accent="bg-orange-50 text-[#fd800a]"
        />
        <StatCard
          label="Formations publiées"
          value={isLoading ? "..." : publishedFormations.length}
          detail={`${formations.length} formation(s) au total`}
          icon={BookOpen}
          accent="bg-emerald-50 text-emerald-600"
        />
        <StatCard
          label="Contenus disponibles"
          value={isLoading ? "..." : hackathons.length + formations.length}
          detail="Hackathons et formations gérés"
          icon={Activity}
          accent="bg-violet-50 text-violet-600"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#1b1c1a] p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white">Activité récente</h2>
              <p className="mt-1 text-sm text-stone-500">Les éléments à surveiller cette semaine.</p>
            </div>
            <Activity className="text-slate-300" size={22} />
          </div>
          <div className="space-y-5">
            <div className="flex gap-3">
              <div className="mt-0.5 rounded-full bg-blue-50 p-2 text-blue-600">
                <Users size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-200">
                  {isLoading ? "Chargement des membres..." : `${members.length} membre(s) inscrit(s)`}
                </p>
                <p className="mt-1 text-xs text-stone-500">Données synchronisées avec les comptes Ghostech</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 rounded-full bg-orange-50 p-2 text-[#fd800a]">
                <CalendarDays size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-200">
                  {isLoading ? "Chargement des événements..." : `${upcomingHackathons.length} hackathon(s) à venir`}
                </p>
                <p className="mt-1 text-xs text-stone-500">Consultez les événements dans la gestion des contenus</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 rounded-full bg-emerald-50 p-2 text-emerald-600">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-200">
                  {isLoading ? "Chargement des formations..." : `${publishedFormations.length} formation(s) publiée(s)`}
                </p>
                <p className="mt-1 text-xs text-stone-500">Les formations visibles par la communauté</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b1c1a] p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Accès rapides</h2>
              <p className="mt-1 text-sm text-stone-500">Les actions administratives courantes.</p>
            </div>
            <Clock3 className="text-slate-300" size={22} />
          </div>
          <div className="space-y-3">
            <Link
              href="/dashboard/evenements"
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-[#fd800a]/40 hover:bg-[#fd800a]/10"
            >
              <span className="flex items-center gap-3 text-sm font-semibold text-stone-300 group-hover:text-[#fd800a]">
                <CalendarDays size={17} />
                Gérer les événements
              </span>
              <ArrowRight size={16} className="text-stone-500 group-hover:text-[#fd800a]" />
            </Link>
            <Link
              href="/dashboard/membres"
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-[#fd800a]/40 hover:bg-[#fd800a]/10"
            >
              <span className="flex items-center gap-3 text-sm font-semibold text-stone-300 group-hover:text-[#fd800a]">
                <Users size={17} />
                Gérer les membres
              </span>
              <ArrowRight size={16} className="text-stone-500 group-hover:text-[#fd800a]"  />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
