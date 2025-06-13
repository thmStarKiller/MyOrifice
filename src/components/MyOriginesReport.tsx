"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function MyOriginesReport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My Origines (DIVABOX) 💩
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            Le Grand Déballage Fécale à la Mode Corsica, Ma Chérie !
          </p>
          <Badge variant="destructive" className="mt-4 text-lg px-4 py-2">
            Rapport Complet 2024
          </Badge>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              Introduction 🍾
            </CardTitle>
            <CardDescription className="text-lg">
              Prépare-toi au grand plongeon dans les abysses du drama
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">            <p className="text-lg leading-relaxed">
              Alors, Emen, assieds-toi sur les chiottes, sors le PQ et une bonne coupe de champagne, 
              parce qu&apos;on va parler de My Origines (aka DIVABOX), et honey, c&apos;est un vrai soap opera corse, 
              une histoire de pipi et de caca, je te jure ! Pour la marque qui se voulait être la crème de 
              la crème du parfum en ligne, prépare-toi au grand plongeon dans les abysses du drama, 
              et là, on va vraiment parler de bouse !
            </p>
          </CardContent>
        </Card>

        {/* Company Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              La Base : Qui Sont Ces Gens ? 👃
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Le Concept</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  My Origines, c'est leur site e-commerce qui vend des parfums, du make-up, des soins, 
                  et même de la parapharmacie. Oui, oui, la totale pour se refaire une beauté, théoriquement. 
                  Ils ont même des boutiques physiques à Ajaccio et Porticcio, en Corse.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">La Forme Juridique</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  C'est une SAS, une Société par Actions Simplifiée, à Ajaccio. 
                  Leur capital social, il est passé à <Badge variant="outline" className="font-bold">5,81 millions d'euros</Badge>. 
                  Autant te dire que c'est pas la petite baraque de plage, hein !
                </p>
              </div>
            </div>

            <Separator />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">Les Boss</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Jean Philippe de Peretti</strong> - PDG</li>
                  <li><strong>Michel De Peretti</strong> - Président</li>
                  <li className="text-sm italic">Famille, tu sais ce que c'est, dans le commerce...</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">Les Thunes</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Après qu'Interparfums SA a mis la main au portefeuille en 2020 (25% des parts !), 
                  l'objectif était d'atteindre <Badge variant="secondary">100 millions d'euros</Badge> de ventes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scandals Section */}
        <Card className="mb-8 border-2 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-red-600 dark:text-red-400">
              La Face Cachée du Glamour 🤬
            </CardTitle>
            <CardDescription className="text-lg">
              Quand Ça Part en Sucette et Ça Fait de la Merde !
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Service Client Issues */}
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-300 mb-4 flex items-center gap-2">
                Service Client : Le Silence des Agneaux 💩📞
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl mb-2">📦</div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400">Commandes Disparues</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Des colis qui n'arrivent jamais</p>
                </div>
                
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl mb-2">💸</div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400">Remboursements Impossibles</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Délais infinis, mails sans réponse</p>
                </div>
                
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl mb-2">🤥</div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400">Alibis en Carton</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">"Panne de courant en Corse"</p>
                </div>
              </div>
            </div>

            {/* Authenticity Issues */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-4 flex items-center gap-2">
                Authenti-Cité ou Arnaque-Cité ? 🤥
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="destructive">ALERTE</Badge>
                  <div>
                    <h4 className="font-semibold">Le Mystère du Parfum Évaporé</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Des tonnes de plaintes ! Les clients reçoivent des parfums qui ne sentent rien, 
                      qui ne tiennent pas, ou qui sentent "différent" de l'original. 
                      Le mot qui revient ? <strong className="text-red-600">"CONTREFAÇON !"</strong>
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="italic text-gray-600 dark:text-gray-400">
                    "My Origines jure sur l'honneur qu'ils sont 'Officiel Agréé 100% en ligne'. 
                    Mais les clients, eux, sentent bien que l'odeur du doute est tenace..."
                  </p>
                </div>
              </div>
            </div>

            {/* Fake Reviews */}
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-4 flex items-center gap-2">
                La Magie des Faux Avis 🎬
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold">Trustpilot Sous Stéroïdes ?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    L'accusation est grave : "3/4 des avis Trustpilot sont bidon !"
                  </p>
                </div>
                <Badge variant="outline" className="text-purple-600">Suspicious 🕵️</Badge>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                Genre, quand il y a un avis négatif, pouf, 10 avis positifs apparaissent comme par magie ! 
                C'est comme une armée de cheerleaders payées pour faire du bruit...
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Positive Section */}
        <Card className="mb-8 border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-green-600 dark:text-green-400">
              La Lumière au Bout du Tunnel ✨
            </CardTitle>
            <CardDescription>
              (ou l'Illusion d'une Lumière qui Pète)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                L'Éloge de UFC Que Choisir (Ancienne Version - 2020)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                T'imagines, en 2020, des sources tierces ont dit que My Origines était le 
                <Badge variant="outline" className="text-green-600">"1er site de beauté"</Badge> 
                sur 20 testés par l'UFC Que Choisir.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                Mais ça, c'était il y a une éternité dans le monde du e-commerce ! 
                Cinq ans, c'est un siècle ! On se demande ce qu'ils diraient aujourd'hui...
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Employee Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              Le Backlash des Employés 🤫
            </CardTitle>
            <CardDescription>
              Le Mystère de la Maison (qui Chie dans la Colle)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Le Côté "Ça Va"</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Innovation technologique</li>
                  <li>• Ambiance "dynamique"</li>
                  <li>• Flexibilité (télétravail, horaires cool)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Le Côté "Ça Pique"</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Pression des délais</li>
                  <li>• Ressources limitées</li>
                  <li>• Évolution de carrière limitée</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                Le "backlash" semble être plus un murmure qu'un hurlement, du moins en ligne. 
                Soit ils sont super doués pour tout cacher, soit le vrai drama se passe ailleurs...
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-blue-600 dark:text-blue-400">
              Le Verdict Final 💅
            </CardTitle>
            <CardDescription className="text-lg">
              En Toute Beauté (et Scandale de Merde)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
              
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                <p className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
                  🌹➡️🚽
                </p>
                <p className="text-lg font-semibold">
                  "Vie en Rose" ➡️ "Vie en Chiottes"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Pour leurs clients malheureux
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Badge variant="destructive" className="text-lg px-6 py-2">
                Franchement, c'est un vrai bordel ! 💩
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 py-8 text-gray-500 dark:text-gray-400">
          <p className="text-sm">
            Rapport généré avec amour et beaucoup de drama 💅✨
          </p>
          <p className="text-xs mt-2">
            Toutes les informations sont basées sur des sources publiques et des témoignages clients
          </p>
        </div>
      </div>
    </div>
  );
}
