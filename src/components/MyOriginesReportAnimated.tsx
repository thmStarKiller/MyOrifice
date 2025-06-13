"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

export default function MyOriginesReportAnimated() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background overlay with coherent orange/red theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/15 to-pink-600/10 animate-pulse-subtle" />
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10 overflow-hidden">
        {/* Animated Header */}
        <div className="text-center mb-8 transform transition-all duration-1000 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl animate-bounce-slow">
            <span className="bg-gradient-to-r from-orange-300 via-red-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              My Origines (DIVABOX) 💩
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-100 font-medium drop-shadow-lg animate-fade-in-delayed px-4">
            Le Grand Déballage Fécal à la Mode Corsica, Ma Chérie !
          </p>
          <Badge
            variant="destructive"
            className="mt-4 text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 animate-pulse hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-orange-500/50 bg-gradient-to-r from-orange-500 to-red-600 border-0"
          >
            Rapport Complet 2024
          </Badge>
        </div>{" "}        {/* Floating Introduction Alert */}
        <div className="mb-8 animate-float">
          <div className="border-orange-400/50 bg-gradient-to-r from-orange-900/90 to-red-900/90 backdrop-blur-md border-2 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-[1.02] overflow-hidden rounded-lg p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
              {/* Title Column */}
              <div className="text-center md:text-left">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-orange-200 animate-pulse leading-tight">
                  🍾 Prépare-toi au<br />Grand Plongeon !
                </div>
              </div>
              
              {/* Description Column */}
              <div className="text-center md:text-left">
                <div className="text-sm sm:text-base md:text-lg text-orange-100 leading-relaxed">
                  Alors, Emen, assieds-toi sur les chiottes, sors le PQ et une bonne coupe de champagne, 
                  parce qu'on va parler de My Origines (aka DIVABOX), et honey, c'est un vrai soap opera corse !
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ultra Modern Animated Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 bg-black/60 backdrop-blur-md border border-orange-500/30 shadow-2xl overflow-hidden h-20 sm:h-auto justify-items-center items-center">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white text-white/80 hover:text-white transition-all duration-500 hover:scale-[1.02] text-xs sm:text-sm h-full flex items-center justify-center"
            >
              <span className="animate-bounce-subtle">Aperçu</span>
            </TabsTrigger>
            <TabsTrigger
              value="scandals"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-600 data-[state=active]:text-white text-white/80 hover:text-white transition-all duration-500 hover:scale-[1.02] text-xs sm:text-sm h-full flex items-center justify-center"
            >
              <span className="animate-bounce-subtle-delayed">Scandales</span>
            </TabsTrigger>
            <TabsTrigger
              value="testimonials"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white text-white/80 hover:text-white transition-all duration-500 hover:scale-[1.02] text-xs sm:text-sm h-full flex items-center justify-center"
            >
              <span className="animate-bounce-subtle-delayed-2">
                Témoignages
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="conclusion"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-orange-600 data-[state=active]:text-white text-white/80 hover:text-white transition-all duration-500 hover:scale-[1.02] text-xs sm:text-sm h-full flex items-center justify-center"
            >
              <span className="animate-bounce-subtle-delayed-3">
                Conclusion
              </span>
            </TabsTrigger>
          </TabsList>
          {/* Overview Tab with Staggered Animations */}
          <TabsContent value="overview" className="animate-fade-in-up">
            <Card className="mb-6 bg-black/50 backdrop-blur-lg border-orange-500/20 shadow-2xl hover:shadow-orange-500/25 transition-all duration-700 hover:scale-[1.01] animate-slide-in-left overflow-hidden">
              <CardHeader className="animate-fade-in-up">
                <CardTitle className="text-xl sm:text-2xl flex items-center gap-2 text-orange-100">
                  <span className="animate-spin-slow">👃</span>
                  La Base : Qui Sont Ces Gens ?
                </CardTitle>
                <CardDescription className="text-orange-200/80">
                  Découvrez l'empire parfumé de Corse
                </CardDescription>
              </CardHeader>
              <CardContent>
                {" "}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="concept"
                    className="border-orange-500/20"
                  >
                    <AccordionTrigger className="text-base sm:text-lg text-orange-100 hover:text-orange-300 transition-colors duration-300">
                      <span className="animate-pulse">
                        Le Concept My Origines
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base space-y-4 animate-fade-in-up">
                      <p className="text-orange-100/90">
                        My Origines, c'est leur site e-commerce qui vend des
                        parfums, du make-up, des soins, et même de la
                        parapharmacie. Oui, oui, la totale pour se refaire une
                        beauté, théoriquement. Ils ont même des boutiques
                        physiques à Ajaccio et Porticcio, en Corse.
                      </p>{" "}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-orange-900/50 backdrop-blur-sm p-4 rounded-lg hover:bg-orange-900/70 transition-all duration-500 hover:scale-[1.02] animate-slide-in-left overflow-hidden">
                          <h4 className="font-semibold text-orange-300 animate-pulse">
                            🌐 E-commerce
                          </h4>
                          <p className="text-sm text-orange-100/70">
                            Site web avec catalogue complet
                          </p>
                        </div>
                        <div className="bg-orange-900/50 backdrop-blur-sm p-4 rounded-lg hover:bg-orange-900/70 transition-all duration-500 hover:scale-[1.02] animate-slide-in-right overflow-hidden">
                          <h4 className="font-semibold text-orange-300 animate-pulse">
                            🏪 Boutiques Physiques
                          </h4>
                          <p className="text-sm text-orange-100/70">
                            Ajaccio et Porticcio, Corse
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="leadership" className="border-white/20">
                    <AccordionTrigger className="text-lg text-white hover:text-purple-400 transition-colors duration-300">
                      <span className="animate-bounce-subtle">
                        L'Équipe Dirigeante
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base space-y-4 animate-fade-in-up">                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-purple-900/50 backdrop-blur-sm p-4 rounded-lg hover:bg-purple-900/70 transition-all duration-500 hover:scale-[1.01] animate-float overflow-hidden">
                          <h4 className="font-semibold text-purple-300 mb-2">
                            <span className="animate-bounce">👑</span> Jean
                            Philippe de Peretti
                          </h4>
                          <Badge className="mb-2 animate-pulse">PDG</Badge>
                          <p className="text-sm text-white/80">
                            Le patron, celui qui mène la danse dans cette saga
                            corsica. Il dirige cette SAS avec un capital social
                            de 5,81 millions d'euros.
                          </p>                        </div>
                        <div className="bg-green-900/50 backdrop-blur-sm p-4 rounded-lg hover:bg-green-900/70 transition-all duration-500 hover:scale-[1.01] animate-float-delayed overflow-hidden">
                          <h4 className="font-semibold text-green-300 mb-2">
                            <span className="animate-bounce">👨‍💼</span> Michel De
                            Peretti
                          </h4>
                          <Badge
                            variant="secondary"
                            className="mb-2 animate-pulse"
                          >
                            PRÉSIDENT
                          </Badge>
                          <p className="text-sm text-white/80">
                            Le binôme familial, probablement le cerveau derrière
                            la stratégie. Famille, tu sais ce que c'est, dans le
                            commerce...
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="investment" className="border-white/20">
                    <AccordionTrigger className="text-lg text-white hover:text-yellow-400 transition-colors duration-300">
                      <span className="animate-pulse">
                        L'Investissement Interparfums
                      </span>
                    </AccordionTrigger>                    <AccordionContent className="text-base animate-fade-in-up">
                      <div className="mb-4 border-blue-300/50 bg-blue-900/50 backdrop-blur-sm rounded-lg p-4 border-2">
                        <div className="font-semibold text-blue-300 mb-3 animate-pulse">
                          💰 Le Gros Coup de 2020
                        </div>
                        <div className="text-white/80 leading-relaxed">
                          Interparfums SA a mis la main au portefeuille en 2020
                          avec 25% des parts !
                        </div>                      </div>
                      <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 backdrop-blur-sm p-6 rounded-lg hover:scale-[1.01] transition-transform duration-500 animate-gradient-x-slow overflow-hidden">
                        <h4 className="font-semibold text-center mb-2 text-yellow-300 animate-bounce">
                          🎯 L'Objectif Ambitieux
                        </h4>
                        <p className="text-center text-white">
                          Atteindre{" "}
                          <Badge
                            variant="outline"
                            className="text-lg animate-pulse border-yellow-400 text-yellow-300"
                          >
                            100 millions d'euros
                          </Badge>{" "}
                          de ventes
                        </p>
                        <p className="text-sm text-center text-white/70 mt-2 animate-fade-in-delayed">
                          Spoiler alert : entre l'objectif et la réalité client,
                          il y a un fossé...
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>{" "}
          {/* Scandals Tab with Explosive Animations */}
          <TabsContent value="scandals" className="animate-fade-in-up">
            <Card className="mb-6 bg-black/50 backdrop-blur-lg border-red-500/30 shadow-2xl hover:shadow-red-500/25 transition-all duration-700 hover:scale-[1.01] animate-slide-in-right overflow-hidden">
              <CardHeader className="animate-shake-subtle">
                <CardTitle className="text-xl sm:text-2xl flex items-center gap-2 text-red-400">
                  <span className="animate-spin">🤬</span>
                  La Face Cachée du Glamour
                </CardTitle>
                <CardDescription className="text-red-300">
                  Quand Ça Part en Sucette et Ça Fait de la Merde !
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="service" className="border-red-500/30">
                    <AccordionTrigger className="text-lg text-red-400 hover:text-red-300 transition-colors duration-300">
                      <span className="animate-bounce">
                        Service Client : Le Silence des Agneaux 💩📞
                      </span>
                    </AccordionTrigger>                    <AccordionContent className="animate-fade-in-up">
                      <div className="mb-4 border-red-300/50 bg-red-900/50 backdrop-blur-sm rounded-lg p-4 border-2">
                        <div className="text-white/90 leading-relaxed">
                          Imaginez que vous commandez un parfum à 80€, et
                          puis... plus rien ! Ni colis, ni nouvelles, ni réponse
                          aux mails.
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-black/60 backdrop-blur-sm rounded-lg border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:scale-[1.02] animate-float overflow-hidden">
                          <div className="text-2xl mb-2 animate-bounce">📦</div>
                          <h4 className="font-semibold text-red-400">
                            Commandes Disparues
                          </h4>
                          <p className="text-sm text-white/70">
                            Des colis qui n'arrivent jamais
                          </p>
                        </div>

                        <div className="text-center p-4 bg-black/60 backdrop-blur-sm rounded-lg border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:scale-[1.02] animate-float-delayed overflow-hidden">
                          <div className="text-2xl mb-2 animate-bounce">💸</div>
                          <h4 className="font-semibold text-red-400">
                            Remboursements Impossibles
                          </h4>
                          <p className="text-sm text-white/70">
                            Délais infinis, mails sans réponse
                          </p>
                        </div>

                        <div className="text-center p-4 bg-black/60 backdrop-blur-sm rounded-lg border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:scale-[1.02] animate-float-delayed-2 overflow-hidden">
                          <div className="text-2xl mb-2 animate-bounce">🤥</div>
                          <h4 className="font-semibold text-red-400">
                            Alibis en Carton
                          </h4>
                          <p className="text-sm text-white/70">
                            "Panne de courant en Corse"
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="authenticity"
                    className="border-yellow-500/30"
                  >
                    <AccordionTrigger className="text-lg text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                      <span className="animate-shake-subtle">
                        Authenti-Cité ou Arnaque-Cité ? 🤥
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="animate-fade-in-up">                      <div className="space-y-4">
                        <div className="border-yellow-300/50 bg-yellow-900/50 backdrop-blur-sm rounded-lg p-4 border-2">
                          <div className="font-semibold text-yellow-300 mb-3 animate-pulse">
                            🚨 Le Mystère du Parfum Évaporé
                          </div>
                          <div className="text-white/90 leading-relaxed">
                            Des tonnes de plaintes ! Les clients reçoivent des
                            parfums qui ne sentent rien, qui ne tiennent pas, ou
                            qui sentent "différent" de l'original.
                          </div>
                        </div>

                        <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-500 animate-slide-in-left">
                          <h4 className="font-semibold text-white mb-2 animate-pulse">
                            Les Indices Troublants :
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
                            <li
                              className="animate-fade-in-up"
                              style={{ animationDelay: "0.1s" }}
                            >
                              Packaging différent des boutiques officielles
                            </li>
                            <li
                              className="animate-fade-in-up"
                              style={{ animationDelay: "0.2s" }}
                            >
                              Codes-barres introuvables dans les bases de
                              données
                            </li>
                            <li
                              className="animate-fade-in-up"
                              style={{ animationDelay: "0.3s" }}
                            >
                              Parfums qui "ne sentent pas pareil"
                            </li>
                            <li
                              className="animate-fade-in-up"
                              style={{ animationDelay: "0.4s" }}
                            >
                              Tenue ridicule (2h max au lieu de 8h+)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>{" "}
          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="animate-fade-in-up">
            <div className="space-y-6">
              <Card className="border-green-500/30 bg-black/50 backdrop-blur-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-700 hover:scale-[1.01] animate-slide-in-left overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-green-400 flex items-center gap-2">
                    <span className="animate-spin-slow">✨</span> La Lumière au
                    Bout du Tunnel
                  </CardTitle>
                  <CardDescription className="text-green-300">
                    (ou l'Illusion d'une Lumière qui Pète)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {" "}
                  <div className="bg-green-900/50 backdrop-blur-sm p-6 rounded-lg hover:scale-[1.02] transition-transform duration-500 animate-float overflow-hidden">
                    <h3 className="text-lg font-semibold text-green-300 mb-3 animate-pulse">
                      🏆 L'Éloge de UFC Que Choisir (Ancienne Version - 2020)
                    </h3>
                    <p className="text-white/90 mb-4">
                      T'imagines, en 2020, des sources tierces ont dit que My
                      Origines était le
                      <Badge
                        variant="outline"
                        className="text-green-400 mx-2 border-green-400 animate-pulse"
                      >
                        "1er site de beauté"
                      </Badge>
                      sur 20 testés par l'UFC Que Choisir.                    </p>
                    <div className="border-green-300/50 bg-green-900/50 backdrop-blur-sm rounded-lg p-4 border-2">
                      <div className="text-sm italic text-white/80 leading-relaxed">
                        Mais ça, c'était il y a une éternité dans le monde du
                        e-commerce ! Cinq ans, c'est un siècle ! On se demande
                        ce qu'ils diraient aujourd'hui...
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>{" "}
              <Card className="bg-black/50 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 hover:scale-[1.01] animate-slide-in-right overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-2 text-white">
                    <span className="animate-bounce">🤫</span> Le Backlash des
                    Employés
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Le Mystère de la Maison (qui Chie dans la Colle)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                    <div className="bg-green-900/50 backdrop-blur-sm p-4 rounded-lg hover:scale-[1.02] transition-transform duration-500 animate-float overflow-hidden">
                      <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                        <span className="animate-bounce">👍</span> Le Côté "Ça
                        Va"
                      </h4>
                      <ul className="text-sm text-white/80 space-y-2">
                        <li
                          className="flex items-center gap-2 animate-fade-in-up"
                          style={{ animationDelay: "0.1s" }}
                        >
                          <span className="text-green-500 animate-pulse">
                            •
                          </span>{" "}
                          Innovation technologique
                        </li>
                        <li
                          className="flex items-center gap-2 animate-fade-in-up"
                          style={{ animationDelay: "0.2s" }}
                        >
                          <span className="text-green-500 animate-pulse">
                            •
                          </span>{" "}
                          Ambiance "dynamique"
                        </li>
                        <li
                          className="flex items-center gap-2 animate-fade-in-up"
                          style={{ animationDelay: "0.3s" }}
                        >
                          <span className="text-green-500 animate-pulse">
                            •
                          </span>{" "}
                          Flexibilité (télétravail, horaires cool)
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-900/50 backdrop-blur-sm p-4 rounded-lg hover:scale-[1.02] transition-transform duration-500 animate-float-delayed overflow-hidden">
                      <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                        <span className="animate-bounce">👎</span> Le Côté "Ça
                        Pique"
                      </h4>
                      <ul className="text-sm text-white/80 space-y-2">
                        <li
                          className="flex items-center gap-2 animate-fade-in-up"
                          style={{ animationDelay: "0.1s" }}
                        >
                          <span className="text-red-500 animate-pulse">•</span>{" "}
                          Pression des délais
                        </li>
                        <li
                          className="flex items-center gap-2 animate-fade-in-up"
                          style={{ animationDelay: "0.2s" }}
                        >
                          <span className="text-red-500 animate-pulse">•</span>{" "}
                          Ressources limitées
                        </li>
                        <li
                          className="flex items-center gap-2 animate-fade-in-up"
                          style={{ animationDelay: "0.3s" }}
                        >
                          <span className="text-red-500 animate-pulse">•</span>{" "}
                          Évolution de carrière limitée
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>{" "}
          {/* Conclusion Tab with Epic Animations */}
          <TabsContent value="conclusion" className="animate-fade-in-up">
            <Card className="border-blue-500/30 bg-black/50 backdrop-blur-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 hover:scale-[1.01] animate-slide-in-bottom overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl flex items-center gap-2 text-blue-400">
                  <span className="animate-spin-slow">💅</span>
                  Le Verdict Final
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-blue-300">
                  En Toute Beauté (et Scandale de Merde)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {" "}
                <div className="bg-blue-900/50 backdrop-blur-sm p-6 rounded-lg hover:scale-[1.02] transition-transform duration-500 animate-float overflow-hidden">
                  <p className="text-base sm:text-lg leading-relaxed text-white mb-4">
                    Emen, ma puce, My Origines, c'est une marque qui a des
                    ambitions de dingue avec l'investissement d'Interparfums,
                    mais qui semble sacrément galérer avec les bases du commerce
                    en ligne : un service client à la ramasse et de sérieuses
                    accusations de contrefaçon qui sentent la crotte de nez !
                  </p>

                  <Separator className="my-4 bg-white/20" />

                  <p className="text-white/90 mb-4">
                    Le fait qu'ils aient été bien notés par UFC Que Choisir en
                    2020, c'est une vieille gloire qui sent un peu le moisi face
                    à l'avalanche actuelle de plaintes.
                  </p>
                </div>{" "}
                {/* Epic Final Animation */}
                <div className="text-center p-4 sm:p-6 bg-gradient-to-r from-orange-900/50 to-red-900/50 backdrop-blur-sm rounded-lg border-2 border-orange-500/30 hover:border-orange-400/60 transition-all duration-500 animate-gradient-x-slow">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4 animate-bounce-slow">
                    🌹➡️🚽
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-300 mb-2 animate-pulse">
                    "Vie en Rose" ➡️ "Vie en Chiottes"
                  </h3>
                  <p className="text-base sm:text-lg text-orange-400 mb-4 animate-fade-in-delayed px-2">
                    Pour leurs clients malheureux
                  </p>
                  <Badge
                    variant="destructive"
                    className="text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 animate-pulse hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-red-500/50 bg-gradient-to-r from-red-600 to-orange-600 border-0 max-w-full break-words"
                  >
                    <span className="block sm:inline">
                      Franchement, c'est un vrai bordel ! 💩
                    </span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>{" "}
        {/* Animated Footer */}
        <div className="text-center mt-12 py-8 text-orange-100/70 animate-fade-in-delayed">
          <Separator className="mb-6 bg-orange-500/20" />
          <p className="text-sm mb-2 animate-pulse px-4">
            Rapport généré avec amour et beaucoup de drama 💅✨
          </p>
          <p className="text-xs animate-fade-in-delayed px-4">
            Toutes les informations sont basées sur des sources publiques et des
            témoignages clients
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4 px-4">
            <Badge
              variant="outline"
              className="text-xs border-orange-400/30 text-orange-200/70 animate-float"
            >
              Responsive Design
            </Badge>
            <Badge
              variant="outline"
              className="text-xs border-orange-400/30 text-orange-200/70 animate-float-delayed"
            >
              Mobile-First
            </Badge>
            <Badge
              variant="outline"
              className="text-xs border-orange-400/30 text-orange-200/70 animate-float-delayed-2"
            >
              Ultra Modern
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
