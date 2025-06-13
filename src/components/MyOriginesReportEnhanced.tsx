"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MyOriginesReportEnhanced() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My Origines (DIVABOX) 💩
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            Le Grand Déballage Fécal à la Mode Corsica, Ma Chérie !
          </p>
          <Badge variant="destructive" className="mt-4 text-lg px-4 py-2">
            Rapport Complet 2024
          </Badge>
        </div>

        {/* Introduction Alert */}          <Alert className="mb-8 border-orange-300 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-700">
            <div className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-2">
              🍾 Prépare-toi au Grand Plongeon !
            </div>
            <AlertDescription className="text-lg text-orange-700 dark:text-orange-400">
              Alors, Emen, assieds-toi sur les chiottes, sors le PQ et une bonne coupe de champagne, 
              parce qu'on va parler de My Origines (aka DIVABOX), et honey, c'est un vrai soap opera corse !
            </AlertDescription>
          </Alert>

        {/* Main Content with Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Aperçu</TabsTrigger>
            <TabsTrigger value="scandals">Scandales</TabsTrigger>
            <TabsTrigger value="testimonials">Témoignages</TabsTrigger>
            <TabsTrigger value="conclusion">Conclusion</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  La Base : Qui Sont Ces Gens ? 👃
                </CardTitle>
                <CardDescription>
                  Découvrez l'empire parfumé de Corse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="concept">
                    <AccordionTrigger className="text-lg">Le Concept My Origines</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        My Origines, c'est leur site e-commerce qui vend des parfums, du make-up, des soins, 
                        et même de la parapharmacie. Oui, oui, la totale pour se refaire une beauté, théoriquement. 
                        Ils ont même des boutiques physiques à Ajaccio et Porticcio, en Corse.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300">🌐 E-commerce</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Site web avec catalogue complet</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300">🏪 Boutiques Physiques</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Ajaccio et Porticcio, Corse</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="leadership">
                    <AccordionTrigger className="text-lg">L'Équipe Dirigeante</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">👑 Jean Philippe de Peretti</h4>
                          <Badge className="mb-2">PDG</Badge>
                          <p className="text-sm">
                            Le patron, celui qui mène la danse dans cette saga corsica. 
                            Il dirige cette SAS avec un capital social de 5,81 millions d'euros.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">👨‍💼 Michel De Peretti</h4>
                          <Badge variant="secondary" className="mb-2">PRÉSIDENT</Badge>
                          <p className="text-sm">
                            Le binôme familial, probablement le cerveau derrière la stratégie. 
                            Famille, tu sais ce que c'est, dans le commerce...
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="investment">
                    <AccordionTrigger className="text-lg">L'Investissement Interparfums</AccordionTrigger>
                    <AccordionContent className="text-base">                      <Alert className="mb-4 border-blue-300 bg-blue-50 dark:bg-blue-900/20">
                        <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💰 Le Gros Coup de 2020</div>
                        <AlertDescription>
                          Interparfums SA a mis la main au portefeuille en 2020 avec 25% des parts !
                        </AlertDescription>
                      </Alert>
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                        <h4 className="font-semibold text-center mb-2">🎯 L'Objectif Ambitieux</h4>
                        <p className="text-center">
                          Atteindre <Badge variant="outline" className="text-lg">100 millions d'euros</Badge> de ventes
                        </p>
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                          Spoiler alert : entre l'objectif et la réalité client, il y a un fossé...
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Scandals Tab */}
          <TabsContent value="scandals">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-red-600 dark:text-red-400">
                  La Face Cachée du Glamour 🤬
                </CardTitle>
                <CardDescription>
                  Quand Ça Part en Sucette et Ça Fait de la Merde !
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="service">
                    <AccordionTrigger className="text-lg text-red-600 dark:text-red-400">
                      Service Client : Le Silence des Agneaux 💩📞
                    </AccordionTrigger>
                    <AccordionContent>
                      <Alert className="mb-4 border-red-300 bg-red-50 dark:bg-red-900/20">
                        <AlertDescription>
                          Imaginez que vous commandez un parfum à 80€, et puis... plus rien ! Ni colis, ni nouvelles, ni réponse aux mails.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                          <div className="text-2xl mb-2">📦</div>
                          <h4 className="font-semibold text-red-600 dark:text-red-400">Commandes Disparues</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Des colis qui n'arrivent jamais</p>
                        </div>
                        
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                          <div className="text-2xl mb-2">💸</div>
                          <h4 className="font-semibold text-red-600 dark:text-red-400">Remboursements Impossibles</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Délais infinis, mails sans réponse</p>
                        </div>
                        
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                          <div className="text-2xl mb-2">🤥</div>
                          <h4 className="font-semibold text-red-600 dark:text-red-400">Alibis en Carton</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">"Panne de courant en Corse"</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="authenticity">
                    <AccordionTrigger className="text-lg text-yellow-600 dark:text-yellow-400">
                      Authenti-Cité ou Arnaque-Cité ? 🤥
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">                        <Alert className="border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20">
                          <div className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">🚨 Le Mystère du Parfum Évaporé</div>
                          <AlertDescription>
                            Des tonnes de plaintes ! Les clients reçoivent des parfums qui ne sentent rien, 
                            qui ne tiennent pas, ou qui sentent "différent" de l'original.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Les Indices Troublants :</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li>Packaging différent des boutiques officielles</li>
                            <li>Codes-barres introuvables dans les bases de données</li>
                            <li>Parfums qui "ne sentent pas pareil"</li>
                            <li>Tenue ridicule (2h max au lieu de 8h+)</li>
                          </ul>
                        </div>
                        
                        <div className="border-l-4 border-yellow-400 pl-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-r-lg">
                          <p className="italic text-gray-700 dark:text-gray-300">
                            "My Origines jure sur l'honneur qu'ils sont 'Officiel Agréé 100% en ligne'. 
                            Mais les clients, eux, sentent bien que l'odeur du doute est tenace..."
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="reviews">
                    <AccordionTrigger className="text-lg text-purple-600 dark:text-purple-400">
                      La Magie des Faux Avis 🎬
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">                        <Alert className="border-purple-300 bg-purple-50 dark:bg-purple-900/20">
                          <div className="font-semibold text-purple-700 dark:text-purple-300 mb-2">🕵️ Trustpilot Sous Stéroïdes ?</div>
                          <AlertDescription>
                            L'accusation est grave : "3/4 des avis Trustpilot sont bidon !"
                          </AlertDescription>
                        </Alert>
                        
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                          <h4 className="font-semibold text-center mb-3">🎭 Le Phénomène Magique</h4>
                          <p className="text-center italic">
                            Quand il y a un avis négatif, pouf ! 10 avis positifs apparaissent comme par magie !
                          </p>
                          <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                            C'est comme une armée de cheerleaders payées pour faire du bruit...
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="logistics">
                    <AccordionTrigger className="text-lg text-orange-600 dark:text-orange-400">
                      Logistique de L'Enfer 🚚💨
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Ah, la logistique ! Le point faible numéro 1 de My Origines. 
                          Ils promettent des livraisons rapides, mais la réalité, c'est plutôt "livraison à la saint-glinglin".
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                              ❌ Les Problèmes
                            </h4>
                            <ul className="text-sm space-y-1">
                              <li>• Délais de 3-4 semaines au lieu de 48h</li>
                              <li>• Colis perdus dans "le triangle des Bermudes corse"</li>
                              <li>• Pas de numéro de suivi fonctionnel</li>
                              <li>• Service client injoignable</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                              🎭 Les Excuses Créatives
                            </h4>
                            <ul className="text-sm space-y-1">
                              <li>• "Problème informatique majeur"</li>
                              <li>• "Grève générale en Corse"</li>
                              <li>• "Panne de courant prolongée"</li>
                              <li>• "Difficultés logistiques temporaires"</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <div className="space-y-6">
              {/* Positive Testimonials */}
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600 dark:text-green-400 flex items-center gap-2">
                    ✨ La Lumière au Bout du Tunnel
                  </CardTitle>
                  <CardDescription>
                    (ou l'Illusion d'une Lumière qui Pète)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                      🏆 L'Éloge de UFC Que Choisir (Ancienne Version - 2020)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      T'imagines, en 2020, des sources tierces ont dit que My Origines était le 
                      <Badge variant="outline" className="text-green-600 mx-2">"1er site de beauté"</Badge> 
                      sur 20 testés par l'UFC Que Choisir.
                    </p>
                    <Alert className="border-green-300 bg-green-50 dark:bg-green-900/20">
                      <AlertDescription className="text-sm italic">
                        Mais ça, c'était il y a une éternité dans le monde du e-commerce ! 
                        Cinq ans, c'est un siècle ! On se demande ce qu'ils diraient aujourd'hui...
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>

              {/* Employee Feedback */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    🤫 Le Backlash des Employés
                  </CardTitle>
                  <CardDescription>
                    Le Mystère de la Maison (qui Chie dans la Colle)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                        👍 Le Côté "Ça Va"
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">•</span> Innovation technologique
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">•</span> Ambiance "dynamique"
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">•</span> Flexibilité (télétravail, horaires cool)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">•</span> Équipe jeune et motivée
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                        👎 Le Côté "Ça Pique"
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">•</span> Pression des délais
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">•</span> Ressources limitées
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">•</span> Évolution de carrière limitée
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">•</span> Stress lié aux plaintes clients
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <Alert className="border-gray-300 bg-gray-50 dark:bg-gray-800">
                    <AlertDescription className="text-sm italic">
                      Le "backlash" semble être plus un murmure qu'un hurlement, du moins en ligne. 
                      Soit ils sont super doués pour tout cacher, soit le vrai drama se passe ailleurs...
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Conclusion Tab */}
          <TabsContent value="conclusion">
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  Le Verdict Final 💅
                </CardTitle>
                <CardDescription className="text-lg">
                  En Toute Beauté (et Scandale de Merde)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-4">
                    Emen, ma puce, My Origines, c'est une marque qui a des ambitions de dingue avec 
                    l'investissement d'Interparfums, mais qui semble sacrément galérer avec les bases 
                    du commerce en ligne : un service client à la ramasse et de sérieuses accusations 
                    de contrefaçon qui sentent la crotte de nez !
                  </p>
                  
                  <Separator className="my-4" />
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Le fait qu'ils aient été bien notés par UFC Que Choisir en 2020, c'est une vieille 
                    gloire qui sent un peu le moisi face à l'avalanche actuelle de plaintes.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                      🚨 Points d'Alerte
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Badge variant="destructive" className="text-xs">CRITIQUE</Badge>
                        Service client fantôme
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="destructive" className="text-xs">CRITIQUE</Badge>
                        Suspicion de contrefaçons
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="destructive" className="text-xs">CRITIQUE</Badge>
                        Logistique défaillante
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="destructive" className="text-xs">CRITIQUE</Badge>
                        Avis clients manipulés
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                      ✅ Points Positifs
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">INFO</Badge>
                        Investissement solide (Interparfums)
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">INFO</Badge>
                        Reconnaissance passée (UFC 2020)
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">INFO</Badge>
                        Présence physique en Corse
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">INFO</Badge>
                        Ambitions de croissance
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                  <div className="text-4xl mb-4">🌹➡️🚽</div>
                  <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                    "Vie en Rose" ➡️ "Vie en Chiottes"
                  </h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 mb-4">
                    Pour leurs clients malheureux
                  </p>
                  <Badge variant="destructive" className="text-lg px-6 py-2">
                    Franchement, c'est un vrai bordel ! 💩
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center mt-12 py-8 text-gray-500 dark:text-gray-400">
          <Separator className="mb-6" />
          <p className="text-sm mb-2">
            Rapport généré avec amour et beaucoup de drama 💅✨
          </p>
          <p className="text-xs">
            Toutes les informations sont basées sur des sources publiques et des témoignages clients
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-xs">Responsive Design</Badge>
            <Badge variant="outline" className="text-xs">Mobile-First</Badge>
            <Badge variant="outline" className="text-xs">Dark Mode</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
