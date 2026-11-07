export type GuideStop = {
  id: string;
  number: string;
  place: string;
  visit: string;
  intro: string;
  walk: string[];
  parking: string;
  parkingNote: string;
  from: string;
  drive: string;
  road: string;
  toll: string;
  tip: string;
  tipLabel: string;
};

export const franceDayOneStops: GuideStop[] = [
  {
    id: "marseille", number: "01", place: "Marseille", visit: "1½–2 hours on foot",
    intro: "Start by the water, not with a museum marathon. The Vieux-Port is Marseille's living room: boats, morning light and the city waking up. Wander into Le Panier, its oldest neighbourhood, before returning towards the sea.",
    walk: ["Vieux-Port → Le Panier", "La Vieille Charité → Cathédrale de la Major", "Mucem waterfront → Vieux-Port"],
    parking: "Parking Indigo Marseille Vieux-Port La Criée",
    parkingNote: "Suggested harbour garage, 38 quai de Rive Neuve. This is not a confirmed match for the garage we used near a supermarket. Leave luggage out of sight; allow 15–25 minutes for parking and walking to the harbour.",
    from: "Marseille Provence Airport", drive: "25–40 minutes · about 27 km", road: "A7 / A55 towards Marseille and Vieux-Port",
    toll: "Normally no motorway toll on this approach; check the route your navigation selects.",
    tipLabel: "V & eM · keep it short",
    tip: "We recommend a short walk here. Enjoy the old town and harbour, then keep moving: Provence is still ahead. The Mucem stop is a waterfront visit, not a timed museum ticket.",
  },
  {
    id: "avignon", number: "02", place: "Avignon", visit: "1½–2 hours including lunch",
    intro: "Inside its medieval walls, Avignon feels like a different chapter: papal palaces, warm stone and narrow streets opening onto little squares. Let the Palais des Papes set the scene, then enjoy the old town rather than trying to visit every interior.",
    walk: ["Palais des Papes → Cathédrale Notre-Dame des Doms", "Rocher des Doms (if open) → view of Pont Saint-Bénézet", "Old-town lanes → Les Halles d'Avignon area"],
    parking: "Parking Palais des Papes, Avignon",
    parkingNote: "Suggested central underground parking at place du Palais, with vehicle access via the signposted approach from boulevard de la Ligne. Check height restrictions and allow 15–20 minutes to park and reach the old town.",
    from: "Parking Indigo Marseille Vieux-Port La Criée", drive: "1 hour 15–1 hour 40 · about 105 km", road: "A7 north towards Avignon; follow signed city-centre parking access",
    toll: "Paid motorway section on the A7. The amount depends on the entry/exit and vehicle; check the official calculator before departure.",
    tipLabel: "Lunch · a researched suggestion",
    tip: "Choose lunch around Place de l'Horloge or the Les Halles area. We no longer have the name of the restaurant where we ate, so this is an area suggestion, not a personally tested restaurant. Les Halles is primarily a morning market: check its opening hours before relying on it for lunch.",
  },
  {
    id: "sorgue", number: "03", place: "L’Isle-sur-la-Sorgue", visit: "About 1 hour + a café pause",
    intro: "Our little, utterly lovely find. The Sorgue slips between lanes, waterwheels turn beside cafés, and antique and vintage shops make a short stroll surprisingly hard to end. This is the gentle pause in a busy first day.",
    walk: ["Quai Jean Jaurès → riverside canals", "Waterwheels (roues à aubes) → Rue des Roues", "Collégiale Notre-Dame-des-Anges → antique and vintage shops"],
    parking: "Parking de la Gare, L'Isle-sur-la-Sorgue",
    parkingNote: "Suggested parking around the railway station on avenue Julien Guigue; walk into the centre. Check local signs, tariffs and restrictions rather than assuming it is free. Allow 10–15 minutes for parking and the walk.",
    from: "Parking Palais des Papes, Avignon", drive: "35–45 minutes · about 30 km", road: "Local roads towards L’Isle-sur-la-Sorgue; choose a route avoiding motorways",
    toll: "No motorway toll on the local-road option.",
    tipLabel: "V & eM · chocolate, then nowhere to rush",
    tip: "We found a chocolate shop with the sweetest lady and chocolate that was to die for. We haven't recovered its name, so we won't send you to an invented address. Make time for coffee and something sweet beside a waterwheel — just sitting and watching this little town was part of the magic.",
  },
  {
    id: "gordes", number: "04", place: "Gordes", visit: "45–60 minutes",
    intro: "A village of pale stone, stacked against the hillside. It might remind you of Matera — if you know, you know. See it from a distance first: that is where the whole silhouette makes sense. Then wander the stone lanes.",
    walk: ["Approach viewpoint on the D15 (Belvédère de Gordes)", "Village centre → château square", "Short wander through the stone lanes"],
    parking: "Parking des Gorguettes, Gordes",
    parkingNote: "Suggested signed visitor parking outside the historic centre. Use designated spaces; never stop on the road for the viewpoint. Allow 10–20 minutes to park and walk; village parking can fill up in summer.",
    from: "Parking de la Gare, L'Isle-sur-la-Sorgue", drive: "25–35 minutes · about 20 km", road: "Local roads via Coustellet towards Gordes",
    toll: "No motorway toll on this local-road leg.",
    tipLabel: "V & eM · book the sunset table",
    tip: "A sunset dinner here would be beautiful — but book ahead. We didn't, and couldn't find a spot worth staying for. For this version of the day, dinner is in Roussillon; a Gordes dinner is an alternative, not a second reservation.",
  },
  {
    id: "roussillon", number: "05", place: "Roussillon", visit: "Sunset, dinner & overnight",
    intro: "Our little gem at the end of the road. Orange cliffs, ochre walls and a village that seems to glow as the light drops. The welcome felt warm and personal — the kind of place that stays with you long after the itinerary ends.",
    walk: ["Check in at OMMA → wander the ochre-coloured village", "Village viewpoints in the evening light", "Dinner at La Table des Ocres"],
    parking: "Parking des Ocres, Roussillon",
    parkingNote: "Suggested visitor parking; confirm arrival and luggage drop-off instructions directly with OMMA before driving into the centre. Allow 10–15 minutes. Do not assume the hotel has a reserved space for you.",
    from: "Parking des Gorguettes, Gordes", drive: "20–30 minutes · about 12 km", road: "Local roads through the Luberon towards Roussillon",
    toll: "No motorway toll on this local-road leg.",
    tipLabel: "V & eM · the evening we remember",
    tip: "We booked OMMA through Booking.com, as we often do. At dinner, the owner offered us rums from around the world and stopped for a chat — our experience, not a promised inclusion. Reserve the table and room ahead; let the evening be slow.",
  },
];

export function drivingMapUrl(from: string, to: string) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&travelmode=driving`;
}

export function placeMapUrl(place: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
}